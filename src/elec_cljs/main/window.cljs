(ns elec-cljs.main.window
  (:require ["electron" :as electron :refer [app BrowserWindow]]
            [cljs.nodejs :as js]
            [clojure.string :refer [join]]
            [camel-snake-kebab.core :refer [->camelCaseKeyword]]
            [camel-snake-kebab.extras :refer [transform-keys]]))

(defn- file-url [filename]
  "return normalized url from `filename` pointing to a file in the resources directory."
 (str "file://" (join "/" [(js* "__dirname") ".." "resources" filename])))

(def 
  ^{:doc "Var bound to the map of currently open windows.
  `keys` are unique `Keyword` of the window, `values` are `BrowserWindow` instances"
    :jsdoc ["@type {*}"]}
  main-windows (atom {})) 

(defn drop-window [key]
  "Drop `key` entry from main-windows"
  (swap! main-windows dissoc key)
  key)

(defn add-window [key window]
  "`window` @ `key` in main-windows' map"
  (swap! main-windows assoc key window)
  key)

(defn get-window [key]
  "Get the `key` window."
  (get @main-windows key))

(defn load-window [key url]
  "Load html page `url` in the `key` window."
  (.loadURL (get-window key) (file-url url))
  key)

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

(defn create-window 
  [^Keyword key 
    &{:as key-values}]  
  "Create `key` window from `key-values` and store it in main-windows"
  (let [temp-win (BrowserWindow. (clj->js (conj {:witdh 800 :height 600} 
                                                (transform-keys ->camelCaseKeyword key-values))))]
    (add-window key temp-win)
    (.on temp-win "close" 
      (fn [] (drop-window key))))
  key)
