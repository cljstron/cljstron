(ns cljstron.common.config
  (:require
    [cljs.nodejs :as node :refer [enable-util-print!]]
    [clojure.tools.reader.edn :refer [read-string]]
    [cljs-node-io.core :as io :refer [slurp spit]]
    [cljs.pprint :refer [pprint]]
    [clojure.string :as str]
    [cljstron.common.utils :refer [error spy]]
    [cljstron.common.cljjs :refer [rjs->clj]]))

(enable-util-print!)

(defn- read-edn* [file]
  "Read `file` and tranform it from :edn to clojure structure."
  (read-string (slurp file)))

(def ^:export read-edn (memoize read-edn*))

(defn ^:export write-edn [file data]
  "Write `data` in file `file` in :edn format."
  (spit file (with-out-str (pprint data))))

(defn ^:export read-json [file]
  "Read `file` and tranform it from JSON to clojure structure."
  (rjs->clj (.parse js/JSON (slurp file))))

(defn ^:export write-json [file data]
  "Write `data` in file `file` in JSON format."
  (spit file (.stringify js/JSON (clj->js data) nil "  ")))

; forward
(declare ^:private change-value)

(defn- update-coll [level conf value]
  (into (empty value) (map (partial change-value level conf) value)))

(defn- symbol-fn [conf symb & rest]
  (let [symb      (change-value :final conf
                    (change-value :base conf symb))]
    (apply symbol (str/split symb #"/"))))

; forward
(declare ^:private read-app-edn2)

(defn- loop-fn [conf [key-list body &rest]]
  (loop [ keys (seq (change-value :final conf
                      (change-value :base conf key-list)))
          res {}]
    (if (seq? keys)
      (let  [ key (first keys)
              conf (read-app-edn2 key ".")
              val (change-value :base conf body)]
        (recur (seq (rest keys)) (merge res {key val})))
      res)))

(defn- str-fn [conf r]
  (if (every? string? r)
    (apply str r)
    (cons 'str (change-value :base conf r))))

(defn- update-list [level conf value]
  (let [[f & r] value]
    (println "function in a list : " level f)
    (cond
      (= level :base)
      (cond
        (= f 'quote)          (spy "(quote value) base = " value)
        (= f 'symbol)         (cons f (map (partial change-value :base conf) r))
        (= f 'str)            (str-fn conf r)
        (= f 'loop)           (change-value :base conf (loop-fn conf r))
        :else                 (map (partial change-value :base conf) value))
      (= level :final)
      (cond
        (= f 'quote)          (spy "(quote value) final = " (first r))
        (= f 'symbol)         (symbol-fn conf (first r))
        :else                 (map (partial change-value :final conf) value)))))

(defn- update-kv [level conf [key value]]
  (if (get #{:parent :output} key)
    [key value]
    [key (change-value level conf value)]))

(defn- update-map [level conf value]
  (into {} (map (partial update-kv level conf) value)))

(defn- update-keyword [level conf value]
  (if (= level :base)
    (if-let [new-value (get conf value)]
      new-value
      (error "(app/update-keyword) The key '" value "' has no definition in " conf))
    value))

(defn- change-value-1 [level conf value]
  (cond
    (vector? value)   (update-coll level conf value)
    (map? value)      (update-map level conf value)
    (set? value)      (update-coll level conf value)
    (list? value)     (update-list level conf value)
    (seq? value)      (update-list level conf value)
    (keyword? value)  (update-keyword level conf value)
    :else             value))

(defn- change-value [level conf value]
  (let [new-value (change-value-1 level conf value)]
    (if (= new-value value)
      value
      (recur level conf new-value))))

(defn- load-def* [path]
  (merge
    (read-edn (str path "/app.org.edn"))
    (read-edn (str path "/app.edn"))))

(def ^:export load-def (memoize load-def*))

(defn- merge-parents [app key]
  (if key
    (let [val (get app key)
          parent (get val :parent)]
      (if parent
        (merge (merge-parents app parent) val)
        val))
    {}))

(defn- read-app-edn2* [key path]
  (loop [cont (merge-parents (load-def path) key)]
    (let [new-cont (change-value :base cont cont)]
      (if (= new-cont cont)
        cont
        (recur new-cont)))))

(def ^:private read-app-edn2 (memoize read-app-edn2*))

(defn read-app-edn [key path]
  (change-value :final {} (read-app-edn2 key path)))

(defn- write-files [files ext output]
  (when files
    (let [[filename content] (first files)
          filename (str (name filename) "." (name ext))]
      (println "generate " filename)
      (cond
        (= output :edn)     (write-edn filename content)
        (= output :json)    (write-json filename content)
        :else (error "(app/write-gen-files) File type unknown : " output))
      (recur (seq (rest files)) ext output))))


(defn ^:export write-gen-files [path]
  (loop [ extensions (seq (:code (read-app-edn :-gen-files ".")))]
    (when extensions
      (let [[ext-name ext-content] (first extensions)
            output (:output ext-content)]
        (write-files (seq (dissoc ext-content :output)) ext-name output)
        (recur (seq (rest extensions)))))))
