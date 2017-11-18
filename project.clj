(defproject cljstron "0.0.4"
  :license {:name "The MIT License"
            :url "https://opensource.org/licenses/MIT"}
  :description "A hello world application for electron"
  :dependencies  [[org.clojure/clojurescript "1.9.946"]
                  [camel-snake-kebab "0.4.0"]
                  [cljs-node-io "0.5.0"]
                  [org.clojure/tools.reader "1.1.1"]
                  [org.clojure/clojure "1.9.0-beta4"]]

  :source-paths ["src"]

  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-npm "0.6.2"]]

  :hooks    [leiningen.cljsbuild]

  :clean-targets ^{:protect false} ["main.js"
                                    "generate.js"
                                    "resources/js"
                                    "target"]

  :npm
  { :dependencies  [[electron "1.8.1"]]}

  :cljsbuild
  { :builds
    [ { :id "main"
        :source-paths ["src"]
        :compiler { :output-to "main.js"
                    :main main.main/main
                    :target :nodejs
                    :optimizations :none
                    :cache-analysis true}}

      { :id "generate"
        :source-paths ["src"]
        :compiler { :output-to "generate.js"
                    :main main.generate/generate
                    :target :nodejs
                    :optimizations :none
                    :pretty-print false
                    :cache-analysis true}}]})
