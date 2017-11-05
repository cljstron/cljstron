(ns main.generate
  (:require
    [cljs.nodejs :as node :refer [enable-util-print!]]
    [cljs.pprint :refer [pprint]]
    [cljstron.browser.app :refer [write-gen-files read-json read-app-edn]]))

(enable-util-print!)

(defn main []
  "Generate compile files for the project"
  (pprint (read-app-edn :main "."))
  (println "-----------------------------------")
  (pprint (read-json "package.json"))
  (println "-----------------------------------")
  (pprint (read-app-edn :-gen-files "."))
  (println "-----------------------------------")
  (write-gen-files ".")
  (println "generated files"))
