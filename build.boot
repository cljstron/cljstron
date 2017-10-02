(set-env!
  :source-paths    #{"src"}
  :dependencies '[[org.clojure/clojurescript  "1.9.229"]
                  [adzerk/boot-cljs           "1.7.228-2"]
                  [adzerk/boot-cljs-repl      "0.3.3"]
                  [adzerk/boot-reload         "0.4.13"]])

(require
  '[adzerk.boot-cljs      :refer [cljs]])


(deftask dev
  "Compile for developement"
  []
  (comp
    (speak)

;    (cljs-repl  :ids                #{"renderer"}) 
    
;    (reload     :ids                #{"renderer"}
;                :ws-host            "localhost"
;                :target-path        "target"
;                :on-jsload          'app.renderer/init)    
    
    (cljs       :ids                #{"renderer"}
                :optimizations      :none)

    (cljs       :ids                #{"main"}
                :compiler-options    {:closure-defines {'app.electron/dev? true}}
                :optimizations      :none)

    (target)))
  
  
(deftask prod
  "Compile for production"
  []
  (comp 
    (cljs       :ids #{"main"}
                :source-map true
                :optimizations   :advanced)
    
    (cljs       :ids #{"renderer"}
                :source-map true
                :optimizations   :advanced)
  
    (target)))
    