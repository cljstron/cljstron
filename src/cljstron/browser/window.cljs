(ns cljstron.browser.window
  (:require [electron :refer [app BrowserWindow]]
            [cljs.nodejs :as js]
            [clojure.string :refer [join]]
            [camel-snake-kebab.core :refer [->camelCaseKeyword]]
            [camel-snake-kebab.extras :refer [transform-keys]]))

(defn ^:export file-url [^String filename]
  "return normalized url from `filename` pointing to a file in the resources directory."
 (str "file://" (join "/" [(js* "__dirname") ".." "resources" filename])))

(def 
  ^{:doc "Var bound to the map of currently open windows.
  `keys` are unique `Keyword` of the window, `values` are `BrowserWindow` instances"
    :jsdoc ["@type {*}"]}
  main-windows (atom {})) 

(defn ^:export drop-window [^Keyword key]
  "Drop `key` entry from main-windows"
  (swap! main-windows dissoc key)
  key)

(defn ^:export add-window [^Keyword key ^BorowserWindow window]
  "`window` @ `key` in main-windows' map"
  (swap! main-windows assoc key window)
  key)

(defn ^:export get-window [^Keyword key]
  "Get the `key` window."
  (if-let [win (get @main-windows key)]
    win
    (println "Error : " key " not found in main-windows")))

(defn ^:export load-window [^Keyword key ^String url]
  "Load html page `url` in the `key` window."
  (when url (.loadURL (get-window key) (file-url url)))
  key)

(defn- get-web-contents [^Keyword key]
  (if-let [wc (.. (get-window key)
                  -webContents)]
    wc  
    (println "get-web-content: no webContent")))

(defn exec-on-window [^Keyword key & ^String code]
  (when-let [code (seq code)]
    (.. (get-web-contents key) 
        (executeJavaScript (str  "document.write(`" (apply str code) "`);"))
        (then 
          #(identity %)
          #(println "error in exec-on-window: " key " code : " \" code \" "->" \" % \")))))

(defonce ^private window-keys
  ^{:doc "Var bound to the map of currently open windows.
  `keys` are unique `Keyword` of the window, `values` are `BrowserWindow` instances"}
  #{:width :height :show :backgroundColor :parent :modal :x :y 
    :useContentSize :center :minWidth :minHeight :maxWidth :maxHeigth 
    :resizable :movable :minimizable :maximizable :closable :focusable
    :alwaysOnTop :fullscreen :fullscreenable :simpleFullscreen :skipTaskbar
    :kiosk :title :icon :frame :acceptFirstMouse :disbleAutoHideCursor
    :autoHideMenuBar :enableLargerThanScreen :hasShadow :opacity :darkTheme
    :transparent :fullScreenWindowTitle :thickFrame :vibrancy :zoomToPageWidth
    :webPreferences})

(defn ^:export create-window 
  [^Keyword key win-conf]   
  "Create `key` window from `win-conf` and store it in main-windows.
  `key` :
  `win-conf` : key-values for BrowserWindow. 
  Doc on keys in electron: 
  https://github.com/electron/electron/blob/master/docs/api/browser-window.md#new-browserwindowoptions
  keys can be camelcased or snakecased. ex. alwaysOnTop or always-on-top"
  (let [temp-win (BrowserWindow. (clj->js (transform-keys ->camelCaseKeyword win-conf)))]
    (add-window key temp-win)
    (.on temp-win "close" 
      (fn [] (drop-window key))))
  key)

; TODO include css scripts too
(defn- include-scripts [urls]
  "Create JavaScript includes from `js-urls`.
  `js-urls` : Sequable list of Javascript file urls to load.
  Nit value for `js-urls` does'nt include any file"
  (loop [url (seq urls) code ""]
    (if url
      (recur (seq (rest url)) (str code "<script src='" (first url) "'></script>"))
      code)))
  
(defn- include-code [code]
  "Include `code` as JavaScript code.
  `code` : JavaScript code to execute as a String.
  Nil value for `code` includes nothing."
  (println "code -> " code)
  (if code 
    (str code) 
    ""))
  
(defn- include-main-call [function]
  "Include call to main function `function` if not nil.
  `function` : name of the function to call or nil.
  Nil value for `function` includes nothing."
  (if function
    (str "<script>" function "();</script>")
    ""))

(defn ^export open-window [^Keyword key &{:keys [page-url js-urls main-fn win-conf intro-html]
                                          :or {page-url "index.html"}}]
  "create and load `key` window with `keys` arguments.
  `page-url` : HTML base page url.
  `js-urls` : sequence of js scripts to include in page.
  `main` : main function to call when loaded.
  `win-conf` : map of parameters to create renderer.
  `intro-html` : optional html code to inject before loading."
  (-> key
    (create-window win-conf)
    (load-window page-url)
    (exec-on-window 
      (include-code intro-html)
      (include-scripts js-urls)
      (include-main-call main-fn))))
