// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true, :target :nodejs}
goog.provide('app.main');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('app.electron');
cljs.nodejs.enable_util_print_BANG_();
app.main.main_window = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
app.main.create_window = (function app$main$create_window(){
var G__12669_12671 = app.main.main_window;
var G__12670_12672 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$witdh,(800),cljs.core.cst$kw$height,(600)], null).BrowserWindow();
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12669_12671,G__12670_12672) : cljs.core.reset_BANG_.call(null,G__12669_12671,G__12670_12672));

(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.main.main_window) : cljs.core.deref.call(null,app.main.main_window)).loadURL(app.electron.file_url("index.html"));

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.main.main_window) : cljs.core.deref.call(null,app.main.main_window)).on("close",(function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.main_window,null) : cljs.core.reset_BANG_.call(null,app.main.main_window,null));
}));
});
app.main.init = (function app$main$init(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([app.electron.electron,app.electron.app,app.electron.BrowserWindow], 0));

app.electron.app.on("ready",app.main.create_window);

return app.electron.app.on("window-all-closed",((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(process.platform(),"darwin"))?app.electron.app.quit():null));
});
cljs.core._STAR_main_cli_fn_STAR_ = app.main.init;
