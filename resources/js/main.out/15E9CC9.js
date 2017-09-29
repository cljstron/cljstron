goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12677__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var G__12677 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12678__i = 0, G__12678__a = new Array(arguments.length -  0);
while (G__12678__i < G__12678__a.length) {G__12678__a[G__12678__i] = arguments[G__12678__i + 0]; ++G__12678__i;}
  args = new cljs.core.IndexedSeq(G__12678__a,0);
} 
return G__12677__delegate.call(this,args);};
G__12677.cljs$lang$maxFixedArity = 0;
G__12677.cljs$lang$applyTo = (function (arglist__12679){
var args = cljs.core.seq(arglist__12679);
return G__12677__delegate(args);
});
G__12677.cljs$core$IFn$_invoke$arity$variadic = G__12677__delegate;
return G__12677;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12680__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var G__12680 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12681__i = 0, G__12681__a = new Array(arguments.length -  0);
while (G__12681__i < G__12681__a.length) {G__12681__a[G__12681__i] = arguments[G__12681__i + 0]; ++G__12681__i;}
  args = new cljs.core.IndexedSeq(G__12681__a,0);
} 
return G__12680__delegate.call(this,args);};
G__12680.cljs$lang$maxFixedArity = 0;
G__12680.cljs$lang$applyTo = (function (arglist__12682){
var args = cljs.core.seq(arglist__12682);
return G__12680__delegate(args);
});
G__12680.cljs$core$IFn$_invoke$arity$variadic = G__12680__delegate;
return G__12680;
})()
;

return null;
});
