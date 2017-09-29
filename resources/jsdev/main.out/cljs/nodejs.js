// Compiled by ClojureScript 1.9.229 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7925__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7925 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7926__i = 0, G__7926__a = new Array(arguments.length -  0);
while (G__7926__i < G__7926__a.length) {G__7926__a[G__7926__i] = arguments[G__7926__i + 0]; ++G__7926__i;}
  args = new cljs.core.IndexedSeq(G__7926__a,0);
} 
return G__7925__delegate.call(this,args);};
G__7925.cljs$lang$maxFixedArity = 0;
G__7925.cljs$lang$applyTo = (function (arglist__7927){
var args = cljs.core.seq(arglist__7927);
return G__7925__delegate(args);
});
G__7925.cljs$core$IFn$_invoke$arity$variadic = G__7925__delegate;
return G__7925;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7928__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7928 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7929__i = 0, G__7929__a = new Array(arguments.length -  0);
while (G__7929__i < G__7929__a.length) {G__7929__a[G__7929__i] = arguments[G__7929__i + 0]; ++G__7929__i;}
  args = new cljs.core.IndexedSeq(G__7929__a,0);
} 
return G__7928__delegate.call(this,args);};
G__7928.cljs$lang$maxFixedArity = 0;
G__7928.cljs$lang$applyTo = (function (arglist__7930){
var args = cljs.core.seq(arglist__7930);
return G__7928__delegate(args);
});
G__7928.cljs$core$IFn$_invoke$arity$variadic = G__7928__delegate;
return G__7928;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map