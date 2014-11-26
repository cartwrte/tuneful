// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10897 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10897 = (function (f,fn_handler,meta10898){
this.f = f;
this.fn_handler = fn_handler;
this.meta10898 = meta10898;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10897.cljs$lang$type = true;
cljs.core.async.t10897.cljs$lang$ctorStr = "cljs.core.async/t10897";
cljs.core.async.t10897.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t10897");
});
cljs.core.async.t10897.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10897.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10897.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10897.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10899){var self__ = this;
var _10899__$1 = this;return self__.meta10898;
});
cljs.core.async.t10897.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10899,meta10898__$1){var self__ = this;
var _10899__$1 = this;return (new cljs.core.async.t10897(self__.f,self__.fn_handler,meta10898__$1));
});
cljs.core.async.__GT_t10897 = (function __GT_t10897(f__$1,fn_handler__$1,meta10898){return (new cljs.core.async.t10897(f__$1,fn_handler__$1,meta10898));
});
}
return (new cljs.core.async.t10897(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10901 = buff;if(G__10901)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__10901.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10901.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10901);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10901);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_10902 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10902);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_10902,ret){
return (function (){return fn1.call(null,val_10902);
});})(val_10902,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3628__auto__ = ret;if(cljs.core.truth_(and__3628__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3628__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4510__auto___10903 = n;var x_10904 = (0);while(true){
if((x_10904 < n__4510__auto___10903))
{(a[x_10904] = (0));
{
var G__10905 = (x_10904 + (1));
x_10904 = G__10905;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__10906 = (i + (1));
i = G__10906;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10910 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10910 = (function (flag,alt_flag,meta10911){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10911 = meta10911;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10910.cljs$lang$type = true;
cljs.core.async.t10910.cljs$lang$ctorStr = "cljs.core.async/t10910";
cljs.core.async.t10910.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t10910");
});})(flag))
;
cljs.core.async.t10910.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10910.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t10910.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t10910.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10912){var self__ = this;
var _10912__$1 = this;return self__.meta10911;
});})(flag))
;
cljs.core.async.t10910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10912,meta10911__$1){var self__ = this;
var _10912__$1 = this;return (new cljs.core.async.t10910(self__.flag,self__.alt_flag,meta10911__$1));
});})(flag))
;
cljs.core.async.__GT_t10910 = ((function (flag){
return (function __GT_t10910(flag__$1,alt_flag__$1,meta10911){return (new cljs.core.async.t10910(flag__$1,alt_flag__$1,meta10911));
});})(flag))
;
}
return (new cljs.core.async.t10910(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10916 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10916 = (function (cb,flag,alt_handler,meta10917){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10917 = meta10917;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10916.cljs$lang$type = true;
cljs.core.async.t10916.cljs$lang$ctorStr = "cljs.core.async/t10916";
cljs.core.async.t10916.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t10916");
});
cljs.core.async.t10916.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10916.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10916.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10916.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10918){var self__ = this;
var _10918__$1 = this;return self__.meta10917;
});
cljs.core.async.t10916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10918,meta10917__$1){var self__ = this;
var _10918__$1 = this;return (new cljs.core.async.t10916(self__.cb,self__.flag,self__.alt_handler,meta10917__$1));
});
cljs.core.async.__GT_t10916 = (function __GT_t10916(cb__$1,flag__$1,alt_handler__$1,meta10917){return (new cljs.core.async.t10916(cb__$1,flag__$1,alt_handler__$1,meta10917));
});
}
return (new cljs.core.async.t10916(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10919_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10919_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3640__auto__ = wport;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__10920 = (i + (1));
i = G__10920;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3640__auto__ = ret;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3628__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3628__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3628__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__10921){var map__10923 = p__10921;var map__10923__$1 = ((cljs.core.seq_QMARK_.call(null,map__10923))?cljs.core.apply.call(null,cljs.core.hash_map,map__10923):map__10923);var opts = map__10923__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__10921 = null;if (arguments.length > 1) {
  p__10921 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10921);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10924){
var ports = cljs.core.first(arglist__10924);
var p__10921 = cljs.core.rest(arglist__10924);
return alts_BANG___delegate(ports,p__10921);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10932 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10932 = (function (ch,f,map_LT_,meta10933){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10933 = meta10933;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10932.cljs$lang$type = true;
cljs.core.async.t10932.cljs$lang$ctorStr = "cljs.core.async/t10932";
cljs.core.async.t10932.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t10932");
});
cljs.core.async.t10932.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10932.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t10932.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10932.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10935 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10935 = (function (fn1,_,meta10933,ch,f,map_LT_,meta10936){
this.fn1 = fn1;
this._ = _;
this.meta10933 = meta10933;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10936 = meta10936;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10935.cljs$lang$type = true;
cljs.core.async.t10935.cljs$lang$ctorStr = "cljs.core.async/t10935";
cljs.core.async.t10935.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t10935");
});})(___$1))
;
cljs.core.async.t10935.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10935.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10935.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10935.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__10925_SHARP_){return f1.call(null,(((p1__10925_SHARP_ == null))?null:self__.f.call(null,p1__10925_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t10935.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10937){var self__ = this;
var _10937__$1 = this;return self__.meta10936;
});})(___$1))
;
cljs.core.async.t10935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10937,meta10936__$1){var self__ = this;
var _10937__$1 = this;return (new cljs.core.async.t10935(self__.fn1,self__._,self__.meta10933,self__.ch,self__.f,self__.map_LT_,meta10936__$1));
});})(___$1))
;
cljs.core.async.__GT_t10935 = ((function (___$1){
return (function __GT_t10935(fn1__$1,___$2,meta10933__$1,ch__$2,f__$2,map_LT___$2,meta10936){return (new cljs.core.async.t10935(fn1__$1,___$2,meta10933__$1,ch__$2,f__$2,map_LT___$2,meta10936));
});})(___$1))
;
}
return (new cljs.core.async.t10935(fn1,___$1,self__.meta10933,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3628__auto__ = ret;if(cljs.core.truth_(and__3628__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3628__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t10932.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10932.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10934){var self__ = this;
var _10934__$1 = this;return self__.meta10933;
});
cljs.core.async.t10932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10934,meta10933__$1){var self__ = this;
var _10934__$1 = this;return (new cljs.core.async.t10932(self__.ch,self__.f,self__.map_LT_,meta10933__$1));
});
cljs.core.async.__GT_t10932 = (function __GT_t10932(ch__$1,f__$1,map_LT___$1,meta10933){return (new cljs.core.async.t10932(ch__$1,f__$1,map_LT___$1,meta10933));
});
}
return (new cljs.core.async.t10932(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10941 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10941 = (function (ch,f,map_GT_,meta10942){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10942 = meta10942;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10941.cljs$lang$type = true;
cljs.core.async.t10941.cljs$lang$ctorStr = "cljs.core.async/t10941";
cljs.core.async.t10941.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t10941");
});
cljs.core.async.t10941.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10941.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t10941.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10941.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10941.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10941.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10941.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10943){var self__ = this;
var _10943__$1 = this;return self__.meta10942;
});
cljs.core.async.t10941.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10943,meta10942__$1){var self__ = this;
var _10943__$1 = this;return (new cljs.core.async.t10941(self__.ch,self__.f,self__.map_GT_,meta10942__$1));
});
cljs.core.async.__GT_t10941 = (function __GT_t10941(ch__$1,f__$1,map_GT___$1,meta10942){return (new cljs.core.async.t10941(ch__$1,f__$1,map_GT___$1,meta10942));
});
}
return (new cljs.core.async.t10941(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10947 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10947 = (function (ch,p,filter_GT_,meta10948){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10948 = meta10948;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10947.cljs$lang$type = true;
cljs.core.async.t10947.cljs$lang$ctorStr = "cljs.core.async/t10947";
cljs.core.async.t10947.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t10947");
});
cljs.core.async.t10947.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10947.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t10947.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10947.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10947.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10947.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10947.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10949){var self__ = this;
var _10949__$1 = this;return self__.meta10948;
});
cljs.core.async.t10947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10949,meta10948__$1){var self__ = this;
var _10949__$1 = this;return (new cljs.core.async.t10947(self__.ch,self__.p,self__.filter_GT_,meta10948__$1));
});
cljs.core.async.__GT_t10947 = (function __GT_t10947(ch__$1,p__$1,filter_GT___$1,meta10948){return (new cljs.core.async.t10947(ch__$1,p__$1,filter_GT___$1,meta10948));
});
}
return (new cljs.core.async.t10947(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5894__auto___11032 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5894__auto___11032,out){
return (function (){var f__5895__auto__ = (function (){var switch__5879__auto__ = ((function (c__5894__auto___11032,out){
return (function (state_11011){var state_val_11012 = (state_11011[(1)]);if((state_val_11012 === (7)))
{var inst_11007 = (state_11011[(2)]);var state_11011__$1 = state_11011;var statearr_11013_11033 = state_11011__$1;(statearr_11013_11033[(2)] = inst_11007);
(statearr_11013_11033[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11012 === (1)))
{var state_11011__$1 = state_11011;var statearr_11014_11034 = state_11011__$1;(statearr_11014_11034[(2)] = null);
(statearr_11014_11034[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11012 === (4)))
{var inst_10993 = (state_11011[(7)]);var inst_10993__$1 = (state_11011[(2)]);var inst_10994 = (inst_10993__$1 == null);var state_11011__$1 = (function (){var statearr_11015 = state_11011;(statearr_11015[(7)] = inst_10993__$1);
return statearr_11015;
})();if(cljs.core.truth_(inst_10994))
{var statearr_11016_11035 = state_11011__$1;(statearr_11016_11035[(1)] = (5));
} else
{var statearr_11017_11036 = state_11011__$1;(statearr_11017_11036[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11012 === (6)))
{var inst_10993 = (state_11011[(7)]);var inst_10998 = p.call(null,inst_10993);var state_11011__$1 = state_11011;if(cljs.core.truth_(inst_10998))
{var statearr_11018_11037 = state_11011__$1;(statearr_11018_11037[(1)] = (8));
} else
{var statearr_11019_11038 = state_11011__$1;(statearr_11019_11038[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11012 === (3)))
{var inst_11009 = (state_11011[(2)]);var state_11011__$1 = state_11011;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11011__$1,inst_11009);
} else
{if((state_val_11012 === (2)))
{var state_11011__$1 = state_11011;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11011__$1,(4),ch);
} else
{if((state_val_11012 === (11)))
{var inst_11001 = (state_11011[(2)]);var state_11011__$1 = state_11011;var statearr_11020_11039 = state_11011__$1;(statearr_11020_11039[(2)] = inst_11001);
(statearr_11020_11039[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11012 === (9)))
{var state_11011__$1 = state_11011;var statearr_11021_11040 = state_11011__$1;(statearr_11021_11040[(2)] = null);
(statearr_11021_11040[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11012 === (5)))
{var inst_10996 = cljs.core.async.close_BANG_.call(null,out);var state_11011__$1 = state_11011;var statearr_11022_11041 = state_11011__$1;(statearr_11022_11041[(2)] = inst_10996);
(statearr_11022_11041[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11012 === (10)))
{var inst_11004 = (state_11011[(2)]);var state_11011__$1 = (function (){var statearr_11023 = state_11011;(statearr_11023[(8)] = inst_11004);
return statearr_11023;
})();var statearr_11024_11042 = state_11011__$1;(statearr_11024_11042[(2)] = null);
(statearr_11024_11042[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11012 === (8)))
{var inst_10993 = (state_11011[(7)]);var state_11011__$1 = state_11011;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11011__$1,(11),out,inst_10993);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5894__auto___11032,out))
;return ((function (switch__5879__auto__,c__5894__auto___11032,out){
return (function() {
var state_machine__5880__auto__ = null;
var state_machine__5880__auto____0 = (function (){var statearr_11028 = [null,null,null,null,null,null,null,null,null];(statearr_11028[(0)] = state_machine__5880__auto__);
(statearr_11028[(1)] = (1));
return statearr_11028;
});
var state_machine__5880__auto____1 = (function (state_11011){while(true){
var ret_value__5881__auto__ = (function (){try{while(true){
var result__5882__auto__ = switch__5879__auto__.call(null,state_11011);if(cljs.core.keyword_identical_QMARK_.call(null,result__5882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5882__auto__;
}
break;
}
}catch (e11029){if((e11029 instanceof Object))
{var ex__5883__auto__ = e11029;var statearr_11030_11043 = state_11011;(statearr_11030_11043[(5)] = ex__5883__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11011);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11029;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11044 = state_11011;
state_11011 = G__11044;
continue;
}
} else
{return ret_value__5881__auto__;
}
break;
}
});
state_machine__5880__auto__ = function(state_11011){
switch(arguments.length){
case 0:
return state_machine__5880__auto____0.call(this);
case 1:
return state_machine__5880__auto____1.call(this,state_11011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5880__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5880__auto____0;
state_machine__5880__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5880__auto____1;
return state_machine__5880__auto__;
})()
;})(switch__5879__auto__,c__5894__auto___11032,out))
})();var state__5896__auto__ = (function (){var statearr_11031 = f__5895__auto__.call(null);(statearr_11031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5894__auto___11032);
return statearr_11031;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5896__auto__);
});})(c__5894__auto___11032,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5894__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5894__auto__){
return (function (){var f__5895__auto__ = (function (){var switch__5879__auto__ = ((function (c__5894__auto__){
return (function (state_11196){var state_val_11197 = (state_11196[(1)]);if((state_val_11197 === (7)))
{var inst_11192 = (state_11196[(2)]);var state_11196__$1 = state_11196;var statearr_11198_11235 = state_11196__$1;(statearr_11198_11235[(2)] = inst_11192);
(statearr_11198_11235[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11197 === (20)))
{var inst_11167 = (state_11196[(7)]);var inst_11178 = (state_11196[(2)]);var inst_11179 = cljs.core.next.call(null,inst_11167);var inst_11153 = inst_11179;var inst_11154 = null;var inst_11155 = (0);var inst_11156 = (0);var state_11196__$1 = (function (){var statearr_11199 = state_11196;(statearr_11199[(8)] = inst_11178);
(statearr_11199[(9)] = inst_11154);
(statearr_11199[(10)] = inst_11155);
(statearr_11199[(11)] = inst_11156);
(statearr_11199[(12)] = inst_11153);
return statearr_11199;
})();var statearr_11200_11236 = state_11196__$1;(statearr_11200_11236[(2)] = null);
(statearr_11200_11236[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11197 === (1)))
{var state_11196__$1 = state_11196;var statearr_11201_11237 = state_11196__$1;(statearr_11201_11237[(2)] = null);
(statearr_11201_11237[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11197 === (4)))
{var inst_11142 = (state_11196[(13)]);var inst_11142__$1 = (state_11196[(2)]);var inst_11143 = (inst_11142__$1 == null);var state_11196__$1 = (function (){var statearr_11205 = state_11196;(statearr_11205[(13)] = inst_11142__$1);
return statearr_11205;
})();if(cljs.core.truth_(inst_11143))
{var statearr_11206_11238 = state_11196__$1;(statearr_11206_11238[(1)] = (5));
} else
{var statearr_11207_11239 = state_11196__$1;(statearr_11207_11239[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11197 === (15)))
{var state_11196__$1 = state_11196;var statearr_11208_11240 = state_11196__$1;(statearr_11208_11240[(2)] = null);
(statearr_11208_11240[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11197 === (13)))
{var inst_11154 = (state_11196[(9)]);var inst_11155 = (state_11196[(10)]);var inst_11156 = (state_11196[(11)]);var inst_11153 = (state_11196[(12)]);var inst_11163 = (state_11196[(2)]);var inst_11164 = (inst_11156 + (1));var tmp11202 = inst_11154;var tmp11203 = inst_11155;var tmp11204 = inst_11153;var inst_11153__$1 = tmp11204;var inst_11154__$1 = tmp11202;var inst_11155__$1 = tmp11203;var inst_11156__$1 = inst_11164;var state_11196__$1 = (function (){var statearr_11209 = state_11196;(statearr_11209[(9)] = inst_11154__$1);
(statearr_11209[(14)] = inst_11163);
(statearr_11209[(10)] = inst_11155__$1);
(statearr_11209[(11)] = inst_11156__$1);
(statearr_11209[(12)] = inst_11153__$1);
return statearr_11209;
})();var statearr_11210_11241 = state_11196__$1;(statearr_11210_11241[(2)] = null);
(statearr_11210_11241[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11197 === (6)))
{var inst_11142 = (state_11196[(13)]);var inst_11147 = f.call(null,inst_11142);var inst_11152 = cljs.core.seq.call(null,inst_11147);var inst_11153 = inst_11152;var inst_11154 = null;var inst_11155 = (0);var inst_11156 = (0);var state_11196__$1 = (function (){var statearr_11211 = state_11196;(statearr_11211[(9)] = inst_11154);
(statearr_11211[(10)] = inst_11155);
(statearr_11211[(11)] = inst_11156);
(statearr_11211[(12)] = inst_11153);
return statearr_11211;
})();var statearr_11212_11242 = state_11196__$1;(statearr_11212_11242[(2)] = null);
(statearr_11212_11242[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11197 === (17)))
{var inst_11167 = (state_11196[(7)]);var inst_11171 = cljs.core.chunk_first.call(null,inst_11167);var inst_11172 = cljs.core.chunk_rest.call(null,inst_11167);var inst_11173 = cljs.core.count.call(null,inst_11171);var inst_11153 = inst_11172;var inst_11154 = inst_11171;var inst_11155 = inst_11173;var inst_11156 = (0);var state_11196__$1 = (function (){var statearr_11213 = state_11196;(statearr_11213[(9)] = inst_11154);
(statearr_11213[(10)] = inst_11155);
(statearr_11213[(11)] = inst_11156);
(statearr_11213[(12)] = inst_11153);
return statearr_11213;
})();var statearr_11214_11243 = state_11196__$1;(statearr_11214_11243[(2)] = null);
(statearr_11214_11243[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11197 === (3)))
{var inst_11194 = (state_11196[(2)]);var state_11196__$1 = state_11196;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11196__$1,inst_11194);
} else
{if((state_val_11197 === (12)))
{var inst_11187 = (state_11196[(2)]);var state_11196__$1 = state_11196;var statearr_11215_11244 = state_11196__$1;(statearr_11215_11244[(2)] = inst_11187);
(statearr_11215_11244[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11197 === (2)))
{var state_11196__$1 = state_11196;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11196__$1,(4),in$);
} else
{if((state_val_11197 === (19)))
{var inst_11182 = (state_11196[(2)]);var state_11196__$1 = state_11196;var statearr_11216_11245 = state_11196__$1;(statearr_11216_11245[(2)] = inst_11182);
(statearr_11216_11245[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11197 === (11)))
{var inst_11167 = (state_11196[(7)]);var inst_11153 = (state_11196[(12)]);var inst_11167__$1 = cljs.core.seq.call(null,inst_11153);var state_11196__$1 = (function (){var statearr_11217 = state_11196;(statearr_11217[(7)] = inst_11167__$1);
return statearr_11217;
})();if(inst_11167__$1)
{var statearr_11218_11246 = state_11196__$1;(statearr_11218_11246[(1)] = (14));
} else
{var statearr_11219_11247 = state_11196__$1;(statearr_11219_11247[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11197 === (9)))
{var inst_11189 = (state_11196[(2)]);var state_11196__$1 = (function (){var statearr_11220 = state_11196;(statearr_11220[(15)] = inst_11189);
return statearr_11220;
})();var statearr_11221_11248 = state_11196__$1;(statearr_11221_11248[(2)] = null);
(statearr_11221_11248[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11197 === (5)))
{var inst_11145 = cljs.core.async.close_BANG_.call(null,out);var state_11196__$1 = state_11196;var statearr_11222_11249 = state_11196__$1;(statearr_11222_11249[(2)] = inst_11145);
(statearr_11222_11249[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11197 === (14)))
{var inst_11167 = (state_11196[(7)]);var inst_11169 = cljs.core.chunked_seq_QMARK_.call(null,inst_11167);var state_11196__$1 = state_11196;if(inst_11169)
{var statearr_11223_11250 = state_11196__$1;(statearr_11223_11250[(1)] = (17));
} else
{var statearr_11224_11251 = state_11196__$1;(statearr_11224_11251[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11197 === (16)))
{var inst_11185 = (state_11196[(2)]);var state_11196__$1 = state_11196;var statearr_11225_11252 = state_11196__$1;(statearr_11225_11252[(2)] = inst_11185);
(statearr_11225_11252[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11197 === (10)))
{var inst_11154 = (state_11196[(9)]);var inst_11156 = (state_11196[(11)]);var inst_11161 = cljs.core._nth.call(null,inst_11154,inst_11156);var state_11196__$1 = state_11196;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11196__$1,(13),out,inst_11161);
} else
{if((state_val_11197 === (18)))
{var inst_11167 = (state_11196[(7)]);var inst_11176 = cljs.core.first.call(null,inst_11167);var state_11196__$1 = state_11196;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11196__$1,(20),out,inst_11176);
} else
{if((state_val_11197 === (8)))
{var inst_11155 = (state_11196[(10)]);var inst_11156 = (state_11196[(11)]);var inst_11158 = (inst_11156 < inst_11155);var inst_11159 = inst_11158;var state_11196__$1 = state_11196;if(cljs.core.truth_(inst_11159))
{var statearr_11226_11253 = state_11196__$1;(statearr_11226_11253[(1)] = (10));
} else
{var statearr_11227_11254 = state_11196__$1;(statearr_11227_11254[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5894__auto__))
;return ((function (switch__5879__auto__,c__5894__auto__){
return (function() {
var state_machine__5880__auto__ = null;
var state_machine__5880__auto____0 = (function (){var statearr_11231 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11231[(0)] = state_machine__5880__auto__);
(statearr_11231[(1)] = (1));
return statearr_11231;
});
var state_machine__5880__auto____1 = (function (state_11196){while(true){
var ret_value__5881__auto__ = (function (){try{while(true){
var result__5882__auto__ = switch__5879__auto__.call(null,state_11196);if(cljs.core.keyword_identical_QMARK_.call(null,result__5882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5882__auto__;
}
break;
}
}catch (e11232){if((e11232 instanceof Object))
{var ex__5883__auto__ = e11232;var statearr_11233_11255 = state_11196;(statearr_11233_11255[(5)] = ex__5883__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11196);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11232;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11256 = state_11196;
state_11196 = G__11256;
continue;
}
} else
{return ret_value__5881__auto__;
}
break;
}
});
state_machine__5880__auto__ = function(state_11196){
switch(arguments.length){
case 0:
return state_machine__5880__auto____0.call(this);
case 1:
return state_machine__5880__auto____1.call(this,state_11196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5880__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5880__auto____0;
state_machine__5880__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5880__auto____1;
return state_machine__5880__auto__;
})()
;})(switch__5879__auto__,c__5894__auto__))
})();var state__5896__auto__ = (function (){var statearr_11234 = f__5895__auto__.call(null);(statearr_11234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5894__auto__);
return statearr_11234;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5896__auto__);
});})(c__5894__auto__))
);
return c__5894__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5894__auto___11337 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5894__auto___11337){
return (function (){var f__5895__auto__ = (function (){var switch__5879__auto__ = ((function (c__5894__auto___11337){
return (function (state_11316){var state_val_11317 = (state_11316[(1)]);if((state_val_11317 === (7)))
{var inst_11312 = (state_11316[(2)]);var state_11316__$1 = state_11316;var statearr_11318_11338 = state_11316__$1;(statearr_11318_11338[(2)] = inst_11312);
(statearr_11318_11338[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11317 === (1)))
{var state_11316__$1 = state_11316;var statearr_11319_11339 = state_11316__$1;(statearr_11319_11339[(2)] = null);
(statearr_11319_11339[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11317 === (4)))
{var inst_11299 = (state_11316[(7)]);var inst_11299__$1 = (state_11316[(2)]);var inst_11300 = (inst_11299__$1 == null);var state_11316__$1 = (function (){var statearr_11320 = state_11316;(statearr_11320[(7)] = inst_11299__$1);
return statearr_11320;
})();if(cljs.core.truth_(inst_11300))
{var statearr_11321_11340 = state_11316__$1;(statearr_11321_11340[(1)] = (5));
} else
{var statearr_11322_11341 = state_11316__$1;(statearr_11322_11341[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11317 === (6)))
{var inst_11299 = (state_11316[(7)]);var state_11316__$1 = state_11316;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11316__$1,(11),to,inst_11299);
} else
{if((state_val_11317 === (3)))
{var inst_11314 = (state_11316[(2)]);var state_11316__$1 = state_11316;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11316__$1,inst_11314);
} else
{if((state_val_11317 === (2)))
{var state_11316__$1 = state_11316;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11316__$1,(4),from);
} else
{if((state_val_11317 === (11)))
{var inst_11309 = (state_11316[(2)]);var state_11316__$1 = (function (){var statearr_11323 = state_11316;(statearr_11323[(8)] = inst_11309);
return statearr_11323;
})();var statearr_11324_11342 = state_11316__$1;(statearr_11324_11342[(2)] = null);
(statearr_11324_11342[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11317 === (9)))
{var state_11316__$1 = state_11316;var statearr_11325_11343 = state_11316__$1;(statearr_11325_11343[(2)] = null);
(statearr_11325_11343[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11317 === (5)))
{var state_11316__$1 = state_11316;if(cljs.core.truth_(close_QMARK_))
{var statearr_11326_11344 = state_11316__$1;(statearr_11326_11344[(1)] = (8));
} else
{var statearr_11327_11345 = state_11316__$1;(statearr_11327_11345[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11317 === (10)))
{var inst_11306 = (state_11316[(2)]);var state_11316__$1 = state_11316;var statearr_11328_11346 = state_11316__$1;(statearr_11328_11346[(2)] = inst_11306);
(statearr_11328_11346[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11317 === (8)))
{var inst_11303 = cljs.core.async.close_BANG_.call(null,to);var state_11316__$1 = state_11316;var statearr_11329_11347 = state_11316__$1;(statearr_11329_11347[(2)] = inst_11303);
(statearr_11329_11347[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5894__auto___11337))
;return ((function (switch__5879__auto__,c__5894__auto___11337){
return (function() {
var state_machine__5880__auto__ = null;
var state_machine__5880__auto____0 = (function (){var statearr_11333 = [null,null,null,null,null,null,null,null,null];(statearr_11333[(0)] = state_machine__5880__auto__);
(statearr_11333[(1)] = (1));
return statearr_11333;
});
var state_machine__5880__auto____1 = (function (state_11316){while(true){
var ret_value__5881__auto__ = (function (){try{while(true){
var result__5882__auto__ = switch__5879__auto__.call(null,state_11316);if(cljs.core.keyword_identical_QMARK_.call(null,result__5882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5882__auto__;
}
break;
}
}catch (e11334){if((e11334 instanceof Object))
{var ex__5883__auto__ = e11334;var statearr_11335_11348 = state_11316;(statearr_11335_11348[(5)] = ex__5883__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11316);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11334;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11349 = state_11316;
state_11316 = G__11349;
continue;
}
} else
{return ret_value__5881__auto__;
}
break;
}
});
state_machine__5880__auto__ = function(state_11316){
switch(arguments.length){
case 0:
return state_machine__5880__auto____0.call(this);
case 1:
return state_machine__5880__auto____1.call(this,state_11316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5880__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5880__auto____0;
state_machine__5880__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5880__auto____1;
return state_machine__5880__auto__;
})()
;})(switch__5879__auto__,c__5894__auto___11337))
})();var state__5896__auto__ = (function (){var statearr_11336 = f__5895__auto__.call(null);(statearr_11336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5894__auto___11337);
return statearr_11336;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5896__auto__);
});})(c__5894__auto___11337))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5894__auto___11436 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5894__auto___11436,tc,fc){
return (function (){var f__5895__auto__ = (function (){var switch__5879__auto__ = ((function (c__5894__auto___11436,tc,fc){
return (function (state_11414){var state_val_11415 = (state_11414[(1)]);if((state_val_11415 === (7)))
{var inst_11410 = (state_11414[(2)]);var state_11414__$1 = state_11414;var statearr_11416_11437 = state_11414__$1;(statearr_11416_11437[(2)] = inst_11410);
(statearr_11416_11437[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11415 === (1)))
{var state_11414__$1 = state_11414;var statearr_11417_11438 = state_11414__$1;(statearr_11417_11438[(2)] = null);
(statearr_11417_11438[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11415 === (4)))
{var inst_11395 = (state_11414[(7)]);var inst_11395__$1 = (state_11414[(2)]);var inst_11396 = (inst_11395__$1 == null);var state_11414__$1 = (function (){var statearr_11418 = state_11414;(statearr_11418[(7)] = inst_11395__$1);
return statearr_11418;
})();if(cljs.core.truth_(inst_11396))
{var statearr_11419_11439 = state_11414__$1;(statearr_11419_11439[(1)] = (5));
} else
{var statearr_11420_11440 = state_11414__$1;(statearr_11420_11440[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11415 === (6)))
{var inst_11395 = (state_11414[(7)]);var inst_11401 = p.call(null,inst_11395);var state_11414__$1 = state_11414;if(cljs.core.truth_(inst_11401))
{var statearr_11421_11441 = state_11414__$1;(statearr_11421_11441[(1)] = (9));
} else
{var statearr_11422_11442 = state_11414__$1;(statearr_11422_11442[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11415 === (3)))
{var inst_11412 = (state_11414[(2)]);var state_11414__$1 = state_11414;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11414__$1,inst_11412);
} else
{if((state_val_11415 === (2)))
{var state_11414__$1 = state_11414;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11414__$1,(4),ch);
} else
{if((state_val_11415 === (11)))
{var inst_11395 = (state_11414[(7)]);var inst_11405 = (state_11414[(2)]);var state_11414__$1 = state_11414;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11414__$1,(8),inst_11405,inst_11395);
} else
{if((state_val_11415 === (9)))
{var state_11414__$1 = state_11414;var statearr_11423_11443 = state_11414__$1;(statearr_11423_11443[(2)] = tc);
(statearr_11423_11443[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11415 === (5)))
{var inst_11398 = cljs.core.async.close_BANG_.call(null,tc);var inst_11399 = cljs.core.async.close_BANG_.call(null,fc);var state_11414__$1 = (function (){var statearr_11424 = state_11414;(statearr_11424[(8)] = inst_11398);
return statearr_11424;
})();var statearr_11425_11444 = state_11414__$1;(statearr_11425_11444[(2)] = inst_11399);
(statearr_11425_11444[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11415 === (10)))
{var state_11414__$1 = state_11414;var statearr_11426_11445 = state_11414__$1;(statearr_11426_11445[(2)] = fc);
(statearr_11426_11445[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11415 === (8)))
{var inst_11407 = (state_11414[(2)]);var state_11414__$1 = (function (){var statearr_11427 = state_11414;(statearr_11427[(9)] = inst_11407);
return statearr_11427;
})();var statearr_11428_11446 = state_11414__$1;(statearr_11428_11446[(2)] = null);
(statearr_11428_11446[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5894__auto___11436,tc,fc))
;return ((function (switch__5879__auto__,c__5894__auto___11436,tc,fc){
return (function() {
var state_machine__5880__auto__ = null;
var state_machine__5880__auto____0 = (function (){var statearr_11432 = [null,null,null,null,null,null,null,null,null,null];(statearr_11432[(0)] = state_machine__5880__auto__);
(statearr_11432[(1)] = (1));
return statearr_11432;
});
var state_machine__5880__auto____1 = (function (state_11414){while(true){
var ret_value__5881__auto__ = (function (){try{while(true){
var result__5882__auto__ = switch__5879__auto__.call(null,state_11414);if(cljs.core.keyword_identical_QMARK_.call(null,result__5882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5882__auto__;
}
break;
}
}catch (e11433){if((e11433 instanceof Object))
{var ex__5883__auto__ = e11433;var statearr_11434_11447 = state_11414;(statearr_11434_11447[(5)] = ex__5883__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11414);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11433;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11448 = state_11414;
state_11414 = G__11448;
continue;
}
} else
{return ret_value__5881__auto__;
}
break;
}
});
state_machine__5880__auto__ = function(state_11414){
switch(arguments.length){
case 0:
return state_machine__5880__auto____0.call(this);
case 1:
return state_machine__5880__auto____1.call(this,state_11414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5880__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5880__auto____0;
state_machine__5880__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5880__auto____1;
return state_machine__5880__auto__;
})()
;})(switch__5879__auto__,c__5894__auto___11436,tc,fc))
})();var state__5896__auto__ = (function (){var statearr_11435 = f__5895__auto__.call(null);(statearr_11435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5894__auto___11436);
return statearr_11435;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5896__auto__);
});})(c__5894__auto___11436,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5894__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5894__auto__){
return (function (){var f__5895__auto__ = (function (){var switch__5879__auto__ = ((function (c__5894__auto__){
return (function (state_11495){var state_val_11496 = (state_11495[(1)]);if((state_val_11496 === (7)))
{var inst_11491 = (state_11495[(2)]);var state_11495__$1 = state_11495;var statearr_11497_11513 = state_11495__$1;(statearr_11497_11513[(2)] = inst_11491);
(statearr_11497_11513[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11496 === (6)))
{var inst_11484 = (state_11495[(7)]);var inst_11481 = (state_11495[(8)]);var inst_11488 = f.call(null,inst_11481,inst_11484);var inst_11481__$1 = inst_11488;var state_11495__$1 = (function (){var statearr_11498 = state_11495;(statearr_11498[(8)] = inst_11481__$1);
return statearr_11498;
})();var statearr_11499_11514 = state_11495__$1;(statearr_11499_11514[(2)] = null);
(statearr_11499_11514[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11496 === (5)))
{var inst_11481 = (state_11495[(8)]);var state_11495__$1 = state_11495;var statearr_11500_11515 = state_11495__$1;(statearr_11500_11515[(2)] = inst_11481);
(statearr_11500_11515[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11496 === (4)))
{var inst_11484 = (state_11495[(7)]);var inst_11484__$1 = (state_11495[(2)]);var inst_11485 = (inst_11484__$1 == null);var state_11495__$1 = (function (){var statearr_11501 = state_11495;(statearr_11501[(7)] = inst_11484__$1);
return statearr_11501;
})();if(cljs.core.truth_(inst_11485))
{var statearr_11502_11516 = state_11495__$1;(statearr_11502_11516[(1)] = (5));
} else
{var statearr_11503_11517 = state_11495__$1;(statearr_11503_11517[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11496 === (3)))
{var inst_11493 = (state_11495[(2)]);var state_11495__$1 = state_11495;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11495__$1,inst_11493);
} else
{if((state_val_11496 === (2)))
{var state_11495__$1 = state_11495;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11495__$1,(4),ch);
} else
{if((state_val_11496 === (1)))
{var inst_11481 = init;var state_11495__$1 = (function (){var statearr_11504 = state_11495;(statearr_11504[(8)] = inst_11481);
return statearr_11504;
})();var statearr_11505_11518 = state_11495__$1;(statearr_11505_11518[(2)] = null);
(statearr_11505_11518[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__5894__auto__))
;return ((function (switch__5879__auto__,c__5894__auto__){
return (function() {
var state_machine__5880__auto__ = null;
var state_machine__5880__auto____0 = (function (){var statearr_11509 = [null,null,null,null,null,null,null,null,null];(statearr_11509[(0)] = state_machine__5880__auto__);
(statearr_11509[(1)] = (1));
return statearr_11509;
});
var state_machine__5880__auto____1 = (function (state_11495){while(true){
var ret_value__5881__auto__ = (function (){try{while(true){
var result__5882__auto__ = switch__5879__auto__.call(null,state_11495);if(cljs.core.keyword_identical_QMARK_.call(null,result__5882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5882__auto__;
}
break;
}
}catch (e11510){if((e11510 instanceof Object))
{var ex__5883__auto__ = e11510;var statearr_11511_11519 = state_11495;(statearr_11511_11519[(5)] = ex__5883__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11495);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11510;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11520 = state_11495;
state_11495 = G__11520;
continue;
}
} else
{return ret_value__5881__auto__;
}
break;
}
});
state_machine__5880__auto__ = function(state_11495){
switch(arguments.length){
case 0:
return state_machine__5880__auto____0.call(this);
case 1:
return state_machine__5880__auto____1.call(this,state_11495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5880__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5880__auto____0;
state_machine__5880__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5880__auto____1;
return state_machine__5880__auto__;
})()
;})(switch__5879__auto__,c__5894__auto__))
})();var state__5896__auto__ = (function (){var statearr_11512 = f__5895__auto__.call(null);(statearr_11512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5894__auto__);
return statearr_11512;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5896__auto__);
});})(c__5894__auto__))
);
return c__5894__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5894__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5894__auto__){
return (function (){var f__5895__auto__ = (function (){var switch__5879__auto__ = ((function (c__5894__auto__){
return (function (state_11582){var state_val_11583 = (state_11582[(1)]);if((state_val_11583 === (7)))
{var inst_11563 = (state_11582[(7)]);var inst_11568 = (state_11582[(2)]);var inst_11569 = cljs.core.next.call(null,inst_11563);var inst_11563__$1 = inst_11569;var state_11582__$1 = (function (){var statearr_11584 = state_11582;(statearr_11584[(8)] = inst_11568);
(statearr_11584[(7)] = inst_11563__$1);
return statearr_11584;
})();var statearr_11585_11603 = state_11582__$1;(statearr_11585_11603[(2)] = null);
(statearr_11585_11603[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11583 === (1)))
{var inst_11562 = cljs.core.seq.call(null,coll);var inst_11563 = inst_11562;var state_11582__$1 = (function (){var statearr_11586 = state_11582;(statearr_11586[(7)] = inst_11563);
return statearr_11586;
})();var statearr_11587_11604 = state_11582__$1;(statearr_11587_11604[(2)] = null);
(statearr_11587_11604[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11583 === (4)))
{var inst_11563 = (state_11582[(7)]);var inst_11566 = cljs.core.first.call(null,inst_11563);var state_11582__$1 = state_11582;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11582__$1,(7),ch,inst_11566);
} else
{if((state_val_11583 === (6)))
{var inst_11578 = (state_11582[(2)]);var state_11582__$1 = state_11582;var statearr_11588_11605 = state_11582__$1;(statearr_11588_11605[(2)] = inst_11578);
(statearr_11588_11605[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11583 === (3)))
{var inst_11580 = (state_11582[(2)]);var state_11582__$1 = state_11582;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11582__$1,inst_11580);
} else
{if((state_val_11583 === (2)))
{var inst_11563 = (state_11582[(7)]);var state_11582__$1 = state_11582;if(cljs.core.truth_(inst_11563))
{var statearr_11589_11606 = state_11582__$1;(statearr_11589_11606[(1)] = (4));
} else
{var statearr_11590_11607 = state_11582__$1;(statearr_11590_11607[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11583 === (9)))
{var state_11582__$1 = state_11582;var statearr_11591_11608 = state_11582__$1;(statearr_11591_11608[(2)] = null);
(statearr_11591_11608[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11583 === (5)))
{var state_11582__$1 = state_11582;if(cljs.core.truth_(close_QMARK_))
{var statearr_11592_11609 = state_11582__$1;(statearr_11592_11609[(1)] = (8));
} else
{var statearr_11593_11610 = state_11582__$1;(statearr_11593_11610[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11583 === (10)))
{var inst_11576 = (state_11582[(2)]);var state_11582__$1 = state_11582;var statearr_11594_11611 = state_11582__$1;(statearr_11594_11611[(2)] = inst_11576);
(statearr_11594_11611[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11583 === (8)))
{var inst_11573 = cljs.core.async.close_BANG_.call(null,ch);var state_11582__$1 = state_11582;var statearr_11595_11612 = state_11582__$1;(statearr_11595_11612[(2)] = inst_11573);
(statearr_11595_11612[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});})(c__5894__auto__))
;return ((function (switch__5879__auto__,c__5894__auto__){
return (function() {
var state_machine__5880__auto__ = null;
var state_machine__5880__auto____0 = (function (){var statearr_11599 = [null,null,null,null,null,null,null,null,null];(statearr_11599[(0)] = state_machine__5880__auto__);
(statearr_11599[(1)] = (1));
return statearr_11599;
});
var state_machine__5880__auto____1 = (function (state_11582){while(true){
var ret_value__5881__auto__ = (function (){try{while(true){
var result__5882__auto__ = switch__5879__auto__.call(null,state_11582);if(cljs.core.keyword_identical_QMARK_.call(null,result__5882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5882__auto__;
}
break;
}
}catch (e11600){if((e11600 instanceof Object))
{var ex__5883__auto__ = e11600;var statearr_11601_11613 = state_11582;(statearr_11601_11613[(5)] = ex__5883__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11582);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11600;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11614 = state_11582;
state_11582 = G__11614;
continue;
}
} else
{return ret_value__5881__auto__;
}
break;
}
});
state_machine__5880__auto__ = function(state_11582){
switch(arguments.length){
case 0:
return state_machine__5880__auto____0.call(this);
case 1:
return state_machine__5880__auto____1.call(this,state_11582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5880__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5880__auto____0;
state_machine__5880__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5880__auto____1;
return state_machine__5880__auto__;
})()
;})(switch__5879__auto__,c__5894__auto__))
})();var state__5896__auto__ = (function (){var statearr_11602 = f__5895__auto__.call(null);(statearr_11602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5894__auto__);
return statearr_11602;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5896__auto__);
});})(c__5894__auto__))
);
return c__5894__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj11616 = {};return obj11616;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3628__auto__ = _;if(and__3628__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4277__auto__ = (((_ == null))?null:_);return (function (){var or__3640__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11618 = {};return obj11618;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11833 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11833 = (function (cs,ch,mult,meta11834){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11834 = meta11834;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11833.cljs$lang$type = true;
cljs.core.async.t11833.cljs$lang$ctorStr = "cljs.core.async/t11833";
cljs.core.async.t11833.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t11833");
});})(cs))
;
cljs.core.async.t11833.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11833.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11833.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11833.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11833.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11833.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11833.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11835){var self__ = this;
var _11835__$1 = this;return self__.meta11834;
});})(cs))
;
cljs.core.async.t11833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11835,meta11834__$1){var self__ = this;
var _11835__$1 = this;return (new cljs.core.async.t11833(self__.cs,self__.ch,self__.mult,meta11834__$1));
});})(cs))
;
cljs.core.async.__GT_t11833 = ((function (cs){
return (function __GT_t11833(cs__$1,ch__$1,mult__$1,meta11834){return (new cljs.core.async.t11833(cs__$1,ch__$1,mult__$1,meta11834));
});})(cs))
;
}
return (new cljs.core.async.t11833(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5894__auto___12047 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5894__auto___12047,cs,m,dchan,dctr,done){
return (function (){var f__5895__auto__ = (function (){var switch__5879__auto__ = ((function (c__5894__auto___12047,cs,m,dchan,dctr,done){
return (function (state_11965){var state_val_11966 = (state_11965[(1)]);if((state_val_11966 === (7)))
{var inst_11961 = (state_11965[(2)]);var state_11965__$1 = state_11965;var statearr_11967_12048 = state_11965__$1;(statearr_11967_12048[(2)] = inst_11961);
(statearr_11967_12048[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11966 === (20)))
{var inst_11867 = (state_11965[(7)]);var inst_11877 = cljs.core.first.call(null,inst_11867);var inst_11878 = cljs.core.nth.call(null,inst_11877,(0),null);var inst_11879 = cljs.core.nth.call(null,inst_11877,(1),null);var state_11965__$1 = (function (){var statearr_11968 = state_11965;(statearr_11968[(8)] = inst_11878);
return statearr_11968;
})();if(cljs.core.truth_(inst_11879))
{var statearr_11969_12049 = state_11965__$1;(statearr_11969_12049[(1)] = (22));
} else
{var statearr_11970_12050 = state_11965__$1;(statearr_11970_12050[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11966 === (27)))
{var inst_11909 = (state_11965[(9)]);var inst_11907 = (state_11965[(10)]);var inst_11914 = cljs.core._nth.call(null,inst_11907,inst_11909);var state_11965__$1 = (function (){var statearr_11971 = state_11965;(statearr_11971[(11)] = inst_11914);
return statearr_11971;
})();var statearr_11972_12051 = state_11965__$1;(statearr_11972_12051[(2)] = null);
(statearr_11972_12051[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11966 === (1)))
{var state_11965__$1 = state_11965;var statearr_11973_12052 = state_11965__$1;(statearr_11973_12052[(2)] = null);
(statearr_11973_12052[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11966 === (24)))
{var inst_11867 = (state_11965[(7)]);var inst_11884 = (state_11965[(2)]);var inst_11885 = cljs.core.next.call(null,inst_11867);var inst_11847 = inst_11885;var inst_11848 = null;var inst_11849 = (0);var inst_11850 = (0);var state_11965__$1 = (function (){var statearr_11974 = state_11965;(statearr_11974[(12)] = inst_11884);
(statearr_11974[(13)] = inst_11850);
(statearr_11974[(14)] = inst_11847);
(statearr_11974[(15)] = inst_11849);
(statearr_11974[(16)] = inst_11848);
return statearr_11974;
})();var statearr_11975_12053 = state_11965__$1;(statearr_11975_12053[(2)] = null);
(statearr_11975_12053[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11966 === (39)))
{var inst_11927 = (state_11965[(17)]);var inst_11945 = (state_11965[(2)]);var inst_11946 = cljs.core.next.call(null,inst_11927);var inst_11906 = inst_11946;var inst_11907 = null;var inst_11908 = (0);var inst_11909 = (0);var state_11965__$1 = (function (){var statearr_11979 = state_11965;(statearr_11979[(9)] = inst_11909);
(statearr_11979[(10)] = inst_11907);
(statearr_11979[(18)] = inst_11908);
(statearr_11979[(19)] = inst_11945);
(statearr_11979[(20)] = inst_11906);
return statearr_11979;
})();var statearr_11980_12054 = state_11965__$1;(statearr_11980_12054[(2)] = null);
(statearr_11980_12054[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11966 === (4)))
{var inst_11838 = (state_11965[(21)]);var inst_11838__$1 = (state_11965[(2)]);var inst_11839 = (inst_11838__$1 == null);var state_11965__$1 = (function (){var statearr_11981 = state_11965;(statearr_11981[(21)] = inst_11838__$1);
return statearr_11981;
})();if(cljs.core.truth_(inst_11839))
{var statearr_11982_12055 = state_11965__$1;(statearr_11982_12055[(1)] = (5));
} else
{var statearr_11983_12056 = state_11965__$1;(statearr_11983_12056[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11966 === (15)))
{var inst_11850 = (state_11965[(13)]);var inst_11847 = (state_11965[(14)]);var inst_11849 = (state_11965[(15)]);var inst_11848 = (state_11965[(16)]);var inst_11863 = (state_11965[(2)]);var inst_11864 = (inst_11850 + (1));var tmp11976 = inst_11847;var tmp11977 = inst_11849;var tmp11978 = inst_11848;var inst_11847__$1 = tmp11976;var inst_11848__$1 = tmp11978;var inst_11849__$1 = tmp11977;var inst_11850__$1 = inst_11864;var state_11965__$1 = (function (){var statearr_11984 = state_11965;(statearr_11984[(13)] = inst_11850__$1);
(statearr_11984[(14)] = inst_11847__$1);
(statearr_11984[(15)] = inst_11849__$1);
(statearr_11984[(22)] = inst_11863);
(statearr_11984[(16)] = inst_11848__$1);
return statearr_11984;
})();var statearr_11985_12057 = state_11965__$1;(statearr_11985_12057[(2)] = null);
(statearr_11985_12057[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11966 === (21)))
{var inst_11888 = (state_11965[(2)]);var state_11965__$1 = state_11965;var statearr_11986_12058 = state_11965__$1;(statearr_11986_12058[(2)] = inst_11888);
(statearr_11986_12058[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11966 === (31)))
{var inst_11914 = (state_11965[(11)]);var inst_11915 = (state_11965[(2)]);var inst_11916 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11917 = cljs.core.async.untap_STAR_.call(null,m,inst_11914);var state_11965__$1 = (function (){var statearr_11987 = state_11965;(statearr_11987[(23)] = inst_11916);
(statearr_11987[(24)] = inst_11915);
return statearr_11987;
})();var statearr_11988_12059 = state_11965__$1;(statearr_11988_12059[(2)] = inst_11917);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11965__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11966 === (32)))
{var inst_11914 = (state_11965[(11)]);var inst_11838 = (state_11965[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11965,(31),Object,null,(30));var inst_11921 = cljs.core.async.put_BANG_.call(null,inst_11914,inst_11838,done);var state_11965__$1 = state_11965;var statearr_11989_12060 = state_11965__$1;(statearr_11989_12060[(2)] = inst_11921);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11965__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11966 === (40)))
{var inst_11936 = (state_11965[(25)]);var inst_11937 = (state_11965[(2)]);var inst_11938 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11939 = cljs.core.async.untap_STAR_.call(null,m,inst_11936);var state_11965__$1 = (function (){var statearr_11990 = state_11965;(statearr_11990[(26)] = inst_11937);
(statearr_11990[(27)] = inst_11938);
return statearr_11990;
})();var statearr_11991_12061 = state_11965__$1;(statearr_11991_12061[(2)] = inst_11939);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11965__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11966 === (33)))
{var inst_11927 = (state_11965[(17)]);var inst_11929 = cljs.core.chunked_seq_QMARK_.call(null,inst_11927);var state_11965__$1 = state_11965;if(inst_11929)
{var statearr_11992_12062 = state_11965__$1;(statearr_11992_12062[(1)] = (36));
} else
{var statearr_11993_12063 = state_11965__$1;(statearr_11993_12063[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11966 === (13)))
{var inst_11857 = (state_11965[(28)]);var inst_11860 = cljs.core.async.close_BANG_.call(null,inst_11857);var state_11965__$1 = state_11965;var statearr_11994_12064 = state_11965__$1;(statearr_11994_12064[(2)] = inst_11860);
(statearr_11994_12064[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11966 === (22)))
{var inst_11878 = (state_11965[(8)]);var inst_11881 = cljs.core.async.close_BANG_.call(null,inst_11878);var state_11965__$1 = state_11965;var statearr_11995_12065 = state_11965__$1;(statearr_11995_12065[(2)] = inst_11881);
(statearr_11995_12065[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11966 === (36)))
{var inst_11927 = (state_11965[(17)]);var inst_11931 = cljs.core.chunk_first.call(null,inst_11927);var inst_11932 = cljs.core.chunk_rest.call(null,inst_11927);var inst_11933 = cljs.core.count.call(null,inst_11931);var inst_11906 = inst_11932;var inst_11907 = inst_11931;var inst_11908 = inst_11933;var inst_11909 = (0);var state_11965__$1 = (function (){var statearr_11996 = state_11965;(statearr_11996[(9)] = inst_11909);
(statearr_11996[(10)] = inst_11907);
(statearr_11996[(18)] = inst_11908);
(statearr_11996[(20)] = inst_11906);
return statearr_11996;
})();var statearr_11997_12066 = state_11965__$1;(statearr_11997_12066[(2)] = null);
(statearr_11997_12066[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11966 === (41)))
{var inst_11936 = (state_11965[(25)]);var inst_11838 = (state_11965[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11965,(40),Object,null,(39));var inst_11943 = cljs.core.async.put_BANG_.call(null,inst_11936,inst_11838,done);var state_11965__$1 = state_11965;var statearr_11998_12067 = state_11965__$1;(statearr_11998_12067[(2)] = inst_11943);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11965__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11966 === (29)))
{var inst_11954 = (state_11965[(2)]);var state_11965__$1 = state_11965;var statearr_11999_12068 = state_11965__$1;(statearr_11999_12068[(2)] = inst_11954);
(statearr_11999_12068[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11966 === (6)))
{var inst_11897 = cljs.core.deref.call(null,cs);var inst_11898 = cljs.core.keys.call(null,inst_11897);var inst_11899 = cljs.core.count.call(null,inst_11898);var inst_11900 = cljs.core.reset_BANG_.call(null,dctr,inst_11899);var inst_11905 = cljs.core.seq.call(null,inst_11898);var inst_11906 = inst_11905;var inst_11907 = null;var inst_11908 = (0);var inst_11909 = (0);var state_11965__$1 = (function (){var statearr_12000 = state_11965;(statearr_12000[(9)] = inst_11909);
(statearr_12000[(10)] = inst_11907);
(statearr_12000[(29)] = inst_11900);
(statearr_12000[(18)] = inst_11908);
(statearr_12000[(20)] = inst_11906);
return statearr_12000;
})();var statearr_12001_12069 = state_11965__$1;(statearr_12001_12069[(2)] = null);
(statearr_12001_12069[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11966 === (28)))
{var inst_11927 = (state_11965[(17)]);var inst_11906 = (state_11965[(20)]);var inst_11927__$1 = cljs.core.seq.call(null,inst_11906);var state_11965__$1 = (function (){var statearr_12002 = state_11965;(statearr_12002[(17)] = inst_11927__$1);
return statearr_12002;
})();if(inst_11927__$1)
{var statearr_12003_12070 = state_11965__$1;(statearr_12003_12070[(1)] = (33));
} else
{var statearr_12004_12071 = state_11965__$1;(statearr_12004_12071[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11966 === (25)))
{var inst_11909 = (state_11965[(9)]);var inst_11908 = (state_11965[(18)]);var inst_11911 = (inst_11909 < inst_11908);var inst_11912 = inst_11911;var state_11965__$1 = state_11965;if(cljs.core.truth_(inst_11912))
{var statearr_12005_12072 = state_11965__$1;(statearr_12005_12072[(1)] = (27));
} else
{var statearr_12006_12073 = state_11965__$1;(statearr_12006_12073[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11966 === (34)))
{var state_11965__$1 = state_11965;var statearr_12007_12074 = state_11965__$1;(statearr_12007_12074[(2)] = null);
(statearr_12007_12074[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11966 === (17)))
{var state_11965__$1 = state_11965;var statearr_12008_12075 = state_11965__$1;(statearr_12008_12075[(2)] = null);
(statearr_12008_12075[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11966 === (3)))
{var inst_11963 = (state_11965[(2)]);var state_11965__$1 = state_11965;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11965__$1,inst_11963);
} else
{if((state_val_11966 === (12)))
{var inst_11893 = (state_11965[(2)]);var state_11965__$1 = state_11965;var statearr_12009_12076 = state_11965__$1;(statearr_12009_12076[(2)] = inst_11893);
(statearr_12009_12076[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11966 === (2)))
{var state_11965__$1 = state_11965;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11965__$1,(4),ch);
} else
{if((state_val_11966 === (23)))
{var state_11965__$1 = state_11965;var statearr_12010_12077 = state_11965__$1;(statearr_12010_12077[(2)] = null);
(statearr_12010_12077[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11966 === (35)))
{var inst_11952 = (state_11965[(2)]);var state_11965__$1 = state_11965;var statearr_12011_12078 = state_11965__$1;(statearr_12011_12078[(2)] = inst_11952);
(statearr_12011_12078[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11966 === (19)))
{var inst_11867 = (state_11965[(7)]);var inst_11871 = cljs.core.chunk_first.call(null,inst_11867);var inst_11872 = cljs.core.chunk_rest.call(null,inst_11867);var inst_11873 = cljs.core.count.call(null,inst_11871);var inst_11847 = inst_11872;var inst_11848 = inst_11871;var inst_11849 = inst_11873;var inst_11850 = (0);var state_11965__$1 = (function (){var statearr_12012 = state_11965;(statearr_12012[(13)] = inst_11850);
(statearr_12012[(14)] = inst_11847);
(statearr_12012[(15)] = inst_11849);
(statearr_12012[(16)] = inst_11848);
return statearr_12012;
})();var statearr_12013_12079 = state_11965__$1;(statearr_12013_12079[(2)] = null);
(statearr_12013_12079[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11966 === (11)))
{var inst_11867 = (state_11965[(7)]);var inst_11847 = (state_11965[(14)]);var inst_11867__$1 = cljs.core.seq.call(null,inst_11847);var state_11965__$1 = (function (){var statearr_12014 = state_11965;(statearr_12014[(7)] = inst_11867__$1);
return statearr_12014;
})();if(inst_11867__$1)
{var statearr_12015_12080 = state_11965__$1;(statearr_12015_12080[(1)] = (16));
} else
{var statearr_12016_12081 = state_11965__$1;(statearr_12016_12081[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11966 === (9)))
{var inst_11895 = (state_11965[(2)]);var state_11965__$1 = state_11965;var statearr_12017_12082 = state_11965__$1;(statearr_12017_12082[(2)] = inst_11895);
(statearr_12017_12082[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11966 === (5)))
{var inst_11845 = cljs.core.deref.call(null,cs);var inst_11846 = cljs.core.seq.call(null,inst_11845);var inst_11847 = inst_11846;var inst_11848 = null;var inst_11849 = (0);var inst_11850 = (0);var state_11965__$1 = (function (){var statearr_12018 = state_11965;(statearr_12018[(13)] = inst_11850);
(statearr_12018[(14)] = inst_11847);
(statearr_12018[(15)] = inst_11849);
(statearr_12018[(16)] = inst_11848);
return statearr_12018;
})();var statearr_12019_12083 = state_11965__$1;(statearr_12019_12083[(2)] = null);
(statearr_12019_12083[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11966 === (14)))
{var state_11965__$1 = state_11965;var statearr_12020_12084 = state_11965__$1;(statearr_12020_12084[(2)] = null);
(statearr_12020_12084[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11966 === (26)))
{var inst_11956 = (state_11965[(2)]);var state_11965__$1 = (function (){var statearr_12021 = state_11965;(statearr_12021[(30)] = inst_11956);
return statearr_12021;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11965__$1,(42),dchan);
} else
{if((state_val_11966 === (16)))
{var inst_11867 = (state_11965[(7)]);var inst_11869 = cljs.core.chunked_seq_QMARK_.call(null,inst_11867);var state_11965__$1 = state_11965;if(inst_11869)
{var statearr_12025_12085 = state_11965__$1;(statearr_12025_12085[(1)] = (19));
} else
{var statearr_12026_12086 = state_11965__$1;(statearr_12026_12086[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11966 === (38)))
{var inst_11949 = (state_11965[(2)]);var state_11965__$1 = state_11965;var statearr_12027_12087 = state_11965__$1;(statearr_12027_12087[(2)] = inst_11949);
(statearr_12027_12087[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11966 === (30)))
{var inst_11909 = (state_11965[(9)]);var inst_11907 = (state_11965[(10)]);var inst_11908 = (state_11965[(18)]);var inst_11906 = (state_11965[(20)]);var inst_11923 = (state_11965[(2)]);var inst_11924 = (inst_11909 + (1));var tmp12022 = inst_11907;var tmp12023 = inst_11908;var tmp12024 = inst_11906;var inst_11906__$1 = tmp12024;var inst_11907__$1 = tmp12022;var inst_11908__$1 = tmp12023;var inst_11909__$1 = inst_11924;var state_11965__$1 = (function (){var statearr_12028 = state_11965;(statearr_12028[(9)] = inst_11909__$1);
(statearr_12028[(10)] = inst_11907__$1);
(statearr_12028[(18)] = inst_11908__$1);
(statearr_12028[(31)] = inst_11923);
(statearr_12028[(20)] = inst_11906__$1);
return statearr_12028;
})();var statearr_12029_12088 = state_11965__$1;(statearr_12029_12088[(2)] = null);
(statearr_12029_12088[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11966 === (10)))
{var inst_11850 = (state_11965[(13)]);var inst_11848 = (state_11965[(16)]);var inst_11856 = cljs.core._nth.call(null,inst_11848,inst_11850);var inst_11857 = cljs.core.nth.call(null,inst_11856,(0),null);var inst_11858 = cljs.core.nth.call(null,inst_11856,(1),null);var state_11965__$1 = (function (){var statearr_12030 = state_11965;(statearr_12030[(28)] = inst_11857);
return statearr_12030;
})();if(cljs.core.truth_(inst_11858))
{var statearr_12031_12089 = state_11965__$1;(statearr_12031_12089[(1)] = (13));
} else
{var statearr_12032_12090 = state_11965__$1;(statearr_12032_12090[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11966 === (18)))
{var inst_11891 = (state_11965[(2)]);var state_11965__$1 = state_11965;var statearr_12033_12091 = state_11965__$1;(statearr_12033_12091[(2)] = inst_11891);
(statearr_12033_12091[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11966 === (42)))
{var inst_11958 = (state_11965[(2)]);var state_11965__$1 = (function (){var statearr_12034 = state_11965;(statearr_12034[(32)] = inst_11958);
return statearr_12034;
})();var statearr_12035_12092 = state_11965__$1;(statearr_12035_12092[(2)] = null);
(statearr_12035_12092[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11966 === (37)))
{var inst_11927 = (state_11965[(17)]);var inst_11936 = cljs.core.first.call(null,inst_11927);var state_11965__$1 = (function (){var statearr_12036 = state_11965;(statearr_12036[(25)] = inst_11936);
return statearr_12036;
})();var statearr_12037_12093 = state_11965__$1;(statearr_12037_12093[(2)] = null);
(statearr_12037_12093[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11966 === (8)))
{var inst_11850 = (state_11965[(13)]);var inst_11849 = (state_11965[(15)]);var inst_11852 = (inst_11850 < inst_11849);var inst_11853 = inst_11852;var state_11965__$1 = state_11965;if(cljs.core.truth_(inst_11853))
{var statearr_12038_12094 = state_11965__$1;(statearr_12038_12094[(1)] = (10));
} else
{var statearr_12039_12095 = state_11965__$1;(statearr_12039_12095[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5894__auto___12047,cs,m,dchan,dctr,done))
;return ((function (switch__5879__auto__,c__5894__auto___12047,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5880__auto__ = null;
var state_machine__5880__auto____0 = (function (){var statearr_12043 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12043[(0)] = state_machine__5880__auto__);
(statearr_12043[(1)] = (1));
return statearr_12043;
});
var state_machine__5880__auto____1 = (function (state_11965){while(true){
var ret_value__5881__auto__ = (function (){try{while(true){
var result__5882__auto__ = switch__5879__auto__.call(null,state_11965);if(cljs.core.keyword_identical_QMARK_.call(null,result__5882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5882__auto__;
}
break;
}
}catch (e12044){if((e12044 instanceof Object))
{var ex__5883__auto__ = e12044;var statearr_12045_12096 = state_11965;(statearr_12045_12096[(5)] = ex__5883__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11965);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12044;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12097 = state_11965;
state_11965 = G__12097;
continue;
}
} else
{return ret_value__5881__auto__;
}
break;
}
});
state_machine__5880__auto__ = function(state_11965){
switch(arguments.length){
case 0:
return state_machine__5880__auto____0.call(this);
case 1:
return state_machine__5880__auto____1.call(this,state_11965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5880__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5880__auto____0;
state_machine__5880__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5880__auto____1;
return state_machine__5880__auto__;
})()
;})(switch__5879__auto__,c__5894__auto___12047,cs,m,dchan,dctr,done))
})();var state__5896__auto__ = (function (){var statearr_12046 = f__5895__auto__.call(null);(statearr_12046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5894__auto___12047);
return statearr_12046;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5896__auto__);
});})(c__5894__auto___12047,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj12099 = {};return obj12099;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12209 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12209 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12210){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12210 = meta12210;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12209.cljs$lang$type = true;
cljs.core.async.t12209.cljs$lang$ctorStr = "cljs.core.async/t12209";
cljs.core.async.t12209.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t12209");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12209.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12209.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12209.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12209.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12209.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12209.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12209.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12209.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12209.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12211){var self__ = this;
var _12211__$1 = this;return self__.meta12210;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12211,meta12210__$1){var self__ = this;
var _12211__$1 = this;return (new cljs.core.async.t12209(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12210__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12209 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12209(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12210){return (new cljs.core.async.t12209(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12210));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12209(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5894__auto___12318 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5894__auto___12318,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5895__auto__ = (function (){var switch__5879__auto__ = ((function (c__5894__auto___12318,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12276){var state_val_12277 = (state_12276[(1)]);if((state_val_12277 === (7)))
{var inst_12225 = (state_12276[(7)]);var inst_12230 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12225);var state_12276__$1 = state_12276;var statearr_12278_12319 = state_12276__$1;(statearr_12278_12319[(2)] = inst_12230);
(statearr_12278_12319[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12277 === (20)))
{var inst_12240 = (state_12276[(8)]);var state_12276__$1 = state_12276;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12276__$1,(23),out,inst_12240);
} else
{if((state_val_12277 === (1)))
{var inst_12215 = (state_12276[(9)]);var inst_12215__$1 = calc_state.call(null);var inst_12216 = cljs.core.seq_QMARK_.call(null,inst_12215__$1);var state_12276__$1 = (function (){var statearr_12279 = state_12276;(statearr_12279[(9)] = inst_12215__$1);
return statearr_12279;
})();if(inst_12216)
{var statearr_12280_12320 = state_12276__$1;(statearr_12280_12320[(1)] = (2));
} else
{var statearr_12281_12321 = state_12276__$1;(statearr_12281_12321[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12277 === (4)))
{var inst_12215 = (state_12276[(9)]);var inst_12221 = (state_12276[(2)]);var inst_12222 = cljs.core.get.call(null,inst_12221,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12223 = cljs.core.get.call(null,inst_12221,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12224 = cljs.core.get.call(null,inst_12221,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_12225 = inst_12215;var state_12276__$1 = (function (){var statearr_12282 = state_12276;(statearr_12282[(10)] = inst_12223);
(statearr_12282[(11)] = inst_12222);
(statearr_12282[(12)] = inst_12224);
(statearr_12282[(7)] = inst_12225);
return statearr_12282;
})();var statearr_12283_12322 = state_12276__$1;(statearr_12283_12322[(2)] = null);
(statearr_12283_12322[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12277 === (15)))
{var state_12276__$1 = state_12276;var statearr_12284_12323 = state_12276__$1;(statearr_12284_12323[(2)] = null);
(statearr_12284_12323[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12277 === (21)))
{var state_12276__$1 = state_12276;var statearr_12285_12324 = state_12276__$1;(statearr_12285_12324[(2)] = null);
(statearr_12285_12324[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12277 === (13)))
{var inst_12272 = (state_12276[(2)]);var state_12276__$1 = state_12276;var statearr_12286_12325 = state_12276__$1;(statearr_12286_12325[(2)] = inst_12272);
(statearr_12286_12325[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12277 === (22)))
{var inst_12233 = (state_12276[(13)]);var inst_12269 = (state_12276[(2)]);var inst_12225 = inst_12233;var state_12276__$1 = (function (){var statearr_12287 = state_12276;(statearr_12287[(14)] = inst_12269);
(statearr_12287[(7)] = inst_12225);
return statearr_12287;
})();var statearr_12288_12326 = state_12276__$1;(statearr_12288_12326[(2)] = null);
(statearr_12288_12326[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12277 === (6)))
{var inst_12274 = (state_12276[(2)]);var state_12276__$1 = state_12276;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12276__$1,inst_12274);
} else
{if((state_val_12277 === (17)))
{var inst_12255 = (state_12276[(15)]);var state_12276__$1 = state_12276;var statearr_12289_12327 = state_12276__$1;(statearr_12289_12327[(2)] = inst_12255);
(statearr_12289_12327[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12277 === (3)))
{var inst_12215 = (state_12276[(9)]);var state_12276__$1 = state_12276;var statearr_12290_12328 = state_12276__$1;(statearr_12290_12328[(2)] = inst_12215);
(statearr_12290_12328[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12277 === (12)))
{var inst_12236 = (state_12276[(16)]);var inst_12255 = (state_12276[(15)]);var inst_12241 = (state_12276[(17)]);var inst_12255__$1 = inst_12236.call(null,inst_12241);var state_12276__$1 = (function (){var statearr_12291 = state_12276;(statearr_12291[(15)] = inst_12255__$1);
return statearr_12291;
})();if(cljs.core.truth_(inst_12255__$1))
{var statearr_12292_12329 = state_12276__$1;(statearr_12292_12329[(1)] = (17));
} else
{var statearr_12293_12330 = state_12276__$1;(statearr_12293_12330[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12277 === (2)))
{var inst_12215 = (state_12276[(9)]);var inst_12218 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12215);var state_12276__$1 = state_12276;var statearr_12294_12331 = state_12276__$1;(statearr_12294_12331[(2)] = inst_12218);
(statearr_12294_12331[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12277 === (23)))
{var inst_12266 = (state_12276[(2)]);var state_12276__$1 = state_12276;var statearr_12295_12332 = state_12276__$1;(statearr_12295_12332[(2)] = inst_12266);
(statearr_12295_12332[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12277 === (19)))
{var inst_12263 = (state_12276[(2)]);var state_12276__$1 = state_12276;if(cljs.core.truth_(inst_12263))
{var statearr_12296_12333 = state_12276__$1;(statearr_12296_12333[(1)] = (20));
} else
{var statearr_12297_12334 = state_12276__$1;(statearr_12297_12334[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12277 === (11)))
{var inst_12240 = (state_12276[(8)]);var inst_12246 = (inst_12240 == null);var state_12276__$1 = state_12276;if(cljs.core.truth_(inst_12246))
{var statearr_12298_12335 = state_12276__$1;(statearr_12298_12335[(1)] = (14));
} else
{var statearr_12299_12336 = state_12276__$1;(statearr_12299_12336[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12277 === (9)))
{var inst_12233 = (state_12276[(13)]);var inst_12233__$1 = (state_12276[(2)]);var inst_12234 = cljs.core.get.call(null,inst_12233__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12235 = cljs.core.get.call(null,inst_12233__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12236 = cljs.core.get.call(null,inst_12233__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_12276__$1 = (function (){var statearr_12300 = state_12276;(statearr_12300[(16)] = inst_12236);
(statearr_12300[(13)] = inst_12233__$1);
(statearr_12300[(18)] = inst_12235);
return statearr_12300;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12276__$1,(10),inst_12234);
} else
{if((state_val_12277 === (5)))
{var inst_12225 = (state_12276[(7)]);var inst_12228 = cljs.core.seq_QMARK_.call(null,inst_12225);var state_12276__$1 = state_12276;if(inst_12228)
{var statearr_12301_12337 = state_12276__$1;(statearr_12301_12337[(1)] = (7));
} else
{var statearr_12302_12338 = state_12276__$1;(statearr_12302_12338[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12277 === (14)))
{var inst_12241 = (state_12276[(17)]);var inst_12248 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12241);var state_12276__$1 = state_12276;var statearr_12303_12339 = state_12276__$1;(statearr_12303_12339[(2)] = inst_12248);
(statearr_12303_12339[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12277 === (16)))
{var inst_12251 = (state_12276[(2)]);var inst_12252 = calc_state.call(null);var inst_12225 = inst_12252;var state_12276__$1 = (function (){var statearr_12304 = state_12276;(statearr_12304[(19)] = inst_12251);
(statearr_12304[(7)] = inst_12225);
return statearr_12304;
})();var statearr_12305_12340 = state_12276__$1;(statearr_12305_12340[(2)] = null);
(statearr_12305_12340[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12277 === (10)))
{var inst_12240 = (state_12276[(8)]);var inst_12241 = (state_12276[(17)]);var inst_12239 = (state_12276[(2)]);var inst_12240__$1 = cljs.core.nth.call(null,inst_12239,(0),null);var inst_12241__$1 = cljs.core.nth.call(null,inst_12239,(1),null);var inst_12242 = (inst_12240__$1 == null);var inst_12243 = cljs.core._EQ_.call(null,inst_12241__$1,change);var inst_12244 = (inst_12242) || (inst_12243);var state_12276__$1 = (function (){var statearr_12306 = state_12276;(statearr_12306[(8)] = inst_12240__$1);
(statearr_12306[(17)] = inst_12241__$1);
return statearr_12306;
})();if(cljs.core.truth_(inst_12244))
{var statearr_12307_12341 = state_12276__$1;(statearr_12307_12341[(1)] = (11));
} else
{var statearr_12308_12342 = state_12276__$1;(statearr_12308_12342[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12277 === (18)))
{var inst_12236 = (state_12276[(16)]);var inst_12241 = (state_12276[(17)]);var inst_12235 = (state_12276[(18)]);var inst_12258 = cljs.core.empty_QMARK_.call(null,inst_12236);var inst_12259 = inst_12235.call(null,inst_12241);var inst_12260 = cljs.core.not.call(null,inst_12259);var inst_12261 = (inst_12258) && (inst_12260);var state_12276__$1 = state_12276;var statearr_12309_12343 = state_12276__$1;(statearr_12309_12343[(2)] = inst_12261);
(statearr_12309_12343[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12277 === (8)))
{var inst_12225 = (state_12276[(7)]);var state_12276__$1 = state_12276;var statearr_12310_12344 = state_12276__$1;(statearr_12310_12344[(2)] = inst_12225);
(statearr_12310_12344[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5894__auto___12318,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5879__auto__,c__5894__auto___12318,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5880__auto__ = null;
var state_machine__5880__auto____0 = (function (){var statearr_12314 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12314[(0)] = state_machine__5880__auto__);
(statearr_12314[(1)] = (1));
return statearr_12314;
});
var state_machine__5880__auto____1 = (function (state_12276){while(true){
var ret_value__5881__auto__ = (function (){try{while(true){
var result__5882__auto__ = switch__5879__auto__.call(null,state_12276);if(cljs.core.keyword_identical_QMARK_.call(null,result__5882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5882__auto__;
}
break;
}
}catch (e12315){if((e12315 instanceof Object))
{var ex__5883__auto__ = e12315;var statearr_12316_12345 = state_12276;(statearr_12316_12345[(5)] = ex__5883__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12276);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12315;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12346 = state_12276;
state_12276 = G__12346;
continue;
}
} else
{return ret_value__5881__auto__;
}
break;
}
});
state_machine__5880__auto__ = function(state_12276){
switch(arguments.length){
case 0:
return state_machine__5880__auto____0.call(this);
case 1:
return state_machine__5880__auto____1.call(this,state_12276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5880__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5880__auto____0;
state_machine__5880__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5880__auto____1;
return state_machine__5880__auto__;
})()
;})(switch__5879__auto__,c__5894__auto___12318,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5896__auto__ = (function (){var statearr_12317 = f__5895__auto__.call(null);(statearr_12317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5894__auto___12318);
return statearr_12317;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5896__auto__);
});})(c__5894__auto___12318,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj12348 = {};return obj12348;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3640__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3640__auto__,mults){
return (function (p1__12349_SHARP_){if(cljs.core.truth_(p1__12349_SHARP_.call(null,topic)))
{return p1__12349_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12349_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3640__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12474 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12474 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12475){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12475 = meta12475;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12474.cljs$lang$type = true;
cljs.core.async.t12474.cljs$lang$ctorStr = "cljs.core.async/t12474";
cljs.core.async.t12474.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t12474");
});})(mults,ensure_mult))
;
cljs.core.async.t12474.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12474.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12474.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12474.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12474.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12474.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12474.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12474.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12476){var self__ = this;
var _12476__$1 = this;return self__.meta12475;
});})(mults,ensure_mult))
;
cljs.core.async.t12474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12476,meta12475__$1){var self__ = this;
var _12476__$1 = this;return (new cljs.core.async.t12474(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12475__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12474 = ((function (mults,ensure_mult){
return (function __GT_t12474(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12475){return (new cljs.core.async.t12474(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12475));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12474(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5894__auto___12598 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5894__auto___12598,mults,ensure_mult,p){
return (function (){var f__5895__auto__ = (function (){var switch__5879__auto__ = ((function (c__5894__auto___12598,mults,ensure_mult,p){
return (function (state_12550){var state_val_12551 = (state_12550[(1)]);if((state_val_12551 === (7)))
{var inst_12546 = (state_12550[(2)]);var state_12550__$1 = state_12550;var statearr_12552_12599 = state_12550__$1;(statearr_12552_12599[(2)] = inst_12546);
(statearr_12552_12599[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (20)))
{var state_12550__$1 = state_12550;var statearr_12553_12600 = state_12550__$1;(statearr_12553_12600[(2)] = null);
(statearr_12553_12600[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (1)))
{var state_12550__$1 = state_12550;var statearr_12554_12601 = state_12550__$1;(statearr_12554_12601[(2)] = null);
(statearr_12554_12601[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (24)))
{var inst_12479 = (state_12550[(7)]);var inst_12529 = (state_12550[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12550,(23),Object,null,(22));var inst_12536 = cljs.core.async.muxch_STAR_.call(null,inst_12529);var state_12550__$1 = state_12550;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12550__$1,(25),inst_12536,inst_12479);
} else
{if((state_val_12551 === (4)))
{var inst_12479 = (state_12550[(7)]);var inst_12479__$1 = (state_12550[(2)]);var inst_12480 = (inst_12479__$1 == null);var state_12550__$1 = (function (){var statearr_12555 = state_12550;(statearr_12555[(7)] = inst_12479__$1);
return statearr_12555;
})();if(cljs.core.truth_(inst_12480))
{var statearr_12556_12602 = state_12550__$1;(statearr_12556_12602[(1)] = (5));
} else
{var statearr_12557_12603 = state_12550__$1;(statearr_12557_12603[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (15)))
{var inst_12521 = (state_12550[(2)]);var state_12550__$1 = state_12550;var statearr_12558_12604 = state_12550__$1;(statearr_12558_12604[(2)] = inst_12521);
(statearr_12558_12604[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (21)))
{var inst_12543 = (state_12550[(2)]);var state_12550__$1 = (function (){var statearr_12559 = state_12550;(statearr_12559[(9)] = inst_12543);
return statearr_12559;
})();var statearr_12560_12605 = state_12550__$1;(statearr_12560_12605[(2)] = null);
(statearr_12560_12605[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (13)))
{var inst_12503 = (state_12550[(10)]);var inst_12505 = cljs.core.chunked_seq_QMARK_.call(null,inst_12503);var state_12550__$1 = state_12550;if(inst_12505)
{var statearr_12561_12606 = state_12550__$1;(statearr_12561_12606[(1)] = (16));
} else
{var statearr_12562_12607 = state_12550__$1;(statearr_12562_12607[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (22)))
{var inst_12540 = (state_12550[(2)]);var state_12550__$1 = state_12550;var statearr_12563_12608 = state_12550__$1;(statearr_12563_12608[(2)] = inst_12540);
(statearr_12563_12608[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (6)))
{var inst_12479 = (state_12550[(7)]);var inst_12527 = (state_12550[(11)]);var inst_12529 = (state_12550[(8)]);var inst_12527__$1 = topic_fn.call(null,inst_12479);var inst_12528 = cljs.core.deref.call(null,mults);var inst_12529__$1 = cljs.core.get.call(null,inst_12528,inst_12527__$1);var state_12550__$1 = (function (){var statearr_12564 = state_12550;(statearr_12564[(11)] = inst_12527__$1);
(statearr_12564[(8)] = inst_12529__$1);
return statearr_12564;
})();if(cljs.core.truth_(inst_12529__$1))
{var statearr_12565_12609 = state_12550__$1;(statearr_12565_12609[(1)] = (19));
} else
{var statearr_12566_12610 = state_12550__$1;(statearr_12566_12610[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (25)))
{var inst_12538 = (state_12550[(2)]);var state_12550__$1 = state_12550;var statearr_12567_12611 = state_12550__$1;(statearr_12567_12611[(2)] = inst_12538);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12550__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (17)))
{var inst_12503 = (state_12550[(10)]);var inst_12512 = cljs.core.first.call(null,inst_12503);var inst_12513 = cljs.core.async.muxch_STAR_.call(null,inst_12512);var inst_12514 = cljs.core.async.close_BANG_.call(null,inst_12513);var inst_12515 = cljs.core.next.call(null,inst_12503);var inst_12489 = inst_12515;var inst_12490 = null;var inst_12491 = (0);var inst_12492 = (0);var state_12550__$1 = (function (){var statearr_12568 = state_12550;(statearr_12568[(12)] = inst_12514);
(statearr_12568[(13)] = inst_12489);
(statearr_12568[(14)] = inst_12490);
(statearr_12568[(15)] = inst_12491);
(statearr_12568[(16)] = inst_12492);
return statearr_12568;
})();var statearr_12569_12612 = state_12550__$1;(statearr_12569_12612[(2)] = null);
(statearr_12569_12612[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (3)))
{var inst_12548 = (state_12550[(2)]);var state_12550__$1 = state_12550;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12550__$1,inst_12548);
} else
{if((state_val_12551 === (12)))
{var inst_12523 = (state_12550[(2)]);var state_12550__$1 = state_12550;var statearr_12570_12613 = state_12550__$1;(statearr_12570_12613[(2)] = inst_12523);
(statearr_12570_12613[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (2)))
{var state_12550__$1 = state_12550;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12550__$1,(4),ch);
} else
{if((state_val_12551 === (23)))
{var inst_12527 = (state_12550[(11)]);var inst_12531 = (state_12550[(2)]);var inst_12532 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12527);var state_12550__$1 = (function (){var statearr_12571 = state_12550;(statearr_12571[(17)] = inst_12531);
return statearr_12571;
})();var statearr_12572_12614 = state_12550__$1;(statearr_12572_12614[(2)] = inst_12532);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12550__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (19)))
{var state_12550__$1 = state_12550;var statearr_12573_12615 = state_12550__$1;(statearr_12573_12615[(2)] = null);
(statearr_12573_12615[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (11)))
{var inst_12489 = (state_12550[(13)]);var inst_12503 = (state_12550[(10)]);var inst_12503__$1 = cljs.core.seq.call(null,inst_12489);var state_12550__$1 = (function (){var statearr_12574 = state_12550;(statearr_12574[(10)] = inst_12503__$1);
return statearr_12574;
})();if(inst_12503__$1)
{var statearr_12575_12616 = state_12550__$1;(statearr_12575_12616[(1)] = (13));
} else
{var statearr_12576_12617 = state_12550__$1;(statearr_12576_12617[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (9)))
{var inst_12525 = (state_12550[(2)]);var state_12550__$1 = state_12550;var statearr_12577_12618 = state_12550__$1;(statearr_12577_12618[(2)] = inst_12525);
(statearr_12577_12618[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (5)))
{var inst_12486 = cljs.core.deref.call(null,mults);var inst_12487 = cljs.core.vals.call(null,inst_12486);var inst_12488 = cljs.core.seq.call(null,inst_12487);var inst_12489 = inst_12488;var inst_12490 = null;var inst_12491 = (0);var inst_12492 = (0);var state_12550__$1 = (function (){var statearr_12578 = state_12550;(statearr_12578[(13)] = inst_12489);
(statearr_12578[(14)] = inst_12490);
(statearr_12578[(15)] = inst_12491);
(statearr_12578[(16)] = inst_12492);
return statearr_12578;
})();var statearr_12579_12619 = state_12550__$1;(statearr_12579_12619[(2)] = null);
(statearr_12579_12619[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (14)))
{var state_12550__$1 = state_12550;var statearr_12583_12620 = state_12550__$1;(statearr_12583_12620[(2)] = null);
(statearr_12583_12620[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (16)))
{var inst_12503 = (state_12550[(10)]);var inst_12507 = cljs.core.chunk_first.call(null,inst_12503);var inst_12508 = cljs.core.chunk_rest.call(null,inst_12503);var inst_12509 = cljs.core.count.call(null,inst_12507);var inst_12489 = inst_12508;var inst_12490 = inst_12507;var inst_12491 = inst_12509;var inst_12492 = (0);var state_12550__$1 = (function (){var statearr_12584 = state_12550;(statearr_12584[(13)] = inst_12489);
(statearr_12584[(14)] = inst_12490);
(statearr_12584[(15)] = inst_12491);
(statearr_12584[(16)] = inst_12492);
return statearr_12584;
})();var statearr_12585_12621 = state_12550__$1;(statearr_12585_12621[(2)] = null);
(statearr_12585_12621[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (10)))
{var inst_12489 = (state_12550[(13)]);var inst_12490 = (state_12550[(14)]);var inst_12491 = (state_12550[(15)]);var inst_12492 = (state_12550[(16)]);var inst_12497 = cljs.core._nth.call(null,inst_12490,inst_12492);var inst_12498 = cljs.core.async.muxch_STAR_.call(null,inst_12497);var inst_12499 = cljs.core.async.close_BANG_.call(null,inst_12498);var inst_12500 = (inst_12492 + (1));var tmp12580 = inst_12489;var tmp12581 = inst_12490;var tmp12582 = inst_12491;var inst_12489__$1 = tmp12580;var inst_12490__$1 = tmp12581;var inst_12491__$1 = tmp12582;var inst_12492__$1 = inst_12500;var state_12550__$1 = (function (){var statearr_12586 = state_12550;(statearr_12586[(13)] = inst_12489__$1);
(statearr_12586[(14)] = inst_12490__$1);
(statearr_12586[(15)] = inst_12491__$1);
(statearr_12586[(18)] = inst_12499);
(statearr_12586[(16)] = inst_12492__$1);
return statearr_12586;
})();var statearr_12587_12622 = state_12550__$1;(statearr_12587_12622[(2)] = null);
(statearr_12587_12622[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (18)))
{var inst_12518 = (state_12550[(2)]);var state_12550__$1 = state_12550;var statearr_12588_12623 = state_12550__$1;(statearr_12588_12623[(2)] = inst_12518);
(statearr_12588_12623[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12551 === (8)))
{var inst_12491 = (state_12550[(15)]);var inst_12492 = (state_12550[(16)]);var inst_12494 = (inst_12492 < inst_12491);var inst_12495 = inst_12494;var state_12550__$1 = state_12550;if(cljs.core.truth_(inst_12495))
{var statearr_12589_12624 = state_12550__$1;(statearr_12589_12624[(1)] = (10));
} else
{var statearr_12590_12625 = state_12550__$1;(statearr_12590_12625[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5894__auto___12598,mults,ensure_mult,p))
;return ((function (switch__5879__auto__,c__5894__auto___12598,mults,ensure_mult,p){
return (function() {
var state_machine__5880__auto__ = null;
var state_machine__5880__auto____0 = (function (){var statearr_12594 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12594[(0)] = state_machine__5880__auto__);
(statearr_12594[(1)] = (1));
return statearr_12594;
});
var state_machine__5880__auto____1 = (function (state_12550){while(true){
var ret_value__5881__auto__ = (function (){try{while(true){
var result__5882__auto__ = switch__5879__auto__.call(null,state_12550);if(cljs.core.keyword_identical_QMARK_.call(null,result__5882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5882__auto__;
}
break;
}
}catch (e12595){if((e12595 instanceof Object))
{var ex__5883__auto__ = e12595;var statearr_12596_12626 = state_12550;(statearr_12596_12626[(5)] = ex__5883__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12550);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12595;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12627 = state_12550;
state_12550 = G__12627;
continue;
}
} else
{return ret_value__5881__auto__;
}
break;
}
});
state_machine__5880__auto__ = function(state_12550){
switch(arguments.length){
case 0:
return state_machine__5880__auto____0.call(this);
case 1:
return state_machine__5880__auto____1.call(this,state_12550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5880__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5880__auto____0;
state_machine__5880__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5880__auto____1;
return state_machine__5880__auto__;
})()
;})(switch__5879__auto__,c__5894__auto___12598,mults,ensure_mult,p))
})();var state__5896__auto__ = (function (){var statearr_12597 = f__5895__auto__.call(null);(statearr_12597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5894__auto___12598);
return statearr_12597;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5896__auto__);
});})(c__5894__auto___12598,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5894__auto___12764 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5894__auto___12764,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5895__auto__ = (function (){var switch__5879__auto__ = ((function (c__5894__auto___12764,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12734){var state_val_12735 = (state_12734[(1)]);if((state_val_12735 === (7)))
{var state_12734__$1 = state_12734;var statearr_12736_12765 = state_12734__$1;(statearr_12736_12765[(2)] = null);
(statearr_12736_12765[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12735 === (1)))
{var state_12734__$1 = state_12734;var statearr_12737_12766 = state_12734__$1;(statearr_12737_12766[(2)] = null);
(statearr_12737_12766[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12735 === (4)))
{var inst_12698 = (state_12734[(7)]);var inst_12700 = (inst_12698 < cnt);var state_12734__$1 = state_12734;if(cljs.core.truth_(inst_12700))
{var statearr_12738_12767 = state_12734__$1;(statearr_12738_12767[(1)] = (6));
} else
{var statearr_12739_12768 = state_12734__$1;(statearr_12739_12768[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12735 === (15)))
{var inst_12730 = (state_12734[(2)]);var state_12734__$1 = state_12734;var statearr_12740_12769 = state_12734__$1;(statearr_12740_12769[(2)] = inst_12730);
(statearr_12740_12769[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12735 === (13)))
{var inst_12723 = cljs.core.async.close_BANG_.call(null,out);var state_12734__$1 = state_12734;var statearr_12741_12770 = state_12734__$1;(statearr_12741_12770[(2)] = inst_12723);
(statearr_12741_12770[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12735 === (6)))
{var state_12734__$1 = state_12734;var statearr_12742_12771 = state_12734__$1;(statearr_12742_12771[(2)] = null);
(statearr_12742_12771[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12735 === (3)))
{var inst_12732 = (state_12734[(2)]);var state_12734__$1 = state_12734;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12734__$1,inst_12732);
} else
{if((state_val_12735 === (12)))
{var inst_12720 = (state_12734[(8)]);var inst_12720__$1 = (state_12734[(2)]);var inst_12721 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12720__$1);var state_12734__$1 = (function (){var statearr_12743 = state_12734;(statearr_12743[(8)] = inst_12720__$1);
return statearr_12743;
})();if(cljs.core.truth_(inst_12721))
{var statearr_12744_12772 = state_12734__$1;(statearr_12744_12772[(1)] = (13));
} else
{var statearr_12745_12773 = state_12734__$1;(statearr_12745_12773[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12735 === (2)))
{var inst_12697 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12698 = (0);var state_12734__$1 = (function (){var statearr_12746 = state_12734;(statearr_12746[(9)] = inst_12697);
(statearr_12746[(7)] = inst_12698);
return statearr_12746;
})();var statearr_12747_12774 = state_12734__$1;(statearr_12747_12774[(2)] = null);
(statearr_12747_12774[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12735 === (11)))
{var inst_12698 = (state_12734[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12734,(10),Object,null,(9));var inst_12707 = chs__$1.call(null,inst_12698);var inst_12708 = done.call(null,inst_12698);var inst_12709 = cljs.core.async.take_BANG_.call(null,inst_12707,inst_12708);var state_12734__$1 = state_12734;var statearr_12748_12775 = state_12734__$1;(statearr_12748_12775[(2)] = inst_12709);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12734__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12735 === (9)))
{var inst_12698 = (state_12734[(7)]);var inst_12711 = (state_12734[(2)]);var inst_12712 = (inst_12698 + (1));var inst_12698__$1 = inst_12712;var state_12734__$1 = (function (){var statearr_12749 = state_12734;(statearr_12749[(10)] = inst_12711);
(statearr_12749[(7)] = inst_12698__$1);
return statearr_12749;
})();var statearr_12750_12776 = state_12734__$1;(statearr_12750_12776[(2)] = null);
(statearr_12750_12776[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12735 === (5)))
{var inst_12718 = (state_12734[(2)]);var state_12734__$1 = (function (){var statearr_12751 = state_12734;(statearr_12751[(11)] = inst_12718);
return statearr_12751;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12734__$1,(12),dchan);
} else
{if((state_val_12735 === (14)))
{var inst_12720 = (state_12734[(8)]);var inst_12725 = cljs.core.apply.call(null,f,inst_12720);var state_12734__$1 = state_12734;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12734__$1,(16),out,inst_12725);
} else
{if((state_val_12735 === (16)))
{var inst_12727 = (state_12734[(2)]);var state_12734__$1 = (function (){var statearr_12752 = state_12734;(statearr_12752[(12)] = inst_12727);
return statearr_12752;
})();var statearr_12753_12777 = state_12734__$1;(statearr_12753_12777[(2)] = null);
(statearr_12753_12777[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12735 === (10)))
{var inst_12702 = (state_12734[(2)]);var inst_12703 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12734__$1 = (function (){var statearr_12754 = state_12734;(statearr_12754[(13)] = inst_12702);
return statearr_12754;
})();var statearr_12755_12778 = state_12734__$1;(statearr_12755_12778[(2)] = inst_12703);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12734__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12735 === (8)))
{var inst_12716 = (state_12734[(2)]);var state_12734__$1 = state_12734;var statearr_12756_12779 = state_12734__$1;(statearr_12756_12779[(2)] = inst_12716);
(statearr_12756_12779[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5894__auto___12764,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5879__auto__,c__5894__auto___12764,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5880__auto__ = null;
var state_machine__5880__auto____0 = (function (){var statearr_12760 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12760[(0)] = state_machine__5880__auto__);
(statearr_12760[(1)] = (1));
return statearr_12760;
});
var state_machine__5880__auto____1 = (function (state_12734){while(true){
var ret_value__5881__auto__ = (function (){try{while(true){
var result__5882__auto__ = switch__5879__auto__.call(null,state_12734);if(cljs.core.keyword_identical_QMARK_.call(null,result__5882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5882__auto__;
}
break;
}
}catch (e12761){if((e12761 instanceof Object))
{var ex__5883__auto__ = e12761;var statearr_12762_12780 = state_12734;(statearr_12762_12780[(5)] = ex__5883__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12734);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12761;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12781 = state_12734;
state_12734 = G__12781;
continue;
}
} else
{return ret_value__5881__auto__;
}
break;
}
});
state_machine__5880__auto__ = function(state_12734){
switch(arguments.length){
case 0:
return state_machine__5880__auto____0.call(this);
case 1:
return state_machine__5880__auto____1.call(this,state_12734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5880__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5880__auto____0;
state_machine__5880__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5880__auto____1;
return state_machine__5880__auto__;
})()
;})(switch__5879__auto__,c__5894__auto___12764,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5896__auto__ = (function (){var statearr_12763 = f__5895__auto__.call(null);(statearr_12763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5894__auto___12764);
return statearr_12763;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5896__auto__);
});})(c__5894__auto___12764,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5894__auto___12889 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5894__auto___12889,out){
return (function (){var f__5895__auto__ = (function (){var switch__5879__auto__ = ((function (c__5894__auto___12889,out){
return (function (state_12865){var state_val_12866 = (state_12865[(1)]);if((state_val_12866 === (7)))
{var inst_12845 = (state_12865[(7)]);var inst_12844 = (state_12865[(8)]);var inst_12844__$1 = (state_12865[(2)]);var inst_12845__$1 = cljs.core.nth.call(null,inst_12844__$1,(0),null);var inst_12846 = cljs.core.nth.call(null,inst_12844__$1,(1),null);var inst_12847 = (inst_12845__$1 == null);var state_12865__$1 = (function (){var statearr_12867 = state_12865;(statearr_12867[(7)] = inst_12845__$1);
(statearr_12867[(8)] = inst_12844__$1);
(statearr_12867[(9)] = inst_12846);
return statearr_12867;
})();if(cljs.core.truth_(inst_12847))
{var statearr_12868_12890 = state_12865__$1;(statearr_12868_12890[(1)] = (8));
} else
{var statearr_12869_12891 = state_12865__$1;(statearr_12869_12891[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (1)))
{var inst_12836 = cljs.core.vec.call(null,chs);var inst_12837 = inst_12836;var state_12865__$1 = (function (){var statearr_12870 = state_12865;(statearr_12870[(10)] = inst_12837);
return statearr_12870;
})();var statearr_12871_12892 = state_12865__$1;(statearr_12871_12892[(2)] = null);
(statearr_12871_12892[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (4)))
{var inst_12837 = (state_12865[(10)]);var state_12865__$1 = state_12865;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12865__$1,(7),inst_12837);
} else
{if((state_val_12866 === (6)))
{var inst_12861 = (state_12865[(2)]);var state_12865__$1 = state_12865;var statearr_12872_12893 = state_12865__$1;(statearr_12872_12893[(2)] = inst_12861);
(statearr_12872_12893[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (3)))
{var inst_12863 = (state_12865[(2)]);var state_12865__$1 = state_12865;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12865__$1,inst_12863);
} else
{if((state_val_12866 === (2)))
{var inst_12837 = (state_12865[(10)]);var inst_12839 = cljs.core.count.call(null,inst_12837);var inst_12840 = (inst_12839 > (0));var state_12865__$1 = state_12865;if(cljs.core.truth_(inst_12840))
{var statearr_12874_12894 = state_12865__$1;(statearr_12874_12894[(1)] = (4));
} else
{var statearr_12875_12895 = state_12865__$1;(statearr_12875_12895[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (11)))
{var inst_12837 = (state_12865[(10)]);var inst_12854 = (state_12865[(2)]);var tmp12873 = inst_12837;var inst_12837__$1 = tmp12873;var state_12865__$1 = (function (){var statearr_12876 = state_12865;(statearr_12876[(11)] = inst_12854);
(statearr_12876[(10)] = inst_12837__$1);
return statearr_12876;
})();var statearr_12877_12896 = state_12865__$1;(statearr_12877_12896[(2)] = null);
(statearr_12877_12896[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (9)))
{var inst_12845 = (state_12865[(7)]);var state_12865__$1 = state_12865;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12865__$1,(11),out,inst_12845);
} else
{if((state_val_12866 === (5)))
{var inst_12859 = cljs.core.async.close_BANG_.call(null,out);var state_12865__$1 = state_12865;var statearr_12878_12897 = state_12865__$1;(statearr_12878_12897[(2)] = inst_12859);
(statearr_12878_12897[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (10)))
{var inst_12857 = (state_12865[(2)]);var state_12865__$1 = state_12865;var statearr_12879_12898 = state_12865__$1;(statearr_12879_12898[(2)] = inst_12857);
(statearr_12879_12898[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (8)))
{var inst_12845 = (state_12865[(7)]);var inst_12837 = (state_12865[(10)]);var inst_12844 = (state_12865[(8)]);var inst_12846 = (state_12865[(9)]);var inst_12849 = (function (){var c = inst_12846;var v = inst_12845;var vec__12842 = inst_12844;var cs = inst_12837;return ((function (c,v,vec__12842,cs,inst_12845,inst_12837,inst_12844,inst_12846,state_val_12866,c__5894__auto___12889,out){
return (function (p1__12782_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12782_SHARP_);
});
;})(c,v,vec__12842,cs,inst_12845,inst_12837,inst_12844,inst_12846,state_val_12866,c__5894__auto___12889,out))
})();var inst_12850 = cljs.core.filterv.call(null,inst_12849,inst_12837);var inst_12837__$1 = inst_12850;var state_12865__$1 = (function (){var statearr_12880 = state_12865;(statearr_12880[(10)] = inst_12837__$1);
return statearr_12880;
})();var statearr_12881_12899 = state_12865__$1;(statearr_12881_12899[(2)] = null);
(statearr_12881_12899[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5894__auto___12889,out))
;return ((function (switch__5879__auto__,c__5894__auto___12889,out){
return (function() {
var state_machine__5880__auto__ = null;
var state_machine__5880__auto____0 = (function (){var statearr_12885 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12885[(0)] = state_machine__5880__auto__);
(statearr_12885[(1)] = (1));
return statearr_12885;
});
var state_machine__5880__auto____1 = (function (state_12865){while(true){
var ret_value__5881__auto__ = (function (){try{while(true){
var result__5882__auto__ = switch__5879__auto__.call(null,state_12865);if(cljs.core.keyword_identical_QMARK_.call(null,result__5882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5882__auto__;
}
break;
}
}catch (e12886){if((e12886 instanceof Object))
{var ex__5883__auto__ = e12886;var statearr_12887_12900 = state_12865;(statearr_12887_12900[(5)] = ex__5883__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12865);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12886;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12901 = state_12865;
state_12865 = G__12901;
continue;
}
} else
{return ret_value__5881__auto__;
}
break;
}
});
state_machine__5880__auto__ = function(state_12865){
switch(arguments.length){
case 0:
return state_machine__5880__auto____0.call(this);
case 1:
return state_machine__5880__auto____1.call(this,state_12865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5880__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5880__auto____0;
state_machine__5880__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5880__auto____1;
return state_machine__5880__auto__;
})()
;})(switch__5879__auto__,c__5894__auto___12889,out))
})();var state__5896__auto__ = (function (){var statearr_12888 = f__5895__auto__.call(null);(statearr_12888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5894__auto___12889);
return statearr_12888;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5896__auto__);
});})(c__5894__auto___12889,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5894__auto___12994 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5894__auto___12994,out){
return (function (){var f__5895__auto__ = (function (){var switch__5879__auto__ = ((function (c__5894__auto___12994,out){
return (function (state_12971){var state_val_12972 = (state_12971[(1)]);if((state_val_12972 === (7)))
{var inst_12953 = (state_12971[(7)]);var inst_12953__$1 = (state_12971[(2)]);var inst_12954 = (inst_12953__$1 == null);var inst_12955 = cljs.core.not.call(null,inst_12954);var state_12971__$1 = (function (){var statearr_12973 = state_12971;(statearr_12973[(7)] = inst_12953__$1);
return statearr_12973;
})();if(inst_12955)
{var statearr_12974_12995 = state_12971__$1;(statearr_12974_12995[(1)] = (8));
} else
{var statearr_12975_12996 = state_12971__$1;(statearr_12975_12996[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12972 === (1)))
{var inst_12948 = (0);var state_12971__$1 = (function (){var statearr_12976 = state_12971;(statearr_12976[(8)] = inst_12948);
return statearr_12976;
})();var statearr_12977_12997 = state_12971__$1;(statearr_12977_12997[(2)] = null);
(statearr_12977_12997[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12972 === (4)))
{var state_12971__$1 = state_12971;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12971__$1,(7),ch);
} else
{if((state_val_12972 === (6)))
{var inst_12966 = (state_12971[(2)]);var state_12971__$1 = state_12971;var statearr_12978_12998 = state_12971__$1;(statearr_12978_12998[(2)] = inst_12966);
(statearr_12978_12998[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12972 === (3)))
{var inst_12968 = (state_12971[(2)]);var inst_12969 = cljs.core.async.close_BANG_.call(null,out);var state_12971__$1 = (function (){var statearr_12979 = state_12971;(statearr_12979[(9)] = inst_12968);
return statearr_12979;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12971__$1,inst_12969);
} else
{if((state_val_12972 === (2)))
{var inst_12948 = (state_12971[(8)]);var inst_12950 = (inst_12948 < n);var state_12971__$1 = state_12971;if(cljs.core.truth_(inst_12950))
{var statearr_12980_12999 = state_12971__$1;(statearr_12980_12999[(1)] = (4));
} else
{var statearr_12981_13000 = state_12971__$1;(statearr_12981_13000[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12972 === (11)))
{var inst_12948 = (state_12971[(8)]);var inst_12958 = (state_12971[(2)]);var inst_12959 = (inst_12948 + (1));var inst_12948__$1 = inst_12959;var state_12971__$1 = (function (){var statearr_12982 = state_12971;(statearr_12982[(8)] = inst_12948__$1);
(statearr_12982[(10)] = inst_12958);
return statearr_12982;
})();var statearr_12983_13001 = state_12971__$1;(statearr_12983_13001[(2)] = null);
(statearr_12983_13001[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12972 === (9)))
{var state_12971__$1 = state_12971;var statearr_12984_13002 = state_12971__$1;(statearr_12984_13002[(2)] = null);
(statearr_12984_13002[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12972 === (5)))
{var state_12971__$1 = state_12971;var statearr_12985_13003 = state_12971__$1;(statearr_12985_13003[(2)] = null);
(statearr_12985_13003[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12972 === (10)))
{var inst_12963 = (state_12971[(2)]);var state_12971__$1 = state_12971;var statearr_12986_13004 = state_12971__$1;(statearr_12986_13004[(2)] = inst_12963);
(statearr_12986_13004[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12972 === (8)))
{var inst_12953 = (state_12971[(7)]);var state_12971__$1 = state_12971;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12971__$1,(11),out,inst_12953);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5894__auto___12994,out))
;return ((function (switch__5879__auto__,c__5894__auto___12994,out){
return (function() {
var state_machine__5880__auto__ = null;
var state_machine__5880__auto____0 = (function (){var statearr_12990 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12990[(0)] = state_machine__5880__auto__);
(statearr_12990[(1)] = (1));
return statearr_12990;
});
var state_machine__5880__auto____1 = (function (state_12971){while(true){
var ret_value__5881__auto__ = (function (){try{while(true){
var result__5882__auto__ = switch__5879__auto__.call(null,state_12971);if(cljs.core.keyword_identical_QMARK_.call(null,result__5882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5882__auto__;
}
break;
}
}catch (e12991){if((e12991 instanceof Object))
{var ex__5883__auto__ = e12991;var statearr_12992_13005 = state_12971;(statearr_12992_13005[(5)] = ex__5883__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12971);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12991;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13006 = state_12971;
state_12971 = G__13006;
continue;
}
} else
{return ret_value__5881__auto__;
}
break;
}
});
state_machine__5880__auto__ = function(state_12971){
switch(arguments.length){
case 0:
return state_machine__5880__auto____0.call(this);
case 1:
return state_machine__5880__auto____1.call(this,state_12971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5880__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5880__auto____0;
state_machine__5880__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5880__auto____1;
return state_machine__5880__auto__;
})()
;})(switch__5879__auto__,c__5894__auto___12994,out))
})();var state__5896__auto__ = (function (){var statearr_12993 = f__5895__auto__.call(null);(statearr_12993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5894__auto___12994);
return statearr_12993;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5896__auto__);
});})(c__5894__auto___12994,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5894__auto___13103 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5894__auto___13103,out){
return (function (){var f__5895__auto__ = (function (){var switch__5879__auto__ = ((function (c__5894__auto___13103,out){
return (function (state_13078){var state_val_13079 = (state_13078[(1)]);if((state_val_13079 === (7)))
{var inst_13073 = (state_13078[(2)]);var state_13078__$1 = state_13078;var statearr_13080_13104 = state_13078__$1;(statearr_13080_13104[(2)] = inst_13073);
(statearr_13080_13104[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13079 === (1)))
{var inst_13055 = null;var state_13078__$1 = (function (){var statearr_13081 = state_13078;(statearr_13081[(7)] = inst_13055);
return statearr_13081;
})();var statearr_13082_13105 = state_13078__$1;(statearr_13082_13105[(2)] = null);
(statearr_13082_13105[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13079 === (4)))
{var inst_13058 = (state_13078[(8)]);var inst_13058__$1 = (state_13078[(2)]);var inst_13059 = (inst_13058__$1 == null);var inst_13060 = cljs.core.not.call(null,inst_13059);var state_13078__$1 = (function (){var statearr_13083 = state_13078;(statearr_13083[(8)] = inst_13058__$1);
return statearr_13083;
})();if(inst_13060)
{var statearr_13084_13106 = state_13078__$1;(statearr_13084_13106[(1)] = (5));
} else
{var statearr_13085_13107 = state_13078__$1;(statearr_13085_13107[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13079 === (6)))
{var state_13078__$1 = state_13078;var statearr_13086_13108 = state_13078__$1;(statearr_13086_13108[(2)] = null);
(statearr_13086_13108[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13079 === (3)))
{var inst_13075 = (state_13078[(2)]);var inst_13076 = cljs.core.async.close_BANG_.call(null,out);var state_13078__$1 = (function (){var statearr_13087 = state_13078;(statearr_13087[(9)] = inst_13075);
return statearr_13087;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13078__$1,inst_13076);
} else
{if((state_val_13079 === (2)))
{var state_13078__$1 = state_13078;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13078__$1,(4),ch);
} else
{if((state_val_13079 === (11)))
{var inst_13058 = (state_13078[(8)]);var inst_13067 = (state_13078[(2)]);var inst_13055 = inst_13058;var state_13078__$1 = (function (){var statearr_13088 = state_13078;(statearr_13088[(10)] = inst_13067);
(statearr_13088[(7)] = inst_13055);
return statearr_13088;
})();var statearr_13089_13109 = state_13078__$1;(statearr_13089_13109[(2)] = null);
(statearr_13089_13109[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13079 === (9)))
{var inst_13058 = (state_13078[(8)]);var state_13078__$1 = state_13078;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13078__$1,(11),out,inst_13058);
} else
{if((state_val_13079 === (5)))
{var inst_13058 = (state_13078[(8)]);var inst_13055 = (state_13078[(7)]);var inst_13062 = cljs.core._EQ_.call(null,inst_13058,inst_13055);var state_13078__$1 = state_13078;if(inst_13062)
{var statearr_13091_13110 = state_13078__$1;(statearr_13091_13110[(1)] = (8));
} else
{var statearr_13092_13111 = state_13078__$1;(statearr_13092_13111[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13079 === (10)))
{var inst_13070 = (state_13078[(2)]);var state_13078__$1 = state_13078;var statearr_13093_13112 = state_13078__$1;(statearr_13093_13112[(2)] = inst_13070);
(statearr_13093_13112[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13079 === (8)))
{var inst_13055 = (state_13078[(7)]);var tmp13090 = inst_13055;var inst_13055__$1 = tmp13090;var state_13078__$1 = (function (){var statearr_13094 = state_13078;(statearr_13094[(7)] = inst_13055__$1);
return statearr_13094;
})();var statearr_13095_13113 = state_13078__$1;(statearr_13095_13113[(2)] = null);
(statearr_13095_13113[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5894__auto___13103,out))
;return ((function (switch__5879__auto__,c__5894__auto___13103,out){
return (function() {
var state_machine__5880__auto__ = null;
var state_machine__5880__auto____0 = (function (){var statearr_13099 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13099[(0)] = state_machine__5880__auto__);
(statearr_13099[(1)] = (1));
return statearr_13099;
});
var state_machine__5880__auto____1 = (function (state_13078){while(true){
var ret_value__5881__auto__ = (function (){try{while(true){
var result__5882__auto__ = switch__5879__auto__.call(null,state_13078);if(cljs.core.keyword_identical_QMARK_.call(null,result__5882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5882__auto__;
}
break;
}
}catch (e13100){if((e13100 instanceof Object))
{var ex__5883__auto__ = e13100;var statearr_13101_13114 = state_13078;(statearr_13101_13114[(5)] = ex__5883__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13078);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13100;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13115 = state_13078;
state_13078 = G__13115;
continue;
}
} else
{return ret_value__5881__auto__;
}
break;
}
});
state_machine__5880__auto__ = function(state_13078){
switch(arguments.length){
case 0:
return state_machine__5880__auto____0.call(this);
case 1:
return state_machine__5880__auto____1.call(this,state_13078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5880__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5880__auto____0;
state_machine__5880__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5880__auto____1;
return state_machine__5880__auto__;
})()
;})(switch__5879__auto__,c__5894__auto___13103,out))
})();var state__5896__auto__ = (function (){var statearr_13102 = f__5895__auto__.call(null);(statearr_13102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5894__auto___13103);
return statearr_13102;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5896__auto__);
});})(c__5894__auto___13103,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5894__auto___13250 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5894__auto___13250,out){
return (function (){var f__5895__auto__ = (function (){var switch__5879__auto__ = ((function (c__5894__auto___13250,out){
return (function (state_13220){var state_val_13221 = (state_13220[(1)]);if((state_val_13221 === (7)))
{var inst_13216 = (state_13220[(2)]);var state_13220__$1 = state_13220;var statearr_13222_13251 = state_13220__$1;(statearr_13222_13251[(2)] = inst_13216);
(statearr_13222_13251[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13221 === (1)))
{var inst_13183 = (new Array(n));var inst_13184 = inst_13183;var inst_13185 = (0);var state_13220__$1 = (function (){var statearr_13223 = state_13220;(statearr_13223[(7)] = inst_13184);
(statearr_13223[(8)] = inst_13185);
return statearr_13223;
})();var statearr_13224_13252 = state_13220__$1;(statearr_13224_13252[(2)] = null);
(statearr_13224_13252[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13221 === (4)))
{var inst_13188 = (state_13220[(9)]);var inst_13188__$1 = (state_13220[(2)]);var inst_13189 = (inst_13188__$1 == null);var inst_13190 = cljs.core.not.call(null,inst_13189);var state_13220__$1 = (function (){var statearr_13225 = state_13220;(statearr_13225[(9)] = inst_13188__$1);
return statearr_13225;
})();if(inst_13190)
{var statearr_13226_13253 = state_13220__$1;(statearr_13226_13253[(1)] = (5));
} else
{var statearr_13227_13254 = state_13220__$1;(statearr_13227_13254[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13221 === (15)))
{var inst_13210 = (state_13220[(2)]);var state_13220__$1 = state_13220;var statearr_13228_13255 = state_13220__$1;(statearr_13228_13255[(2)] = inst_13210);
(statearr_13228_13255[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13221 === (13)))
{var state_13220__$1 = state_13220;var statearr_13229_13256 = state_13220__$1;(statearr_13229_13256[(2)] = null);
(statearr_13229_13256[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13221 === (6)))
{var inst_13185 = (state_13220[(8)]);var inst_13206 = (inst_13185 > (0));var state_13220__$1 = state_13220;if(cljs.core.truth_(inst_13206))
{var statearr_13230_13257 = state_13220__$1;(statearr_13230_13257[(1)] = (12));
} else
{var statearr_13231_13258 = state_13220__$1;(statearr_13231_13258[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13221 === (3)))
{var inst_13218 = (state_13220[(2)]);var state_13220__$1 = state_13220;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13220__$1,inst_13218);
} else
{if((state_val_13221 === (12)))
{var inst_13184 = (state_13220[(7)]);var inst_13208 = cljs.core.vec.call(null,inst_13184);var state_13220__$1 = state_13220;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13220__$1,(15),out,inst_13208);
} else
{if((state_val_13221 === (2)))
{var state_13220__$1 = state_13220;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13220__$1,(4),ch);
} else
{if((state_val_13221 === (11)))
{var inst_13200 = (state_13220[(2)]);var inst_13201 = (new Array(n));var inst_13184 = inst_13201;var inst_13185 = (0);var state_13220__$1 = (function (){var statearr_13232 = state_13220;(statearr_13232[(7)] = inst_13184);
(statearr_13232[(8)] = inst_13185);
(statearr_13232[(10)] = inst_13200);
return statearr_13232;
})();var statearr_13233_13259 = state_13220__$1;(statearr_13233_13259[(2)] = null);
(statearr_13233_13259[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13221 === (9)))
{var inst_13184 = (state_13220[(7)]);var inst_13198 = cljs.core.vec.call(null,inst_13184);var state_13220__$1 = state_13220;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13220__$1,(11),out,inst_13198);
} else
{if((state_val_13221 === (5)))
{var inst_13184 = (state_13220[(7)]);var inst_13185 = (state_13220[(8)]);var inst_13188 = (state_13220[(9)]);var inst_13193 = (state_13220[(11)]);var inst_13192 = (inst_13184[inst_13185] = inst_13188);var inst_13193__$1 = (inst_13185 + (1));var inst_13194 = (inst_13193__$1 < n);var state_13220__$1 = (function (){var statearr_13234 = state_13220;(statearr_13234[(12)] = inst_13192);
(statearr_13234[(11)] = inst_13193__$1);
return statearr_13234;
})();if(cljs.core.truth_(inst_13194))
{var statearr_13235_13260 = state_13220__$1;(statearr_13235_13260[(1)] = (8));
} else
{var statearr_13236_13261 = state_13220__$1;(statearr_13236_13261[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13221 === (14)))
{var inst_13213 = (state_13220[(2)]);var inst_13214 = cljs.core.async.close_BANG_.call(null,out);var state_13220__$1 = (function (){var statearr_13238 = state_13220;(statearr_13238[(13)] = inst_13213);
return statearr_13238;
})();var statearr_13239_13262 = state_13220__$1;(statearr_13239_13262[(2)] = inst_13214);
(statearr_13239_13262[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13221 === (10)))
{var inst_13204 = (state_13220[(2)]);var state_13220__$1 = state_13220;var statearr_13240_13263 = state_13220__$1;(statearr_13240_13263[(2)] = inst_13204);
(statearr_13240_13263[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13221 === (8)))
{var inst_13184 = (state_13220[(7)]);var inst_13193 = (state_13220[(11)]);var tmp13237 = inst_13184;var inst_13184__$1 = tmp13237;var inst_13185 = inst_13193;var state_13220__$1 = (function (){var statearr_13241 = state_13220;(statearr_13241[(7)] = inst_13184__$1);
(statearr_13241[(8)] = inst_13185);
return statearr_13241;
})();var statearr_13242_13264 = state_13220__$1;(statearr_13242_13264[(2)] = null);
(statearr_13242_13264[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5894__auto___13250,out))
;return ((function (switch__5879__auto__,c__5894__auto___13250,out){
return (function() {
var state_machine__5880__auto__ = null;
var state_machine__5880__auto____0 = (function (){var statearr_13246 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13246[(0)] = state_machine__5880__auto__);
(statearr_13246[(1)] = (1));
return statearr_13246;
});
var state_machine__5880__auto____1 = (function (state_13220){while(true){
var ret_value__5881__auto__ = (function (){try{while(true){
var result__5882__auto__ = switch__5879__auto__.call(null,state_13220);if(cljs.core.keyword_identical_QMARK_.call(null,result__5882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5882__auto__;
}
break;
}
}catch (e13247){if((e13247 instanceof Object))
{var ex__5883__auto__ = e13247;var statearr_13248_13265 = state_13220;(statearr_13248_13265[(5)] = ex__5883__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13220);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13247;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13266 = state_13220;
state_13220 = G__13266;
continue;
}
} else
{return ret_value__5881__auto__;
}
break;
}
});
state_machine__5880__auto__ = function(state_13220){
switch(arguments.length){
case 0:
return state_machine__5880__auto____0.call(this);
case 1:
return state_machine__5880__auto____1.call(this,state_13220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5880__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5880__auto____0;
state_machine__5880__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5880__auto____1;
return state_machine__5880__auto__;
})()
;})(switch__5879__auto__,c__5894__auto___13250,out))
})();var state__5896__auto__ = (function (){var statearr_13249 = f__5895__auto__.call(null);(statearr_13249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5894__auto___13250);
return statearr_13249;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5896__auto__);
});})(c__5894__auto___13250,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5894__auto___13409 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5894__auto___13409,out){
return (function (){var f__5895__auto__ = (function (){var switch__5879__auto__ = ((function (c__5894__auto___13409,out){
return (function (state_13379){var state_val_13380 = (state_13379[(1)]);if((state_val_13380 === (7)))
{var inst_13375 = (state_13379[(2)]);var state_13379__$1 = state_13379;var statearr_13381_13410 = state_13379__$1;(statearr_13381_13410[(2)] = inst_13375);
(statearr_13381_13410[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13380 === (1)))
{var inst_13338 = [];var inst_13339 = inst_13338;var inst_13340 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_13379__$1 = (function (){var statearr_13382 = state_13379;(statearr_13382[(7)] = inst_13340);
(statearr_13382[(8)] = inst_13339);
return statearr_13382;
})();var statearr_13383_13411 = state_13379__$1;(statearr_13383_13411[(2)] = null);
(statearr_13383_13411[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13380 === (4)))
{var inst_13343 = (state_13379[(9)]);var inst_13343__$1 = (state_13379[(2)]);var inst_13344 = (inst_13343__$1 == null);var inst_13345 = cljs.core.not.call(null,inst_13344);var state_13379__$1 = (function (){var statearr_13384 = state_13379;(statearr_13384[(9)] = inst_13343__$1);
return statearr_13384;
})();if(inst_13345)
{var statearr_13385_13412 = state_13379__$1;(statearr_13385_13412[(1)] = (5));
} else
{var statearr_13386_13413 = state_13379__$1;(statearr_13386_13413[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13380 === (15)))
{var inst_13369 = (state_13379[(2)]);var state_13379__$1 = state_13379;var statearr_13387_13414 = state_13379__$1;(statearr_13387_13414[(2)] = inst_13369);
(statearr_13387_13414[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13380 === (13)))
{var state_13379__$1 = state_13379;var statearr_13388_13415 = state_13379__$1;(statearr_13388_13415[(2)] = null);
(statearr_13388_13415[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13380 === (6)))
{var inst_13339 = (state_13379[(8)]);var inst_13364 = inst_13339.length;var inst_13365 = (inst_13364 > (0));var state_13379__$1 = state_13379;if(cljs.core.truth_(inst_13365))
{var statearr_13389_13416 = state_13379__$1;(statearr_13389_13416[(1)] = (12));
} else
{var statearr_13390_13417 = state_13379__$1;(statearr_13390_13417[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13380 === (3)))
{var inst_13377 = (state_13379[(2)]);var state_13379__$1 = state_13379;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13379__$1,inst_13377);
} else
{if((state_val_13380 === (12)))
{var inst_13339 = (state_13379[(8)]);var inst_13367 = cljs.core.vec.call(null,inst_13339);var state_13379__$1 = state_13379;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13379__$1,(15),out,inst_13367);
} else
{if((state_val_13380 === (2)))
{var state_13379__$1 = state_13379;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13379__$1,(4),ch);
} else
{if((state_val_13380 === (11)))
{var inst_13343 = (state_13379[(9)]);var inst_13347 = (state_13379[(10)]);var inst_13357 = (state_13379[(2)]);var inst_13358 = [];var inst_13359 = inst_13358.push(inst_13343);var inst_13339 = inst_13358;var inst_13340 = inst_13347;var state_13379__$1 = (function (){var statearr_13391 = state_13379;(statearr_13391[(7)] = inst_13340);
(statearr_13391[(11)] = inst_13359);
(statearr_13391[(8)] = inst_13339);
(statearr_13391[(12)] = inst_13357);
return statearr_13391;
})();var statearr_13392_13418 = state_13379__$1;(statearr_13392_13418[(2)] = null);
(statearr_13392_13418[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13380 === (9)))
{var inst_13339 = (state_13379[(8)]);var inst_13355 = cljs.core.vec.call(null,inst_13339);var state_13379__$1 = state_13379;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13379__$1,(11),out,inst_13355);
} else
{if((state_val_13380 === (5)))
{var inst_13340 = (state_13379[(7)]);var inst_13343 = (state_13379[(9)]);var inst_13347 = (state_13379[(10)]);var inst_13347__$1 = f.call(null,inst_13343);var inst_13348 = cljs.core._EQ_.call(null,inst_13347__$1,inst_13340);var inst_13349 = cljs.core.keyword_identical_QMARK_.call(null,inst_13340,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_13350 = (inst_13348) || (inst_13349);var state_13379__$1 = (function (){var statearr_13393 = state_13379;(statearr_13393[(10)] = inst_13347__$1);
return statearr_13393;
})();if(cljs.core.truth_(inst_13350))
{var statearr_13394_13419 = state_13379__$1;(statearr_13394_13419[(1)] = (8));
} else
{var statearr_13395_13420 = state_13379__$1;(statearr_13395_13420[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13380 === (14)))
{var inst_13372 = (state_13379[(2)]);var inst_13373 = cljs.core.async.close_BANG_.call(null,out);var state_13379__$1 = (function (){var statearr_13397 = state_13379;(statearr_13397[(13)] = inst_13372);
return statearr_13397;
})();var statearr_13398_13421 = state_13379__$1;(statearr_13398_13421[(2)] = inst_13373);
(statearr_13398_13421[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13380 === (10)))
{var inst_13362 = (state_13379[(2)]);var state_13379__$1 = state_13379;var statearr_13399_13422 = state_13379__$1;(statearr_13399_13422[(2)] = inst_13362);
(statearr_13399_13422[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13380 === (8)))
{var inst_13343 = (state_13379[(9)]);var inst_13339 = (state_13379[(8)]);var inst_13347 = (state_13379[(10)]);var inst_13352 = inst_13339.push(inst_13343);var tmp13396 = inst_13339;var inst_13339__$1 = tmp13396;var inst_13340 = inst_13347;var state_13379__$1 = (function (){var statearr_13400 = state_13379;(statearr_13400[(7)] = inst_13340);
(statearr_13400[(14)] = inst_13352);
(statearr_13400[(8)] = inst_13339__$1);
return statearr_13400;
})();var statearr_13401_13423 = state_13379__$1;(statearr_13401_13423[(2)] = null);
(statearr_13401_13423[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5894__auto___13409,out))
;return ((function (switch__5879__auto__,c__5894__auto___13409,out){
return (function() {
var state_machine__5880__auto__ = null;
var state_machine__5880__auto____0 = (function (){var statearr_13405 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13405[(0)] = state_machine__5880__auto__);
(statearr_13405[(1)] = (1));
return statearr_13405;
});
var state_machine__5880__auto____1 = (function (state_13379){while(true){
var ret_value__5881__auto__ = (function (){try{while(true){
var result__5882__auto__ = switch__5879__auto__.call(null,state_13379);if(cljs.core.keyword_identical_QMARK_.call(null,result__5882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5882__auto__;
}
break;
}
}catch (e13406){if((e13406 instanceof Object))
{var ex__5883__auto__ = e13406;var statearr_13407_13424 = state_13379;(statearr_13407_13424[(5)] = ex__5883__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13379);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13406;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13425 = state_13379;
state_13379 = G__13425;
continue;
}
} else
{return ret_value__5881__auto__;
}
break;
}
});
state_machine__5880__auto__ = function(state_13379){
switch(arguments.length){
case 0:
return state_machine__5880__auto____0.call(this);
case 1:
return state_machine__5880__auto____1.call(this,state_13379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5880__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5880__auto____0;
state_machine__5880__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5880__auto____1;
return state_machine__5880__auto__;
})()
;})(switch__5879__auto__,c__5894__auto___13409,out))
})();var state__5896__auto__ = (function (){var statearr_13408 = f__5895__auto__.call(null);(statearr_13408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5894__auto___13409);
return statearr_13408;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5896__auto__);
});})(c__5894__auto___13409,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map