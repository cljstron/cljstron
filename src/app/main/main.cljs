(ns app.main.main
  (:require ["electron" :as electron :refer [app]] 
            [cljs.nodejs :as node  
              :refer  [enable-util-print! require]]
            [elec-cljs.main.window 
              :refer  [load-main-window]]))

(enable-util-print!)

(defn ^:export init []
  "`main` entry point."
  (.on app "ready" open-window)  
  (.on app "window-all-closed" 
    #(when (not= js/process.platform "darwin")
      (.quit app))))

