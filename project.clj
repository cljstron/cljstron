(defproject
 cljstron
 "0.0.4"
 :license
 {:name "The MIT License", :url "https://opensource.org/licenses/MIT"}
 :description
 "A hello world application for electron"
 :dependencies
 [[org.clojure/clojurescript "1.9.946"]
  [camel-snake-kebab "0.4.0"]
  [cljs-node-io "0.5.0"]
  [org.clojure/tools.reader "1.1.1"]
  [figwheel "0.5.14"]
  [im.chit/hara.reflect "2.5.10"]
  [org.clojure/clojure "1.9.0-beta4"]]
 :plugins
 [[lein-cljsbuild "1.1.7"]
  [lein-figwheel "0.5.10"]
  [lein-cooper "1.2.2"]]
 :hooks
 [leiningen.cljsbuild]
 :clean-targets
 ["main.js" "generate.js" "resources/js" "target"]
 :cljsbuild
 {:builds
  [{:id "main",
    :compiler
    {:output-to "main.js",
     :main main.main/main,
     :source-paths ["src"],
     :target :nodejs,
     :optimizations :none,
     :pretty-print false,
     :cache-analysis true}}],
  :figwheel
  {:http-server-root "resources",
   :css-dirs ["resources/css"],
   :ring-handler tools.figwheel-middleware/app, 
   :server-port 3449}})
