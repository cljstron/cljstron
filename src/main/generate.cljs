(ns main.generate
  (:require 
    [cljs.nodejs :as node :refer [enable-util-print!]]
    [cognitect.transit :as t]
    [clojure.tools.reader.edn :refer [read-string]]
    [cljs-node-io.core :as io :refer [slurp spit]]
    [clojure.pprint :refer [pprint]]
    [cljstron.common.interop :refer [rjs->clj]]))

(enable-util-print!)

(defn read-edn [file]
  "Read `file` and tranform it from :edn to clojure structure."
  (read-string (slurp file)))

(defn write-edn [file data]
  "Read `file` and tranform it from :edn to clojure structure."
  (spit file (with-out-str (pprint data))))

; define JSON drivers
(def r (t/reader :json))
(def w (t/writer :json))

(defn read-json [file]
  "Read `file` and tranform it from JSON to clojure structure."
  (rjs->clj (t/read r (slurp file))))

(defn write-json [file data]
  "Write`data` on file `file` in JSON format."
  (spit file (t/write w data)))

(defn change-value [conf value]
  (cond
    ()))
(defn new-key-value [[conf key value]]
  [key (change-value conf value)])

(defn write-package-json []
  (let [app (read-edn "app.edn")
        config (merge (:base app) (:main app))]
    (loop [conf config]
      (let [new-conf (into {} (map (partial new-key-value conf) conf))]
        (if (= new-conf conf)
          new-conf
          (recur new-conf))))))
          
(defn main []
  "Generate compile files for the project"
  (pprint (read-edn "app.edn"))
  (println "------------------------------------")
  (pprint (read-json "package.json")))
