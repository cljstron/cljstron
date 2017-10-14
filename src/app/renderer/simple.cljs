(ns app.renderer.simple)

(defn start []
  (js/console.log "simple - start"))

(defn init []
  (js/console.log "simple - init")
  ;; init is only called once, live reload will call stop then start
  (start))

(defn stop []
  (js/console.log "simple - stop"))