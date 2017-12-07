(ns cljstron.common.config
  (:require
    [cljs.nodejs :as node :refer [enable-util-print!]]
    [clojure.tools.reader.edn :refer [read-string]]
    [cljs-node-io.core :as io :refer [slurp spit]]
    [cljs.pprint :refer [pprint]]
    [clojure.string :as str]
    [cljstron.common.utils :refer [error spy str*]]
    [cljstron.common.cljjs :refer [rjs->clj]]))

(enable-util-print!)

(def ^:export read-edn
  (memoize
    (fn read-edn* [file]
      "Read `file` and tranform it from :edn to clojure structure."
      (read-string (slurp file)))))

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

; forward
(declare ^:private read-app-edn-base)

(defn- loop-fn [conf [key-list body]]
  (loop [ keys (seq (change-value :final conf
                      (change-value :base conf key-list)))
          res (empty body)]
    (if keys
      (let  [ key (first keys)
              conf (merge conf (read-app-edn-base key "."))
              val (change-value :base conf body)]
        (recur (seq (rest keys)) (apply merge res val)))
      res)))

(defn- str-fn [conf r]
  (if (every? string? r)
    (str* r)
    (cons 'str (change-value :base conf r))))

(defn- symbol-fn [conf r]
  (if (every? string? r)
    (apply symbol (str/split (str* r) #"/"))
    (cons 'symbol (change-value :base conf r))))

(defn- merge-fn [conf r]
  (if (every? #(or (map? %) (vector? %)) r)
    (reduce #(apply merge %1 %2) (spy "reducing merge with : " r))
    (cons 'merge (change-value :base conf r))))

(defn- update-list [level conf value]
  (let [[f & r] value]
    (case level
      :base
        (case f
          quote     value
          symbol    (symbol-fn conf r)
          str       (str-fn conf r)
          merge     (merge-fn conf r)
          loop      (change-value :base conf (loop-fn conf r))
                    (map (partial change-value :base conf) value))
      :final
        (case f
          quote     (first r)
                    (map (partial change-value :final conf) value)))))

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

(defn- no-update [level conf value]
  value)

(defn- change-value-1 [level conf value]
  ( (condp #(%1 %2) value
      #(or (vector? %) (set? %))  update-coll
      #(or (list? %) (seq? %))    update-list
      map?                        update-map
      keyword?                    update-keyword
                                  no-update)
    level conf value))

(defn- change-value [level conf value]
  (let [new-value (change-value-1 level conf value)]
    (if (= new-value value)
      value
      (recur level conf new-value))))

(def ^:export load-def
  (memoize
    (fn load-def* [path]
      (merge
        (read-edn (str path "/app.org.edn"))
        (read-edn (str path "/app.edn"))))))

(defn- merge-parents [app key]
  (if key
    (let [val (get app key)
          parent (get val :parent)]
      (if parent
        (merge (merge-parents app parent) val)
        val))
    {}))

(def ^:private read-app-edn-base
  (memoize
    (fn read-app-edn-base* [key path]
      (println "read-app-edn-base: " key path)
      (loop [cont (merge-parents (load-def path) key)]
        (let [new-cont (change-value :base cont cont)]
          (if (= new-cont cont)
            cont
            (recur new-cont)))))))

(defn read-app-edn [key path]
  (change-value :final {} (read-app-edn-base key path)))

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
