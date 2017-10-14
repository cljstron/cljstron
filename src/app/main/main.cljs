(ns app.main.main
  (:require ["electron" :as electron :refer [app]] 
            [cljs.nodejs :as node :refer [enable-util-print!]]
            [elec-cljs.main.window :refer [create-window load-window]]))

(enable-util-print!)

(defn- load-main-window []
  "create and load `:main` window."
  (-> :main
    create-window
    (load-window "index.html")))

(defn ^:export init []
  "`main` entry point."
  (.on app "ready" load-main-window)  
  (.on app "window-all-closed" 
    #(when (not= js/process.platrorm "darwin")
      (.quit app))))
