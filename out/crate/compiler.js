// Compiled by ClojureScript 0.0-2371
goog.provide('crate.compiler');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('crate.binding');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('goog.style');
goog.require('goog.dom');
goog.require('goog.dom');
crate.compiler.xmlns = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xhtml","xhtml",1912943770),"http://www.w3.org/1999/xhtml",new cljs.core.Keyword(null,"svg","svg",856789142),"http://www.w3.org/2000/svg"], null);
crate.compiler.group_id = cljs.core.atom.call(null,(0));
crate.compiler.bindings = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
crate.compiler.capture_binding = (function capture_binding(tag,b){return cljs.core.swap_BANG_.call(null,crate.compiler.bindings,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,b], null));
});
crate.compiler.Element = (function (){var obj9307 = {};return obj9307;
})();
crate.compiler._elem = (function _elem(this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.crate$compiler$Element$_elem$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.crate$compiler$Element$_elem$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (crate.compiler._elem[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (crate.compiler._elem["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Element.-elem",this$);
}
}
})().call(null,this$);
}
});
crate.compiler.as_content = (function as_content(parent,content){var seq__9314 = cljs.core.seq.call(null,content);var chunk__9315 = null;var count__9316 = (0);var i__9317 = (0);while(true){
if((i__9317 < count__9316))
{var c = cljs.core._nth.call(null,chunk__9315,i__9317);var child_9320 = (((function (){var G__9318 = c;if(G__9318)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__9318.crate$compiler$Element$;
}
})()))
{return true;
} else
{if((!G__9318.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.compiler.Element,G__9318);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.compiler.Element,G__9318);
}
})())?crate.compiler._elem.call(null,c):(((c == null))?null:((cljs.core.map_QMARK_.call(null,c))?(function(){throw "Maps cannot be used as content"})():((typeof c === 'string')?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_.call(null,c))?crate.compiler.elem_factory.call(null,c):((cljs.core.seq_QMARK_.call(null,c))?as_content.call(null,parent,c):((crate.binding.binding_coll_QMARK_.call(null,c))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"coll","coll",1647737163),c);
return as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})():((crate.binding.binding_QMARK_.call(null,c))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),c);
return as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})():(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get((0)):goog.dom.createTextNode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)))
))))))))));if(cljs.core.truth_(child_9320))
{goog.dom.appendChild(parent,child_9320);
} else
{}
{
var G__9321 = seq__9314;
var G__9322 = chunk__9315;
var G__9323 = count__9316;
var G__9324 = (i__9317 + (1));
seq__9314 = G__9321;
chunk__9315 = G__9322;
count__9316 = G__9323;
i__9317 = G__9324;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__9314);if(temp__4126__auto__)
{var seq__9314__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9314__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__9314__$1);{
var G__9325 = cljs.core.chunk_rest.call(null,seq__9314__$1);
var G__9326 = c__4410__auto__;
var G__9327 = cljs.core.count.call(null,c__4410__auto__);
var G__9328 = (0);
seq__9314 = G__9325;
chunk__9315 = G__9326;
count__9316 = G__9327;
i__9317 = G__9328;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__9314__$1);var child_9329 = (((function (){var G__9319 = c;if(G__9319)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__9319.crate$compiler$Element$;
}
})()))
{return true;
} else
{if((!G__9319.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.compiler.Element,G__9319);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.compiler.Element,G__9319);
}
})())?crate.compiler._elem.call(null,c):(((c == null))?null:((cljs.core.map_QMARK_.call(null,c))?(function(){throw "Maps cannot be used as content"})():((typeof c === 'string')?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_.call(null,c))?crate.compiler.elem_factory.call(null,c):((cljs.core.seq_QMARK_.call(null,c))?as_content.call(null,parent,c):((crate.binding.binding_coll_QMARK_.call(null,c))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"coll","coll",1647737163),c);
return as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})():((crate.binding.binding_QMARK_.call(null,c))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),c);
return as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})():(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get((0)):goog.dom.createTextNode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)))
))))))))));if(cljs.core.truth_(child_9329))
{goog.dom.appendChild(parent,child_9329);
} else
{}
{
var G__9330 = cljs.core.next.call(null,seq__9314__$1);
var G__9331 = null;
var G__9332 = (0);
var G__9333 = (0);
seq__9314 = G__9330;
chunk__9315 = G__9331;
count__9316 = G__9332;
i__9317 = G__9333;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.compiler.dom_binding = (function (){var method_table__4520__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4521__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4522__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4523__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4524__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("dom-binding",((function (method_table__4520__auto__,prefer_table__4521__auto__,method_cache__4522__auto__,cached_hierarchy__4523__auto__,hierarchy__4524__auto__){
return (function (type,_,___$1){return type;
});})(method_table__4520__auto__,prefer_table__4521__auto__,method_cache__4522__auto__,cached_hierarchy__4523__auto__,hierarchy__4524__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4524__auto__,method_table__4520__auto__,prefer_table__4521__auto__,method_cache__4522__auto__,cached_hierarchy__4523__auto__));
})();
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"text","text",-1790561697),(function (_,b,elem){return crate.binding.on_change.call(null,b,(function (v){goog.dom.removeChildren(elem);
return crate.compiler.as_content.call(null,elem,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null));
}));
}));
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"attr","attr",-604132353),(function (_,p__9334,elem){var vec__9335 = p__9334;var k = cljs.core.nth.call(null,vec__9335,(0),null);var b = cljs.core.nth.call(null,vec__9335,(1),null);return crate.binding.on_change.call(null,b,((function (vec__9335,k,b){
return (function (v){return crate.compiler.dom_attr.call(null,elem,k,v);
});})(vec__9335,k,b))
);
}));
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"style","style",-496642736),(function (_,p__9336,elem){var vec__9337 = p__9336;var k = cljs.core.nth.call(null,vec__9337,(0),null);var b = cljs.core.nth.call(null,vec__9337,(1),null);return crate.binding.on_change.call(null,b,((function (vec__9337,k,b){
return (function (v){if(cljs.core.truth_(k))
{return crate.compiler.dom_style.call(null,elem,k,v);
} else
{return crate.compiler.dom_style.call(null,elem,v);
}
});})(vec__9337,k,b))
);
}));
crate.compiler.dom_add = (function dom_add(bc,parent,elem,v){var temp__4124__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"add","add",235287739));if(cljs.core.truth_(temp__4124__auto__))
{var adder = temp__4124__auto__;return adder.call(null,parent,elem,v);
} else
{return goog.dom.appendChild(parent,elem);
}
});
crate.compiler.dom_remove = (function dom_remove(bc,elem){var temp__4124__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"remove","remove",-131428414));if(cljs.core.truth_(temp__4124__auto__))
{var remover = temp__4124__auto__;return remover.call(null,elem);
} else
{return goog.dom.removeNode(elem);
}
});
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"coll","coll",1647737163),(function (_,bc,parent){return crate.binding.on_change.call(null,bc,(function (type,elem,v){var pred__9338 = cljs.core._EQ_;var expr__9339 = type;if(cljs.core.truth_(pred__9338.call(null,new cljs.core.Keyword(null,"add","add",235287739),expr__9339)))
{return crate.compiler.dom_add.call(null,bc,parent,elem,v);
} else
{if(cljs.core.truth_(pred__9338.call(null,new cljs.core.Keyword(null,"remove","remove",-131428414),expr__9339)))
{return crate.compiler.dom_remove.call(null,bc,elem);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__9339))));
}
}
}));
}));
crate.compiler.handle_bindings = (function handle_bindings(bs,elem){var seq__9347 = cljs.core.seq.call(null,bs);var chunk__9348 = null;var count__9349 = (0);var i__9350 = (0);while(true){
if((i__9350 < count__9349))
{var vec__9351 = cljs.core._nth.call(null,chunk__9348,i__9350);var type = cljs.core.nth.call(null,vec__9351,(0),null);var b = cljs.core.nth.call(null,vec__9351,(1),null);crate.compiler.dom_binding.call(null,type,b,elem);
{
var G__9353 = seq__9347;
var G__9354 = chunk__9348;
var G__9355 = count__9349;
var G__9356 = (i__9350 + (1));
seq__9347 = G__9353;
chunk__9348 = G__9354;
count__9349 = G__9355;
i__9350 = G__9356;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__9347);if(temp__4126__auto__)
{var seq__9347__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9347__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__9347__$1);{
var G__9357 = cljs.core.chunk_rest.call(null,seq__9347__$1);
var G__9358 = c__4410__auto__;
var G__9359 = cljs.core.count.call(null,c__4410__auto__);
var G__9360 = (0);
seq__9347 = G__9357;
chunk__9348 = G__9358;
count__9349 = G__9359;
i__9350 = G__9360;
continue;
}
} else
{var vec__9352 = cljs.core.first.call(null,seq__9347__$1);var type = cljs.core.nth.call(null,vec__9352,(0),null);var b = cljs.core.nth.call(null,vec__9352,(1),null);crate.compiler.dom_binding.call(null,type,b,elem);
{
var G__9361 = cljs.core.next.call(null,seq__9347__$1);
var G__9362 = null;
var G__9363 = (0);
var G__9364 = (0);
seq__9347 = G__9361;
chunk__9348 = G__9362;
count__9349 = G__9363;
i__9350 = G__9364;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.compiler.dom_style = (function() {
var dom_style = null;
var dom_style__2 = (function (elem,v){if(typeof v === 'string')
{elem.setAttribute("style",v);
} else
{if(cljs.core.map_QMARK_.call(null,v))
{var seq__9371_9377 = cljs.core.seq.call(null,v);var chunk__9372_9378 = null;var count__9373_9379 = (0);var i__9374_9380 = (0);while(true){
if((i__9374_9380 < count__9373_9379))
{var vec__9375_9381 = cljs.core._nth.call(null,chunk__9372_9378,i__9374_9380);var k_9382 = cljs.core.nth.call(null,vec__9375_9381,(0),null);var v_9383__$1 = cljs.core.nth.call(null,vec__9375_9381,(1),null);dom_style.call(null,elem,k_9382,v_9383__$1);
{
var G__9384 = seq__9371_9377;
var G__9385 = chunk__9372_9378;
var G__9386 = count__9373_9379;
var G__9387 = (i__9374_9380 + (1));
seq__9371_9377 = G__9384;
chunk__9372_9378 = G__9385;
count__9373_9379 = G__9386;
i__9374_9380 = G__9387;
continue;
}
} else
{var temp__4126__auto___9388 = cljs.core.seq.call(null,seq__9371_9377);if(temp__4126__auto___9388)
{var seq__9371_9389__$1 = temp__4126__auto___9388;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9371_9389__$1))
{var c__4410__auto___9390 = cljs.core.chunk_first.call(null,seq__9371_9389__$1);{
var G__9391 = cljs.core.chunk_rest.call(null,seq__9371_9389__$1);
var G__9392 = c__4410__auto___9390;
var G__9393 = cljs.core.count.call(null,c__4410__auto___9390);
var G__9394 = (0);
seq__9371_9377 = G__9391;
chunk__9372_9378 = G__9392;
count__9373_9379 = G__9393;
i__9374_9380 = G__9394;
continue;
}
} else
{var vec__9376_9395 = cljs.core.first.call(null,seq__9371_9389__$1);var k_9396 = cljs.core.nth.call(null,vec__9376_9395,(0),null);var v_9397__$1 = cljs.core.nth.call(null,vec__9376_9395,(1),null);dom_style.call(null,elem,k_9396,v_9397__$1);
{
var G__9398 = cljs.core.next.call(null,seq__9371_9389__$1);
var G__9399 = null;
var G__9400 = (0);
var G__9401 = (0);
seq__9371_9377 = G__9398;
chunk__9372_9378 = G__9399;
count__9373_9379 = G__9400;
i__9374_9380 = G__9401;
continue;
}
}
} else
{}
}
break;
}
} else
{if(crate.binding.binding_QMARK_.call(null,v))
{crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,v], null));
dom_style.call(null,elem,crate.binding.value.call(null,v));
} else
{}
}
}
return elem;
});
var dom_style__3 = (function (elem,k,v){var v__$1 = ((crate.binding.binding_QMARK_.call(null,v))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
return crate.binding.value.call(null,v);
})():v);return goog.style.setStyle(elem,cljs.core.name.call(null,k),v__$1);
});
dom_style = function(elem,k,v){
switch(arguments.length){
case 2:
return dom_style__2.call(this,elem,k);
case 3:
return dom_style__3.call(this,elem,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dom_style.cljs$core$IFn$_invoke$arity$2 = dom_style__2;
dom_style.cljs$core$IFn$_invoke$arity$3 = dom_style__3;
return dom_style;
})()
;
crate.compiler.dom_attr = (function() {
var dom_attr = null;
var dom_attr__2 = (function (elem,attrs){if(cljs.core.truth_(elem))
{if(!(cljs.core.map_QMARK_.call(null,attrs)))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var seq__9408_9414 = cljs.core.seq.call(null,attrs);var chunk__9409_9415 = null;var count__9410_9416 = (0);var i__9411_9417 = (0);while(true){
if((i__9411_9417 < count__9410_9416))
{var vec__9412_9418 = cljs.core._nth.call(null,chunk__9409_9415,i__9411_9417);var k_9419 = cljs.core.nth.call(null,vec__9412_9418,(0),null);var v_9420 = cljs.core.nth.call(null,vec__9412_9418,(1),null);dom_attr.call(null,elem,k_9419,v_9420);
{
var G__9421 = seq__9408_9414;
var G__9422 = chunk__9409_9415;
var G__9423 = count__9410_9416;
var G__9424 = (i__9411_9417 + (1));
seq__9408_9414 = G__9421;
chunk__9409_9415 = G__9422;
count__9410_9416 = G__9423;
i__9411_9417 = G__9424;
continue;
}
} else
{var temp__4126__auto___9425 = cljs.core.seq.call(null,seq__9408_9414);if(temp__4126__auto___9425)
{var seq__9408_9426__$1 = temp__4126__auto___9425;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9408_9426__$1))
{var c__4410__auto___9427 = cljs.core.chunk_first.call(null,seq__9408_9426__$1);{
var G__9428 = cljs.core.chunk_rest.call(null,seq__9408_9426__$1);
var G__9429 = c__4410__auto___9427;
var G__9430 = cljs.core.count.call(null,c__4410__auto___9427);
var G__9431 = (0);
seq__9408_9414 = G__9428;
chunk__9409_9415 = G__9429;
count__9410_9416 = G__9430;
i__9411_9417 = G__9431;
continue;
}
} else
{var vec__9413_9432 = cljs.core.first.call(null,seq__9408_9426__$1);var k_9433 = cljs.core.nth.call(null,vec__9413_9432,(0),null);var v_9434 = cljs.core.nth.call(null,vec__9413_9432,(1),null);dom_attr.call(null,elem,k_9433,v_9434);
{
var G__9435 = cljs.core.next.call(null,seq__9408_9426__$1);
var G__9436 = null;
var G__9437 = (0);
var G__9438 = (0);
seq__9408_9414 = G__9435;
chunk__9409_9415 = G__9436;
count__9410_9416 = G__9437;
i__9411_9417 = G__9438;
continue;
}
}
} else
{}
}
break;
}
return elem;
}
} else
{return null;
}
});
var dom_attr__3 = (function (elem,k,v){if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"style","style",-496642736)))
{crate.compiler.dom_style.call(null,elem,v);
} else
{var v_9439__$1 = ((crate.binding.binding_QMARK_.call(null,v))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
return crate.binding.value.call(null,v);
})():v);elem.setAttribute(cljs.core.name.call(null,k),v_9439__$1);
}
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case 2:
return dom_attr__2.call(this,elem,k);
case 3:
return dom_attr__3.call(this,elem,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dom_attr.cljs$core$IFn$_invoke$arity$2 = dom_attr__2;
dom_attr.cljs$core$IFn$_invoke$arity$3 = dom_attr__3;
return dom_attr;
})()
;
/**
* Regular expression that parses a CSS-style id and class from a tag name.
*/
crate.compiler.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
crate.compiler.normalize_map_attrs = (function normalize_map_attrs(map_attrs){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__9442){var vec__9443 = p__9442;var n = cljs.core.nth.call(null,vec__9443,(0),null);var v = cljs.core.nth.call(null,vec__9443,(1),null);if(v === true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.name.call(null,n)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,v], null);
}
}),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.boolean$,cljs.core.second),map_attrs)));
});
/**
* Ensure a tag vector is of the form [tag-name attrs content].
*/
crate.compiler.normalize_element = (function normalize_element(p__9445){var vec__9450 = p__9445;var tag = cljs.core.nth.call(null,vec__9450,(0),null);var content = cljs.core.nthnext.call(null,vec__9450,(1));if(!(((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string')))
{throw (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)+" is not a valid tag name.");
} else
{}
var vec__9451 = cljs.core.re_matches.call(null,crate.compiler.re_tag,cljs.core.name.call(null,tag));var _ = cljs.core.nth.call(null,vec__9451,(0),null);var tag__$1 = cljs.core.nth.call(null,vec__9451,(1),null);var id = cljs.core.nth.call(null,vec__9451,(2),null);var class$ = cljs.core.nth.call(null,vec__9451,(3),null);var vec__9452 = (function (){var vec__9453 = clojure.string.split.call(null,tag__$1,/:/);var nsp = cljs.core.nth.call(null,vec__9453,(0),null);var t = cljs.core.nth.call(null,vec__9453,(1),null);var ns_xmlns = crate.compiler.xmlns.call(null,cljs.core.keyword.call(null,nsp));if(cljs.core.truth_(t))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3640__auto__ = ns_xmlns;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return nsp;
}
})(),t], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xhtml","xhtml",1912943770).cljs$core$IFn$_invoke$arity$1(crate.compiler.xmlns),nsp], null);
}
})();var nsp = cljs.core.nth.call(null,vec__9452,(0),null);var tag__$2 = cljs.core.nth.call(null,vec__9452,(1),null);var tag_attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (vec__9451,_,tag__$1,id,class$,vec__9452,nsp,tag__$2,vec__9450,tag,content){
return (function (p1__9444_SHARP_){return !((cljs.core.second.call(null,p1__9444_SHARP_) == null));
});})(vec__9451,_,tag__$1,id,class$,vec__9452,nsp,tag__$2,vec__9450,tag,content))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var or__3640__auto__ = id;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return null;
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(class$)?clojure.string.replace.call(null,class$,/\./," "):null)], null)));var map_attrs = cljs.core.first.call(null,content);if(cljs.core.map_QMARK_.call(null,map_attrs))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nsp,tag__$2,cljs.core.merge.call(null,tag_attrs,crate.compiler.normalize_map_attrs.call(null,map_attrs)),cljs.core.next.call(null,content)], null);
} else
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nsp,tag__$2,tag_attrs,content], null);
}
});
crate.compiler.parse_content = (function parse_content(elem,content){var attrs = cljs.core.first.call(null,content);if(cljs.core.map_QMARK_.call(null,attrs))
{crate.compiler.dom_attr.call(null,elem,attrs);
return cljs.core.rest.call(null,content);
} else
{return content;
}
});
crate.compiler.create_elem = (cljs.core.truth_(document.createElementNS)?(function (nsp,tag){return document.createElementNS(nsp,tag);
}):(function (_,tag){return document.createElement(tag);
}));
crate.compiler.elem_factory = (function elem_factory(tag_def){var bindings9456 = crate.compiler.bindings;try{crate.compiler.bindings = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var vec__9457 = crate.compiler.normalize_element.call(null,tag_def);var nsp = cljs.core.nth.call(null,vec__9457,(0),null);var tag = cljs.core.nth.call(null,vec__9457,(1),null);var attrs = cljs.core.nth.call(null,vec__9457,(2),null);var content = cljs.core.nth.call(null,vec__9457,(3),null);var elem = crate.compiler.create_elem.call(null,nsp,tag);crate.compiler.dom_attr.call(null,elem,attrs);
crate.compiler.as_content.call(null,elem,content);
crate.compiler.handle_bindings.call(null,cljs.core.deref.call(null,crate.compiler.bindings),elem);
return elem;
}finally {crate.compiler.bindings = bindings9456;
}});
/**
* Add an optional attribute argument to a function that returns a vector tag.
*/
crate.compiler.add_optional_attrs = (function add_optional_attrs(func){return (function() { 
var G__9460__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__9459 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__9459,(0),null);var body = cljs.core.nthnext.call(null,vec__9459,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__9460 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9460__delegate.call(this,args);};
G__9460.cljs$lang$maxFixedArity = 0;
G__9460.cljs$lang$applyTo = (function (arglist__9461){
var args = cljs.core.seq(arglist__9461);
return G__9460__delegate(args);
});
G__9460.cljs$core$IFn$_invoke$arity$variadic = G__9460__delegate;
return G__9460;
})()
;
});

//# sourceMappingURL=compiler.js.map