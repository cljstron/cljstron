(ns cljstron.common.app
  (:require
    [cljs.nodejs :as node :refer [enable-util-print!]]
    [clojure.tools.reader.edn :refer [read-string]]
    [cljs-node-io.core :as io :refer [slurp spit]]
    [cljs.pprint :refer [pprint]]
    [clojure.string :as str]
    [cljstron.common.utils :refer [error]]
    [cljstron.common.cljjs :refer [rjs->clj]]))

(enable-util-print!)

(defn- read-edn* [file]
  "Read `file` and tranform it from :edn to clojure structure."
  (read-string (slurp file)))

(def ^:export read-edn (memoize read-edn*))

(defn ^:export write-edn [file data]
  "Read `file` and tranform it from :edn to clojure structure."
  (spit file (with-out-str (pprint data))))

(defn ^:export read-json [file]
  "Read `file` and tranform it from JSON to clojure structure."
  (rjs->clj (.parse js/JSON (slurp file))))

(defn ^:export write-json [file data]
  "Write`data` on file `file` in JSON format."
  (spit file (.stringify js/JSON (clj->js data) nil "  ")))

(def key-functions #{:loop :symbol})

; forward
(declare ^:private change-value)

(defn- update-vector [conf value]
  (into [] (map (partial change-value conf) value)))

; forward
(declare ^:private function-change-value)

(defn- function-update-vector [conf value]
  (into [] (map (partial function-change-value conf) value)))

; forward
(declare ^:private final-change-value)

(defn- final-update-vector [conf value]
  (into [] (map (partial final-change-value conf) value)))

(defn- update-list [conf value]
  (if (get key-functions (first value))
    value
    (let [changed-value (list* (map (partial change-value conf) value))]
      (if (= changed-value value)
        (error "(update-list) Non string value in list " changed-value)
        (if (every? string? changed-value)
          (apply str changed-value)
          changed-value)))))

; forward
(declare read-app-edn2)

(defn- symbol-key [conf symb & rest]
  (let [symb (change-value conf symb)]
    (apply symbol (str/split symb #"/"))))

(defn- loop-key [conf [key-list body &rest]]
  (loop [ keys (first (seq (if (keyword? key-list)
                              (change-value conf key-list)
                              (error ":loop keylist should be a key defined in :app"))))
          res {}]
    (if (seq keys)
      (let  [ key (first (seq keys))
              conf (read-app-edn2 key ".")
              val (change-value conf body)
              val (function-change-value conf val)]
        (recur (rest keys) (merge res {key val})))
      res)))

(defn- final-update-list [conf value]
  (cond
    (= (first value) :loop) (loop-key conf (rest value))
    (= (first value) :symbol) (symbol-key conf (first (rest value)))
    :else (error "(final-update-list) Non function in final list " value)))

; forward
(declare ^:private update-kv)

(defn- update-map [conf value]
  (into {} (map (partial update-kv conf) value)))

; forward
(declare ^:private function-update-kv)

(defn- function-update-map [conf value]
  (into {} (map (partial function-update-kv conf) value)))

; forward
(declare ^:private final-update-kv)

(defn- final-update-map [conf value]
  (into {} (map (partial final-update-kv conf) value)))

(defn- update-keyword [conf value]
  (cond
    (get key-functions value) value
    :else
      (if-let [new-value (get conf value)]
        new-value
        (error "The key '" value "' has no definition"))))

(defn- change-value [conf value]
  (cond
    (vector? value)   (update-vector conf value)
    (list? value)     (update-list conf value)
    (map? value)      (update-map conf value)
    (keyword? value)  (update-keyword conf value)
    :else             value))

(defn- function-change-value [conf value]
  (cond
    (vector? value)   (function-update-vector conf value)
    (list? value)     (final-update-list conf value)
    ; (set? value)      (first value)
    (map? value)      (function-update-map conf value)
    :else             value))

(defn- final-change-value [conf value]
  (cond
    (vector? value)   (final-update-vector conf value)
    (set? value)      (first value)
    (map? value)      (final-update-map conf value)
    :else             value))

(defn- update-kv [conf [key value]]
  (if (or (= key :parent) (= key :output))
    [key value]
    [key (change-value conf value)]))

(defn- function-update-kv [conf [key value]]
  (if (or (= key :parent) (= key :output))
    [key value]
    [key (function-change-value conf value)]))

(defn- final-update-kv [conf [key value]]
  (if (or (= key :parent) (= key :output))
    [key value]
    [key (final-change-value conf value)]))

(defn- load-def* [path]
  (merge  (read-edn (str path "/app.org.edn"))
          (read-edn (str path "/app.edn"))))

(def ^:export load-def (memoize load-def*))

(defn- merge-parents
  [app key]
  (let [val (get app key)
        parent (get val :parent)]
    (if parent
      (merge (merge-parents app parent) val)
      val)))

(defn- read-app-edn2* [key path]
  (let [config (merge-parents (load-def path) key)]
    (loop [conf config]
      (let [new-conf (into {} (map (partial update-kv conf) conf))]
        (if (= new-conf conf)
          ; finish : suppress sets, execute functions on data
          (into {} (map (partial function-update-kv conf) conf))
          (recur new-conf))))))

(defn ^:export read-app-edn [key path]
  (let [conf (read-app-edn2 key path)]
    (into {} (map (partial final-update-kv conf) conf))))

(def ^:private read-app-edn2 (memoize read-app-edn2*))

(defn ^:export write-gen-files [path]
  (loop [ ext (seq (:code (read-app-edn :-gen-files ".")))]
    (when ext
      (let [[ext-name ext-content] (first ext)
            output (:output ext-content)]
        (loop [ file (seq (dissoc ext-content :output))]
          (when file
            (let [[filename content] (first file)
                  filename (str (name filename) "." (name ext-name))]
              (println "generate " filename)
              (cond
                (= output :edn)(write-edn filename content)
                (= output :json)(write-json filename content)
                :else (error "(write-gen-files) File type unknown" output))
              (recur (seq (rest file))))))
        (recur (seq (rest ext)))))))
