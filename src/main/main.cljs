(ns main.main
    (:require 
        ["resources/plugs/" :as simple]))
  
(defn init [] (simple/init))

(enable-util-print!)

(defn- open-main-window []
  "open the :main window"
  (open-window :main
    :js-urls    ["js/main.js"]
    :main       "cljstron_simple.renderer.main.init"
    :win-conf   {}
    :intro-html "<h1>Hello World!</h1> 
                  <p>We are using node <script>process.versions.node</script>, 
                  Chrome <script>process.versions.chrome</script>,
                  and Electron <script>process.versions.electron</script></p>"))

(defn ^:export init []
  "`main` entry point."
  (.on app "ready" open-main-window)  
  (.on app "window-all-closed" 
    #(when (not= js/process.platform "darwin")
      (.quit app))))

