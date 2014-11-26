// Compiled by ClojureScript 0.0-2371
goog.provide('crate.binding');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.set');

/**
* @constructor
*/
crate.binding.SubAtom = (function (atm,path,prevhash,watches,key){
this.atm = atm;
this.path = path;
this.prevhash = prevhash;
this.watches = watches;
this.key = key;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.SubAtom.cljs$lang$type = true;
crate.binding.SubAtom.cljs$lang$ctorStr = "crate.binding/SubAtom";
crate.binding.SubAtom.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"crate.binding/SubAtom");
});
crate.binding.SubAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__9462 = cljs.core.seq.call(null,self__.watches);var chunk__9463 = null;var count__9464 = (0);var i__9465 = (0);while(true){
if((i__9465 < count__9464))
{var vec__9466 = cljs.core._nth.call(null,chunk__9463,i__9465);var key__$1 = cljs.core.nth.call(null,vec__9466,(0),null);var f = cljs.core.nth.call(null,vec__9466,(1),null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__9468 = seq__9462;
var G__9469 = chunk__9463;
var G__9470 = count__9464;
var G__9471 = (i__9465 + (1));
seq__9462 = G__9468;
chunk__9463 = G__9469;
count__9464 = G__9470;
i__9465 = G__9471;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__9462);if(temp__4126__auto__)
{var seq__9462__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9462__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__9462__$1);{
var G__9472 = cljs.core.chunk_rest.call(null,seq__9462__$1);
var G__9473 = c__4410__auto__;
var G__9474 = cljs.core.count.call(null,c__4410__auto__);
var G__9475 = (0);
seq__9462 = G__9472;
chunk__9463 = G__9473;
count__9464 = G__9474;
i__9465 = G__9475;
continue;
}
} else
{var vec__9467 = cljs.core.first.call(null,seq__9462__$1);var key__$1 = cljs.core.nth.call(null,vec__9467,(0),null);var f = cljs.core.nth.call(null,vec__9467,(1),null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__9476 = cljs.core.next.call(null,seq__9462__$1);
var G__9477 = null;
var G__9478 = (0);
var G__9479 = (0);
seq__9462 = G__9476;
chunk__9463 = G__9477;
count__9464 = G__9478;
i__9465 = G__9479;
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
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(f))
{return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else
{return null;
}
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});
crate.binding.SubAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._write.call(null,writer,("#<SubAtom: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path)))+">"));
});
crate.binding.SubAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.atm))
{return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path);
} else
{return null;
}
});
crate.binding.SubAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
crate.binding.__GT_SubAtom = (function __GT_SubAtom(atm,path,prevhash,watches,key){return (new crate.binding.SubAtom(atm,path,prevhash,watches,key));
});
crate.binding.subatom = (function subatom(atm,path){var path__$1 = ((cljs.core.coll_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));var vec__9481 = (((atm instanceof crate.binding.SubAtom))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm.atm,cljs.core.concat.call(null,atm.path,path__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm,path__$1], null));var atm__$1 = cljs.core.nth.call(null,vec__9481,(0),null);var path__$2 = cljs.core.nth.call(null,vec__9481,(1),null);var k = cljs.core.gensym.call(null,"subatom");var sa = (new crate.binding.SubAtom(atm__$1,path__$2,cljs.core.hash.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,atm__$1),path__$2)),null,k));cljs.core.add_watch.call(null,atm__$1,k,((function (path__$1,vec__9481,atm__$1,path__$2,k,sa){
return (function (_,___$1,ov,nv){var latest = cljs.core.get_in.call(null,nv,path__$2);var prev = cljs.core.get_in.call(null,ov,path__$2);var latest_hash = cljs.core.hash.call(null,latest);if((cljs.core.not_EQ_.call(null,sa.prevhash,latest_hash)) && (cljs.core.not_EQ_.call(null,prev,latest)))
{sa.prevhash = latest_hash;
return cljs.core._notify_watches.call(null,sa,cljs.core.get_in.call(null,ov,path__$2),latest);
} else
{return null;
}
});})(path__$1,vec__9481,atm__$1,path__$2,k,sa))
);
return sa;
});
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
crate.binding.sub_reset_BANG_ = (function sub_reset_BANG_(sa,new_value){cljs.core.swap_BANG_.call(null,sa.atm,cljs.core.assoc_in,sa.path,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
crate.binding.sub_swap_BANG_ = (function() {
var sub_swap_BANG_ = null;
var sub_swap_BANG___2 = (function (sa,f){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa)));
});
var sub_swap_BANG___3 = (function (sa,f,x){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x));
});
var sub_swap_BANG___4 = (function (sa,f,x,y){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y));
});
var sub_swap_BANG___5 = (function (sa,f,x,y,z){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y,z));
});
var sub_swap_BANG___6 = (function() { 
var G__9482__delegate = function (sa,f,x,y,z,more){return crate.binding.sub_reset_BANG_.call(null,sa,cljs.core.apply.call(null,f,cljs.core.deref.call(null,sa),x,y,z,more));
};
var G__9482 = function (sa,f,x,y,z,var_args){
var more = null;if (arguments.length > 5) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__9482__delegate.call(this,sa,f,x,y,z,more);};
G__9482.cljs$lang$maxFixedArity = 5;
G__9482.cljs$lang$applyTo = (function (arglist__9483){
var sa = cljs.core.first(arglist__9483);
arglist__9483 = cljs.core.next(arglist__9483);
var f = cljs.core.first(arglist__9483);
arglist__9483 = cljs.core.next(arglist__9483);
var x = cljs.core.first(arglist__9483);
arglist__9483 = cljs.core.next(arglist__9483);
var y = cljs.core.first(arglist__9483);
arglist__9483 = cljs.core.next(arglist__9483);
var z = cljs.core.first(arglist__9483);
var more = cljs.core.rest(arglist__9483);
return G__9482__delegate(sa,f,x,y,z,more);
});
G__9482.cljs$core$IFn$_invoke$arity$variadic = G__9482__delegate;
return G__9482;
})()
;
sub_swap_BANG_ = function(sa,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return sub_swap_BANG___2.call(this,sa,f);
case 3:
return sub_swap_BANG___3.call(this,sa,f,x);
case 4:
return sub_swap_BANG___4.call(this,sa,f,x,y);
case 5:
return sub_swap_BANG___5.call(this,sa,f,x,y,z);
default:
return sub_swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic(sa,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub_swap_BANG_.cljs$lang$maxFixedArity = 5;
sub_swap_BANG_.cljs$lang$applyTo = sub_swap_BANG___6.cljs$lang$applyTo;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = sub_swap_BANG___2;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$3 = sub_swap_BANG___3;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$4 = sub_swap_BANG___4;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$5 = sub_swap_BANG___5;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = sub_swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic;
return sub_swap_BANG_;
})()
;
crate.binding.sub_destroy_BANG_ = (function sub_destroy_BANG_(sa){cljs.core.remove_watch.call(null,sa.atm,sa.key);
sa.watches = null;
return sa.atm = null;
});
crate.binding.computable = (function (){var obj9485 = {};return obj9485;
})();
crate.binding._depend = (function _depend(this$,atm){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.crate$binding$computable$_depend$arity$2;
} else
{return and__3628__auto__;
}
})())
{return this$.crate$binding$computable$_depend$arity$2(this$,atm);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (crate.binding._depend[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (crate.binding._depend["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"computable.-depend",this$);
}
}
})().call(null,this$,atm);
}
});
crate.binding._compute = (function _compute(this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.crate$binding$computable$_compute$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.crate$binding$computable$_compute$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (crate.binding._compute[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (crate.binding._compute["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"computable.-compute",this$);
}
}
})().call(null,this$);
}
});

/**
* @constructor
*/
crate.binding.Computed = (function (atms,value,func,watches,key,meta){
this.atms = atms;
this.value = value;
this.func = func;
this.watches = watches;
this.key = key;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.Computed.cljs$lang$type = true;
crate.binding.Computed.cljs$lang$ctorStr = "crate.binding/Computed";
crate.binding.Computed.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"crate.binding/Computed");
});
crate.binding.Computed.prototype.crate$binding$computable$ = true;
crate.binding.Computed.prototype.crate$binding$computable$_depend$arity$2 = (function (this$,atm){var self__ = this;
var this$__$1 = this;this$__$1.atms = cljs.core.conj.call(null,this$__$1.atms,atm);
return cljs.core.add_watch.call(null,atm,self__.key,((function (this$__$1){
return (function (_,___$1,___$2,___$3){return crate.binding._compute.call(null,this$__$1);
});})(this$__$1))
);
});
crate.binding.Computed.prototype.crate$binding$computable$_compute$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var old = this$__$1.value;var nv = cljs.core.apply.call(null,self__.func,cljs.core.map.call(null,cljs.core.deref,self__.atms));this$__$1.value = nv;
return cljs.core._notify_watches.call(null,this$__$1,old,nv);
});
crate.binding.Computed.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.meta;
});
crate.binding.Computed.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__9486 = cljs.core.seq.call(null,self__.watches);var chunk__9487 = null;var count__9488 = (0);var i__9489 = (0);while(true){
if((i__9489 < count__9488))
{var vec__9490 = cljs.core._nth.call(null,chunk__9487,i__9489);var key__$1 = cljs.core.nth.call(null,vec__9490,(0),null);var f = cljs.core.nth.call(null,vec__9490,(1),null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__9492 = seq__9486;
var G__9493 = chunk__9487;
var G__9494 = count__9488;
var G__9495 = (i__9489 + (1));
seq__9486 = G__9492;
chunk__9487 = G__9493;
count__9488 = G__9494;
i__9489 = G__9495;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__9486);if(temp__4126__auto__)
{var seq__9486__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9486__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__9486__$1);{
var G__9496 = cljs.core.chunk_rest.call(null,seq__9486__$1);
var G__9497 = c__4410__auto__;
var G__9498 = cljs.core.count.call(null,c__4410__auto__);
var G__9499 = (0);
seq__9486 = G__9496;
chunk__9487 = G__9497;
count__9488 = G__9498;
i__9489 = G__9499;
continue;
}
} else
{var vec__9491 = cljs.core.first.call(null,seq__9486__$1);var key__$1 = cljs.core.nth.call(null,vec__9491,(0),null);var f = cljs.core.nth.call(null,vec__9491,(1),null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__9500 = cljs.core.next.call(null,seq__9486__$1);
var G__9501 = null;
var G__9502 = (0);
var G__9503 = (0);
seq__9486 = G__9500;
chunk__9487 = G__9501;
count__9488 = G__9502;
i__9489 = G__9503;
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
crate.binding.Computed.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(f))
{return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else
{return null;
}
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});
crate.binding.Computed.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._write.call(null,writer,("#<Computed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,self__.value))+">"));
});
crate.binding.Computed.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
crate.binding.Computed.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
crate.binding.__GT_Computed = (function __GT_Computed(atms,value,func,watches,key,meta){return (new crate.binding.Computed(atms,value,func,watches,key,meta));
});
crate.binding.computed = (function computed(atms,func){var k = cljs.core.gensym.call(null,"computed");var neue = (new crate.binding.Computed(cljs.core.PersistentVector.EMPTY,null,func,null,k,null));crate.binding._compute.call(null,neue);
var seq__9508_9512 = cljs.core.seq.call(null,atms);var chunk__9509_9513 = null;var count__9510_9514 = (0);var i__9511_9515 = (0);while(true){
if((i__9511_9515 < count__9510_9514))
{var atm_9516 = cljs.core._nth.call(null,chunk__9509_9513,i__9511_9515);crate.binding._depend.call(null,neue,atm_9516);
{
var G__9517 = seq__9508_9512;
var G__9518 = chunk__9509_9513;
var G__9519 = count__9510_9514;
var G__9520 = (i__9511_9515 + (1));
seq__9508_9512 = G__9517;
chunk__9509_9513 = G__9518;
count__9510_9514 = G__9519;
i__9511_9515 = G__9520;
continue;
}
} else
{var temp__4126__auto___9521 = cljs.core.seq.call(null,seq__9508_9512);if(temp__4126__auto___9521)
{var seq__9508_9522__$1 = temp__4126__auto___9521;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9508_9522__$1))
{var c__4410__auto___9523 = cljs.core.chunk_first.call(null,seq__9508_9522__$1);{
var G__9524 = cljs.core.chunk_rest.call(null,seq__9508_9522__$1);
var G__9525 = c__4410__auto___9523;
var G__9526 = cljs.core.count.call(null,c__4410__auto___9523);
var G__9527 = (0);
seq__9508_9512 = G__9524;
chunk__9509_9513 = G__9525;
count__9510_9514 = G__9526;
i__9511_9515 = G__9527;
continue;
}
} else
{var atm_9528 = cljs.core.first.call(null,seq__9508_9522__$1);crate.binding._depend.call(null,neue,atm_9528);
{
var G__9529 = cljs.core.next.call(null,seq__9508_9522__$1);
var G__9530 = null;
var G__9531 = (0);
var G__9532 = (0);
seq__9508_9512 = G__9529;
chunk__9509_9513 = G__9530;
count__9510_9514 = G__9531;
i__9511_9515 = G__9532;
continue;
}
}
} else
{}
}
break;
}
return neue;
});
crate.binding.compute = (function compute(compu){return crate.binding._compute.call(null,compu);
});
crate.binding.depend_on = (function depend_on(compu,atm){return crate.binding._depend.call(null,compu,atm);
});
crate.binding.notify = (function notify(w,o,v){return cljs.core._notify_watches.call(null,w,o,v);
});
crate.binding.bindable_coll = (function (){var obj9534 = {};return obj9534;
})();
crate.binding.bindable = (function (){var obj9536 = {};return obj9536;
})();
crate.binding._value = (function _value(this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.crate$binding$bindable$_value$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.crate$binding$bindable$_value$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (crate.binding._value[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (crate.binding._value["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"bindable.-value",this$);
}
}
})().call(null,this$);
}
});
crate.binding._on_change = (function _on_change(this$,func){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.crate$binding$bindable$_on_change$arity$2;
} else
{return and__3628__auto__;
}
})())
{return this$.crate$binding$bindable$_on_change$arity$2(this$,func);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (crate.binding._on_change[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (crate.binding._on_change["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"bindable.-on-change",this$);
}
}
})().call(null,this$,func);
}
});

/**
* @constructor
*/
crate.binding.atom_binding = (function (atm,value_func){
this.atm = atm;
this.value_func = value_func;
})
crate.binding.atom_binding.cljs$lang$type = true;
crate.binding.atom_binding.cljs$lang$ctorStr = "crate.binding/atom-binding";
crate.binding.atom_binding.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"crate.binding/atom-binding");
});
crate.binding.atom_binding.prototype.crate$binding$bindable$ = true;
crate.binding.atom_binding.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.value_func.call(null,cljs.core.deref.call(null,self__.atm));
});
crate.binding.atom_binding.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){var self__ = this;
var this$__$1 = this;return cljs.core.add_watch.call(null,self__.atm,cljs.core.gensym.call(null,"atom-binding"),((function (this$__$1){
return (function (){return func.call(null,crate.binding._value.call(null,this$__$1));
});})(this$__$1))
);
});
crate.binding.__GT_atom_binding = (function __GT_atom_binding(atm,value_func){return (new crate.binding.atom_binding(atm,value_func));
});

/**
* @constructor
*/
crate.binding.notifier = (function (watches){
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 0;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.notifier.cljs$lang$type = true;
crate.binding.notifier.cljs$lang$ctorStr = "crate.binding/notifier";
crate.binding.notifier.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"crate.binding/notifier");
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__9537 = cljs.core.seq.call(null,self__.watches);var chunk__9538 = null;var count__9539 = (0);var i__9540 = (0);while(true){
if((i__9540 < count__9539))
{var vec__9541 = cljs.core._nth.call(null,chunk__9538,i__9540);var key = cljs.core.nth.call(null,vec__9541,(0),null);var f = cljs.core.nth.call(null,vec__9541,(1),null);f.call(null,key,this$__$1,oldval,newval);
{
var G__9543 = seq__9537;
var G__9544 = chunk__9538;
var G__9545 = count__9539;
var G__9546 = (i__9540 + (1));
seq__9537 = G__9543;
chunk__9538 = G__9544;
count__9539 = G__9545;
i__9540 = G__9546;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__9537);if(temp__4126__auto__)
{var seq__9537__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9537__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__9537__$1);{
var G__9547 = cljs.core.chunk_rest.call(null,seq__9537__$1);
var G__9548 = c__4410__auto__;
var G__9549 = cljs.core.count.call(null,c__4410__auto__);
var G__9550 = (0);
seq__9537 = G__9547;
chunk__9538 = G__9548;
count__9539 = G__9549;
i__9540 = G__9550;
continue;
}
} else
{var vec__9542 = cljs.core.first.call(null,seq__9537__$1);var key = cljs.core.nth.call(null,vec__9542,(0),null);var f = cljs.core.nth.call(null,vec__9542,(1),null);f.call(null,key,this$__$1,oldval,newval);
{
var G__9551 = cljs.core.next.call(null,seq__9537__$1);
var G__9552 = null;
var G__9553 = (0);
var G__9554 = (0);
seq__9537 = G__9551;
chunk__9538 = G__9552;
count__9539 = G__9553;
i__9540 = G__9554;
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
crate.binding.notifier.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
crate.binding.__GT_notifier = (function __GT_notifier(watches){return (new crate.binding.notifier(watches));
});

/**
* @constructor
*/
crate.binding.bound_collection = (function (atm,notif,opts,stuff){
this.atm = atm;
this.notif = notif;
this.opts = opts;
this.stuff = stuff;
})
crate.binding.bound_collection.cljs$lang$type = true;
crate.binding.bound_collection.cljs$lang$ctorStr = "crate.binding/bound-collection";
crate.binding.bound_collection.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"crate.binding/bound-collection");
});
crate.binding.bound_collection.prototype.crate$binding$bindable$ = true;
crate.binding.bound_collection.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.map.call(null,new cljs.core.Keyword(null,"elem","elem",618631056),cljs.core.vals.call(null,this$__$1.stuff));
});
crate.binding.bound_collection.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){var self__ = this;
var this$__$1 = this;return cljs.core.add_watch.call(null,self__.notif,cljs.core.gensym.call(null,"bound-coll"),((function (this$__$1){
return (function (_,___$1,___$2,p__9555){var vec__9556 = p__9555;var event = cljs.core.nth.call(null,vec__9556,(0),null);var el = cljs.core.nth.call(null,vec__9556,(1),null);var v = cljs.core.nth.call(null,vec__9556,(2),null);return func.call(null,event,el,v);
});})(this$__$1))
);
});
crate.binding.bound_collection.prototype.crate$binding$bindable_coll$ = true;
crate.binding.__GT_bound_collection = (function __GT_bound_collection(atm,notif,opts,stuff){return (new crate.binding.bound_collection(atm,notif,opts,stuff));
});
crate.binding.opt = (function opt(bc,k){return bc.opts.call(null,k);
});
crate.binding.bc_add = (function bc_add(bc,path,key){var sa = crate.binding.subatom.call(null,bc.atm,path);var elem = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"as","as",1148689641)).call(null,sa);bc.stuff = cljs.core.assoc.call(null,bc.stuff,key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elem","elem",618631056),elem,new cljs.core.Keyword(null,"subatom","subatom",-95454370),sa], null));
return crate.binding.notify.call(null,bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add","add",235287739),elem,cljs.core.deref.call(null,sa)], null));
});
crate.binding.bc_remove = (function bc_remove(bc,key){var notif = bc.notif;var prev = bc.stuff.call(null,key);bc.stuff = cljs.core.dissoc.call(null,bc.stuff,key);
crate.binding.notify.call(null,bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(prev),null], null));
return crate.binding.sub_destroy_BANG_.call(null,new cljs.core.Keyword(null,"subatom","subatom",-95454370).cljs$core$IFn$_invoke$arity$1(prev));
});
crate.binding.__GT_indexed = (function __GT_indexed(coll){if(cljs.core.map_QMARK_.call(null,coll))
{return cljs.core.seq.call(null,coll);
} else
{if(cljs.core.set_QMARK_.call(null,coll))
{return cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,cljs.core.identity),coll);
} else
{return cljs.core.map_indexed.call(null,cljs.core.vector,coll);

}
}
});
crate.binding.__GT_keyed = (function __GT_keyed(coll,keyfn){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,keyfn,crate.binding.__GT_indexed.call(null,coll)));
});
/**
* @param {...*} var_args
*/
crate.binding.__GT_path = (function() { 
var __GT_path__delegate = function (bc,segs){return cljs.core.concat.call(null,(function (){var or__3640__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"path","path",-188191168));if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),segs);
};
var __GT_path = function (bc,var_args){
var segs = null;if (arguments.length > 1) {
  segs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return __GT_path__delegate.call(this,bc,segs);};
__GT_path.cljs$lang$maxFixedArity = 1;
__GT_path.cljs$lang$applyTo = (function (arglist__9557){
var bc = cljs.core.first(arglist__9557);
var segs = cljs.core.rest(arglist__9557);
return __GT_path__delegate(bc,segs);
});
__GT_path.cljs$core$IFn$_invoke$arity$variadic = __GT_path__delegate;
return __GT_path;
})()
;
crate.binding.bc_compare = (function bc_compare(bc,neue){var prev = bc.stuff;var pset = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,prev));var nset = crate.binding.__GT_keyed.call(null,neue,crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"keyfn","keyfn",780060332)));var added = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,nset,pset));var removed = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,pset,nset));var seq__9566_9574 = cljs.core.seq.call(null,added);var chunk__9567_9575 = null;var count__9568_9576 = (0);var i__9569_9577 = (0);while(true){
if((i__9569_9577 < count__9568_9576))
{var a_9578 = cljs.core._nth.call(null,chunk__9567_9575,i__9569_9577);crate.binding.bc_add.call(null,bc,a_9578,a_9578);
{
var G__9579 = seq__9566_9574;
var G__9580 = chunk__9567_9575;
var G__9581 = count__9568_9576;
var G__9582 = (i__9569_9577 + (1));
seq__9566_9574 = G__9579;
chunk__9567_9575 = G__9580;
count__9568_9576 = G__9581;
i__9569_9577 = G__9582;
continue;
}
} else
{var temp__4126__auto___9583 = cljs.core.seq.call(null,seq__9566_9574);if(temp__4126__auto___9583)
{var seq__9566_9584__$1 = temp__4126__auto___9583;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9566_9584__$1))
{var c__4410__auto___9585 = cljs.core.chunk_first.call(null,seq__9566_9584__$1);{
var G__9586 = cljs.core.chunk_rest.call(null,seq__9566_9584__$1);
var G__9587 = c__4410__auto___9585;
var G__9588 = cljs.core.count.call(null,c__4410__auto___9585);
var G__9589 = (0);
seq__9566_9574 = G__9586;
chunk__9567_9575 = G__9587;
count__9568_9576 = G__9588;
i__9569_9577 = G__9589;
continue;
}
} else
{var a_9590 = cljs.core.first.call(null,seq__9566_9584__$1);crate.binding.bc_add.call(null,bc,a_9590,a_9590);
{
var G__9591 = cljs.core.next.call(null,seq__9566_9584__$1);
var G__9592 = null;
var G__9593 = (0);
var G__9594 = (0);
seq__9566_9574 = G__9591;
chunk__9567_9575 = G__9592;
count__9568_9576 = G__9593;
i__9569_9577 = G__9594;
continue;
}
}
} else
{}
}
break;
}
var seq__9570 = cljs.core.seq.call(null,removed);var chunk__9571 = null;var count__9572 = (0);var i__9573 = (0);while(true){
if((i__9573 < count__9572))
{var r = cljs.core._nth.call(null,chunk__9571,i__9573);crate.binding.bc_remove.call(null,bc,r);
{
var G__9595 = seq__9570;
var G__9596 = chunk__9571;
var G__9597 = count__9572;
var G__9598 = (i__9573 + (1));
seq__9570 = G__9595;
chunk__9571 = G__9596;
count__9572 = G__9597;
i__9573 = G__9598;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__9570);if(temp__4126__auto__)
{var seq__9570__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9570__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__9570__$1);{
var G__9599 = cljs.core.chunk_rest.call(null,seq__9570__$1);
var G__9600 = c__4410__auto__;
var G__9601 = cljs.core.count.call(null,c__4410__auto__);
var G__9602 = (0);
seq__9570 = G__9599;
chunk__9571 = G__9600;
count__9572 = G__9601;
i__9573 = G__9602;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__9570__$1);crate.binding.bc_remove.call(null,bc,r);
{
var G__9603 = cljs.core.next.call(null,seq__9570__$1);
var G__9604 = null;
var G__9605 = (0);
var G__9606 = (0);
seq__9570 = G__9603;
chunk__9571 = G__9604;
count__9572 = G__9605;
i__9573 = G__9606;
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
/**
* @param {...*} var_args
*/
crate.binding.bound_coll = (function() { 
var bound_coll__delegate = function (atm,p__9607){var vec__9610 = p__9607;var path = cljs.core.nth.call(null,vec__9610,(0),null);var opts = cljs.core.nth.call(null,vec__9610,(1),null);var vec__9611 = (cljs.core.truth_(opts)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,opts], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,path], null));var path__$1 = cljs.core.nth.call(null,vec__9611,(0),null);var opts__$1 = cljs.core.nth.call(null,vec__9611,(1),null);var atm__$1 = ((cljs.core.not.call(null,path__$1))?atm:crate.binding.subatom.call(null,atm,path__$1));var opts__$2 = cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"path","path",-188191168),path__$1);var opts__$3 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.first):cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$2),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$3,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (vec__9611,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__9610,path,opts){
return (function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
});})(vec__9611,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__9610,path,opts))
);
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var bound_coll = function (atm,var_args){
var p__9607 = null;if (arguments.length > 1) {
  p__9607 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound_coll__delegate.call(this,atm,p__9607);};
bound_coll.cljs$lang$maxFixedArity = 1;
bound_coll.cljs$lang$applyTo = (function (arglist__9612){
var atm = cljs.core.first(arglist__9612);
var p__9607 = cljs.core.rest(arglist__9612);
return bound_coll__delegate(atm,p__9607);
});
bound_coll.cljs$core$IFn$_invoke$arity$variadic = bound_coll__delegate;
return bound_coll;
})()
;
/**
* @param {...*} var_args
*/
crate.binding.map_bound = (function() { 
var map_bound__delegate = function (as,atm,p__9613){var vec__9615 = p__9613;var opts = cljs.core.nth.call(null,vec__9615,(0),null);var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"as","as",1148689641),as);var atm__$1 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts__$1)))?atm:crate.binding.subatom.call(null,atm,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts__$1)));var opts__$2 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$1)))?cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.first):cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$1),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$2,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (opts__$1,atm__$1,opts__$2,bc,vec__9615,opts){
return (function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
});})(opts__$1,atm__$1,opts__$2,bc,vec__9615,opts))
);
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var map_bound = function (as,atm,var_args){
var p__9613 = null;if (arguments.length > 2) {
  p__9613 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return map_bound__delegate.call(this,as,atm,p__9613);};
map_bound.cljs$lang$maxFixedArity = 2;
map_bound.cljs$lang$applyTo = (function (arglist__9616){
var as = cljs.core.first(arglist__9616);
arglist__9616 = cljs.core.next(arglist__9616);
var atm = cljs.core.first(arglist__9616);
var p__9613 = cljs.core.rest(arglist__9616);
return map_bound__delegate(as,atm,p__9613);
});
map_bound.cljs$core$IFn$_invoke$arity$variadic = map_bound__delegate;
return map_bound;
})()
;
crate.binding.binding_QMARK_ = (function binding_QMARK_(b){var G__9618 = b;if(G__9618)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__9618.crate$binding$bindable$;
}
})()))
{return true;
} else
{if((!G__9618.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__9618);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__9618);
}
});
crate.binding.binding_coll_QMARK_ = (function binding_coll_QMARK_(b){var G__9620 = b;if(G__9620)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__9620.crate$binding$bindable_coll$;
}
})()))
{return true;
} else
{if((!G__9620.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__9620);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__9620);
}
});
crate.binding.deref_QMARK_ = (function deref_QMARK_(atm){var G__9622 = atm;if(G__9622)
{var bit__4304__auto__ = (G__9622.cljs$lang$protocol_mask$partition0$ & (32768));if((bit__4304__auto__) || (G__9622.cljs$core$IDeref$))
{return true;
} else
{if((!G__9622.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__9622);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__9622);
}
});
crate.binding.value = (function value(b){return crate.binding._value.call(null,b);
});
crate.binding.index = (function index(sub_atom){return cljs.core.last.call(null,sub_atom.path);
});
crate.binding.on_change = (function on_change(b,func){return crate.binding._on_change.call(null,b,func);
});
/**
* @param {...*} var_args
*/
crate.binding.bound = (function() { 
var bound__delegate = function (atm,p__9623){var vec__9625 = p__9623;var func = cljs.core.nth.call(null,vec__9625,(0),null);var func__$1 = (function (){var or__3640__auto__ = func;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.identity;
}
})();return (new crate.binding.atom_binding(atm,func__$1));
};
var bound = function (atm,var_args){
var p__9623 = null;if (arguments.length > 1) {
  p__9623 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound__delegate.call(this,atm,p__9623);};
bound.cljs$lang$maxFixedArity = 1;
bound.cljs$lang$applyTo = (function (arglist__9626){
var atm = cljs.core.first(arglist__9626);
var p__9623 = cljs.core.rest(arglist__9626);
return bound__delegate(atm,p__9623);
});
bound.cljs$core$IFn$_invoke$arity$variadic = bound__delegate;
return bound;
})()
;

//# sourceMappingURL=binding.js.map