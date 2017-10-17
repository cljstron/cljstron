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
    &{:as win-conf}]  
  "Create `key` window from `win-conf` and store it in main-windows.
  `key` :
  `win-conf` :key-values for BrowserWindow. 
  Doc on keys in electron: 
  https://github.com/electron/electron/blob/master/docs/api/browser-window.md#new-browserwindowoptions
  keys can be camelcased or snakecased. ex. alwaysOnTop or always-on-top"
  (let [temp-win (BrowserWindow. (clj->js (transform-keys ->camelCaseKeyword win-conf)))]
    (add-window key temp-win)
    (.on temp-win "close" 
      (fn [] (drop-window key))))
  key)

(defn)

(defn open-window [key & {:keys [page-url js-urls main win-conf intro-code]}]
  "create and load `key` window with `keys` arguments.
  `page-url` : HTML base page url.
  `js-urls` : sequence of js scripts to include in page.
  `main` : main function to call when loaded.
  `win-conf` : map of parameters to create renderer.
  `intro-code` : optional js code to inject before loading."
  (-> :main
    (apply create-window win-conf)
    (load-window page-url)
    (exec-on-window  
      (str "document.write(`
        <h1>Hello World!</h1>
        We are using node " process.versions.node ", Chrome " process.versions.chrome
        ", and Electron " process.versions.electron 
        (loop [url (seq js-urls) code ""]
          (if url
            (recur (seq (rest url)) (str code "<script src='" (first url) "'></script>"))
            code))
        "<script>
            app.renderer.simple.init();
        </script>"
        "`);"))))

