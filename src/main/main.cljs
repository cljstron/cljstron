(ns main.main
  (:require [cljstron.browser.window :refer [open-window]]
            [cljs.nodejs :as node :refer [enable-util-print!]]
            [electron :refer [app]]))

(enable-util-print!)

(defn- open-main-window []
  "open the :main window"
  (println "open window")
  (open-window :cljstron.cljstron-simple/main
    :js-urls     ["js/main.js"]
    :main-fn     "cljstron_simple.renderer.main.init"
    :page-url    "plugs/@cljstron-simple/cljstron-simple/resources/index.html"
    :intro-html  "<h1>Hello World! (dev)</h1>
    We are using node.js <script>document.write(process.version)</script>
    and Electron <script>document.write(process.versions['electron'])</script>.")
  (println "window opened"))
    
(defn ^:export main []
  "`main` entry point."
  (.on app "ready" open-main-window)  
  (.on app "window-all-closed"
    #(.quit app)))

(main)
