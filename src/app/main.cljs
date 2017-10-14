(ns app.main
  (:require ["electron" :as electron :refer [app]] 
            [cljs.nodejs :as node :refer [enable-util-print!]]
            [app.elec-cljs :refer [create-window load-window]]))

(enable-util-print!)

(defn load-main-window []
  (-> :main
    create-window
    (load-window "index.html")))

(defn ^:export init []
  (.on app "ready" load-main-window)  
  (.on app "window-all-closed" 
    #(when (not= js/process.platrorm "darwin")
      (.quit app))))
