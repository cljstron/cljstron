(ns main.main
  (:require [cljstron.browser.window :refer [open-window]]
            [cljs.nodejs :refer [enable-util-print!]]
            [electron :refer [app]]))

(enable-util-print!)

(println "Execute main")

(defn- open-main-window []
  "open the :main window"
  (open-window :cljstron.cljstron-simple/main
    :js-urls     ["js/main.js"]
    :main-fn     "cljstron_simple.renderer.main.init"
    :win-conf    {}
    :page-url    "plugs/cljstron-simple/resources/index.html"
    :intro-html  "<h1>Hello World! (dev)</h1>
    We are using node.js <script>document.write(process.version)</script>
    and Electron <script>document.write(process.versions['electron'])</script>."))

(defn ^:export init []
  "`main` entry point."
  (.on app "ready" open-main-window)  
  (.on app "window-all-closed" 
    #(when (not= js/process.platform "darwin")
      (.quit app))))

(init)