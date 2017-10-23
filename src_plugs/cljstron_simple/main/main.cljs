(ns cljstron-simple.main.main
  (:require 
    [electron :refer [app]]
    [cljs.nodejs :refer [enable-util-print!]]
    [cljstron.main.window :refer [open-window]]))

(enable-util-print!)

(defn- open-main-window []
  "open the :main window"
  (open-window :main
    :js-urls    ["js/main.js"]
    :main       "cljstron_simple.renderer.main.init"
    :win-conf   {}
    :intro-html (str  "<h1>Hello World!</h1> We are using node " 
                      process.versions.node 
                      ", Chrome " 
                      process.versions.chrome
                      ", and Electron " 
                      process.versions.electron)))

(defn ^:export init []
  "`main` entry point."
  (.on app "ready" open-main-window)  
  (.on app "window-all-closed" 
    #(when (not= js/process.platform "darwin")
      (.quit app))))
