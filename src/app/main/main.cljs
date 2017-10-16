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
    create-window
    (load-window "index.html")
    (load-window "js/simple.js")
    #_(exec-on-window  (str "console.log('" (file-url "js/simple") "');
                          const simple = require('" (file-url "js/simple") "');
                          console.log('dans execJavaScript' + simple);
                          simple.init();"))))

(defn ^:export init []
  "`main` entry point."
  (.on app "ready" load-main-window)  
  (.on app "window-all-closed" 
    #(when (not= js/process.platform "darwin")
      (.quit app))))

