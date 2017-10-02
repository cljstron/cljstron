(ns app.electron
  (:require ["electron" :as e :refer (app BrowserWindow)]
            [clojure.string :refer [join]]))

; enable printf redirect to the console
(enable-console-print!)

(defn file-url [filename]
  "return normalized url from `filename`"
  (str "file://" (join "/" [(js* "__dirname") ".." filename])))

(def main-window (atom nil)) 

(defn create-window [page]  
  (reset! main-window (BrowserWindow. {:witdh 800 :height 600}))
  (println "index: " (file-url page))
  (.loadURL @main-window (file-url page))
  (.on @main-window "close" 
    (fn [] (reset! main-window nil))))

