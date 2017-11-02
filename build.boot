(set-env!
  :source-paths    #{"src"}
  :resource-paths  #{"resources"}
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

;    (cljs-repl  :ids                #{"browser"})

;    (reload     :ids                #{"browser"}
;                :ws-host            "localhost"
;                :target-path        "target"
;                :on-jsload          'app.browser/init)

    (cljs       :ids                #{"browser"}
                :optimizations      :none)

    (cljs       :ids                #{"main"}
                :compiler-options    {:closure-defines {'app.main/dev? true}}
                :optimizations      :none)

    (target :dir #{"resources/jsdev"})))


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

    (target :dir #{"resources/js"})))
