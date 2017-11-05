(ns main.generate
  (:require
    [cljs.nodejs :as node :refer [enable-util-print!]]
    [cljstron.common.app :refer [write-gen-files]]))

(enable-util-print!)

(defn generate []
  "Generate compile files for the project"
  (write-gen-files "."))
