(ns cljselec.renderer.test
  (:require ["electron" :as e :refer ()]
            [cljselec.electron.renderer :as r :refer []]
            [cljselec.electron.common :as c :refer []]))

; enable printf redirect to the browser console
(enable-console-print!)

(defn start []
  (js/console.log "renderer - start"))

(defn init []
  (js/console.log "renderer - init")
  ;; init is only called once, live reload will call stop then start
  (start))

(defn stop []
  (js/console.log "renderer - stop"))