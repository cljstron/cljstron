(ns main.generate
  (:require
    [cljs.nodejs :as node :refer [enable-util-print!]]
    [cljstron.browser.app :refer [pprint-str def-shadow-cljs-edn]]
    [cljs.pprint :refer [pprint]]
    [cljstron.browser.app :refer [read-json read-app-edn]]))

(enable-util-print!)

(defn main []
  "Generate compile files for the project"
  (pprint (read-app-edn :main "app.edn"))
  (println "-----------------------------------")
  (pprint (read-json "package.json"))
  (println "-----------------------------------")
  (pprint (def-shadow-cljs-edn)))
