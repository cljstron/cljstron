(ns app.main
  (:require ["electron" :as electron :refer [app]] 
            [cljs.nodejs :as node :refer [enable-util-print!]]
            [app.elec-cljs :refer [create-window]]))

(enable-util-print!)

(defn ^:export init []
  (println "(app.main/init)")
  (.on app "ready" create-window)  
  (.on app "window-all-closed" 
    #(when (not= js/process.platrorm "darwin")
      (.quit app))))

(set! *main-cli-fn* init)