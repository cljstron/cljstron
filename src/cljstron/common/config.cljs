(ns cljstron.common.config
  (:require
    [cljs.nodejs :as node :refer [enable-util-print!]]
    [clojure.tools.reader.edn :refer [read-string]]
    [cljs-node-io.core :as io :refer [slurp spit]]
    [cljs.pprint :refer [pprint]]
    [clojure.string :as str]
    [cljstron.common.utils :refer [error spy str*]]
    [cljstron.common.cljjs :refer [rjs->clj]]))

(enable-util-print!)

(def ^:export read-edn
  (memoize
    (fn read-edn* [file]
      "Read `file` and tranform it from :edn to clojure structure."
      (read-string (slurp file)))))

(defn- str-edn [data]
  "Stringify `data` in :edn format."
  (with-out-str (pprint data)))

(defn ^:export write-edn
  ( [file data]
    "Write `data` in file `file` in :edn format."
    (write-edn file data nil))
  ( [file data transform]
    "Write `data` in file `file` in :edn format with file transformation."
    (spit file
      (if transform
        (transform (str-edn data))
        (str-edn data)))))

(defn ^:export read-json [file]
  "Read `file` and tranform it from JSON to clojure structure."
  (rjs->clj (.parse js/JSON (slurp file))))

(defn ^:export str-json [data]
  "Stringify `data` in JSON format."
  (.stringify js/JSON (clj->js data) nil "  "))

(defn ^:export write-json
  ( [file data]
    "Write `data` in file `file` in JSON format."
    (spit file data nil))
  ( [file data transform]
    "Write `data` in file `file` in JSON format with file transformation."
    (spit file
      (if transform
        (transform (str-json data))
        (str-json data)))))

; forward
(declare ^:private read-app-edn-base)
(declare ^:private eval-value)

(defn- loop-fn [conf [key-list body]]
  "Evaluate `(loop key-list body)` function.
   `body` will evaluate to the `body` value.
   `key-list` is the list of keys to be used get app data to evaluate each body.
   All bodies will be merged in one collection that will be returned.
   i.e. (loop (quote [:el1 :el2])) [:avalue]) -> [val1 val2] where valN is
   the evaluation of :avalue in app env :elN"
  (loop [ keys (seq (eval-value :final false conf
                      (eval-value :base false conf key-list)))
          res (empty body)]
    (if keys
      (let  [ key (first keys)
              conf (merge conf (read-app-edn-base key "."))
              val (eval-value :base true conf body)]
        (recur (seq (rest keys)) (apply merge res val)))
      res)))

(defn- str-fn [conf r]
  "Evaluate (str val...) returning the concatenation of evaluated string values."
  (if (every? string? r)
    (str* r)
    (cons 'str (eval-value :base false conf r))))

(defn- symbol-fn [conf r]
  "Evaluate (symbol val...) returning the symbol from concatenation of evaluated string values."
  (if (every? string? r)
    (apply symbol (str/split (str* r) #"/"))
    (cons 'symbol (eval-value :base false conf r))))

(defn- merge-fn [conf r]
  "Merge collections (vectors, set, map, list)"
  (if (every? #(or (map? %) (vector? %)) r)
    (reduce #(apply merge %1 %2) r)
    (cons 'merge (eval-value :base false conf r))))

(defn- eval-list-or-seq [level key-val conf value]
  "Evaluate lists or sequences as functions or collection of evaluated collections."
  (let [[f & r] value]
    (case level
      :base
        (case f
          quote     value
          symbol    (symbol-fn conf r)
          str       (str-fn conf r)
          merge     (merge-fn conf r)
          loop      (loop-fn conf r)
                    (if key-val
                      value
                      (map (partial eval-value :base key-val conf) value)))
      :final
        (case f
          quote     (first r)
                    (map (partial eval-value :final key-val conf) value)))))

(defn- eval-kv [level key-val conf [key value]]
  "Evaluate [`key` `value`], `key` if `key-val`."
  (let [key (if key-val
              (eval-value level true conf key)
              key)]
    (if (get #{:parent :output} key)
      [key value]
      [key (eval-value level false conf value)])))

(defn- eval-map [level key-val conf value]
  "Evaluate a map with `eval-kv`for each `key`."
  (into {} (map (partial eval-kv level key-val conf) value)))

(defn- eval-keyword [level key-val conf keyword]
  "Eval `keyword` according to `level`, `key-val` and `conf`."
  (if (= level :base)
    (if-let [new-value (get conf value)]
      new-value
      keyword)
    keyword))

(defn- no-eval [_ _ _ value]
  "Return value 'as-is'."
  value)

(defn- eval-vect-or-set [level _ conf value]
  "Evaluate vector or set collections elements"
  (into (empty value)
        (map (partial eval-value level false conf) value)))

(defn- eval-fn [key-val value]
  "Return function that eval specific value type of data"
  (if (and (not key-val) (or (vector? value) (set? value)))
    eval-vect-or-set
    (condp #(%1 %2) value
      #(or (list? %) (seq? %))    eval-list-or-seq
      map?                        eval-map
      keyword?                    eval-keyword
                                  no-eval)))

(defn- eval-value-1 [level key-val conf value]
  "Make one evaluation only of `value`."
  ((eval-fn key-val value) level key-val conf value))

(defn- eval-value [level key-val conf value]
  "Evaluate `value` until no more evaluation is possible."
  (let [new-value (eval-value-1 level key-val conf value)]
    (if (= new-value value)
      value
      (recur level key-val conf new-value))))

(def ^:private load-def
  "Load definition files returning an environment."
  (memoize
    (fn load-def* [path]
      (merge
        (read-edn (str path "/app.org.edn"))
        (read-edn (str path "/app.edn"))))))

(defn- merge-parents [app key]
  "Merging `app`'s `key` environment to parent's environment recursively."
  (let [val (get app key {})
        parent (get val :parent)]
    (if parent
      (merge (merge-parents app parent) val)
      val)))

(def ^:private read-app-edn-base
  (memoize
    (fn read-app-edn-base* [key path]
      (loop [cont (merge-parents (load-def path) key)]
        (let [new-cont (eval-value :base false cont cont)]
          (if (= new-cont cont)
            cont
            (recur new-cont)))))))

(defn read-app-edn [key path]
  (eval-value :final false {} (read-app-edn-base key path)))

(defn- eval-term-fn [str]
  "Evaluate last level functions from text image of environment"
  (-> str
    (str/replace #"\(inline \"([^\"]*)[^)]*\)" "$1"))) ; TODO manage escaped quotes

(defn- write-files [files ext output]
  "Write files for an extension."
  (when files
    (let [[filename content] (first files)
          filename (str (name filename) "." (name ext))]
      (println "generate " filename)
      (cond
        (= output :edn)     (write-edn filename content eval-term-fn)
        (= output :json)    (write-json filename content eval-term-fn)
        :else (error "(app/write-gen-files) File type unknown : " output))
      (recur (seq (rest files)) ext output))))

(defn ^:export write-gen-files [path]
  "Write all generated files."
  (loop [ extensions (seq (:code (read-app-edn :-gen-files path)))]
    (when extensions
      (let [[ext-name ext-content] (first extensions)
            output (:output ext-content)]
        (write-files (seq (dissoc ext-content :output)) ext-name output)
        (recur (seq (rest extensions)))))))
