(ns cljstron.browser.app
  (:require 
    [cljs.nodejs :as node :refer [enable-util-print!]]
    [clojure.tools.reader.edn :refer [read-string]]
    [cljs-node-io.core :as io :refer [slurp spit]]
    [cljs.pprint :refer [pprint]]
    [cljstron.common.utils :refer [error]]
    [cljstron.common.interop :refer [rjs->clj]]))

(enable-util-print!)

(defn ^:export read-edn [file]
  "Read `file` and tranform it from :edn to clojure structure."
  (read-string (slurp file)))

(defn ^:export write-edn [file data]
  "Read `file` and tranform it from :edn to clojure structure."
  (spit file (with-out-str (pprint data))))

(defn ^:export read-json [file]
  "Read `file` and tranform it from JSON to clojure structure."
  (rjs->clj (.eval (slurp file))))

(defn ^:export write-json [file data]
  "Write`data` on file `file` in JSON format."
  (spit file (.stringify js/JSON clj->js(data) nil "  ")))

(defn- change-value [conf value]
  (cond
    (list? value) [conf value]

    (vector? value)
    (let [changed-value (map (partial change-value conf) value)]
      (if (= changed-value value)  
        (error "(generate/change-value) Non string value in array " changed-value)
        (if (every? string? changed-value)
          (apply str changed-value)
          (into [] changed-value))))

    (map? value) (into {} (map (partial new-key-value conf) value)) 

    (keyword? value) 
    (if-let [new-value (conf value)]
      new-value
      (error "The key '" value "' has no definition")) 

    :else value))
    
(defn ^:export update-key-value [conf [key value]]
  [key (change-value conf value)])

(defn ^:export read-app-edn [file]
  (let [app (read-edn file)
        config (merge (:base app) (:main app))]
    (loop [conf config]
      (let [new-conf (into {} (map (partial update-key-value conf) conf))]
        (if (= new-conf conf)
          new-conf
          (recur new-conf))))))
