(ns cljstron.main.main
  (:require [electron   :refer [app]] 
            [cljs.nodejs  :refer [enable-util-print!]]
            [cljstron.library.main.window :refer  [open-window]]))

(enable-util-print!)

(defn- open-main-window []
  "open the :main window"
  (open-window :main
    { :js-urls    ["js/simple.js"]
      :main       "cljstron.renderer.simple.init"
      :win-conf   {}
      :intro-code (str "`
        <h1>Hello World!</h1>
        We are using node " process.versions.node ", Chrome " process.versions.chrome)
        ", and Electron " process.versions.electron}))
      
(defn ^:export init []
  "`main` entry point."
  (println electron)
  (.on app "ready" open-main-window)  
  (.on app "window-all-closed" 
    #(when (not= js/process.platform "darwin")
      (.quit app))))

