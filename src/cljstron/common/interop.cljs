(ns cljstron.common.interop
  (:require [clojure.string :as s]
            [cljs.reader :as r]
            [goog :refer [isNull isObject isFunction]]))

(defn- read-key [key]
  (let [key (r/read-string key)]
    (if (symbol? key)
      (keyword key)
      (js->clj key))))

(defn- call-func
  [func args parent]
  (Reflect.apply func parent (clj->js (into [] args))))

(defn- read-fn
  [jsobj parent-obj]
  (if (and parent-obj (.-prototype parent-obj)(.-constructor (.-prototype parent-obj)))
    #(call-func jsobj %2 %1)
    #(call-func jsobj % nil)))

(declare rjs->clj)

(defn- key-maker [jsobj pair]
  (vector (read-key (key pair)) (rjs->clj (val pair) jsobj)))

(defn- read-obj
  [jsobj parent-obj]
  (let [obj (js->clj jsobj)]
    (cond
      (map? obj)    (into {} (map #(key-maker jsobj %) (seq obj)))
      (vector? obj) (into [] (map #(rjs->clj % parent-obj) (seq obj))))))

(defn ^:export rjs->clj
  ( [jsobj]
    (rjs->clj jsobj nil))
  ( [jsobj parent-obj]
    (cond
      (isNull jsobj)   nil
      (isFunction jsobj) (read-fn jsobj parent-obj)
      (isObject jsobj)   (read-obj jsobj parent-obj)
      :else              (js->clj jsobj))))
