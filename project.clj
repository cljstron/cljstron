(defproject cljstron "0.0.3"
  :license {:name "The MIT License"
            :url "https://opensource.org/licenses/MIT"}
  :source-paths ["src"]
  :description "A hello world application for electron"
  :dependencies  [;[org.clojure/clojure "1.9.0-beta3"]
                  [org.clojure/clojurescript "1.9.946"]
                  ;[figwheel "0.5.10"]
                  ;[reagent "0.6.1"]
                  ;[ring/ring-core "1.6.1"]
                  [camel-snake-kebab "0.4.0"]
                  [cljs-node-io "0.5.0"]
                  [org.clojure/tools.reader "1.1.0"]]

  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-figwheel "0.5.10"]
            [lein-cooper "1.2.2"]]

  :hooks    [leiningen.cljsbuild]

  :clean-targets ^{:protect false} ["main.js"
                                    "generate.js"
                                    "resources/js"
                                    "target"]

  :cljsbuild
  {:builds
   [{ :id "main"
      :compiler { :output-to "main.js"
                  :output-dir "target/main"
                  :main "main.main/main"
                  :target :nodejs
                  :optimizations :none
                  :pretty-print false
                  :cache-analysis true}}

    { :id "generate"
      :compiler { :output-to "generate.js"
                  :output-dir "target/generate"
                  :main "main.generate/main"
                  :target :nodejs
                  :optimizations :none
                  :pretty-print false
                  :cache-analysis true}}

    { :id "renderer"
      :compiler { :output-to "resources/js/main.js"
                  :output-dir "target/renderer"
                  :source-map true
                  :asset-path "js/ui-out"
                  :optimizations :none
                  :cache-analysis true
                  :main "main.renderer"}}

    { :id "main-release"
      :compiler { :output-to "main.js"
                  :output-dir "target/main-release"
                  :optimizations :advanced
                  :pretty-print true
                  :cache-analysis true
                  :infer-externs true}}

    { :id "renderer-release"
      :compiler { :output-to "resources/public/js/ui-core.js"
                  :output-dir "resources/public/js/ui-release-out"
                  :source-map "resources/public/js/ui-core.js.map"
                  :optimizations :advanced
                  :cache-analysis true
                  :infer-externs true
                  :main "main.renderer"}}]}

  :figwheel { :http-server-root "public"
              :css-dirs ["resources/public/css"]
              :ring-handler tools.figwheel-middleware/app
              :server-port 3449})
