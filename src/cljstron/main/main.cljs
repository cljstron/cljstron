
(ns cljstron.main.main
  (:require [cljstron.browser.window :refer [open-window]]
            [cljs.nodejs :as node :refer [enable-util-print!]]
            [electron :refer [app]]
            [cljstron.common.config :refer [write-gen-files]]))

(enable-util-print!)

(defn- open-main-window []
  "Open the :main window for the library. No plug, no html, no js"
  (open-window :cljstron.cljstron-simple/main
    :page-url    "resources/index.html"
    :intro-html  "<h1>Hello World! (dev)</h1>
    We are using node.js <script>document.write(process.version)</script>
    and Electron <script>document.write(process.versions['electron'])</script>.<br>"))

(defn app-start [args]
  "Main entry point for the renderer application giving `args` as argument sequence."
  (.on app "ready" open-main-window)
  (.on app "window-all-closed"
    #(.quit app)))

(defn generate [args]
  "Generate compilation files."
  (write-gen-files ".")
  (.quit app))

(defn help [args]
  "Dispaly help."
  (println "CLJStron help")
  (println "")
  (println "no argument or 'run': lauch application.")
  (println "'generate': generate compile files.")
  (println "'help': this help.")
  (.quit app))

(defn- command? [cmd cmd-string]
  "Test `cmd` to be `command-string` or nil"
  (or (not cmd)(= cmd-string cmd)))

(defn ^:export main [& [command & args]]
  "`main` entry point."
  (cond
    (command? command "run")
    (app-start args)

    (command? command "generate")
    (generate args)

    :else
    (help args)))
