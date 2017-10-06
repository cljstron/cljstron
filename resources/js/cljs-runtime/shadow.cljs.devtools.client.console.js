goog.provide('shadow.cljs.devtools.client.console');
goog.require('cljs.core');
goog.require('clojure.string');
shadow.cljs.devtools.client.console.push_all = (function shadow$cljs$devtools$client$console$push_all(arr,item){
if(cljs.core.vector_QMARK_(item)){
var seq__28764 = cljs.core.seq(item);
var chunk__28765 = null;
var count__28766 = (0);
var i__28767 = (0);
while(true){
if((i__28767 < count__28766)){
var it = chunk__28765.cljs$core$IIndexed$_nth$arity$2(null,i__28767);
arr.push(it);

var G__28768 = seq__28764;
var G__28769 = chunk__28765;
var G__28770 = count__28766;
var G__28771 = (i__28767 + (1));
seq__28764 = G__28768;
chunk__28765 = G__28769;
count__28766 = G__28770;
i__28767 = G__28771;
continue;
} else {
var temp__5459__auto__ = cljs.core.seq(seq__28764);
if(temp__5459__auto__){
var seq__28764__$1 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28764__$1)){
var c__18358__auto__ = cljs.core.chunk_first(seq__28764__$1);
var G__28772 = cljs.core.chunk_rest(seq__28764__$1);
var G__28773 = c__18358__auto__;
var G__28774 = cljs.core.count(c__18358__auto__);
var G__28775 = (0);
seq__28764 = G__28772;
chunk__28765 = G__28773;
count__28766 = G__28774;
i__28767 = G__28775;
continue;
} else {
var it = cljs.core.first(seq__28764__$1);
arr.push(it);

var G__28776 = cljs.core.next(seq__28764__$1);
var G__28777 = null;
var G__28778 = (0);
var G__28779 = (0);
seq__28764 = G__28776;
chunk__28765 = G__28777;
count__28766 = G__28778;
i__28767 = G__28779;
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
return ({"style": clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__28780){
var vec__28781 = p__28780;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28781,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28781,(1),null);
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
var vec__28784 = struct;
var seq__28785 = cljs.core.seq(vec__28784);
var first__28786 = cljs.core.first(seq__28785);
var seq__28785__$1 = cljs.core.next(seq__28785);
var tag = first__28786;
var first__28786__$1 = cljs.core.first(seq__28785__$1);
var seq__28785__$2 = cljs.core.next(seq__28785__$1);
var attrs = first__28786__$1;
var children = seq__28785__$2;
var js = [cljs.core.name(tag),shadow.cljs.devtools.client.console.map__GT_style(attrs)];
var seq__28787_28791 = cljs.core.seq(children);
var chunk__28788_28792 = null;
var count__28789_28793 = (0);
var i__28790_28794 = (0);
while(true){
if((i__28790_28794 < count__28789_28793)){
var child_28795 = chunk__28788_28792.cljs$core$IIndexed$_nth$arity$2(null,i__28790_28794);
shadow.cljs.devtools.client.console.push_all(js,(shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1 ? shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1(child_28795) : shadow.cljs.devtools.client.console.clj__GT_jsonml.call(null,child_28795)));

var G__28796 = seq__28787_28791;
var G__28797 = chunk__28788_28792;
var G__28798 = count__28789_28793;
var G__28799 = (i__28790_28794 + (1));
seq__28787_28791 = G__28796;
chunk__28788_28792 = G__28797;
count__28789_28793 = G__28798;
i__28790_28794 = G__28799;
continue;
} else {
var temp__5459__auto___28800 = cljs.core.seq(seq__28787_28791);
if(temp__5459__auto___28800){
var seq__28787_28801__$1 = temp__5459__auto___28800;
if(cljs.core.chunked_seq_QMARK_(seq__28787_28801__$1)){
var c__18358__auto___28802 = cljs.core.chunk_first(seq__28787_28801__$1);
var G__28803 = cljs.core.chunk_rest(seq__28787_28801__$1);
var G__28804 = c__18358__auto___28802;
var G__28805 = cljs.core.count(c__18358__auto___28802);
var G__28806 = (0);
seq__28787_28791 = G__28803;
chunk__28788_28792 = G__28804;
count__28789_28793 = G__28805;
i__28790_28794 = G__28806;
continue;
} else {
var child_28807 = cljs.core.first(seq__28787_28801__$1);
shadow.cljs.devtools.client.console.push_all(js,(shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1 ? shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1(child_28807) : shadow.cljs.devtools.client.console.clj__GT_jsonml.call(null,child_28807)));

var G__28808 = cljs.core.next(seq__28787_28801__$1);
var G__28809 = null;
var G__28810 = (0);
var G__28811 = (0);
seq__28787_28791 = G__28808;
chunk__28788_28792 = G__28809;
count__28789_28793 = G__28810;
i__28790_28794 = G__28811;
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
return (function shadow$cljs$devtools$client$console$iter__28812(s__28813){
return (new cljs.core.LazySeq(null,((function (this$){
return (function (){
var s__28813__$1 = s__28813;
while(true){
var temp__5459__auto__ = cljs.core.seq(s__28813__$1);
if(temp__5459__auto__){
var s__28813__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28813__$2)){
var c__18311__auto__ = cljs.core.chunk_first(s__28813__$2);
var size__18312__auto__ = cljs.core.count(c__18311__auto__);
var b__28815 = cljs.core.chunk_buffer(size__18312__auto__);
if((function (){var i__28814 = (0);
while(true){
if((i__28814 < size__18312__auto__)){
var value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__18311__auto__,i__28814);
cljs.core.chunk_append(b__28815,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null));

var G__28816 = (i__28814 + (1));
i__28814 = G__28816;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28815),shadow$cljs$devtools$client$console$iter__28812(cljs.core.chunk_rest(s__28813__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28815),null);
}
} else {
var value = cljs.core.first(s__28813__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null),shadow$cljs$devtools$client$console$iter__28812(cljs.core.rest(s__28813__$2)));
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
return (function shadow$cljs$devtools$client$console$iter__28817(s__28818){
return (new cljs.core.LazySeq(null,((function (this$){
return (function (){
var s__28818__$1 = s__28818;
while(true){
var temp__5459__auto__ = cljs.core.seq(s__28818__$1);
if(temp__5459__auto__){
var s__28818__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28818__$2)){
var c__18311__auto__ = cljs.core.chunk_first(s__28818__$2);
var size__18312__auto__ = cljs.core.count(c__18311__auto__);
var b__28820 = cljs.core.chunk_buffer(size__18312__auto__);
if((function (){var i__28819 = (0);
while(true){
if((i__28819 < size__18312__auto__)){
var key = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__18311__auto__,i__28819);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
cljs.core.chunk_append(b__28820,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(key)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null)], null));

var G__28822 = (i__28819 + (1));
i__28819 = G__28822;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28820),shadow$cljs$devtools$client$console$iter__28817(cljs.core.chunk_rest(s__28818__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28820),null);
}
} else {
var key = cljs.core.first(s__28818__$2);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(key)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null)], null),shadow$cljs$devtools$client$console$iter__28817(cljs.core.rest(s__28818__$2)));
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
}catch (e28821){var e = e28821;
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
var G__28823 = f;
G__28823.push((new shadow.cljs.devtools.client.console.KeywordFormatter()));

G__28823.push((new shadow.cljs.devtools.client.console.MapFormatter()));

G__28823.push((new shadow.cljs.devtools.client.console.SeqFormatter()));

G__28823.push((new shadow.cljs.devtools.client.console.SymbolFormatter()));

G__28823.push((new shadow.cljs.devtools.client.console.DerefFormatter()));

return G__28823;
} else {
return null;
}
});
shadow.cljs.devtools.client.console.remove_all_BANG_ = (function shadow$cljs$devtools$client$console$remove_all_BANG_(){
var all = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__28824_SHARP_){
return goog.object.get(p1__28824_SHARP_,"shadow$formatter");
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
