
(ns main.main
  (:require [cljstron.browser.window :refer [open-window]]
            [cljs.nodejs :as node :refer [enable-util-print!]]
            [electron :refer [app]]
            [cljstron.common.app :refer [write-gen-files]]))

(enable-util-print!)

(defn- open-main-window []
  "open the :main window for the library. No plug, no html, no js"
  (open-window :cljstron.cljstron-simple/main
    :page-url    "resources/index.html"
    :intro-html  "<h1>Hello World! (dev)</h1>
    We are using node.js <script>document.write(process.version)</script>
    and Electron <script>document.write(process.versions['electron'])</script>.<br>"))

(defn app-start [args]
  (.on app "ready" open-main-window)
  (.on app "window-all-closed"
    #(.quit app)))

(defn generate [args]
  (write-gen-files "."))

(defn help [args]
  (println "CLJStron help")
  (println "")
  (println "no argument or 'run': lauch application.")
  (println "'generate': generate compile files.")
  (println "'help': this help."))

(defn command? [cmd cmd-string]
  (or (not cmd)(.startWith cmd-string cmd)))

(defn ^:export main [& [command & args]]
  "`main` entry point."
  (println "main : " command args)
  (cond
    (command? command "run")
    (app-start args)

    (command? command "generate")
    (generate args)

    (command? command "help")
    (help args)

    :else
    (println "[main] '" command "' command undefined")))
