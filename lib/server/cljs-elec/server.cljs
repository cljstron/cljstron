(ns cljselec.electron.server
  (:require)[cljs.nodejs :as node :refer [process enable-util-print!]] 
            ["electron" :as e :refer [app BrowserWindow]]
            [clojure.string :refer [join]])

(enable-util-print!)

(defn file-url [filename]
  "return normalized url from `filename`"
  (str "file://" (join "/" [(js* "__dirname") "public_html" filename])))

(def main-window (atom nil)) 

(defn new-window  
 ([]
  (println "(new-window)") 
  (new-window "index.html"))
 ([page]  
  (reset! main-window (BrowserWindow. {:witdh 800 :height 600}))
  (println "index: " (file-url page))
  (.loadURL @main-window (file-url page))
  (.on @main-window "close" 
    (fn [] (reset! main-window nil)))))
