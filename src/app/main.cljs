(ns app.main
  (:require [cljs.nodejs :refer [process enable-util-print!]]
            ["electron" :as e :refer [app]]
            [app.electron :refer [create-window]]))

(enable-util-print!)

(println "app:" app)

(defn init []
  (println "start app.main/init")
  (.on app "ready" create-window)  
  (.on app "window-all-closed" 
    (when (not= (js/process.platform) "darwin")
      (.quit app))))
