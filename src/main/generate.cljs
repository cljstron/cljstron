(ns main.generate
  (:require 
    [cljs.nodejs :as node :refer [enable-util-print!]]
    [cljs.pprint :refer [pprint]]
    [cljstron.browser.app :refer [read-json read-app-edn]]))

(enable-util-print!)
      
(defn main []
  "Generate compile files for the project"
  (pprint (read-app-edn "app.edn"))
  (println "-----------------------------------")
  (pprint (read-json "package.json")))
