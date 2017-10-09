goog.provide('shadow.cljs.devtools.client.console');
goog.require('cljs.core');
goog.require('clojure.string');
shadow.cljs.devtools.client.console.push_all = (function shadow$cljs$devtools$client$console$push_all(arr,item){
if(cljs.core.vector_QMARK_(item)){
var seq__6615 = cljs.core.seq(item);
var chunk__6616 = null;
var count__6617 = (0);
var i__6618 = (0);
while(true){
if((i__6618 < count__6617)){
var it = chunk__6616.cljs$core$IIndexed$_nth$arity$2(null,i__6618);
arr.push(it);

var G__6619 = seq__6615;
var G__6620 = chunk__6616;
var G__6621 = count__6617;
var G__6622 = (i__6618 + (1));
seq__6615 = G__6619;
chunk__6616 = G__6620;
count__6617 = G__6621;
i__6618 = G__6622;
continue;
} else {
var temp__5459__auto__ = cljs.core.seq(seq__6615);
if(temp__5459__auto__){
var seq__6615__$1 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6615__$1)){
var c__18358__auto__ = cljs.core.chunk_first(seq__6615__$1);
var G__6623 = cljs.core.chunk_rest(seq__6615__$1);
var G__6624 = c__18358__auto__;
var G__6625 = cljs.core.count(c__18358__auto__);
var G__6626 = (0);
seq__6615 = G__6623;
chunk__6616 = G__6624;
count__6617 = G__6625;
i__6618 = G__6626;
continue;
} else {
var it = cljs.core.first(seq__6615__$1);
arr.push(it);

var G__6627 = cljs.core.next(seq__6615__$1);
var G__6628 = null;
var G__6629 = (0);
var G__6630 = (0);
seq__6615 = G__6627;
chunk__6616 = G__6628;
count__6617 = G__6629;
i__6618 = G__6630;
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
return ({"style": clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__6631){
var vec__6632 = p__6631;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6632,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6632,(1),null);
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
var vec__6635 = struct;
var seq__6636 = cljs.core.seq(vec__6635);
var first__6637 = cljs.core.first(seq__6636);
var seq__6636__$1 = cljs.core.next(seq__6636);
var tag = first__6637;
var first__6637__$1 = cljs.core.first(seq__6636__$1);
var seq__6636__$2 = cljs.core.next(seq__6636__$1);
var attrs = first__6637__$1;
var children = seq__6636__$2;
var js = [cljs.core.name(tag),shadow.cljs.devtools.client.console.map__GT_style(attrs)];
var seq__6638_6642 = cljs.core.seq(children);
var chunk__6639_6643 = null;
var count__6640_6644 = (0);
var i__6641_6645 = (0);
while(true){
if((i__6641_6645 < count__6640_6644)){
var child_6646 = chunk__6639_6643.cljs$core$IIndexed$_nth$arity$2(null,i__6641_6645);
shadow.cljs.devtools.client.console.push_all(js,(shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1 ? shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1(child_6646) : shadow.cljs.devtools.client.console.clj__GT_jsonml.call(null,child_6646)));

var G__6647 = seq__6638_6642;
var G__6648 = chunk__6639_6643;
var G__6649 = count__6640_6644;
var G__6650 = (i__6641_6645 + (1));
seq__6638_6642 = G__6647;
chunk__6639_6643 = G__6648;
count__6640_6644 = G__6649;
i__6641_6645 = G__6650;
continue;
} else {
var temp__5459__auto___6651 = cljs.core.seq(seq__6638_6642);
if(temp__5459__auto___6651){
var seq__6638_6652__$1 = temp__5459__auto___6651;
if(cljs.core.chunked_seq_QMARK_(seq__6638_6652__$1)){
var c__18358__auto___6653 = cljs.core.chunk_first(seq__6638_6652__$1);
var G__6654 = cljs.core.chunk_rest(seq__6638_6652__$1);
var G__6655 = c__18358__auto___6653;
var G__6656 = cljs.core.count(c__18358__auto___6653);
var G__6657 = (0);
seq__6638_6642 = G__6654;
chunk__6639_6643 = G__6655;
count__6640_6644 = G__6656;
i__6641_6645 = G__6657;
continue;
} else {
var child_6658 = cljs.core.first(seq__6638_6652__$1);
shadow.cljs.devtools.client.console.push_all(js,(shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1 ? shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1(child_6658) : shadow.cljs.devtools.client.console.clj__GT_jsonml.call(null,child_6658)));

var G__6659 = cljs.core.next(seq__6638_6652__$1);
var G__6660 = null;
var G__6661 = (0);
var G__6662 = (0);
seq__6638_6642 = G__6659;
chunk__6639_6643 = G__6660;
count__6640_6644 = G__6661;
i__6641_6645 = G__6662;
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
return (function shadow$cljs$devtools$client$console$iter__6663(s__6664){
return (new cljs.core.LazySeq(null,((function (this$){
return (function (){
var s__6664__$1 = s__6664;
while(true){
var temp__5459__auto__ = cljs.core.seq(s__6664__$1);
if(temp__5459__auto__){
var s__6664__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6664__$2)){
var c__18311__auto__ = cljs.core.chunk_first(s__6664__$2);
var size__18312__auto__ = cljs.core.count(c__18311__auto__);
var b__6666 = cljs.core.chunk_buffer(size__18312__auto__);
if((function (){var i__6665 = (0);
while(true){
if((i__6665 < size__18312__auto__)){
var value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__18311__auto__,i__6665);
cljs.core.chunk_append(b__6666,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null));

var G__6667 = (i__6665 + (1));
i__6665 = G__6667;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6666),shadow$cljs$devtools$client$console$iter__6663(cljs.core.chunk_rest(s__6664__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6666),null);
}
} else {
var value = cljs.core.first(s__6664__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null),shadow$cljs$devtools$client$console$iter__6663(cljs.core.rest(s__6664__$2)));
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
return (function shadow$cljs$devtools$client$console$iter__6668(s__6669){
return (new cljs.core.LazySeq(null,((function (this$){
return (function (){
var s__6669__$1 = s__6669;
while(true){
var temp__5459__auto__ = cljs.core.seq(s__6669__$1);
if(temp__5459__auto__){
var s__6669__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6669__$2)){
var c__18311__auto__ = cljs.core.chunk_first(s__6669__$2);
var size__18312__auto__ = cljs.core.count(c__18311__auto__);
var b__6671 = cljs.core.chunk_buffer(size__18312__auto__);
if((function (){var i__6670 = (0);
while(true){
if((i__6670 < size__18312__auto__)){
var key = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__18311__auto__,i__6670);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
cljs.core.chunk_append(b__6671,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(key)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null)], null));

var G__6673 = (i__6670 + (1));
i__6670 = G__6673;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6671),shadow$cljs$devtools$client$console$iter__6668(cljs.core.chunk_rest(s__6669__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6671),null);
}
} else {
var key = cljs.core.first(s__6669__$2);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(key)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null)], null),shadow$cljs$devtools$client$console$iter__6668(cljs.core.rest(s__6669__$2)));
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
}catch (e6672){var e = e6672;
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
var G__6674 = f;
G__6674.push((new shadow.cljs.devtools.client.console.KeywordFormatter()));

G__6674.push((new shadow.cljs.devtools.client.console.MapFormatter()));

G__6674.push((new shadow.cljs.devtools.client.console.SeqFormatter()));

G__6674.push((new shadow.cljs.devtools.client.console.SymbolFormatter()));

G__6674.push((new shadow.cljs.devtools.client.console.DerefFormatter()));

return G__6674;
} else {
return null;
}
});
shadow.cljs.devtools.client.console.remove_all_BANG_ = (function shadow$cljs$devtools$client$console$remove_all_BANG_(){
var all = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__6675_SHARP_){
return goog.object.get(p1__6675_SHARP_,"shadow$formatter");
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
