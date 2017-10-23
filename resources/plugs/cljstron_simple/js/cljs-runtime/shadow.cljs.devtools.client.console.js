goog.provide('shadow.cljs.devtools.client.console');
goog.require('cljs.core');
goog.require('clojure.string');
shadow.cljs.devtools.client.console.push_all = (function shadow$cljs$devtools$client$console$push_all(arr,item){
if(cljs.core.vector_QMARK_(item)){
var seq__29097 = cljs.core.seq(item);
var chunk__29098 = null;
var count__29099 = (0);
var i__29100 = (0);
while(true){
if((i__29100 < count__29099)){
var it = chunk__29098.cljs$core$IIndexed$_nth$arity$2(null,i__29100);
arr.push(it);

var G__29101 = seq__29097;
var G__29102 = chunk__29098;
var G__29103 = count__29099;
var G__29104 = (i__29100 + (1));
seq__29097 = G__29101;
chunk__29098 = G__29102;
count__29099 = G__29103;
i__29100 = G__29104;
continue;
} else {
var temp__5459__auto__ = cljs.core.seq(seq__29097);
if(temp__5459__auto__){
var seq__29097__$1 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29097__$1)){
var c__18358__auto__ = cljs.core.chunk_first(seq__29097__$1);
var G__29105 = cljs.core.chunk_rest(seq__29097__$1);
var G__29106 = c__18358__auto__;
var G__29107 = cljs.core.count(c__18358__auto__);
var G__29108 = (0);
seq__29097 = G__29105;
chunk__29098 = G__29106;
count__29099 = G__29107;
i__29100 = G__29108;
continue;
} else {
var it = cljs.core.first(seq__29097__$1);
arr.push(it);

var G__29109 = cljs.core.next(seq__29097__$1);
var G__29110 = null;
var G__29111 = (0);
var G__29112 = (0);
seq__29097 = G__29109;
chunk__29098 = G__29110;
count__29099 = G__29111;
i__29100 = G__29112;
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
return ({"style": clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29113){
var vec__29114 = p__29113;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29114,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29114,(1),null);
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
var vec__29117 = struct;
var seq__29118 = cljs.core.seq(vec__29117);
var first__29119 = cljs.core.first(seq__29118);
var seq__29118__$1 = cljs.core.next(seq__29118);
var tag = first__29119;
var first__29119__$1 = cljs.core.first(seq__29118__$1);
var seq__29118__$2 = cljs.core.next(seq__29118__$1);
var attrs = first__29119__$1;
var children = seq__29118__$2;
var js = [cljs.core.name(tag),shadow.cljs.devtools.client.console.map__GT_style(attrs)];
var seq__29120_29124 = cljs.core.seq(children);
var chunk__29121_29125 = null;
var count__29122_29126 = (0);
var i__29123_29127 = (0);
while(true){
if((i__29123_29127 < count__29122_29126)){
var child_29128 = chunk__29121_29125.cljs$core$IIndexed$_nth$arity$2(null,i__29123_29127);
shadow.cljs.devtools.client.console.push_all(js,(shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1 ? shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1(child_29128) : shadow.cljs.devtools.client.console.clj__GT_jsonml.call(null,child_29128)));

var G__29129 = seq__29120_29124;
var G__29130 = chunk__29121_29125;
var G__29131 = count__29122_29126;
var G__29132 = (i__29123_29127 + (1));
seq__29120_29124 = G__29129;
chunk__29121_29125 = G__29130;
count__29122_29126 = G__29131;
i__29123_29127 = G__29132;
continue;
} else {
var temp__5459__auto___29133 = cljs.core.seq(seq__29120_29124);
if(temp__5459__auto___29133){
var seq__29120_29134__$1 = temp__5459__auto___29133;
if(cljs.core.chunked_seq_QMARK_(seq__29120_29134__$1)){
var c__18358__auto___29135 = cljs.core.chunk_first(seq__29120_29134__$1);
var G__29136 = cljs.core.chunk_rest(seq__29120_29134__$1);
var G__29137 = c__18358__auto___29135;
var G__29138 = cljs.core.count(c__18358__auto___29135);
var G__29139 = (0);
seq__29120_29124 = G__29136;
chunk__29121_29125 = G__29137;
count__29122_29126 = G__29138;
i__29123_29127 = G__29139;
continue;
} else {
var child_29140 = cljs.core.first(seq__29120_29134__$1);
shadow.cljs.devtools.client.console.push_all(js,(shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1 ? shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1(child_29140) : shadow.cljs.devtools.client.console.clj__GT_jsonml.call(null,child_29140)));

var G__29141 = cljs.core.next(seq__29120_29134__$1);
var G__29142 = null;
var G__29143 = (0);
var G__29144 = (0);
seq__29120_29124 = G__29141;
chunk__29121_29125 = G__29142;
count__29122_29126 = G__29143;
i__29123_29127 = G__29144;
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
return (function shadow$cljs$devtools$client$console$iter__29145(s__29146){
return (new cljs.core.LazySeq(null,((function (this$){
return (function (){
var s__29146__$1 = s__29146;
while(true){
var temp__5459__auto__ = cljs.core.seq(s__29146__$1);
if(temp__5459__auto__){
var s__29146__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29146__$2)){
var c__18311__auto__ = cljs.core.chunk_first(s__29146__$2);
var size__18312__auto__ = cljs.core.count(c__18311__auto__);
var b__29148 = cljs.core.chunk_buffer(size__18312__auto__);
if((function (){var i__29147 = (0);
while(true){
if((i__29147 < size__18312__auto__)){
var value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__18311__auto__,i__29147);
cljs.core.chunk_append(b__29148,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null));

var G__29149 = (i__29147 + (1));
i__29147 = G__29149;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29148),shadow$cljs$devtools$client$console$iter__29145(cljs.core.chunk_rest(s__29146__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29148),null);
}
} else {
var value = cljs.core.first(s__29146__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null),shadow$cljs$devtools$client$console$iter__29145(cljs.core.rest(s__29146__$2)));
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
return (function shadow$cljs$devtools$client$console$iter__29150(s__29151){
return (new cljs.core.LazySeq(null,((function (this$){
return (function (){
var s__29151__$1 = s__29151;
while(true){
var temp__5459__auto__ = cljs.core.seq(s__29151__$1);
if(temp__5459__auto__){
var s__29151__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29151__$2)){
var c__18311__auto__ = cljs.core.chunk_first(s__29151__$2);
var size__18312__auto__ = cljs.core.count(c__18311__auto__);
var b__29153 = cljs.core.chunk_buffer(size__18312__auto__);
if((function (){var i__29152 = (0);
while(true){
if((i__29152 < size__18312__auto__)){
var key = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__18311__auto__,i__29152);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
cljs.core.chunk_append(b__29153,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(key)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null)], null));

var G__29155 = (i__29152 + (1));
i__29152 = G__29155;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29153),shadow$cljs$devtools$client$console$iter__29150(cljs.core.chunk_rest(s__29151__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29153),null);
}
} else {
var key = cljs.core.first(s__29151__$2);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(key)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null)], null),shadow$cljs$devtools$client$console$iter__29150(cljs.core.rest(s__29151__$2)));
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
}catch (e29154){var e = e29154;
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
var G__29156 = f;
G__29156.push((new shadow.cljs.devtools.client.console.KeywordFormatter()));

G__29156.push((new shadow.cljs.devtools.client.console.MapFormatter()));

G__29156.push((new shadow.cljs.devtools.client.console.SeqFormatter()));

G__29156.push((new shadow.cljs.devtools.client.console.SymbolFormatter()));

G__29156.push((new shadow.cljs.devtools.client.console.DerefFormatter()));

return G__29156;
} else {
return null;
}
});
shadow.cljs.devtools.client.console.remove_all_BANG_ = (function shadow$cljs$devtools$client$console$remove_all_BANG_(){
var all = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__29157_SHARP_){
return goog.object.get(p1__29157_SHARP_,"shadow$formatter");
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
