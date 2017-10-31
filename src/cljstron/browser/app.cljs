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
  (rjs->clj (.parse js/JSON (slurp file))))

(defn ^:export write-json [file data]
  "Write`data` on file `file` in JSON format."
  (spit file (.stringify js/JSON clj->js(data) nil "  ")))

; forward
(declare change-value)

(defn update-vector [conf value]
  (into [] (map (partial change-value conf) value)))

(defn update-list [conf value]
  (let [changed-value (list* (map (partial change-value conf) value))]
    (if (= changed-value value)
      (error "(generate/change-value) Non string value in list " changed-value)
      (if (every? string? changed-value)
        (apply str changed-value)
        changed-value))))

(declare update-kv)

(defn update-map [conf value]
  (into {} (map (partial update-kv conf) value)))

(defn update-keyword [conf value]
  (if-let [new-value (get conf value)]
    new-value
    (error "The key '" value "' has no definition")))

(defn- change-value [conf value]
  (cond
    (vector? value) (update-vector conf value)
    (list? value) (update-list conf value)
    (map? value) (update-map conf value)
    (keyword? value) (update-keyword conf value)
    :else value))

(defn ^:export update-kv [conf [key value]]
  [key (change-value conf value)])

(defn ^:export read-app-edn [app-key file]
  (let
    [ app (read-edn file)
      config (merge (:base app) (get app app-key))]
    (loop [conf config]
      (let [new-conf (into {} (map (partial update-kv conf) conf))]
        (if (= new-conf conf)
          new-conf
          (recur new-conf))))))

(defn def-package-json [main-key & app-key]
  {
    :name "@cljstron/cljstron",
    :version "0.0.3",
    :description "ClojureScript skeleton in node.js with electron",
    :main "main.js",
    :author "Ivan Pierre, (2017)kilroySoft",
    :license "MIT",
    :keywords
      [ "electron",
        "clojurescript",
        "library"]

    :homepage "https://github.com/cljstron/cljstron/blob/master/README.md",
    :repository
      { :type "git",
        :url "https://github.com/cljstron/cljstron.git"}

    :scripts
      { :start "electron ."}

    :dependencies
      { :shadow-cljs "^2.0.51"}

    :devDependencies
      {}})


(defn def-shadow-cljs-edn [& app-key]
  {
    :source-paths ["src"]

    :dependencies  [[camel-snake-kebab "0.4.0"]
                    [cljs-node-io "0.5.0"]
                    [org.clojure/tools.reader "1.1.0"]]

    :builds
    { :main
      { :target :node-script
        :output-to "main.js"
        :main main.main/main}

      :generate
      { :target :node-script
        :output-to "generate.js"
        :main main.generate/main}}})

      ; :renderer
      ; { :target :browser
      ;   :output-dir "resources/js"
      ;   :asset-path "js"

      ;   :modules
      ;   { :renderer {:entries []}}}]}


(defn def-project-clj [& app-key])

(defn def-project-boot [& app-key])

(defn def-cljs-edn [& app-key])
