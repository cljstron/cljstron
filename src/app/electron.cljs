(ns app.electron
  (:require [cljs.nodejs :as js]
            [clojure.string :refer [join]]))

; enable printf redirect to the console
(enable-console-print!)

; Main electron access
(def ^:export electron (js/require "electron"))

; for both processes
(def ^:export clipboard (.-clipboard electron))
(def ^:export crashReporter (.-crashReporter electron))
(def ^:export deprecations (.-deprecations electron))
(def ^:export nativeImage (.-nativeImage electron))
(def ^:export shell (.-shell electron))

; for main process
(def ^:export app (.-app electron))
(def ^:export autoUpdater (.-autoUpdater electron))
(def ^:export BrowserWindow (.-BrowserWindow electron))
(def ^:export contentTracing (.-contentTracing electron))
(def ^:export dialog (.-dialog electron))
(def ^:export ipcMain (.-ipcMain electron))
(def ^:export globalShortcut (.-globalShortcut electron))
(def ^:export Menu (.-Menu electron))
(def ^:export MenuItem (.-MenuItem electron))
(def ^:export powerSaveBlocker (.-powerSaveBlocker electron))
(def ^:export session (.-session electron))
(def ^:export Tray (.-Tray electron))

; needs app to be ready
(def ^:export powerMonitor)
(def ^:export protocol)
(def ^:export screen)

; Hidden internal modules
(def ^:export NavigationController (.-NavigationController electron))
(def ^:export webContents (.-webContents electron))

; Complementary modules
(def ^:export os (js/require "os"))
(def ^:export fs (js/require "fs-extra"))
(def ^:export path (js/require "path"))

(defn ^:export file-url [filename]
  "return normalized url from `filename`"
  (str "file://" (join "/" [(js* "__dirname") ".." filename])))

(def main-window (atom nil)) 

(defn create-window []  
  (reset! main-window (.BrowserWindow {:witdh 800 :height 600}))
  (.loadURL @main-window (file-url "index.html"))
  (.on @main-window "close" 
    (fn [] (reset! main-window nil))))

