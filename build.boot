(set-env!
  :source-paths    #{"src"}
  :resource-paths  #{"resources"}
  :dependencies '[[org.clojure/clojure        "1.9.0-alpha20"]
                  [org.clojure/clojurescript  "1.9.229"]
                  [org.clojure/tools.nrepl    "0.2.10"]
                  ; [com.cemerick/piggieback    "0.2.1"]
                  ; [weasel                     "0.7.0"]
                  ;[adzerk/boot-cljs           "1.7.228-2"]
                  ;[adzerk/boot-cljs-repl      "0.3.3"]
                  ;[adzerk/boot-reload         "0.4.13"]])

;(require
;  '[adzerk.boot-cljs      :refer [cljs]]
;  '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
;  '[adzerk.boot-reload    :refer [reload]])


(deftask dev
  "Compile for developement"
  []
  (comp
    (speak)

;    (cljs-repl  :ids                #{"browser"}) 
    
    ;(reload     :ids                #{"browser"}
                ; :ws-host            "localhost"
                ; :target-path        "target"
                ; :on-jsload          'app.browser/init)    
    
;    (cljs       :ids                #{"browser"}
;                :optimizations      :none)
    
;    (cljs       :ids                #{"main"}
;                :compiler-options    {:closure-defines {'app.main/dev? true}
;                                      :asset-path "target/main.out"} 
;                :optimizations      :none)

    (target :dir #{"dev"})))
  
  
(deftask prod
  "Compile for production"
  []
  (comp 
    (cljs       :ids #{"main"}
                :source-map true
                :optimizations   :advanced)
    
    (cljs       :ids #{"browser"}
                :source-map true
                :optimizations   :advanced)
  
    (target :dir #{"prod"})))
    