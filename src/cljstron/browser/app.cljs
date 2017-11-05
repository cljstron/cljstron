(ns cljstron.browser.app
  (:require
    [cljs.nodejs :as node :refer [enable-util-print!]]
    [clojure.tools.reader.edn :refer [read-string]]
    [cljs-node-io.core :as io :refer [slurp spit]]
    [cljs.pprint :refer [pprint]]
    [cljstron.common.utils :refer [error]]
    [cljstron.common.interop :refer [rjs->clj]]))

(enable-util-print!)

(defn- read-edn* [file]
  "Read `file` and tranform it from :edn to clojure structure."
  (println "fichier : " file)
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

; forward
(declare ^:private change-value)

(defn- update-vector [conf value]
  (into [] (map (partial change-value conf) value)))

; forward
(declare ^:private final-change-value)

(defn- final-update-vector [conf value]
  (into [] (map (partial final-change-value conf) value)))

(defn- update-list [conf value]
  (if (= (first value) :loop)
    value
    (let [changed-value (list* (map (partial change-value conf) value))]
      (if (and (= changed-value value)(not= (first value) :loop))
        (error "(update-list) Non string value in list " changed-value)
        (if (every? string? changed-value)
          (apply str changed-value)
          changed-value)))))

; forward
(declare read-app-edn)

(defn- loop-key [conf [key-list body]]
  (loop [ keys (first (seq (if (keyword? key-list)
                              (change-value conf key-list)
                              (js/Error. ":loop keylist should be a key defined in :app"))))
          res {}]
    (if (seq keys)
      (let  [ key (first (seq keys))
              ; just to verify where we are... ;)
              _ (println "key " key)
              conf (read-app-edn key ".")
              val (change-value conf body)
              val (final-change-value conf val)]
        (recur (rest keys) (merge res {key val})))
      res)))

(defn- final-update-list [conf value]
  (cond
    (= (first value) :loop) (loop-key conf (rest value))
    :else (error "(final-update-list) Non function in final list " value)))

; forward
(declare ^:private update-kv)

(defn- update-map [conf value]
  (into {} (map (partial update-kv conf) value)))

; forward
(declare ^:private final-update-kv)

(defn- final-update-map [conf value]
  (into {} (map (partial final-update-kv conf) value)))

(defn- update-keyword [conf value]
  (cond
    (= value :loop) value
    :else
      (if-let [new-value (get conf value)]
        new-value
        (error "The key '" value "' has no definition"))))

(defn- change-value [conf value]
  (println "change value : " value)
  (cond
    (vector? value)   (update-vector conf value)
    (list? value)     (update-list conf value)
    (map? value)      (update-map conf value)
    (keyword? value)  (update-keyword conf value)
    :else             value))

(defn- final-change-value [conf value]
  (println "final change value : " value)
  (cond
    (vector? value)   (final-update-vector conf value)
    (list? value)     (final-update-list conf value)
    ; (set? value)      (first value)
    (map? value)      (final-update-map conf value)
    :else             value))

(defn- update-kv [conf [key value]]
  (if (or (= key :parent) (= key :output))
    [key value]
    [key (change-value conf value)]))

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

(defn- read-app-edn* [key path]
  (println "path = " path)
  (let
      ; read full config (TODO search cljstron directory if we are elsewhere)
    [ app (load-def path)
      ; merge value in parent data
      config (merge-parents app key)]
    (pprint config)
    (loop [conf config]
      (let [new-conf (into {} (map (partial update-kv conf) conf))]
        (if (= new-conf conf)
          ; finish : suppress sets, execute functions on data
          (into {} (map (partial final-update-kv conf) conf))
          (recur new-conf))))))

(def ^:export read-app-edn (memoize read-app-edn*))

(defn ^:export write-gen-files [path]
  (loop [ ext (seq (:code (read-app-edn :-gen-files ".")))]
    (when ext
      (let [[ext-name ext-content] (first ext)
            output (:output ext-content)]
        (loop [ file (seq (dissoc ext-content :output))]
          (println "\next-name " ext-name "\next-content " ext-content "\nfile " file "\noutput " output)
          (when file
            (let [[filename content] (first file)]
              (println "\nfilename " filename "\ncontent " content)
              (cond
                (= output :edn)(write-edn (str (name filename) "." (name ext-name)) content)
                (= output :json)(write-json (str (name filename) "." (name ext-name)) content)
                :else (error "(write-gen-files) File type unknown" output))
              (recur (seq (rest file))))))
        (recur (seq (rest ext)))))))
