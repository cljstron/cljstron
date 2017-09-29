(ns app.electron
  (:require [cljs.nodejs :as js]
            [clojure.string :refer [join]]))

; enable printf redirect to the console
(enable-console-print!)

; Main electron access
(def electron (js/require "electron"))

; for both processes
(def clipboard (.-clipboard electron))
(def crashReporter (.-crashReporter electron))
(def deprecations (.-deprecations electron))
(def nativeImage (.-nativeImage electron))
(def shell (.-shell electron))

; for main process
(def app (.-app electron))
(def autoUpdater (.-autoUpdater electron))
(def BrowserWindow (.-BrowserWindow electron))
(def contentTracing (.-contentTracing electron))
(def dialog (.-dialog electron))
(def ipcMain (.-ipcMain electron))
(def globalShortcut (.-globalShortcut electron))
(def Menu (.-Menu electron))
(def MenuItem (.-MenuItem electron))
(def powerSaveBlocker (.-powerSaveBlocker electron))
(def session (.-session electron))
(def Tray (.-Tray electron))

; needs app to be ready
(def powerMonitor)
(def protocol)
(def screen)

; Hidden internal modules
(def NavigationController (.-NavigationController electron))
(def webContents (.-webContents electron))

; Complementary modules
(def os (js/require "os"))
(def fs (js/require "fs-extra"))
(def path (js/require "path"))

(defn file-url [filename]
  "return normalized url from `filename`"
  (str "file://" (join "/" [(js* "__dirname") filename])))

