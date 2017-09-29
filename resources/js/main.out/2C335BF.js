goog.provide('cljs.nodejscli');
goog.require('cljs.core');
goog.require('cljs.nodejs');
if(COMPILED){
goog.global = global;
} else {
}
if(((cljs.core._STAR_main_cli_fn_STAR_ == null)) || (!(cljs.core.fn_QMARK_(cljs.core._STAR_main_cli_fn_STAR_)))){
throw (new Error("cljs.core/*main-cli-fn* not set"));
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_main_cli_fn_STAR_,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),cljs.nodejs.process.argv));
}
