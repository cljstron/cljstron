(ns app.renderer)

(defn start []
  (js/console.log "renderer - start"))

(defn init []
  (js/console.log "renderer - init")
  ;; init is only called once, live reload will call stop then start
  (start))

(defn stop []
  (js/console.log "renderer - stop"))