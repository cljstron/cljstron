goog.provide('shadow.cljs.devtools.client.console');
goog.require('cljs.core');
goog.require('clojure.string');
shadow.cljs.devtools.client.console.push_all = (function shadow$cljs$devtools$client$console$push_all(arr,item){
if(cljs.core.vector_QMARK_(item)){
var seq__3762 = cljs.core.seq(item);
var chunk__3763 = null;
var count__3764 = (0);
var i__3765 = (0);
while(true){
if((i__3765 < count__3764)){
var it = chunk__3763.cljs$core$IIndexed$_nth$arity$2(null,i__3765);
arr.push(it);

var G__3766 = seq__3762;
var G__3767 = chunk__3763;
var G__3768 = count__3764;
var G__3769 = (i__3765 + (1));
seq__3762 = G__3766;
chunk__3763 = G__3767;
count__3764 = G__3768;
i__3765 = G__3769;
continue;
} else {
var temp__5459__auto__ = cljs.core.seq(seq__3762);
if(temp__5459__auto__){
var seq__3762__$1 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__3762__$1)){
var c__18358__auto__ = cljs.core.chunk_first(seq__3762__$1);
var G__3770 = cljs.core.chunk_rest(seq__3762__$1);
var G__3771 = c__18358__auto__;
var G__3772 = cljs.core.count(c__18358__auto__);
var G__3773 = (0);
seq__3762 = G__3770;
chunk__3763 = G__3771;
count__3764 = G__3772;
i__3765 = G__3773;
continue;
} else {
var it = cljs.core.first(seq__3762__$1);
arr.push(it);

var G__3774 = cljs.core.next(seq__3762__$1);
var G__3775 = null;
var G__3776 = (0);
var G__3777 = (0);
seq__3762 = G__3774;
chunk__3763 = G__3775;
count__3764 = G__3776;
i__3765 = G__3777;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return arr.push(item);
}
});
shadow.cljs.devtools.client.console.object_ref = (function shadow$cljs$devtools$client$console$object_ref(obj){
if(cljs.core.truth_(obj)){
return ["object",({"object": obj})];
} else {
return null;
}
});
shadow.cljs.devtools.client.console.map__GT_style = (function shadow$cljs$devtools$client$console$map__GT_style(m){
return ({"style": clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__3778){
var vec__3779 = p__3778;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3779,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3779,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),";"].join('');
}),m))});
});
shadow.cljs.devtools.client.console.clj__GT_jsonml = (function shadow$cljs$devtools$client$console$clj__GT_jsonml(struct){
if((struct == null)){
return null;
} else {
if(cljs.core.array_QMARK_(struct)){
return struct;
} else {
if(cljs.core.vector_QMARK_(struct)){
var vec__3782 = struct;
var seq__3783 = cljs.core.seq(vec__3782);
var first__3784 = cljs.core.first(seq__3783);
var seq__3783__$1 = cljs.core.next(seq__3783);
var tag = first__3784;
var first__3784__$1 = cljs.core.first(seq__3783__$1);
var seq__3783__$2 = cljs.core.next(seq__3783__$1);
var attrs = first__3784__$1;
var children = seq__3783__$2;
var js = [cljs.core.name(tag),shadow.cljs.devtools.client.console.map__GT_style(attrs)];
var seq__3785_3789 = cljs.core.seq(children);
var chunk__3786_3790 = null;
var count__3787_3791 = (0);
var i__3788_3792 = (0);
while(true){
if((i__3788_3792 < count__3787_3791)){
var child_3793 = chunk__3786_3790.cljs$core$IIndexed$_nth$arity$2(null,i__3788_3792);
shadow.cljs.devtools.client.console.push_all(js,(shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1 ? shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1(child_3793) : shadow.cljs.devtools.client.console.clj__GT_jsonml.call(null,child_3793)));

var G__3794 = seq__3785_3789;
var G__3795 = chunk__3786_3790;
var G__3796 = count__3787_3791;
var G__3797 = (i__3788_3792 + (1));
seq__3785_3789 = G__3794;
chunk__3786_3790 = G__3795;
count__3787_3791 = G__3796;
i__3788_3792 = G__3797;
continue;
} else {
var temp__5459__auto___3798 = cljs.core.seq(seq__3785_3789);
if(temp__5459__auto___3798){
var seq__3785_3799__$1 = temp__5459__auto___3798;
if(cljs.core.chunked_seq_QMARK_(seq__3785_3799__$1)){
var c__18358__auto___3800 = cljs.core.chunk_first(seq__3785_3799__$1);
var G__3801 = cljs.core.chunk_rest(seq__3785_3799__$1);
var G__3802 = c__18358__auto___3800;
var G__3803 = cljs.core.count(c__18358__auto___3800);
var G__3804 = (0);
seq__3785_3789 = G__3801;
chunk__3786_3790 = G__3802;
count__3787_3791 = G__3803;
i__3788_3792 = G__3804;
continue;
} else {
var child_3805 = cljs.core.first(seq__3785_3799__$1);
shadow.cljs.devtools.client.console.push_all(js,(shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1 ? shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1(child_3805) : shadow.cljs.devtools.client.console.clj__GT_jsonml.call(null,child_3805)));

var G__3806 = cljs.core.next(seq__3785_3799__$1);
var G__3807 = null;
var G__3808 = (0);
var G__3809 = (0);
seq__3785_3789 = G__3806;
chunk__3786_3790 = G__3807;
count__3787_3791 = G__3808;
i__3788_3792 = G__3809;
continue;
}
} else {
}
}
break;
}

return js;
} else {
if(typeof struct === 'string'){
return struct;
} else {
if(typeof struct === 'number'){
return struct;
} else {
if(cljs.core.seq_QMARK_(struct)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.console.clj__GT_jsonml),struct);
} else {
return shadow.cljs.devtools.client.console.object_ref(struct);

}
}
}
}
}
}
});

/**
* @constructor
 * @implements {shadow.cljs.devtools.client.console.Object}
*/
shadow.cljs.devtools.client.console.SeqFormatter = (function (){
});
shadow.cljs.devtools.client.console.SeqFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
});

shadow.cljs.devtools.client.console.SeqFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((cljs.core.sequential_QMARK_(obj)) || (cljs.core.set_QMARK_(obj))){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.PersistentArrayMap.EMPTY,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(obj)], 0)))," [count: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(obj)),"]"].join('')], null));
} else {
return null;
}
});

shadow.cljs.devtools.client.console.SeqFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return cljs.core.boolean$(cljs.core.seq(obj));
});

shadow.cljs.devtools.client.console.SeqFormatter.prototype.body = (function (s){
var self__ = this;
var this$ = this;
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null),(function (){var iter__18313__auto__ = ((function (this$){
return (function shadow$cljs$devtools$client$console$iter__3810(s__3811){
return (new cljs.core.LazySeq(null,((function (this$){
return (function (){
var s__3811__$1 = s__3811;
while(true){
var temp__5459__auto__ = cljs.core.seq(s__3811__$1);
if(temp__5459__auto__){
var s__3811__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(s__3811__$2)){
var c__18311__auto__ = cljs.core.chunk_first(s__3811__$2);
var size__18312__auto__ = cljs.core.count(c__18311__auto__);
var b__3813 = cljs.core.chunk_buffer(size__18312__auto__);
if((function (){var i__3812 = (0);
while(true){
if((i__3812 < size__18312__auto__)){
var value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__18311__auto__,i__3812);
cljs.core.chunk_append(b__3813,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null));

var G__3814 = (i__3812 + (1));
i__3812 = G__3814;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__3813),shadow$cljs$devtools$client$console$iter__3810(cljs.core.chunk_rest(s__3811__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__3813),null);
}
} else {
var value = cljs.core.first(s__3811__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null),shadow$cljs$devtools$client$console$iter__3810(cljs.core.rest(s__3811__$2)));
}
} else {
return null;
}
break;
}
});})(this$))
,null,null));
});})(this$))
;
return iter__18313__auto__(s);
})()], null));
});

shadow.cljs.devtools.client.console.SeqFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

shadow.cljs.devtools.client.console.SeqFormatter.cljs$lang$type = true;

shadow.cljs.devtools.client.console.SeqFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/SeqFormatter";

shadow.cljs.devtools.client.console.SeqFormatter.cljs$lang$ctorPrWriter = (function (this__18154__auto__,writer__18155__auto__,opt__18156__auto__){
return cljs.core._write(writer__18155__auto__,"shadow.cljs.devtools.client.console/SeqFormatter");
});

shadow.cljs.devtools.client.console.__GT_SeqFormatter = (function shadow$cljs$devtools$client$console$__GT_SeqFormatter(){
return (new shadow.cljs.devtools.client.console.SeqFormatter());
});


/**
* @constructor
 * @implements {shadow.cljs.devtools.client.console.Object}
*/
shadow.cljs.devtools.client.console.MapFormatter = (function (){
});
shadow.cljs.devtools.client.console.MapFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
});

shadow.cljs.devtools.client.console.MapFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if(((obj instanceof cljs.core.PersistentHashMap)) || ((obj instanceof cljs.core.PersistentArrayMap)) || (cljs.core.record_QMARK_(obj))){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.PersistentArrayMap.EMPTY,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(obj)], 0)))," [count: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(obj)),"]"].join('')], null));
} else {
return null;
}
});

shadow.cljs.devtools.client.console.MapFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return cljs.core.boolean$(cljs.core.seq(obj));
});

shadow.cljs.devtools.client.console.MapFormatter.prototype.body = (function (m){
var self__ = this;
var this$ = this;
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"14px"], null),(function (){var iter__18313__auto__ = ((function (this$){
return (function shadow$cljs$devtools$client$console$iter__3815(s__3816){
return (new cljs.core.LazySeq(null,((function (this$){
return (function (){
var s__3816__$1 = s__3816;
while(true){
var temp__5459__auto__ = cljs.core.seq(s__3816__$1);
if(temp__5459__auto__){
var s__3816__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(s__3816__$2)){
var c__18311__auto__ = cljs.core.chunk_first(s__3816__$2);
var size__18312__auto__ = cljs.core.count(c__18311__auto__);
var b__3818 = cljs.core.chunk_buffer(size__18312__auto__);
if((function (){var i__3817 = (0);
while(true){
if((i__3817 < size__18312__auto__)){
var key = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__18311__auto__,i__3817);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
cljs.core.chunk_append(b__3818,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(key)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null)], null));

var G__3820 = (i__3817 + (1));
i__3817 = G__3820;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__3818),shadow$cljs$devtools$client$console$iter__3815(cljs.core.chunk_rest(s__3816__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__3818),null);
}
} else {
var key = cljs.core.first(s__3816__$2);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(key)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null)], null),shadow$cljs$devtools$client$console$iter__3815(cljs.core.rest(s__3816__$2)));
}
} else {
return null;
}
break;
}
});})(this$))
,null,null));
});})(this$))
;
return iter__18313__auto__((function (){var k = cljs.core.keys(m);
try{return cljs.core.sort.cljs$core$IFn$_invoke$arity$1(k);
}catch (e3819){var e = e3819;
return k;
}})());
})()], null));
});

shadow.cljs.devtools.client.console.MapFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

shadow.cljs.devtools.client.console.MapFormatter.cljs$lang$type = true;

shadow.cljs.devtools.client.console.MapFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/MapFormatter";

shadow.cljs.devtools.client.console.MapFormatter.cljs$lang$ctorPrWriter = (function (this__18154__auto__,writer__18155__auto__,opt__18156__auto__){
return cljs.core._write(writer__18155__auto__,"shadow.cljs.devtools.client.console/MapFormatter");
});

shadow.cljs.devtools.client.console.__GT_MapFormatter = (function shadow$cljs$devtools$client$console$__GT_MapFormatter(){
return (new shadow.cljs.devtools.client.console.MapFormatter());
});

shadow.cljs.devtools.client.console.keyword_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgb(136, 19, 145)"], null);

/**
* @constructor
 * @implements {shadow.cljs.devtools.client.console.Object}
*/
shadow.cljs.devtools.client.console.KeywordFormatter = (function (){
});
shadow.cljs.devtools.client.console.KeywordFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
});

shadow.cljs.devtools.client.console.KeywordFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((obj instanceof cljs.core.Keyword)){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shadow.cljs.devtools.client.console.keyword_style,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0))], null));
} else {
return null;
}
});

shadow.cljs.devtools.client.console.KeywordFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return false;
});

shadow.cljs.devtools.client.console.KeywordFormatter.prototype.body = (function (m){
var self__ = this;
var this$ = this;
return null;
});

shadow.cljs.devtools.client.console.KeywordFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

shadow.cljs.devtools.client.console.KeywordFormatter.cljs$lang$type = true;

shadow.cljs.devtools.client.console.KeywordFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/KeywordFormatter";

shadow.cljs.devtools.client.console.KeywordFormatter.cljs$lang$ctorPrWriter = (function (this__18154__auto__,writer__18155__auto__,opt__18156__auto__){
return cljs.core._write(writer__18155__auto__,"shadow.cljs.devtools.client.console/KeywordFormatter");
});

shadow.cljs.devtools.client.console.__GT_KeywordFormatter = (function shadow$cljs$devtools$client$console$__GT_KeywordFormatter(){
return (new shadow.cljs.devtools.client.console.KeywordFormatter());
});


/**
* @constructor
 * @implements {shadow.cljs.devtools.client.console.Object}
*/
shadow.cljs.devtools.client.console.SymbolFormatter = (function (){
});
shadow.cljs.devtools.client.console.SymbolFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
});

shadow.cljs.devtools.client.console.SymbolFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((obj instanceof cljs.core.Symbol)){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shadow.cljs.devtools.client.console.keyword_style,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0))], null));
} else {
return null;
}
});

shadow.cljs.devtools.client.console.SymbolFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return false;
});

shadow.cljs.devtools.client.console.SymbolFormatter.prototype.body = (function (m){
var self__ = this;
var this$ = this;
return null;
});

shadow.cljs.devtools.client.console.SymbolFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

shadow.cljs.devtools.client.console.SymbolFormatter.cljs$lang$type = true;

shadow.cljs.devtools.client.console.SymbolFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/SymbolFormatter";

shadow.cljs.devtools.client.console.SymbolFormatter.cljs$lang$ctorPrWriter = (function (this__18154__auto__,writer__18155__auto__,opt__18156__auto__){
return cljs.core._write(writer__18155__auto__,"shadow.cljs.devtools.client.console/SymbolFormatter");
});

shadow.cljs.devtools.client.console.__GT_SymbolFormatter = (function shadow$cljs$devtools$client$console$__GT_SymbolFormatter(){
return (new shadow.cljs.devtools.client.console.SymbolFormatter());
});


/**
* @constructor
 * @implements {shadow.cljs.devtools.client.console.Object}
*/
shadow.cljs.devtools.client.console.DerefFormatter = (function (){
});
shadow.cljs.devtools.client.console.DerefFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
});

shadow.cljs.devtools.client.console.DerefFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if(((obj instanceof cljs.core.Atom)) || ((obj instanceof cljs.core.Volatile))){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shadow.cljs.devtools.client.console.keyword_style,["@DEREF ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(obj)], 0)))].join('')], null));
} else {
return null;
}
});

shadow.cljs.devtools.client.console.DerefFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return true;
});

shadow.cljs.devtools.client.console.DerefFormatter.prototype.body = (function (v){
var self__ = this;
var this$ = this;
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"14px"], null),shadow.cljs.devtools.client.console.object_ref(cljs.core.deref(v))], null));
});

shadow.cljs.devtools.client.console.DerefFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

shadow.cljs.devtools.client.console.DerefFormatter.cljs$lang$type = true;

shadow.cljs.devtools.client.console.DerefFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/DerefFormatter";

shadow.cljs.devtools.client.console.DerefFormatter.cljs$lang$ctorPrWriter = (function (this__18154__auto__,writer__18155__auto__,opt__18156__auto__){
return cljs.core._write(writer__18155__auto__,"shadow.cljs.devtools.client.console/DerefFormatter");
});

shadow.cljs.devtools.client.console.__GT_DerefFormatter = (function shadow$cljs$devtools$client$console$__GT_DerefFormatter(){
return (new shadow.cljs.devtools.client.console.DerefFormatter());
});

shadow.cljs.devtools.client.console.install_all_BANG_ = (function shadow$cljs$devtools$client$console$install_all_BANG_(){
var temp__5459__auto__ = goog.global.devtoolsFormatters;
if(cljs.core.truth_(temp__5459__auto__)){
var f = temp__5459__auto__;
var G__3821 = f;
G__3821.push((new shadow.cljs.devtools.client.console.KeywordFormatter()));

G__3821.push((new shadow.cljs.devtools.client.console.MapFormatter()));

G__3821.push((new shadow.cljs.devtools.client.console.SeqFormatter()));

G__3821.push((new shadow.cljs.devtools.client.console.SymbolFormatter()));

G__3821.push((new shadow.cljs.devtools.client.console.DerefFormatter()));

return G__3821;
} else {
return null;
}
});
shadow.cljs.devtools.client.console.remove_all_BANG_ = (function shadow$cljs$devtools$client$console$remove_all_BANG_(){
var all = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__3822_SHARP_){
return goog.object.get(p1__3822_SHARP_,"shadow$formatter");
}),cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1((function (){var or__17871__auto__ = goog.global.devtoolsFormatters;
if(cljs.core.truth_(or__17871__auto__)){
return or__17871__auto__;
} else {
return [];
}
})())));
return goog.object.set(goog.global,"devtoolsFormatters",all);
});
shadow.cljs.devtools.client.console.remove_all_BANG_();
shadow.cljs.devtools.client.console.install_all_BANG_();

//# sourceMappingURL=shadow.cljs.devtools.client.console.js.map
