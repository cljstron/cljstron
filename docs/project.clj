(defproject cljstron "0.0.4"
  {
    :license {:name "The MIT License"
              :url "https://opensource.org/licenses/MIT"}
    :source-paths ["src"]
    :description "A hello world application for electron"
    :dependencies  [[org.clojure/clojurescript "1.9.908"]
                    [camel-snake-kebab "0.4.0"]
                    [cljs-node-io "0.5.0"]
                    [org.clojure/tools.reader "1.1.0"]]
                    ;[figwheel "0.5.10"]
                    ;[org.clojure/clojure "1.9.0-beta11"]
                    ;[reagent "0.6.1"]
                    ;[ring/ring-core "1.6.1"]

    :plugins [[lein-cljsbuild "1.1.7"]
              [lein-figwheel "0.5.10"]
              [lein-cooper "1.2.2"]]

    :hooks    [leiningen.cljsbuild]

    :clean-targets ^{:protect false} ["main.js"
                                      "generate.js"
                                      "resources/js"
                                      "target"]

    :cljsbuild
    { :builds
      [ { :id "main"
          :compiler { :output-to "main.js"
                      :output-dir "target"
                      :main main.main/main
                      :target :nodejs
                      :optimizations :none
                      :pretty-print false
                      :cache-analysis true}}

        { :id "generate"
          :compiler { :output-to "generate.js"
                      :output-dir "target"
                      :main main.generate/generate
                      :target :nodejs
                      :optimizations :none
                      :pretty-print false
                      :cache-analysis true}}]

      :figwheel { :http-server-root "resources"
                  :css-dirs ["resources/css"]
                  :ring-handler tools.figwheel-middleware/app
                  :server-port 3449}}})
