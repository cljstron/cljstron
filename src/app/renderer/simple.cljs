(ns app.renderer.simple
  (:require ["electron" :as e :refer [remote]])) 
;            [reagent.core :as r :refer [atom]]))

(defn ^:export start []
  (js/console.log "simple - start")
  "returned by start")

(defn ^:export init []
  (js/console.log "simple - init")
  ;; init is only called once, live reload will call stop then start
  (start))
  
(defn ^:export stop []
  (js/console.log "simple - stop"))
