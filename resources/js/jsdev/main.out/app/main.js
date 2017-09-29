// Compiled by ClojureScript 1.9.229 {:target :nodejs}
goog.provide('app.main');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('app.electron');
cljs.nodejs.enable_util_print_BANG_.call(null);
app.main.main_window = cljs.core.atom.call(null,null);
app.main.create_window = (function app$main$create_window(){
cljs.core.reset_BANG_.call(null,app.main.main_window,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"witdh","witdh",-306590256),(800),new cljs.core.Keyword(null,"height","height",1025178622),(600)], null).BrowserWindow());

cljs.core.deref.call(null,app.main.main_window).loadURL(app.electron.file_url.call(null,"index.html"));

return cljs.core.deref.call(null,app.main.main_window).on("close",(function (){
return cljs.core.reset_BANG_.call(null,app.main.main_window,null);
}));
});
app.main.init = (function app$main$init(){
cljs.core.println.call(null,app.electron.electron,app.electron.app,app.electron.BrowserWindow);

app.electron.app.on("ready",app.main.create_window);

return app.electron.app.on("window-all-closed",((cljs.core.not_EQ_.call(null,process.platform(),"darwin"))?app.electron.app.quit():null));
});
cljs.core._STAR_main_cli_fn_STAR_ = app.main.init;

//# sourceMappingURL=main.js.map