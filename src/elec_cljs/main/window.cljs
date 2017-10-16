(ns elec-cljs.main.window
  (:require ["electron" :as electron :refer [app BrowserWindow]]
            [cljs.nodejs :as js]
            [clojure.string :refer [join]]
            [camel-snake-kebab.core :refer [->camelCaseKeyword]]
            [camel-snake-kebab.extras :refer [transform-keys]]))

(defn ^:export file-url [filename]
  "return normalized url from `filename` pointing to a file in the resources directory."
 (str "file://" (join "/" [(js* "__dirname") ".." "resources" filename])))

(def 
  ^{:doc "Var bound to the map of currently open windows.
  `keys` are unique `Keyword` of the window, `values` are `BrowserWindow` instances"
    :jsdoc ["@type {*}"]}
  main-windows (atom {})) 

(defn ^:export drop-window [key]
  "Drop `key` entry from main-windows"
  (swap! main-windows dissoc key)
  key)

(defn ^:export add-window [key window]
  "`window` @ `key` in main-windows' map"
;  (println "(add-window " key " " window ")")
;  (println "main-windows : " main-windows)
  (swap! main-windows assoc key window)
  key)

(defn ^:export get-window [key]
  "Get the `key` window."
  (if-let [win (get @main-windows key)]
    win
    (println "Error : " key " not found in  main-windows")))

(defn ^:export load-window [key url]
  "Load html page `url` in the `key` window."
  (.loadURL (get-window key) (file-url url))
  key)

(defn get-web-contents [key]
  (if-let [wc (.. (get-window key)
                  -webContents)]
    wc  
    (println "get-web-content: no webContent")))

(defn exec-on-window [key code]
  (.. (get-web-contents key) 
      (executeJavaScript code)
      (then 
        #(identity %)
        #(println "error : " %))))

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
  [^Keyword key 
    &{:as key-values}]  
  "Create `key` window from `key-values` and store it in main-windows"
  (let [temp-win (BrowserWindow. (clj->js (transform-keys ->camelCaseKeyword key-values)))]
    (add-window key temp-win)
    (.on temp-win "close" 
      (fn [] (drop-window key))))
  key)
