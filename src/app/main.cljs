(ns app.main
  (:require [cljs.nodejs :refer [process enable-util-print!]]
            [app.electron :refer [electron app BrowserWindow create-window]]))

(enable-util-print!)

(defn ^:export init []
  (println electron app BrowserWindow)
  (.on app "ready" create-window)  
  (.on app "window-all-closed" 
    (when (not= (.platform js/process) "darwin")
      (.quit app))))

(set! *main-cli-fn* init)
