(ns cljstron.common.utils)

(defn ^:export str* [mess]
  (apply str mess))

(defn ^:export error [& mess]
  (throw (js/Error. (if mess (str* mess) "Error"))))