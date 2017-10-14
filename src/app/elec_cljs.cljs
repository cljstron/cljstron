(ns app.elec-cljs
  (:require ["electron" :as electron :refer [app BrowserWindow]]
            [cljs.nodejs :as js]
            [clojure.string :refer [join]]))

(defn- file-url [filename]
  "return normalized url from `filename` pointing to a file in the resources directory."
 (str "file://" (join "/" [(js* "__dirname") ".." "resources" filename])))

(def 
  ^{:doc "Var bound to the currently open windows.
  `keys` are unique `Keyword` of the window, `values` are `BrowerWindow` instances"
    :jsdoc ["@type {*}"]}
  main-windows (atom {})) 
(defn drop-window [key]
  "Drop `key` entry from main-windows"
  (swap! main-windows dissoc key)
  key)

(defn add-window [key window]
  "`window` @ `key` in main-windows' map"
  (swap! main-windows merge {key window})
  key)

(defn get-window [key]
  "Get the `key` window."
  (get @main-windows key))

(defn load-window [key url]
  "Load html page `url` in the `key` window."
  (.loadURL (get-window key) (file-url url))
  key)

(defonce window-keys
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
    &{:as keys}]  
  "Create `key` window from `keys` values and store it in main-windows"
  (let [new-keys (conj {:witdh 800 :height 600} keys)
        temp-win (BrowserWindow. new-keys)]
    (swap! main-windows conj {key temp-win})
    (.on temp-win "close" 
      (fn [] (drop-window key))))
  key)
