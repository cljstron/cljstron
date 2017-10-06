(ns cljselec.app.main
  (:require [cljs.nodejs :as node :refer [process enable-util-print!]]
            ["electron" :as e :refer [app]]
            [cljselec.electron.server :as s :refer [new-window]]))
 ;           [electron.common :as c :refer []]))

(enable-util-print!)

(defn init []
  (println "(init)")
  (.on app "ready" new-window)  
  (.on app "window-all-closed" #(.quit app)))
