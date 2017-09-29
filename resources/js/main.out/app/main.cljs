(ns app.main
  (:require [cljs.nodejs :refer [process enable-util-print!]]
            [app.electron :refer [electron app BrowserWindow file-url]]))

(enable-util-print!)

(def main-window (atom nil)) 

(defn create-window []  
  (reset! main-window (.BrowserWindow {:witdh 800 :height 600}))
  (.loadURL @main-window (file-url "index.html"))
  (.on @main-window "close" 
    (fn [] (reset! main-window nil))))

(defn init []
  (println electron app BrowserWindow)
  (.on app "ready" create-window)  
  (.on app "window-all-closed" 
    (when (not= (.platform js/process) "darwin")
      (.quit app))))

(set! *main-cli-fn* init)
