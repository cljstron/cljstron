(ns elec-cljs.main.interop
  (:require [cljs.pprint :refer [pprint]]
            [clojure.string :as s]
            [cljs.reader :as r]
            [goog :refer [isNull isObject isFunction typeOf]]))

(enable-console-print!)

(defn debora
  [& args]
  (apply println args)
  (flush))

(defn read-key [key]
  (debora "read key=" key)
  (let [key (r/read-string key)]
    (if (symbol? key)
      (keyword key)
      key)))

(defn call-func
  ( [func args]
    (call-func args nil))
  ( [func args parent]
    (debora "func:" func "\nargs:" args)
    (Reflect.apply func parent (clj->js (into [] args)))))

(defn readfn
  [jsobj parent-obj]
  (debora "In function")
  (if (and parent-obj
          (and (.-prototype parent-obj)
               (.-constructor (.-prototype parent-obj))))
    ; case for a method
    (do
      (debora "method : Constructor in parent : " parent-obj)
      (fn [parent & args]
        (call-func jsobj args parent)))

    ; case for a function
    (do
      (debora "static function")
      (fn [& args]
        (call-func jsobj args nil)))))

(declare myjs->clj)

(defn key-maker [jsobj pair]
  (debora "Pair : " val)
  (vector (key pair) (myjs->clj (val pair) jsobj)))

(defn readobj
  [jsobj parent-obj]
  (debora "In object and not function" (js->clj jsobj))
  (let [obj (js->clj jsobj)]
    (cond
      (isFunction jsobj)
      (debora "!!!!!!!!!!!!!!!!!!!!Grave problème!!!!!!!!!!!!!!!")

      (map? obj)
;			There's something rotten in the interlanguage kingdom
      (into {} (map #(vector (key %) (myjs->clj (val %) jsobj)) (seq obj)))
;      (pprint (map (fn[pair]((partial jsobj) pair) (seq obj))))

      (vector? obj)
      (do
        (debora obj)
        (into [] (map #(myjs->clj % parent-obj) (seq obj))))

      :else
      (str "\n\n!!!!!!!!!! Non map nor array object : '" obj "'"))))


(defn myjs->clj
  ( [jsobj]
    (myjs->clj jsobj nil))

  ( [jsobj parent-obj]
    (debora "In myjs->clj......................................." jsobj)
    (cond
      (g.isNull jsobj)
      nil

      (isFunction jsobj)
      (readfn jsobj parent-obj)

      (isObject jsobj)
      (readobj jsobj parent-obj)

      :else
      (js->clj jsobj))))