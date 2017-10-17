(ns app.main.main
  (:require ["electron" :as electron :refer [app]] 
            [cljs.nodejs :as node  
              :refer  [enable-util-print! require]]
            [elec-cljs.main.window 
              :refer  [exec-on-window create-window load-window get-window file-url]]))

(enable-util-print!)

(defn- load-main-window []
  "create and load `:main` window."
  (-> :main
    (create-window)
    (load-window "index.html")
    #_(exec-on-window  
        (str "document.write(`
          <h1>Hello World!</h1>
          We are using node " process.versions.node ", Chrome " process.versions.chrome
          ", and Electron " process.versions.electron "
          <script src='js/simple.js'></script>
          <script>
              app.renderer.simple.init();
          </script>
          `);"))))

(defn ^:export init []
  "`main` entry point."
  (.on app "ready" load-main-window)  
  (.on app "window-all-closed" 
    #(when (not= js/process.platform "darwin")
      (.quit app))))

