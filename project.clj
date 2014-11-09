(defproject tunefulweb "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[jayq "2.5.2"]
                 [crate "0.2.5"]
                 [org.clojure/clojure "1.6.0"]
                 [org.clojure/core.async "0.1.256.0-1bf8cf-alpha"]
                 [org.clojure/clojurescript "0.0-2371"]
                 [prismatic/dommy "1.0.0"]]

  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]
            [lein-simpleton "1.3.0"]]

  :source-paths ["src"]

  :cljsbuild {
              :builds [{:id "tunefulweb"
                        :source-paths ["src"]
                        :compiler {:output-to "tunefulweb.js"
                                   :output-dir "out"
                                   :optimizations :none
                                   :pretty-print true
                                   :source-map true}}]})
