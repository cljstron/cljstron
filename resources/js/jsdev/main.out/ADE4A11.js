goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7988__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7988 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7989__i = 0, G__7989__a = new Array(arguments.length -  0);
while (G__7989__i < G__7989__a.length) {G__7989__a[G__7989__i] = arguments[G__7989__i + 0]; ++G__7989__i;}
  args = new cljs.core.IndexedSeq(G__7989__a,0);
} 
return G__7988__delegate.call(this,args);};
G__7988.cljs$lang$maxFixedArity = 0;
G__7988.cljs$lang$applyTo = (function (arglist__7990){
var args = cljs.core.seq(arglist__7990);
return G__7988__delegate(args);
});
G__7988.cljs$core$IFn$_invoke$arity$variadic = G__7988__delegate;
return G__7988;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7991__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7991 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7992__i = 0, G__7992__a = new Array(arguments.length -  0);
while (G__7992__i < G__7992__a.length) {G__7992__a[G__7992__i] = arguments[G__7992__i + 0]; ++G__7992__i;}
  args = new cljs.core.IndexedSeq(G__7992__a,0);
} 
return G__7991__delegate.call(this,args);};
G__7991.cljs$lang$maxFixedArity = 0;
G__7991.cljs$lang$applyTo = (function (arglist__7993){
var args = cljs.core.seq(arglist__7993);
return G__7991__delegate(args);
});
G__7991.cljs$core$IFn$_invoke$arity$variadic = G__7991__delegate;
return G__7991;
})()
;

return null;
});
