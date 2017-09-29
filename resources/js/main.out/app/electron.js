// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true, :target :nodejs}
goog.provide('app.electron');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_();
app.electron.electron = require("electron");
app.electron.clipboard = app.electron.electron.clipboard;
app.electron.crashReporter = app.electron.electron.crashReporter;
app.electron.deprecations = app.electron.electron.deprecations;
app.electron.nativeImage = app.electron.electron.nativeImage;
app.electron.shell = app.electron.electron.shell;
app.electron.app = app.electron.electron.app;
app.electron.autoUpdater = app.electron.electron.autoUpdater;
app.electron.BrowserWindow = app.electron.electron.BrowserWindow;
app.electron.contentTracing = app.electron.electron.contentTracing;
app.electron.dialog = app.electron.electron.dialog;
app.electron.ipcMain = app.electron.electron.ipcMain;
app.electron.globalShortcut = app.electron.electron.globalShortcut;
app.electron.Menu = app.electron.electron.Menu;
app.electron.MenuItem = app.electron.electron.MenuItem;
app.electron.powerSaveBlocker = app.electron.electron.powerSaveBlocker;
app.electron.session = app.electron.electron.session;
app.electron.Tray = app.electron.electron.Tray;
app.electron.NavigationController = app.electron.electron.NavigationController;
app.electron.webContents = app.electron.electron.webContents;
app.electron.os = require("os");
app.electron.fs = require("fs-extra");
app.electron.path = require("path");
app.electron.file_url = (function app$electron$file_url(filename){

return [cljs.core.str("file://"),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__dirname,filename], null)))].join('');
});
