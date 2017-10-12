(ns app.elec-cljs
  (:require ["electron" :as electron :refer [app BrowserWindow]]
            [cljs.nodejs :as js]
            [clojure.string :refer [join]]))

; enable printf redirect to the console
(enable-console-print!)

(defn- file-url [filename]
  "return normalized url from `filename`"
  (str "file://" (join "/" [(js* "__dirname") ".." "resources" filename])))

(def main-window (atom nil)) 

(defn create-window []  
  (println "create-window")
  (reset! main-window (BrowserWindow. {:witdh 800 :height 600}))
  (.loadURL @main-window (file-url "index.html"))
  (.on @main-window "close" 
    (fn [] (reset! main-window nil))))

