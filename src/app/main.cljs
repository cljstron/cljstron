(ns app.main
  (:require [cljs.nodejs :as node :refer [enable-util-print!]]
            ["electron" :as e :refer [app]]
            [app.server :as s :refer [new-window]]))

(enable-util-print!)

(defn init []
  (println "(init)")
  (.on app "ready" new-window)  
  (.on app "window-all-closed" #(.quit app)))
