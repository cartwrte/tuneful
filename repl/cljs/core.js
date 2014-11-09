// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.core');
goog.require('goog.string.StringBuffer');
goog.require('goog.array');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.string');
cljs.core._STAR_clojurescript_version_STAR_ = "0.0-2371";
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a different way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Set *print-fn* to f.
*/
cljs.core.set_print_fn_BANG_ = (function set_print_fn_BANG_(f){return cljs.core._STAR_print_fn_STAR_ = f;
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core._STAR_print_length_STAR_ = null;
cljs.core._STAR_print_level_STAR_ = null;
cljs.core.pr_opts = (function pr_opts(){return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flush-on-newline","flush-on-newline",-151457939),cljs.core._STAR_flush_on_newline_STAR_,new cljs.core.Keyword(null,"readably","readably",1129599760),cljs.core._STAR_print_readably_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core._STAR_print_meta_STAR_,new cljs.core.Keyword(null,"dup","dup",556298533),cljs.core._STAR_print_dup_STAR_,new cljs.core.Keyword(null,"print-length","print-length",1931866356),cljs.core._STAR_print_length_STAR_], null);
});
/**
* Set *print-fn* to console.log
*/
cljs.core.enable_console_print_BANG_ = (function enable_console_print_BANG_(){cljs.core._STAR_print_newline_STAR_ = false;
return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__5280__delegate = function (args){return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__5280 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__5280__delegate.call(this,args);};
G__5280.cljs$lang$maxFixedArity = 0;
G__5280.cljs$lang$applyTo = (function (arglist__5281){
var args = cljs.core.seq(arglist__5281);
return G__5280__delegate(args);
});
G__5280.cljs$core$IFn$_invoke$arity$variadic = G__5280__delegate;
return G__5280;
})()
;
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){return (x != null && x !== false);
});
cljs.core.not_native = null;
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){return (x === y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){return (x == null);
});
cljs.core.array_QMARK_ = (function array_QMARK_(x){return x instanceof Array;
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){return typeof n === 'number';
});
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* Returns true if x is not nil, false otherwise.
*/
cljs.core.some_QMARK_ = (function some_QMARK_(x){return !((x == null));
});
cljs.core.object_QMARK_ = (function object_QMARK_(x){if(!((x == null)))
{return (x.constructor === Object);
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){return goog.isString(x);
});
/**
* Internal - do not use!
*/
cljs.core.native_satisfies_QMARK_ = (function native_satisfies_QMARK_(p,x){var x__$1 = (((x == null))?null:x);if((p[goog.typeOf(x__$1)]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{return false;

}
}
});
cljs.core.is_proto_ = (function is_proto_(x){return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.type = (function type(x){if((x == null))
{return null;
} else
{return x.constructor;
}
});
cljs.core.missing_protocol = (function missing_protocol(proto,obj){var ty = cljs.core.type.call(null,obj);var ty__$1 = (cljs.core.truth_((function (){var and__3711__auto__ = ty;if(cljs.core.truth_(and__3711__auto__))
{return ty.cljs$lang$type;
} else
{return and__3711__auto__;
}
})())?ty.cljs$lang$ctorStr:goog.typeOf(obj));return (new Error(["No protocol method ",proto," defined for type ",ty__$1,": ",obj].join("")));
});
cljs.core.type__GT_str = (function type__GT_str(ty){var temp__4124__auto__ = ty.cljs$lang$ctorStr;if(cljs.core.truth_(temp__4124__auto__))
{var s = temp__4124__auto__;return s;
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ty));
}
});
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){return (new Array(size));
});
var make_array__2 = (function (type,size){return make_array.call(null,size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
make_array.cljs$core$IFn$_invoke$arity$1 = make_array__1;
make_array.cljs$core$IFn$_invoke$arity$2 = make_array__2;
return make_array;
})()
;
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(arr){var len = arr.length;var new_arr = (new Array(len));var n__4593__auto___5282 = len;var i_5283 = (0);while(true){
if((i_5283 < n__4593__auto___5282))
{(new_arr[i_5283] = (arr[i_5283]));
{
var G__5284 = (i_5283 + (1));
i_5283 = G__5284;
continue;
}
} else
{}
break;
}
return new_arr;
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){return (array[i]);
});
var aget__3 = (function() { 
var G__5285__delegate = function (array,i,idxs){return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__5285 = function (array,i,var_args){
var idxs = null;if (arguments.length > 2) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5285__delegate.call(this,array,i,idxs);};
G__5285.cljs$lang$maxFixedArity = 2;
G__5285.cljs$lang$applyTo = (function (arglist__5286){
var array = cljs.core.first(arglist__5286);
arglist__5286 = cljs.core.next(arglist__5286);
var i = cljs.core.first(arglist__5286);
var idxs = cljs.core.rest(arglist__5286);
return G__5285__delegate(array,i,idxs);
});
G__5285.cljs$core$IFn$_invoke$arity$variadic = G__5285__delegate;
return G__5285;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$core$IFn$_invoke$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$core$IFn$_invoke$arity$2 = aget__2;
aget.cljs$core$IFn$_invoke$arity$variadic = aget__3.cljs$core$IFn$_invoke$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
* @param {...*} var_args
*/
cljs.core.aset = (function() {
var aset = null;
var aset__3 = (function (array,i,val){return (array[i] = val);
});
var aset__4 = (function() { 
var G__5287__delegate = function (array,idx,idx2,idxv){return cljs.core.apply.call(null,aset,(array[idx]),idx2,idxv);
};
var G__5287 = function (array,idx,idx2,var_args){
var idxv = null;if (arguments.length > 3) {
  idxv = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__5287__delegate.call(this,array,idx,idx2,idxv);};
G__5287.cljs$lang$maxFixedArity = 3;
G__5287.cljs$lang$applyTo = (function (arglist__5288){
var array = cljs.core.first(arglist__5288);
arglist__5288 = cljs.core.next(arglist__5288);
var idx = cljs.core.first(arglist__5288);
arglist__5288 = cljs.core.next(arglist__5288);
var idx2 = cljs.core.first(arglist__5288);
var idxv = cljs.core.rest(arglist__5288);
return G__5287__delegate(array,idx,idx2,idxv);
});
G__5287.cljs$core$IFn$_invoke$arity$variadic = G__5287__delegate;
return G__5287;
})()
;
aset = function(array,idx,idx2,var_args){
var idxv = var_args;
switch(arguments.length){
case 3:
return aset__3.call(this,array,idx,idx2);
default:
return aset__4.cljs$core$IFn$_invoke$arity$variadic(array,idx,idx2, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aset.cljs$lang$maxFixedArity = 3;
aset.cljs$lang$applyTo = aset__4.cljs$lang$applyTo;
aset.cljs$core$IFn$_invoke$arity$3 = aset__3;
aset.cljs$core$IFn$_invoke$arity$variadic = aset__4.cljs$core$IFn$_invoke$arity$variadic;
return aset;
})()
;
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){return array.length;
});
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){return into_array.call(null,null,aseq);
});
var into_array__2 = (function (type,aseq){return cljs.core.reduce.call(null,(function (a,x){a.push(x);
return a;
}),[],aseq);
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
into_array.cljs$core$IFn$_invoke$arity$1 = into_array__1;
into_array.cljs$core$IFn$_invoke$arity$2 = into_array__2;
return into_array;
})()
;
cljs.core.Fn = (function (){var obj5290 = {};return obj5290;
})();
cljs.core.IFn = (function (){var obj5295 = {};return obj5295;
})();
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){if((function (){var and__3711__auto__ = this$;if(and__3711__auto__)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3711__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__4360__auto__ = (((this$ == null))?null:this$);return (function (){var or__3723__auto__ = (cljs.core._invoke[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._invoke["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){if((function (){var and__3711__auto__ = this$;if(and__3711__auto__)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3711__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__4360__auto__ = (((this$ == null))?null:this$);return (function (){var or__3723__auto__ = (cljs.core._invoke[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._invoke["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){if((function (){var and__3711__auto__ = this$;if(and__3711__auto__)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3711__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__4360__auto__ = (((this$ == null))?null:this$);return (function (){var or__3723__auto__ = (cljs.core._invoke[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._invoke["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){if((function (){var and__3711__auto__ = this$;if(and__3711__auto__)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3711__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__4360__auto__ = (((this$ == null))?null:this$);return (function (){var or__3723__auto__ = (cljs.core._invoke[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._invoke["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){if((function (){var and__3711__auto__ = this$;if(and__3711__auto__)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3711__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__4360__auto__ = (((this$ == null))?null:this$);return (function (){var or__3723__auto__ = (cljs.core._invoke[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._invoke["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){if((function (){var and__3711__auto__ = this$;if(and__3711__auto__)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3711__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__4360__auto__ = (((this$ == null))?null:this$);return (function (){var or__3723__auto__ = (cljs.core._invoke[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._invoke["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){if((function (){var and__3711__auto__ = this$;if(and__3711__auto__)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3711__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__4360__auto__ = (((this$ == null))?null:this$);return (function (){var or__3723__auto__ = (cljs.core._invoke[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._invoke["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){if((function (){var and__3711__auto__ = this$;if(and__3711__auto__)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3711__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__4360__auto__ = (((this$ == null))?null:this$);return (function (){var or__3723__auto__ = (cljs.core._invoke[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._invoke["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){if((function (){var and__3711__auto__ = this$;if(and__3711__auto__)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3711__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__4360__auto__ = (((this$ == null))?null:this$);return (function (){var or__3723__auto__ = (cljs.core._invoke[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._invoke["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){if((function (){var and__3711__auto__ = this$;if(and__3711__auto__)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3711__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__4360__auto__ = (((this$ == null))?null:this$);return (function (){var or__3723__auto__ = (cljs.core._invoke[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._invoke["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){if((function (){var and__3711__auto__ = this$;if(and__3711__auto__)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3711__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__4360__auto__ = (((this$ == null))?null:this$);return (function (){var or__3723__auto__ = (cljs.core._invoke[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._invoke["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){if((function (){var and__3711__auto__ = this$;if(and__3711__auto__)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3711__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__4360__auto__ = (((this$ == null))?null:this$);return (function (){var or__3723__auto__ = (cljs.core._invoke[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._invoke["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){if((function (){var and__3711__auto__ = this$;if(and__3711__auto__)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3711__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__4360__auto__ = (((this$ == null))?null:this$);return (function (){var or__3723__auto__ = (cljs.core._invoke[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._invoke["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){if((function (){var and__3711__auto__ = this$;if(and__3711__auto__)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3711__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__4360__auto__ = (((this$ == null))?null:this$);return (function (){var or__3723__auto__ = (cljs.core._invoke[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._invoke["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){if((function (){var and__3711__auto__ = this$;if(and__3711__auto__)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3711__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__4360__auto__ = (((this$ == null))?null:this$);return (function (){var or__3723__auto__ = (cljs.core._invoke[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._invoke["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){if((function (){var and__3711__auto__ = this$;if(and__3711__auto__)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3711__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__4360__auto__ = (((this$ == null))?null:this$);return (function (){var or__3723__auto__ = (cljs.core._invoke[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._invoke["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if((function (){var and__3711__auto__ = this$;if(and__3711__auto__)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3711__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__4360__auto__ = (((this$ == null))?null:this$);return (function (){var or__3723__auto__ = (cljs.core._invoke[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._invoke["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){if((function (){var and__3711__auto__ = this$;if(and__3711__auto__)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3711__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__4360__auto__ = (((this$ == null))?null:this$);return (function (){var or__3723__auto__ = (cljs.core._invoke[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._invoke["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){if((function (){var and__3711__auto__ = this$;if(and__3711__auto__)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3711__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
} else
{var x__4360__auto__ = (((this$ == null))?null:this$);return (function (){var or__3723__auto__ = (cljs.core._invoke[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._invoke["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){if((function (){var and__3711__auto__ = this$;if(and__3711__auto__)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3711__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
} else
{var x__4360__auto__ = (((this$ == null))?null:this$);return (function (){var or__3723__auto__ = (cljs.core._invoke[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._invoke["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){if((function (){var and__3711__auto__ = this$;if(and__3711__auto__)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3711__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
} else
{var x__4360__auto__ = (((this$ == null))?null:this$);return (function (){var or__3723__auto__ = (cljs.core._invoke[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._invoke["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
}
});
var _invoke__22 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){if(cljs.core.truth_((function (){var and__3711__auto__ = this$;if(cljs.core.truth_(and__3711__auto__))
{return this$.cljs$core$IFn$_invoke$arity$22;
} else
{return and__3711__auto__;
}
})()))
{return this$.cljs$core$IFn$_invoke$arity$22(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
} else
{var x__4360__auto__ = (((this$ == null))?null:this$);return (function (){var or__3723__auto__ = (cljs.core._invoke[goog.typeOf(x__4360__auto__)]);if(cljs.core.truth_(or__3723__auto__))
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._invoke["_"]);if(cljs.core.truth_(or__3723__auto____$1))
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return _invoke__22.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_invoke.cljs$core$IFn$_invoke$arity$1 = _invoke__1;
_invoke.cljs$core$IFn$_invoke$arity$2 = _invoke__2;
_invoke.cljs$core$IFn$_invoke$arity$3 = _invoke__3;
_invoke.cljs$core$IFn$_invoke$arity$4 = _invoke__4;
_invoke.cljs$core$IFn$_invoke$arity$5 = _invoke__5;
_invoke.cljs$core$IFn$_invoke$arity$6 = _invoke__6;
_invoke.cljs$core$IFn$_invoke$arity$7 = _invoke__7;
_invoke.cljs$core$IFn$_invoke$arity$8 = _invoke__8;
_invoke.cljs$core$IFn$_invoke$arity$9 = _invoke__9;
_invoke.cljs$core$IFn$_invoke$arity$10 = _invoke__10;
_invoke.cljs$core$IFn$_invoke$arity$11 = _invoke__11;
_invoke.cljs$core$IFn$_invoke$arity$12 = _invoke__12;
_invoke.cljs$core$IFn$_invoke$arity$13 = _invoke__13;
_invoke.cljs$core$IFn$_invoke$arity$14 = _invoke__14;
_invoke.cljs$core$IFn$_invoke$arity$15 = _invoke__15;
_invoke.cljs$core$IFn$_invoke$arity$16 = _invoke__16;
_invoke.cljs$core$IFn$_invoke$arity$17 = _invoke__17;
_invoke.cljs$core$IFn$_invoke$arity$18 = _invoke__18;
_invoke.cljs$core$IFn$_invoke$arity$19 = _invoke__19;
_invoke.cljs$core$IFn$_invoke$arity$20 = _invoke__20;
_invoke.cljs$core$IFn$_invoke$arity$21 = _invoke__21;
_invoke.cljs$core$IFn$_invoke$arity$22 = _invoke__22;
return _invoke;
})()
;
cljs.core.ICloneable = (function (){var obj5302 = {};return obj5302;
})();
cljs.core._clone = (function _clone(value){if((function (){var and__3711__auto__ = value;if(and__3711__auto__)
{return value.cljs$core$ICloneable$_clone$arity$1;
} else
{return and__3711__auto__;
}
})())
{return value.cljs$core$ICloneable$_clone$arity$1(value);
} else
{var x__4360__auto__ = (((value == null))?null:value);return (function (){var or__3723__auto__ = (cljs.core._clone[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._clone["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICloneable.-clone",value);
}
}
})().call(null,value);
}
});
cljs.core.ICounted = (function (){var obj5304 = {};return obj5304;
})();
cljs.core._count = (function _count(coll){if((function (){var and__3711__auto__ = coll;if(and__3711__auto__)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3711__auto__;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__4360__auto__ = (((coll == null))?null:coll);return (function (){var or__3723__auto__ = (cljs.core._count[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._count["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = (function (){var obj5306 = {};return obj5306;
})();
cljs.core._empty = (function _empty(coll){if((function (){var and__3711__auto__ = coll;if(and__3711__auto__)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3711__auto__;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__4360__auto__ = (((coll == null))?null:coll);return (function (){var or__3723__auto__ = (cljs.core._empty[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._empty["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = (function (){var obj5308 = {};return obj5308;
})();
cljs.core._conj = (function _conj(coll,o){if((function (){var and__3711__auto__ = coll;if(and__3711__auto__)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3711__auto__;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__4360__auto__ = (((coll == null))?null:coll);return (function (){var or__3723__auto__ = (cljs.core._conj[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._conj["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = (function (){var obj5310 = {};return obj5310;
})();
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){if((function (){var and__3711__auto__ = coll;if(and__3711__auto__)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3711__auto__;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__4360__auto__ = (((coll == null))?null:coll);return (function (){var or__3723__auto__ = (cljs.core._nth[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._nth["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){if((function (){var and__3711__auto__ = coll;if(and__3711__auto__)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3711__auto__;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__4360__auto__ = (((coll == null))?null:coll);return (function (){var or__3723__auto__ = (cljs.core._nth[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._nth["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_nth.cljs$core$IFn$_invoke$arity$2 = _nth__2;
_nth.cljs$core$IFn$_invoke$arity$3 = _nth__3;
return _nth;
})()
;
cljs.core.ASeq = (function (){var obj5316 = {};return obj5316;
})();
cljs.core.ISeq = (function (){var obj5318 = {};return obj5318;
})();
cljs.core._first = (function _first(coll){if((function (){var and__3711__auto__ = coll;if(and__3711__auto__)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3711__auto__;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__4360__auto__ = (((coll == null))?null:coll);return (function (){var or__3723__auto__ = (cljs.core._first[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._first["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){if((function (){var and__3711__auto__ = coll;if(and__3711__auto__)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3711__auto__;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__4360__auto__ = (((coll == null))?null:coll);return (function (){var or__3723__auto__ = (cljs.core._rest[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._rest["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = (function (){var obj5320 = {};return obj5320;
})();
cljs.core._next = (function _next(coll){if((function (){var and__3711__auto__ = coll;if(and__3711__auto__)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3711__auto__;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__4360__auto__ = (((coll == null))?null:coll);return (function (){var or__3723__auto__ = (cljs.core._next[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._next["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"INext.-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = (function (){var obj5322 = {};return obj5322;
})();
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){if((function (){var and__3711__auto__ = o;if(and__3711__auto__)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3711__auto__;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__4360__auto__ = (((o == null))?null:o);return (function (){var or__3723__auto__ = (cljs.core._lookup[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._lookup["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){if((function (){var and__3711__auto__ = o;if(and__3711__auto__)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3711__auto__;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__4360__auto__ = (((o == null))?null:o);return (function (){var or__3723__auto__ = (cljs.core._lookup[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._lookup["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_lookup.cljs$core$IFn$_invoke$arity$2 = _lookup__2;
_lookup.cljs$core$IFn$_invoke$arity$3 = _lookup__3;
return _lookup;
})()
;
cljs.core.IAssociative = (function (){var obj5324 = {};return obj5324;
})();
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){if((function (){var and__3711__auto__ = coll;if(and__3711__auto__)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3711__auto__;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__4360__auto__ = (((coll == null))?null:coll);return (function (){var or__3723__auto__ = (cljs.core._contains_key_QMARK_[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._contains_key_QMARK_["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){if((function (){var and__3711__auto__ = coll;if(and__3711__auto__)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3711__auto__;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__4360__auto__ = (((coll == null))?null:coll);return (function (){var or__3723__auto__ = (cljs.core._assoc[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._assoc["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = (function (){var obj5328 = {};return obj5328;
})();
cljs.core._dissoc = (function _dissoc(coll,k){if((function (){var and__3711__auto__ = coll;if(and__3711__auto__)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3711__auto__;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__4360__auto__ = (((coll == null))?null:coll);return (function (){var or__3723__auto__ = (cljs.core._dissoc[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._dissoc["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = (function (){var obj5330 = {};return obj5330;
})();
cljs.core._key = (function _key(coll){if((function (){var and__3711__auto__ = coll;if(and__3711__auto__)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3711__auto__;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__4360__auto__ = (((coll == null))?null:coll);return (function (){var or__3723__auto__ = (cljs.core._key[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._key["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){if((function (){var and__3711__auto__ = coll;if(and__3711__auto__)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3711__auto__;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__4360__auto__ = (((coll == null))?null:coll);return (function (){var or__3723__auto__ = (cljs.core._val[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._val["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = (function (){var obj5332 = {};return obj5332;
})();
cljs.core._disjoin = (function _disjoin(coll,v){if((function (){var and__3711__auto__ = coll;if(and__3711__auto__)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3711__auto__;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__4360__auto__ = (((coll == null))?null:coll);return (function (){var or__3723__auto__ = (cljs.core._disjoin[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._disjoin["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = (function (){var obj5334 = {};return obj5334;
})();
cljs.core._peek = (function _peek(coll){if((function (){var and__3711__auto__ = coll;if(and__3711__auto__)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3711__auto__;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__4360__auto__ = (((coll == null))?null:coll);return (function (){var or__3723__auto__ = (cljs.core._peek[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._peek["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){if((function (){var and__3711__auto__ = coll;if(and__3711__auto__)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3711__auto__;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__4360__auto__ = (((coll == null))?null:coll);return (function (){var or__3723__auto__ = (cljs.core._pop[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._pop["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = (function (){var obj5336 = {};return obj5336;
})();
cljs.core._assoc_n = (function _assoc_n(coll,n,val){if((function (){var and__3711__auto__ = coll;if(and__3711__auto__)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3711__auto__;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__4360__auto__ = (((coll == null))?null:coll);return (function (){var or__3723__auto__ = (cljs.core._assoc_n[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._assoc_n["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = (function (){var obj5338 = {};return obj5338;
})();
cljs.core._deref = (function _deref(o){if((function (){var and__3711__auto__ = o;if(and__3711__auto__)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3711__auto__;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__4360__auto__ = (((o == null))?null:o);return (function (){var or__3723__auto__ = (cljs.core._deref[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._deref["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = (function (){var obj5340 = {};return obj5340;
})();
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){if((function (){var and__3711__auto__ = o;if(and__3711__auto__)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3711__auto__;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__4360__auto__ = (((o == null))?null:o);return (function (){var or__3723__auto__ = (cljs.core._deref_with_timeout[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._deref_with_timeout["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = (function (){var obj5342 = {};return obj5342;
})();
cljs.core._meta = (function _meta(o){if((function (){var and__3711__auto__ = o;if(and__3711__auto__)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3711__auto__;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__4360__auto__ = (((o == null))?null:o);return (function (){var or__3723__auto__ = (cljs.core._meta[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._meta["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = (function (){var obj5344 = {};return obj5344;
})();
cljs.core._with_meta = (function _with_meta(o,meta){if((function (){var and__3711__auto__ = o;if(and__3711__auto__)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3711__auto__;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__4360__auto__ = (((o == null))?null:o);return (function (){var or__3723__auto__ = (cljs.core._with_meta[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._with_meta["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = (function (){var obj5346 = {};return obj5346;
})();
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){if((function (){var and__3711__auto__ = coll;if(and__3711__auto__)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3711__auto__;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__4360__auto__ = (((coll == null))?null:coll);return (function (){var or__3723__auto__ = (cljs.core._reduce[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._reduce["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){if((function (){var and__3711__auto__ = coll;if(and__3711__auto__)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3711__auto__;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__4360__auto__ = (((coll == null))?null:coll);return (function (){var or__3723__auto__ = (cljs.core._reduce[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._reduce["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_reduce.cljs$core$IFn$_invoke$arity$2 = _reduce__2;
_reduce.cljs$core$IFn$_invoke$arity$3 = _reduce__3;
return _reduce;
})()
;
cljs.core.IKVReduce = (function (){var obj5348 = {};return obj5348;
})();
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){if((function (){var and__3711__auto__ = coll;if(and__3711__auto__)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3711__auto__;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__4360__auto__ = (((coll == null))?null:coll);return (function (){var or__3723__auto__ = (cljs.core._kv_reduce[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._kv_reduce["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = (function (){var obj5350 = {};return obj5350;
})();
cljs.core._equiv = (function _equiv(o,other){if((function (){var and__3711__auto__ = o;if(and__3711__auto__)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3711__auto__;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__4360__auto__ = (((o == null))?null:o);return (function (){var or__3723__auto__ = (cljs.core._equiv[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._equiv["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = (function (){var obj5352 = {};return obj5352;
})();
cljs.core._hash = (function _hash(o){if((function (){var and__3711__auto__ = o;if(and__3711__auto__)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3711__auto__;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__4360__auto__ = (((o == null))?null:o);return (function (){var or__3723__auto__ = (cljs.core._hash[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._hash["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = (function (){var obj5354 = {};return obj5354;
})();
cljs.core._seq = (function _seq(o){if((function (){var and__3711__auto__ = o;if(and__3711__auto__)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3711__auto__;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__4360__auto__ = (((o == null))?null:o);return (function (){var or__3723__auto__ = (cljs.core._seq[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._seq["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = (function (){var obj5356 = {};return obj5356;
})();
cljs.core.IList = (function (){var obj5358 = {};return obj5358;
})();
cljs.core.IRecord = (function (){var obj5360 = {};return obj5360;
})();
cljs.core.IReversible = (function (){var obj5362 = {};return obj5362;
})();
cljs.core._rseq = (function _rseq(coll){if((function (){var and__3711__auto__ = coll;if(and__3711__auto__)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3711__auto__;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__4360__auto__ = (((coll == null))?null:coll);return (function (){var or__3723__auto__ = (cljs.core._rseq[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._rseq["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = (function (){var obj5365 = {};return obj5365;
})();
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){if((function (){var and__3711__auto__ = coll;if(and__3711__auto__)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3711__auto__;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__4360__auto__ = (((coll == null))?null:coll);return (function (){var or__3723__auto__ = (cljs.core._sorted_seq[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._sorted_seq["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){if((function (){var and__3711__auto__ = coll;if(and__3711__auto__)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3711__auto__;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__4360__auto__ = (((coll == null))?null:coll);return (function (){var or__3723__auto__ = (cljs.core._sorted_seq_from[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._sorted_seq_from["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){if((function (){var and__3711__auto__ = coll;if(and__3711__auto__)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3711__auto__;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__4360__auto__ = (((coll == null))?null:coll);return (function (){var or__3723__auto__ = (cljs.core._entry_key[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._entry_key["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){if((function (){var and__3711__auto__ = coll;if(and__3711__auto__)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3711__auto__;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__4360__auto__ = (((coll == null))?null:coll);return (function (){var or__3723__auto__ = (cljs.core._comparator[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._comparator["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IWriter = (function (){var obj5367 = {};return obj5367;
})();
cljs.core._write = (function _write(writer,s){if((function (){var and__3711__auto__ = writer;if(and__3711__auto__)
{return writer.cljs$core$IWriter$_write$arity$2;
} else
{return and__3711__auto__;
}
})())
{return writer.cljs$core$IWriter$_write$arity$2(writer,s);
} else
{var x__4360__auto__ = (((writer == null))?null:writer);return (function (){var or__3723__auto__ = (cljs.core._write[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._write["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWriter.-write",writer);
}
}
})().call(null,writer,s);
}
});
cljs.core._flush = (function _flush(writer){if((function (){var and__3711__auto__ = writer;if(and__3711__auto__)
{return writer.cljs$core$IWriter$_flush$arity$1;
} else
{return and__3711__auto__;
}
})())
{return writer.cljs$core$IWriter$_flush$arity$1(writer);
} else
{var x__4360__auto__ = (((writer == null))?null:writer);return (function (){var or__3723__auto__ = (cljs.core._flush[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._flush["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWriter.-flush",writer);
}
}
})().call(null,writer);
}
});
cljs.core.IPrintWithWriter = (function (){var obj5369 = {};return obj5369;
})();
cljs.core._pr_writer = (function _pr_writer(o,writer,opts){if((function (){var and__3711__auto__ = o;if(and__3711__auto__)
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3;
} else
{return and__3711__auto__;
}
})())
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3(o,writer,opts);
} else
{var x__4360__auto__ = (((o == null))?null:o);return (function (){var or__3723__auto__ = (cljs.core._pr_writer[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._pr_writer["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintWithWriter.-pr-writer",o);
}
}
})().call(null,o,writer,opts);
}
});
cljs.core.IPending = (function (){var obj5372 = {};return obj5372;
})();
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){if((function (){var and__3711__auto__ = d;if(and__3711__auto__)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3711__auto__;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__4360__auto__ = (((d == null))?null:d);return (function (){var or__3723__auto__ = (cljs.core._realized_QMARK_[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._realized_QMARK_["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = (function (){var obj5374 = {};return obj5374;
})();
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){if((function (){var and__3711__auto__ = this$;if(and__3711__auto__)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3711__auto__;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__4360__auto__ = (((this$ == null))?null:this$);return (function (){var or__3723__auto__ = (cljs.core._notify_watches[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._notify_watches["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){if((function (){var and__3711__auto__ = this$;if(and__3711__auto__)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3711__auto__;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__4360__auto__ = (((this$ == null))?null:this$);return (function (){var or__3723__auto__ = (cljs.core._add_watch[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._add_watch["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){if((function (){var and__3711__auto__ = this$;if(and__3711__auto__)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3711__auto__;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__4360__auto__ = (((this$ == null))?null:this$);return (function (){var or__3723__auto__ = (cljs.core._remove_watch[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._remove_watch["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = (function (){var obj5389 = {};return obj5389;
})();
cljs.core._as_transient = (function _as_transient(coll){if((function (){var and__3711__auto__ = coll;if(and__3711__auto__)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3711__auto__;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__4360__auto__ = (((coll == null))?null:coll);return (function (){var or__3723__auto__ = (cljs.core._as_transient[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._as_transient["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = (function (){var obj5391 = {};return obj5391;
})();
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){if((function (){var and__3711__auto__ = tcoll;if(and__3711__auto__)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3711__auto__;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__4360__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3723__auto__ = (cljs.core._conj_BANG_[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._conj_BANG_["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){if((function (){var and__3711__auto__ = tcoll;if(and__3711__auto__)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3711__auto__;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__4360__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3723__auto__ = (cljs.core._persistent_BANG_[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._persistent_BANG_["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = (function (){var obj5393 = {};return obj5393;
})();
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){if((function (){var and__3711__auto__ = tcoll;if(and__3711__auto__)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3711__auto__;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__4360__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3723__auto__ = (cljs.core._assoc_BANG_[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._assoc_BANG_["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = (function (){var obj5395 = {};return obj5395;
})();
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){if((function (){var and__3711__auto__ = tcoll;if(and__3711__auto__)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3711__auto__;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__4360__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3723__auto__ = (cljs.core._dissoc_BANG_[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._dissoc_BANG_["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = (function (){var obj5397 = {};return obj5397;
})();
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){if((function (){var and__3711__auto__ = tcoll;if(and__3711__auto__)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3711__auto__;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__4360__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3723__auto__ = (cljs.core._assoc_n_BANG_[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._assoc_n_BANG_["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){if((function (){var and__3711__auto__ = tcoll;if(and__3711__auto__)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3711__auto__;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__4360__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3723__auto__ = (cljs.core._pop_BANG_[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._pop_BANG_["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = (function (){var obj5399 = {};return obj5399;
})();
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){if((function (){var and__3711__auto__ = tcoll;if(and__3711__auto__)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3711__auto__;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__4360__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3723__auto__ = (cljs.core._disjoin_BANG_[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._disjoin_BANG_["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = (function (){var obj5401 = {};return obj5401;
})();
cljs.core._compare = (function _compare(x,y){if((function (){var and__3711__auto__ = x;if(and__3711__auto__)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3711__auto__;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__4360__auto__ = (((x == null))?null:x);return (function (){var or__3723__auto__ = (cljs.core._compare[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._compare["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = (function (){var obj5416 = {};return obj5416;
})();
cljs.core._drop_first = (function _drop_first(coll){if((function (){var and__3711__auto__ = coll;if(and__3711__auto__)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3711__auto__;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__4360__auto__ = (((coll == null))?null:coll);return (function (){var or__3723__auto__ = (cljs.core._drop_first[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._drop_first["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = (function (){var obj5418 = {};return obj5418;
})();
cljs.core._chunked_first = (function _chunked_first(coll){if((function (){var and__3711__auto__ = coll;if(and__3711__auto__)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3711__auto__;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__4360__auto__ = (((coll == null))?null:coll);return (function (){var or__3723__auto__ = (cljs.core._chunked_first[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._chunked_first["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){if((function (){var and__3711__auto__ = coll;if(and__3711__auto__)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3711__auto__;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__4360__auto__ = (((coll == null))?null:coll);return (function (){var or__3723__auto__ = (cljs.core._chunked_rest[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._chunked_rest["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = (function (){var obj5420 = {};return obj5420;
})();
cljs.core._chunked_next = (function _chunked_next(coll){if((function (){var and__3711__auto__ = coll;if(and__3711__auto__)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3711__auto__;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__4360__auto__ = (((coll == null))?null:coll);return (function (){var or__3723__auto__ = (cljs.core._chunked_next[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._chunked_next["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INamed = (function (){var obj5422 = {};return obj5422;
})();
cljs.core._name = (function _name(x){if((function (){var and__3711__auto__ = x;if(and__3711__auto__)
{return x.cljs$core$INamed$_name$arity$1;
} else
{return and__3711__auto__;
}
})())
{return x.cljs$core$INamed$_name$arity$1(x);
} else
{var x__4360__auto__ = (((x == null))?null:x);return (function (){var or__3723__auto__ = (cljs.core._name[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._name["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"INamed.-name",x);
}
}
})().call(null,x);
}
});
cljs.core._namespace = (function _namespace(x){if((function (){var and__3711__auto__ = x;if(and__3711__auto__)
{return x.cljs$core$INamed$_namespace$arity$1;
} else
{return and__3711__auto__;
}
})())
{return x.cljs$core$INamed$_namespace$arity$1(x);
} else
{var x__4360__auto__ = (((x == null))?null:x);return (function (){var or__3723__auto__ = (cljs.core._namespace[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._namespace["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"INamed.-namespace",x);
}
}
})().call(null,x);
}
});
cljs.core.IAtom = (function (){var obj5424 = {};return obj5424;
})();
cljs.core.IReset = (function (){var obj5426 = {};return obj5426;
})();
cljs.core._reset_BANG_ = (function _reset_BANG_(o,new_value){if((function (){var and__3711__auto__ = o;if(and__3711__auto__)
{return o.cljs$core$IReset$_reset_BANG_$arity$2;
} else
{return and__3711__auto__;
}
})())
{return o.cljs$core$IReset$_reset_BANG_$arity$2(o,new_value);
} else
{var x__4360__auto__ = (((o == null))?null:o);return (function (){var or__3723__auto__ = (cljs.core._reset_BANG_[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._reset_BANG_["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IReset.-reset!",o);
}
}
})().call(null,o,new_value);
}
});
cljs.core.ISwap = (function (){var obj5428 = {};return obj5428;
})();
cljs.core._swap_BANG_ = (function() {
var _swap_BANG_ = null;
var _swap_BANG___2 = (function (o,f){if((function (){var and__3711__auto__ = o;if(and__3711__auto__)
{return o.cljs$core$ISwap$_swap_BANG_$arity$2;
} else
{return and__3711__auto__;
}
})())
{return o.cljs$core$ISwap$_swap_BANG_$arity$2(o,f);
} else
{var x__4360__auto__ = (((o == null))?null:o);return (function (){var or__3723__auto__ = (cljs.core._swap_BANG_[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._swap_BANG_["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISwap.-swap!",o);
}
}
})().call(null,o,f);
}
});
var _swap_BANG___3 = (function (o,f,a){if((function (){var and__3711__auto__ = o;if(and__3711__auto__)
{return o.cljs$core$ISwap$_swap_BANG_$arity$3;
} else
{return and__3711__auto__;
}
})())
{return o.cljs$core$ISwap$_swap_BANG_$arity$3(o,f,a);
} else
{var x__4360__auto__ = (((o == null))?null:o);return (function (){var or__3723__auto__ = (cljs.core._swap_BANG_[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._swap_BANG_["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISwap.-swap!",o);
}
}
})().call(null,o,f,a);
}
});
var _swap_BANG___4 = (function (o,f,a,b){if((function (){var and__3711__auto__ = o;if(and__3711__auto__)
{return o.cljs$core$ISwap$_swap_BANG_$arity$4;
} else
{return and__3711__auto__;
}
})())
{return o.cljs$core$ISwap$_swap_BANG_$arity$4(o,f,a,b);
} else
{var x__4360__auto__ = (((o == null))?null:o);return (function (){var or__3723__auto__ = (cljs.core._swap_BANG_[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._swap_BANG_["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISwap.-swap!",o);
}
}
})().call(null,o,f,a,b);
}
});
var _swap_BANG___5 = (function (o,f,a,b,xs){if((function (){var and__3711__auto__ = o;if(and__3711__auto__)
{return o.cljs$core$ISwap$_swap_BANG_$arity$5;
} else
{return and__3711__auto__;
}
})())
{return o.cljs$core$ISwap$_swap_BANG_$arity$5(o,f,a,b,xs);
} else
{var x__4360__auto__ = (((o == null))?null:o);return (function (){var or__3723__auto__ = (cljs.core._swap_BANG_[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._swap_BANG_["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISwap.-swap!",o);
}
}
})().call(null,o,f,a,b,xs);
}
});
_swap_BANG_ = function(o,f,a,b,xs){
switch(arguments.length){
case 2:
return _swap_BANG___2.call(this,o,f);
case 3:
return _swap_BANG___3.call(this,o,f,a);
case 4:
return _swap_BANG___4.call(this,o,f,a,b);
case 5:
return _swap_BANG___5.call(this,o,f,a,b,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = _swap_BANG___2;
_swap_BANG_.cljs$core$IFn$_invoke$arity$3 = _swap_BANG___3;
_swap_BANG_.cljs$core$IFn$_invoke$arity$4 = _swap_BANG___4;
_swap_BANG_.cljs$core$IFn$_invoke$arity$5 = _swap_BANG___5;
return _swap_BANG_;
})()
;
cljs.core.IIterable = (function (){var obj5431 = {};return obj5431;
})();
cljs.core._iterator = (function _iterator(coll){if((function (){var and__3711__auto__ = coll;if(and__3711__auto__)
{return coll.cljs$core$IIterable$_iterator$arity$1;
} else
{return and__3711__auto__;
}
})())
{return coll.cljs$core$IIterable$_iterator$arity$1(coll);
} else
{var x__4360__auto__ = (((coll == null))?null:coll);return (function (){var or__3723__auto__ = (cljs.core._iterator[goog.typeOf(x__4360__auto__)]);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var or__3723__auto____$1 = (cljs.core._iterator["_"]);if(or__3723__auto____$1)
{return or__3723__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IIterable.-iterator",coll);
}
}
})().call(null,coll);
}
});

/**
* @constructor
*/
cljs.core.StringBufferWriter = (function (sb){
this.sb = sb;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073741824;
})
cljs.core.StringBufferWriter.cljs$lang$type = true;
cljs.core.StringBufferWriter.cljs$lang$ctorStr = "cljs.core/StringBufferWriter";
cljs.core.StringBufferWriter.cljs$lang$ctorPrWriter = (function (this__4300__auto__,writer__4301__auto__,opt__4302__auto__){return cljs.core._write.call(null,writer__4301__auto__,"cljs.core/StringBufferWriter");
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_write$arity$2 = (function (_,s){var self__ = this;
var ___$1 = this;return self__.sb.append(s);
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return null;
});
cljs.core.__GT_StringBufferWriter = (function __GT_StringBufferWriter(sb){return (new cljs.core.StringBufferWriter(sb));
});
/**
* Support so that collections can implement toString without
* loading all the printing machinery.
*/
cljs.core.pr_str_STAR_ = (function pr_str_STAR_(obj){var sb = (new goog.string.StringBuffer());var writer = (new cljs.core.StringBufferWriter(sb));cljs.core._pr_writer.call(null,obj,writer,cljs.core.pr_opts.call(null));
cljs.core._flush.call(null,writer);
return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
});
cljs.core.int_rotate_left = (function int_rotate_left(x,n){return ((x << n) | (x >>> (- n)));
});
if((typeof Math.imul !== 'undefined') && (!((Math.imul.call(null,(4294967295),(5)) === (0)))))
{cljs.core.imul = (function imul(a,b){return Math.imul.call(null,a,b);
});
} else
{cljs.core.imul = (function imul(a,b){var ah = ((a >>> (16)) & (65535));var al = (a & (65535));var bh = ((b >>> (16)) & (65535));var bl = (b & (65535));return (((al * bl) + ((((ah * bl) + (al * bh)) << (16)) >>> (0))) | (0));
});
}
cljs.core.m3_seed = (0);
cljs.core.m3_C1 = (3432918353);
cljs.core.m3_C2 = (461845907);
cljs.core.m3_mix_K1 = (function m3_mix_K1(k1){return cljs.core.imul.call(null,cljs.core.int_rotate_left.call(null,cljs.core.imul.call(null,k1,cljs.core.m3_C1),(15)),cljs.core.m3_C2);
});
cljs.core.m3_mix_H1 = (function m3_mix_H1(h1,k1){return (cljs.core.imul.call(null,cljs.core.int_rotate_left.call(null,(h1 ^ k1),(13)),(5)) + (3864292196));
});
cljs.core.m3_fmix = (function m3_fmix(h1,len){var h1__$1 = h1;var h1__$2 = (h1__$1 ^ len);var h1__$3 = (h1__$2 ^ (h1__$2 >>> (16)));var h1__$4 = cljs.core.imul.call(null,h1__$3,(2246822507));var h1__$5 = (h1__$4 ^ (h1__$4 >>> (13)));var h1__$6 = cljs.core.imul.call(null,h1__$5,(3266489909));var h1__$7 = (h1__$6 ^ (h1__$6 >>> (16)));return h1__$7;
});
cljs.core.m3_hash_int = (function m3_hash_int(in$){if((in$ === (0)))
{return in$;
} else
{var k1 = cljs.core.m3_mix_K1.call(null,in$);var h1 = cljs.core.m3_mix_H1.call(null,cljs.core.m3_seed,k1);return cljs.core.m3_fmix.call(null,h1,(4));
}
});
cljs.core.m3_hash_unencoded_chars = (function m3_hash_unencoded_chars(in$){var h1 = (function (){var i = (1);var h1 = cljs.core.m3_seed;while(true){
if((i < in$.length))
{{
var G__5432 = (i + (2));
var G__5433 = cljs.core.m3_mix_H1.call(null,h1,cljs.core.m3_mix_K1.call(null,(in$.charCodeAt((i - (1))) | (in$.charCodeAt(i) << (16)))));
i = G__5432;
h1 = G__5433;
continue;
}
} else
{return h1;
}
break;
}
})();var h1__$1 = ((((in$.length & (1)) === (1)))?(h1 ^ cljs.core.m3_mix_K1.call(null,in$.charCodeAt((in$.length - (1))))):h1);return cljs.core.m3_fmix.call(null,h1__$1,cljs.core.imul.call(null,(2),in$.length));
});
cljs.core.string_hash_cache = (function (){var obj5435 = {};return obj5435;
})();
cljs.core.string_hash_cache_count = (0);
cljs.core.hash_string_STAR_ = (function hash_string_STAR_(s){if(!((s == null)))
{var len = s.length;if((len > (0)))
{var i = (0);var hash = (0);while(true){
if((i < len))
{{
var G__5436 = (i + (1));
var G__5437 = (cljs.core.imul.call(null,(31),hash) + s.charCodeAt(i));
i = G__5436;
hash = G__5437;
continue;
}
} else
{return hash;
}
break;
}
} else
{return (0);
}
} else
{return (0);
}
});
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){var h = cljs.core.hash_string_STAR_.call(null,k);(cljs.core.string_hash_cache[k] = h);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + (1));
return h;
});
cljs.core.hash_string = (function hash_string(k){if((cljs.core.string_hash_cache_count > (255)))
{cljs.core.string_hash_cache = (function (){var obj5441 = {};return obj5441;
})();
cljs.core.string_hash_cache_count = (0);
} else
{}
var h = (cljs.core.string_hash_cache[k]);if(typeof h === 'number')
{return h;
} else
{return cljs.core.add_to_string_hash_cache.call(null,k);
}
});
cljs.core.hash = (function hash(o){if((function (){var G__5443 = o;if(G__5443)
{var bit__4380__auto__ = (G__5443.cljs$lang$protocol_mask$partition0$ & (4194304));if((bit__4380__auto__) || (G__5443.cljs$core$IHash$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._hash.call(null,o);
} else
{if(typeof o === 'number')
{return (Math.floor.call(null,o) % (2147483647));
} else
{if(o === true)
{return (1);
} else
{if(o === false)
{return (0);
} else
{if(typeof o === 'string')
{return cljs.core.m3_hash_int.call(null,cljs.core.hash_string.call(null,o));
} else
{if((o == null))
{return (0);
} else
{return cljs.core._hash.call(null,o);

}
}
}
}
}
}
});
cljs.core.hash_combine = (function hash_combine(seed,hash){return (seed ^ (((hash + (2654435769)) + (seed << (6))) + (seed >> (2))));
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){return (o instanceof t);
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){return (x instanceof cljs.core.Symbol);
});
cljs.core.hash_symbol = (function hash_symbol(sym){return cljs.core.hash_combine.call(null,cljs.core.m3_hash_unencoded_chars.call(null,sym.name),cljs.core.hash_string.call(null,sym.ns));
});
cljs.core.compare_symbols = (function compare_symbols(a,b){if(cljs.core.truth_(cljs.core._EQ_.call(null,a,b)))
{return (0);
} else
{if(cljs.core.truth_((function (){var and__3711__auto__ = cljs.core.not.call(null,a.ns);if(and__3711__auto__)
{return b.ns;
} else
{return and__3711__auto__;
}
})()))
{return (-1);
} else
{if(cljs.core.truth_(a.ns))
{if(cljs.core.not.call(null,b.ns))
{return (1);
} else
{var nsc = cljs.core.compare.call(null,a.ns,b.ns);if((nsc === (0)))
{return cljs.core.compare.call(null,a.name,b.name);
} else
{return nsc;
}
}
} else
{return cljs.core.compare.call(null,a.name,b.name);

}
}
}
});

/**
* @constructor
*/
cljs.core.Symbol = (function (ns,name,str,_hash,_meta){
this.ns = ns;
this.name = name;
this.str = str;
this._hash = _hash;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 2154168321;
this.cljs$lang$protocol_mask$partition1$ = 4096;
})
cljs.core.Symbol.cljs$lang$type = true;
cljs.core.Symbol.cljs$lang$ctorStr = "cljs.core/Symbol";
cljs.core.Symbol.cljs$lang$ctorPrWriter = (function (this__4300__auto__,writer__4301__auto__,opt__4302__auto__){return cljs.core._write.call(null,writer__4301__auto__,"cljs.core/Symbol");
});
cljs.core.Symbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (o,writer,_){var self__ = this;
var o__$1 = this;return cljs.core._write.call(null,writer,self__.str);
});
cljs.core.Symbol.prototype.cljs$core$INamed$_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.name;
});
cljs.core.Symbol.prototype.cljs$core$INamed$_namespace$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.ns;
});
cljs.core.Symbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (sym){var self__ = this;
var sym__$1 = this;var h__4134__auto__ = self__._hash;if(!((h__4134__auto__ == null)))
{return h__4134__auto__;
} else
{var h__4134__auto____$1 = cljs.core.hash_symbol.call(null,sym__$1);self__._hash = h__4134__auto____$1;
return h__4134__auto____$1;
}
});
cljs.core.Symbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;return (new cljs.core.Symbol(self__.ns,self__.name,self__.str,self__._hash,new_meta));
});
cljs.core.Symbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__._meta;
});
cljs.core.Symbol.prototype.call = (function() {
var G__5445 = null;
var G__5445__2 = (function (self__,coll){var self__ = this;
var self____$1 = this;var sym = self____$1;return cljs.core._lookup.call(null,coll,sym,null);
});
var G__5445__3 = (function (self__,coll,not_found){var self__ = this;
var self____$1 = this;var sym = self____$1;return cljs.core._lookup.call(null,coll,sym,not_found);
});
G__5445 = function(self__,coll,not_found){
switch(arguments.length){
case 2:
return G__5445__2.call(this,self__,coll);
case 3:
return G__5445__3.call(this,self__,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__5445.cljs$core$IFn$_invoke$arity$2 = G__5445__2;
G__5445.cljs$core$IFn$_invoke$arity$3 = G__5445__3;
return G__5445;
})()
;
cljs.core.Symbol.prototype.apply = (function (self__,args5444){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args5444)));
});
cljs.core.Symbol.prototype.cljs$core$IFn$_invoke$arity$1 = (function (coll){var self__ = this;
var sym = this;return cljs.core._lookup.call(null,coll,sym,null);
});
cljs.core.Symbol.prototype.cljs$core$IFn$_invoke$arity$2 = (function (coll,not_found){var self__ = this;
var sym = this;return cljs.core._lookup.call(null,coll,sym,not_found);
});
cljs.core.Symbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if((other instanceof cljs.core.Symbol))
{return (self__.str === other.str);
} else
{return false;
}
});
cljs.core.Symbol.prototype.toString = (function (){var self__ = this;
var _ = this;return self__.str;
});
cljs.core.Symbol.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.__GT_Symbol = (function __GT_Symbol(ns,name,str,_hash,_meta){return (new cljs.core.Symbol(ns,name,str,_hash,_meta));
});
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){if((name instanceof cljs.core.Symbol))
{return name;
} else
{return symbol.call(null,null,name);
}
});
var symbol__2 = (function (ns,name){var sym_str = ((!((ns == null)))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)):name);return (new cljs.core.Symbol(ns,name,sym_str,null,null));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
symbol.cljs$core$IFn$_invoke$arity$1 = symbol__1;
symbol.cljs$core$IFn$_invoke$arity$2 = symbol__2;
return symbol;
})()
;
cljs.core.iterable_QMARK_ = (function iterable_QMARK_(x){var G__5447 = x;if(G__5447)
{var bit__4387__auto__ = null;if(cljs.core.truth_((function (){var or__3723__auto__ = bit__4387__auto__;if(cljs.core.truth_(or__3723__auto__))
{return or__3723__auto__;
} else
{return G__5447.cljs$core$IIterable$;
}
})()))
{return true;
} else
{if((!G__5447.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIterable,G__5447);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIterable,G__5447);
}
});
cljs.core.clone = (function clone(value){return cljs.core._clone.call(null,value);
});
cljs.core.cloneable_QMARK_ = (function cloneable_QMARK_(value){var G__5449 = value;if(G__5449)
{var bit__4387__auto__ = (G__5449.cljs$lang$protocol_mask$partition1$ & (8192));if((bit__4387__auto__) || (G__5449.cljs$core$ICloneable$))
{return true;
} else
{if((!G__5449.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__5449);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__5449);
}
});
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){if((coll == null))
{return null;
} else
{if((function (){var G__5451 = coll;if(G__5451)
{var bit__4380__auto__ = (G__5451.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4380__auto__) || (G__5451.cljs$core$ISeqable$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._seq.call(null,coll);
} else
{if(coll instanceof Array)
{if((coll.length === (0)))
{return null;
} else
{return (new cljs.core.IndexedSeq(coll,(0)));
}
} else
{if(typeof coll === 'string')
{if((coll.length === (0)))
{return null;
} else
{return (new cljs.core.IndexedSeq(coll,(0)));
}
} else
{if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,coll))
{return cljs.core._seq.call(null,coll);
} else
{throw (new Error((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(coll)+" is not ISeqable")));

}
}
}
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){if((coll == null))
{return null;
} else
{if((function (){var G__5453 = coll;if(G__5453)
{var bit__4380__auto__ = (G__5453.cljs$lang$protocol_mask$partition0$ & (64));if((bit__4380__auto__) || (G__5453.cljs$core$ISeq$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s = cljs.core.seq.call(null,coll);if((s == null))
{return null;
} else
{return cljs.core._first.call(null,s);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){if(!((coll == null)))
{if((function (){var G__5455 = coll;if(G__5455)
{var bit__4380__auto__ = (G__5455.cljs$lang$protocol_mask$partition0$ & (64));if((bit__4380__auto__) || (G__5455.cljs$core$ISeq$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s = cljs.core.seq.call(null,coll);if(s)
{return cljs.core._rest.call(null,s);
} else
{return cljs.core.List.EMPTY;
}
}
} else
{return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){if((coll == null))
{return null;
} else
{if((function (){var G__5457 = coll;if(G__5457)
{var bit__4380__auto__ = (G__5457.cljs$lang$protocol_mask$partition0$ & (128));if((bit__4380__auto__) || (G__5457.cljs$core$INext$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._next.call(null,coll);
} else
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
}
}
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){return true;
});
var _EQ___2 = (function (x,y){if((x == null))
{return (y == null);
} else
{return ((x === y)) || (cljs.core._equiv.call(null,x,y));
}
});
var _EQ___3 = (function() { 
var G__5458__delegate = function (x,y,more){while(true){
if(_EQ_.call(null,x,y))
{if(cljs.core.next.call(null,more))
{{
var G__5459 = y;
var G__5460 = cljs.core.first.call(null,more);
var G__5461 = cljs.core.next.call(null,more);
x = G__5459;
y = G__5460;
more = G__5461;
continue;
}
} else
{return _EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__5458 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5458__delegate.call(this,x,y,more);};
G__5458.cljs$lang$maxFixedArity = 2;
G__5458.cljs$lang$applyTo = (function (arglist__5462){
var x = cljs.core.first(arglist__5462);
arglist__5462 = cljs.core.next(arglist__5462);
var y = cljs.core.first(arglist__5462);
var more = cljs.core.rest(arglist__5462);
return G__5458__delegate(x,y,more);
});
G__5458.cljs$core$IFn$_invoke$arity$variadic = G__5458__delegate;
return G__5458;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$core$IFn$_invoke$arity$1 = _EQ___1;
_EQ_.cljs$core$IFn$_invoke$arity$2 = _EQ___2;
_EQ_.cljs$core$IFn$_invoke$arity$variadic = _EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _EQ_;
})()
;
/**
* Mix final collection hash for ordered or unordered collections.
* hash-basis is the combined collection hash, count is the number
* of elements included in the basis. Note this is the hash code
* consistent with =, different from .hashCode.
* See http://clojure.org/data_structures#hash for full algorithms.
*/
cljs.core.mix_collection_hash = (function mix_collection_hash(hash_basis,count){var h1 = cljs.core.m3_seed;var k1 = cljs.core.m3_mix_K1.call(null,hash_basis);var h1__$1 = cljs.core.m3_mix_H1.call(null,h1,k1);return cljs.core.m3_fmix.call(null,h1__$1,count);
});
/**
* Returns the hash code, consistent with =, for an external ordered
* collection implementing Iterable.
* See http://clojure.org/data_structures#hash for full algorithms.
*/
cljs.core.hash_ordered_coll = (function hash_ordered_coll(coll){var n = (0);var hash_code = (1);var coll__$1 = cljs.core.seq.call(null,coll);while(true){
if(!((coll__$1 == null)))
{{
var G__5469 = (n + (1));
var G__5470 = ((cljs.core.imul.call(null,(31),hash_code) + cljs.core.hash.call(null,cljs.core.first.call(null,coll__$1))) | (0));
var G__5471 = cljs.core.next.call(null,coll__$1);
n = G__5469;
hash_code = G__5470;
coll__$1 = G__5471;
continue;
}
} else
{return cljs.core.mix_collection_hash.call(null,hash_code,n);
}
break;
}
});
/**
* Returns the hash code, consistent with =, for an external unordered
* collection implementing Iterable. For maps, the iterator should
* return map entries whose hash is computed as
* (hash-ordered-coll [k v]).
* See http://clojure.org/data_structures#hash for full algorithms.
*/
cljs.core.hash_unordered_coll = (function hash_unordered_coll(coll){var n = (0);var hash_code = (0);var coll__$1 = cljs.core.seq.call(null,coll);while(true){
if(!((coll__$1 == null)))
{{
var G__5484 = (n + (1));
var G__5485 = ((hash_code + cljs.core.hash.call(null,cljs.core.first.call(null,coll__$1))) | (0));
var G__5486 = cljs.core.next.call(null,coll__$1);
n = G__5484;
hash_code = G__5485;
coll__$1 = G__5486;
continue;
}
} else
{return cljs.core.mix_collection_hash.call(null,hash_code,n);
}
break;
}
});
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){return (0);
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var o__$1 = this;return ((other instanceof Date)) && ((o__$1.toString() === other.toString()));
});
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){return (x === o);
}));
(cljs.core.IMeta["function"] = true);
(cljs.core._meta["function"] = (function (_){return null;
}));
(cljs.core.Fn["function"] = true);
(cljs.core.IHash["_"] = true);
(cljs.core._hash["_"] = (function (o){return goog.getUid(o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){return (x + (1));
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorStr = "cljs.core/Reduced";
cljs.core.Reduced.cljs$lang$ctorPrWriter = (function (this__4300__auto__,writer__4301__auto__,opt__4302__auto__){return cljs.core._write.call(null,writer__4301__auto__,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){var self__ = this;
var o__$1 = this;return self__.val;
});
cljs.core.__GT_Reduced = (function __GT_Reduced(val){return (new cljs.core.Reduced(val));
});
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){return (new cljs.core.Reduced(x));
});
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){return (r instanceof cljs.core.Reduced);
});
cljs.core.deref = (function deref(o){return cljs.core._deref.call(null,o);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){var cnt = cljs.core._count.call(null,cicoll);if((cnt === (0)))
{return f.call(null);
} else
{var val = cljs.core._nth.call(null,cicoll,(0));var n = (1);while(true){
if((n < cnt))
{var nval = f.call(null,val,cljs.core._nth.call(null,cicoll,n));if(cljs.core.reduced_QMARK_.call(null,nval))
{return cljs.core.deref.call(null,nval);
} else
{{
var G__5490 = nval;
var G__5491 = (n + (1));
val = G__5490;
n = G__5491;
continue;
}
}
} else
{return val;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){var cnt = cljs.core._count.call(null,cicoll);var val__$1 = val;var n = (0);while(true){
if((n < cnt))
{var nval = f.call(null,val__$1,cljs.core._nth.call(null,cicoll,n));if(cljs.core.reduced_QMARK_.call(null,nval))
{return cljs.core.deref.call(null,nval);
} else
{{
var G__5492 = nval;
var G__5493 = (n + (1));
val__$1 = G__5492;
n = G__5493;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){var cnt = cljs.core._count.call(null,cicoll);var val__$1 = val;var n = idx;while(true){
if((n < cnt))
{var nval = f.call(null,val__$1,cljs.core._nth.call(null,cicoll,n));if(cljs.core.reduced_QMARK_.call(null,nval))
{return cljs.core.deref.call(null,nval);
} else
{{
var G__5494 = nval;
var G__5495 = (n + (1));
val__$1 = G__5494;
n = G__5495;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ci_reduce.cljs$core$IFn$_invoke$arity$2 = ci_reduce__2;
ci_reduce.cljs$core$IFn$_invoke$arity$3 = ci_reduce__3;
ci_reduce.cljs$core$IFn$_invoke$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){var cnt = arr.length;if((arr.length === (0)))
{return f.call(null);
} else
{var val = (arr[(0)]);var n = (1);while(true){
if((n < cnt))
{var nval = f.call(null,val,(arr[n]));if(cljs.core.reduced_QMARK_.call(null,nval))
{return cljs.core.deref.call(null,nval);
} else
{{
var G__5496 = nval;
var G__5497 = (n + (1));
val = G__5496;
n = G__5497;
continue;
}
}
} else
{return val;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){var cnt = arr.length;var val__$1 = val;var n = (0);while(true){
if((n < cnt))
{var nval = f.call(null,val__$1,(arr[n]));if(cljs.core.reduced_QMARK_.call(null,nval))
{return cljs.core.deref.call(null,nval);
} else
{{
var G__5498 = nval;
var G__5499 = (n + (1));
val__$1 = G__5498;
n = G__5499;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){var cnt = arr.length;var val__$1 = val;var n = idx;while(true){
if((n < cnt))
{var nval = f.call(null,val__$1,(arr[n]));if(cljs.core.reduced_QMARK_.call(null,nval))
{return cljs.core.deref.call(null,nval);
} else
{{
var G__5500 = nval;
var G__5501 = (n + (1));
val__$1 = G__5500;
n = G__5501;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_reduce.cljs$core$IFn$_invoke$arity$2 = array_reduce__2;
array_reduce.cljs$core$IFn$_invoke$arity$3 = array_reduce__3;
array_reduce.cljs$core$IFn$_invoke$arity$4 = array_reduce__4;
return array_reduce;
})()
;
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){var G__5503 = x;if(G__5503)
{var bit__4387__auto__ = (G__5503.cljs$lang$protocol_mask$partition0$ & (2));if((bit__4387__auto__) || (G__5503.cljs$core$ICounted$))
{return true;
} else
{if((!G__5503.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICounted,G__5503);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICounted,G__5503);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){var G__5505 = x;if(G__5505)
{var bit__4387__auto__ = (G__5505.cljs$lang$protocol_mask$partition0$ & (16));if((bit__4387__auto__) || (G__5505.cljs$core$IIndexed$))
{return true;
} else
{if((!G__5505.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIndexed,G__5505);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIndexed,G__5505);
}
});

/**
* @constructor
*/
cljs.core.IndexedSeqIterator = (function (arr,i){
this.arr = arr;
this.i = i;
})
cljs.core.IndexedSeqIterator.cljs$lang$type = true;
cljs.core.IndexedSeqIterator.cljs$lang$ctorStr = "cljs.core/IndexedSeqIterator";
cljs.core.IndexedSeqIterator.cljs$lang$ctorPrWriter = (function (this__4300__auto__,writer__4301__auto__,opt__4302__auto__){return cljs.core._write.call(null,writer__4301__auto__,"cljs.core/IndexedSeqIterator");
});
cljs.core.IndexedSeqIterator.prototype.hasNext = (function (){var self__ = this;
var _ = this;return (self__.i < self__.arr.length);
});
cljs.core.IndexedSeqIterator.prototype.next = (function (){var self__ = this;
var _ = this;var ret = (self__.arr[self__.i]);self__.i = (self__.i + (1));
return ret;
});
cljs.core.__GT_IndexedSeqIterator = (function __GT_IndexedSeqIterator(arr,i){return (new cljs.core.IndexedSeqIterator(arr,i));
});

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (arr,i){
this.arr = arr;
this.i = i;
this.cljs$lang$protocol_mask$partition0$ = 166199550;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorStr = "cljs.core/IndexedSeq";
cljs.core.IndexedSeq.cljs$lang$ctorPrWriter = (function (this__4300__auto__,writer__4301__auto__,opt__4302__auto__){return cljs.core._write.call(null,writer__4301__auto__,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.IndexedSeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var self__ = this;
var coll__$1 = this;var i__$1 = (n + self__.i);if((i__$1 < self__.arr.length))
{return (self__.arr[i__$1]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var self__ = this;
var coll__$1 = this;var i__$1 = (n + self__.i);if((i__$1 < self__.arr.length))
{return (self__.arr[i__$1]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIterable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.IndexedSeqIterator(self__.arr,self__.i));
});
cljs.core.IndexedSeq.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.IndexedSeq(self__.arr,self__.i));
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(((self__.i + (1)) < self__.arr.length))
{return (new cljs.core.IndexedSeq(self__.arr,(self__.i + (1))));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (self__.arr.length - self__.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var c = cljs.core._count.call(null,coll__$1);if((c > (0)))
{return (new cljs.core.RSeq(coll__$1,(c - (1)),null));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.hash_ordered_coll.call(null,coll__$1);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.List.EMPTY;
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.array_reduce.call(null,self__.arr,f,(self__.arr[self__.i]),(self__.i + (1)));
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.array_reduce.call(null,self__.arr,f,start,self__.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (self__.arr[self__.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(((self__.i + (1)) < self__.arr.length))
{return (new cljs.core.IndexedSeq(self__.arr,(self__.i + (1))));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons.call(null,o,coll__$1);
});
cljs.core.__GT_IndexedSeq = (function __GT_IndexedSeq(arr,i){return (new cljs.core.IndexedSeq(arr,i));
});
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){return prim_seq.call(null,prim,(0));
});
var prim_seq__2 = (function (prim,i){if((i < prim.length))
{return (new cljs.core.IndexedSeq(prim,i));
} else
{return null;
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prim_seq.cljs$core$IFn$_invoke$arity$1 = prim_seq__1;
prim_seq.cljs$core$IFn$_invoke$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){return cljs.core.prim_seq.call(null,array,(0));
});
var array_seq__2 = (function (array,i){return cljs.core.prim_seq.call(null,array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_seq.cljs$core$IFn$_invoke$arity$1 = array_seq__1;
array_seq.cljs$core$IFn$_invoke$arity$2 = array_seq__2;
return array_seq;
})()
;

/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 32374990;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.RSeq.cljs$lang$type = true;
cljs.core.RSeq.cljs$lang$ctorStr = "cljs.core/RSeq";
cljs.core.RSeq.cljs$lang$ctorPrWriter = (function (this__4300__auto__,writer__4301__auto__,opt__4302__auto__){return cljs.core._write.call(null,writer__4301__auto__,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.RSeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.RSeq.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.RSeq(self__.ci,self__.i,self__.meta));
});
cljs.core.RSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.i > (0)))
{return (new cljs.core.RSeq(self__.ci,(self__.i - (1)),null));
} else
{return null;
}
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (self__.i + (1));
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.hash_ordered_coll.call(null,coll__$1);
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.RSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});
cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (col,f){var self__ = this;
var col__$1 = this;return cljs.core.seq_reduce.call(null,f,col__$1);
});
cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (col,f,start){var self__ = this;
var col__$1 = this;return cljs.core.seq_reduce.call(null,f,start,col__$1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._nth.call(null,self__.ci,self__.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.i > (0)))
{return (new cljs.core.RSeq(self__.ci,(self__.i - (1)),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){var self__ = this;
var coll__$1 = this;return (new cljs.core.RSeq(self__.ci,self__.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons.call(null,o,coll__$1);
});
cljs.core.__GT_RSeq = (function __GT_RSeq(ci,i,meta){return (new cljs.core.RSeq(ci,i,meta));
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){while(true){
var sn = cljs.core.next.call(null,s);if(!((sn == null)))
{{
var G__5514 = sn;
s = G__5514;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){return (x === o);
}));
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__0 = (function (){return cljs.core.PersistentVector.EMPTY;
});
var conj__1 = (function (coll){return coll;
});
var conj__2 = (function (coll,x){if(!((coll == null)))
{return cljs.core._conj.call(null,coll,x);
} else
{return cljs.core._conj.call(null,cljs.core.List.EMPTY,x);
}
});
var conj__3 = (function() { 
var G__5515__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__5516 = conj.call(null,coll,x);
var G__5517 = cljs.core.first.call(null,xs);
var G__5518 = cljs.core.next.call(null,xs);
coll = G__5516;
x = G__5517;
xs = G__5518;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__5515 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5515__delegate.call(this,coll,x,xs);};
G__5515.cljs$lang$maxFixedArity = 2;
G__5515.cljs$lang$applyTo = (function (arglist__5519){
var coll = cljs.core.first(arglist__5519);
arglist__5519 = cljs.core.next(arglist__5519);
var x = cljs.core.first(arglist__5519);
var xs = cljs.core.rest(arglist__5519);
return G__5515__delegate(coll,x,xs);
});
G__5515.cljs$core$IFn$_invoke$arity$variadic = G__5515__delegate;
return G__5515;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 0:
return conj__0.call(this);
case 1:
return conj__1.call(this,coll);
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$core$IFn$_invoke$arity$0 = conj__0;
conj.cljs$core$IFn$_invoke$arity$1 = conj__1;
conj.cljs$core$IFn$_invoke$arity$2 = conj__2;
conj.cljs$core$IFn$_invoke$arity$variadic = conj__3.cljs$core$IFn$_invoke$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){if((coll == null))
{return null;
} else
{return cljs.core._empty.call(null,coll);
}
});
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){var s = cljs.core.seq.call(null,coll);var acc = (0);while(true){
if(cljs.core.counted_QMARK_.call(null,s))
{return (acc + cljs.core._count.call(null,s));
} else
{{
var G__5520 = cljs.core.next.call(null,s);
var G__5521 = (acc + (1));
s = G__5520;
acc = G__5521;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){if(!((coll == null)))
{if((function (){var G__5523 = coll;if(G__5523)
{var bit__4380__auto__ = (G__5523.cljs$lang$protocol_mask$partition0$ & (2));if((bit__4380__auto__) || (G__5523.cljs$core$ICounted$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._count.call(null,coll);
} else
{if(coll instanceof Array)
{return coll.length;
} else
{if(typeof coll === 'string')
{return coll.length;
} else
{if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICounted,coll))
{return cljs.core._count.call(null,coll);
} else
{return cljs.core.accumulating_seq_count.call(null,coll);

}
}
}
}
} else
{return (0);
}
});
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){while(true){
if((coll == null))
{throw (new Error("Index out of bounds"));
} else
{if((n === (0)))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n);
} else
{if(cljs.core.seq.call(null,coll))
{{
var G__5527 = cljs.core.next.call(null,coll);
var G__5528 = (n - (1));
coll = G__5527;
n = G__5528;
continue;
}
} else
{throw (new Error("Index out of bounds"));

}
}
}
}
break;
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){while(true){
if((coll == null))
{return not_found;
} else
{if((n === (0)))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n,not_found);
} else
{if(cljs.core.seq.call(null,coll))
{{
var G__5532 = cljs.core.next.call(null,coll);
var G__5533 = (n - (1));
var G__5534 = not_found;
coll = G__5532;
n = G__5533;
not_found = G__5534;
continue;
}
} else
{return not_found;

}
}
}
}
break;
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
linear_traversal_nth.cljs$core$IFn$_invoke$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$core$IFn$_invoke$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){if(!(typeof n === 'number'))
{throw (new Error("index argument to nth must be a number"));
} else
{if((coll == null))
{return coll;
} else
{if((function (){var G__5539 = coll;if(G__5539)
{var bit__4380__auto__ = (G__5539.cljs$lang$protocol_mask$partition0$ & (16));if((bit__4380__auto__) || (G__5539.cljs$core$IIndexed$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._nth.call(null,coll,n);
} else
{if(coll instanceof Array)
{if((n < coll.length))
{return (coll[n]);
} else
{return null;
}
} else
{if(typeof coll === 'string')
{if((n < coll.length))
{return (coll[n]);
} else
{return null;
}
} else
{if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIndexed,coll))
{return cljs.core._nth.call(null,coll,n);
} else
{if((function (){var G__5540 = coll;if(G__5540)
{var bit__4387__auto__ = (G__5540.cljs$lang$protocol_mask$partition0$ & (64));if((bit__4387__auto__) || (G__5540.cljs$core$ISeq$))
{return true;
} else
{if((!G__5540.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,G__5540);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,G__5540);
}
})())
{return cljs.core.linear_traversal_nth.call(null,coll,n);
} else
{throw (new Error(("nth not supported on this type "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type__GT_str.call(null,cljs.core.type.call(null,coll))))));

}
}
}
}
}
}
}
});
var nth__3 = (function (coll,n,not_found){if(!(typeof n === 'number'))
{throw (new Error("index argument to nth must be a number."));
} else
{if((coll == null))
{return not_found;
} else
{if((function (){var G__5541 = coll;if(G__5541)
{var bit__4380__auto__ = (G__5541.cljs$lang$protocol_mask$partition0$ & (16));if((bit__4380__auto__) || (G__5541.cljs$core$IIndexed$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._nth.call(null,coll,n,not_found);
} else
{if(coll instanceof Array)
{if((n < coll.length))
{return (coll[n]);
} else
{return not_found;
}
} else
{if(typeof coll === 'string')
{if((n < coll.length))
{return (coll[n]);
} else
{return not_found;
}
} else
{if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIndexed,coll))
{return cljs.core._nth.call(null,coll,n);
} else
{if((function (){var G__5542 = coll;if(G__5542)
{var bit__4387__auto__ = (G__5542.cljs$lang$protocol_mask$partition0$ & (64));if((bit__4387__auto__) || (G__5542.cljs$core$ISeq$))
{return true;
} else
{if((!G__5542.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,G__5542);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,G__5542);
}
})())
{return cljs.core.linear_traversal_nth.call(null,coll,n,not_found);
} else
{throw (new Error(("nth not supported on this type "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type__GT_str.call(null,cljs.core.type.call(null,coll))))));

}
}
}
}
}
}
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth.cljs$core$IFn$_invoke$arity$2 = nth__2;
nth.cljs$core$IFn$_invoke$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){if((o == null))
{return null;
} else
{if((function (){var G__5554 = o;if(G__5554)
{var bit__4380__auto__ = (G__5554.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4380__auto__) || (G__5554.cljs$core$ILookup$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._lookup.call(null,o,k);
} else
{if(o instanceof Array)
{if((k < o.length))
{return (o[k]);
} else
{return null;
}
} else
{if(typeof o === 'string')
{if((k < o.length))
{return (o[k]);
} else
{return null;
}
} else
{if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,o))
{return cljs.core._lookup.call(null,o,k);
} else
{return null;

}
}
}
}
}
});
var get__3 = (function (o,k,not_found){if(!((o == null)))
{if((function (){var G__5555 = o;if(G__5555)
{var bit__4380__auto__ = (G__5555.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4380__auto__) || (G__5555.cljs$core$ILookup$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._lookup.call(null,o,k,not_found);
} else
{if(o instanceof Array)
{if((k < o.length))
{return (o[k]);
} else
{return not_found;
}
} else
{if(typeof o === 'string')
{if((k < o.length))
{return (o[k]);
} else
{return not_found;
}
} else
{if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,o))
{return cljs.core._lookup.call(null,o,k,not_found);
} else
{return not_found;

}
}
}
}
} else
{return not_found;
}
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get.cljs$core$IFn$_invoke$arity$2 = get__2;
get.cljs$core$IFn$_invoke$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){if(!((coll == null)))
{return cljs.core._assoc.call(null,coll,k,v);
} else
{return cljs.core.PersistentHashMap.fromArrays([k],[v]);
}
});
var assoc__4 = (function() { 
var G__5556__delegate = function (coll,k,v,kvs){while(true){
var ret = assoc.call(null,coll,k,v);if(cljs.core.truth_(kvs))
{{
var G__5557 = ret;
var G__5558 = cljs.core.first.call(null,kvs);
var G__5559 = cljs.core.second.call(null,kvs);
var G__5560 = cljs.core.nnext.call(null,kvs);
coll = G__5557;
k = G__5558;
v = G__5559;
kvs = G__5560;
continue;
}
} else
{return ret;
}
break;
}
};
var G__5556 = function (coll,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__5556__delegate.call(this,coll,k,v,kvs);};
G__5556.cljs$lang$maxFixedArity = 3;
G__5556.cljs$lang$applyTo = (function (arglist__5561){
var coll = cljs.core.first(arglist__5561);
arglist__5561 = cljs.core.next(arglist__5561);
var k = cljs.core.first(arglist__5561);
arglist__5561 = cljs.core.next(arglist__5561);
var v = cljs.core.first(arglist__5561);
var kvs = cljs.core.rest(arglist__5561);
return G__5556__delegate(coll,k,v,kvs);
});
G__5556.cljs$core$IFn$_invoke$arity$variadic = G__5556__delegate;
return G__5556;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$core$IFn$_invoke$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$core$IFn$_invoke$arity$3 = assoc__3;
assoc.cljs$core$IFn$_invoke$arity$variadic = assoc__4.cljs$core$IFn$_invoke$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){return coll;
});
var dissoc__2 = (function (coll,k){if((coll == null))
{return null;
} else
{return cljs.core._dissoc.call(null,coll,k);
}
});
var dissoc__3 = (function() { 
var G__5562__delegate = function (coll,k,ks){while(true){
if((coll == null))
{return null;
} else
{var ret = dissoc.call(null,coll,k);if(cljs.core.truth_(ks))
{{
var G__5563 = ret;
var G__5564 = cljs.core.first.call(null,ks);
var G__5565 = cljs.core.next.call(null,ks);
coll = G__5563;
k = G__5564;
ks = G__5565;
continue;
}
} else
{return ret;
}
}
break;
}
};
var G__5562 = function (coll,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5562__delegate.call(this,coll,k,ks);};
G__5562.cljs$lang$maxFixedArity = 2;
G__5562.cljs$lang$applyTo = (function (arglist__5566){
var coll = cljs.core.first(arglist__5566);
arglist__5566 = cljs.core.next(arglist__5566);
var k = cljs.core.first(arglist__5566);
var ks = cljs.core.rest(arglist__5566);
return G__5562__delegate(coll,k,ks);
});
G__5562.cljs$core$IFn$_invoke$arity$variadic = G__5562__delegate;
return G__5562;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$core$IFn$_invoke$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$core$IFn$_invoke$arity$1 = dissoc__1;
dissoc.cljs$core$IFn$_invoke$arity$2 = dissoc__2;
dissoc.cljs$core$IFn$_invoke$arity$variadic = dissoc__3.cljs$core$IFn$_invoke$arity$variadic;
return dissoc;
})()
;
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){var or__3723__auto__ = goog.isFunction(f);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var G__5570 = f;if(G__5570)
{var bit__4387__auto__ = null;if(cljs.core.truth_((function (){var or__3723__auto____$1 = bit__4387__auto__;if(cljs.core.truth_(or__3723__auto____$1))
{return or__3723__auto____$1;
} else
{return G__5570.cljs$core$Fn$;
}
})()))
{return true;
} else
{if((!G__5570.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.Fn,G__5570);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.Fn,G__5570);
}
}
});

/**
* @constructor
*/
cljs.core.MetaFn = (function (afn,meta){
this.afn = afn;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.MetaFn.cljs$lang$type = true;
cljs.core.MetaFn.cljs$lang$ctorStr = "cljs.core/MetaFn";
cljs.core.MetaFn.cljs$lang$ctorPrWriter = (function (this__4300__auto__,writer__4301__auto__,opt__4302__auto__){return cljs.core._write.call(null,writer__4301__auto__,"cljs.core/MetaFn");
});
cljs.core.MetaFn.prototype.call = (function() {
var G__5576 = null;
var G__5576__1 = (function (self__){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.afn.call(null);
});
var G__5576__2 = (function (self__,a){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.afn.call(null,a);
});
var G__5576__3 = (function (self__,a,b){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.afn.call(null,a,b);
});
var G__5576__4 = (function (self__,a,b,c){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.afn.call(null,a,b,c);
});
var G__5576__5 = (function (self__,a,b,c,d){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.afn.call(null,a,b,c,d);
});
var G__5576__6 = (function (self__,a,b,c,d,e){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.afn.call(null,a,b,c,d,e);
});
var G__5576__7 = (function (self__,a,b,c,d,e,f){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.afn.call(null,a,b,c,d,e,f);
});
var G__5576__8 = (function (self__,a,b,c,d,e,f,g){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.afn.call(null,a,b,c,d,e,f,g);
});
var G__5576__9 = (function (self__,a,b,c,d,e,f,g,h){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.afn.call(null,a,b,c,d,e,f,g,h);
});
var G__5576__10 = (function (self__,a,b,c,d,e,f,g,h,i){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.afn.call(null,a,b,c,d,e,f,g,h,i);
});
var G__5576__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j);
});
var G__5576__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k);
});
var G__5576__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l);
});
var G__5576__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m);
});
var G__5576__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
});
var G__5576__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
});
var G__5576__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
});
var G__5576__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
});
var G__5576__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
});
var G__5576__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
});
var G__5576__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
});
var G__5576__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){var self__ = this;
var self____$1 = this;var _ = self____$1;return cljs.core.apply.call(null,self__.afn,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
});
G__5576 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__5576__1.call(this,self__);
case 2:
return G__5576__2.call(this,self__,a);
case 3:
return G__5576__3.call(this,self__,a,b);
case 4:
return G__5576__4.call(this,self__,a,b,c);
case 5:
return G__5576__5.call(this,self__,a,b,c,d);
case 6:
return G__5576__6.call(this,self__,a,b,c,d,e);
case 7:
return G__5576__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__5576__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__5576__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__5576__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__5576__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__5576__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__5576__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__5576__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__5576__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__5576__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__5576__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__5576__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__5576__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__5576__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__5576__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__5576__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__5576.cljs$core$IFn$_invoke$arity$1 = G__5576__1;
G__5576.cljs$core$IFn$_invoke$arity$2 = G__5576__2;
G__5576.cljs$core$IFn$_invoke$arity$3 = G__5576__3;
G__5576.cljs$core$IFn$_invoke$arity$4 = G__5576__4;
G__5576.cljs$core$IFn$_invoke$arity$5 = G__5576__5;
G__5576.cljs$core$IFn$_invoke$arity$6 = G__5576__6;
G__5576.cljs$core$IFn$_invoke$arity$7 = G__5576__7;
G__5576.cljs$core$IFn$_invoke$arity$8 = G__5576__8;
G__5576.cljs$core$IFn$_invoke$arity$9 = G__5576__9;
G__5576.cljs$core$IFn$_invoke$arity$10 = G__5576__10;
G__5576.cljs$core$IFn$_invoke$arity$11 = G__5576__11;
G__5576.cljs$core$IFn$_invoke$arity$12 = G__5576__12;
G__5576.cljs$core$IFn$_invoke$arity$13 = G__5576__13;
G__5576.cljs$core$IFn$_invoke$arity$14 = G__5576__14;
G__5576.cljs$core$IFn$_invoke$arity$15 = G__5576__15;
G__5576.cljs$core$IFn$_invoke$arity$16 = G__5576__16;
G__5576.cljs$core$IFn$_invoke$arity$17 = G__5576__17;
G__5576.cljs$core$IFn$_invoke$arity$18 = G__5576__18;
G__5576.cljs$core$IFn$_invoke$arity$19 = G__5576__19;
G__5576.cljs$core$IFn$_invoke$arity$20 = G__5576__20;
G__5576.cljs$core$IFn$_invoke$arity$21 = G__5576__21;
G__5576.cljs$core$IFn$_invoke$arity$22 = G__5576__22;
return G__5576;
})()
;
cljs.core.MetaFn.prototype.apply = (function (self__,args5571){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args5571)));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){var self__ = this;
var _ = this;return self__.afn.call(null);
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){var self__ = this;
var _ = this;return self__.afn.call(null,a);
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){var self__ = this;
var _ = this;return self__.afn.call(null,a,b);
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){var self__ = this;
var _ = this;return self__.afn.call(null,a,b,c);
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){var self__ = this;
var _ = this;return self__.afn.call(null,a,b,c,d);
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){var self__ = this;
var _ = this;return self__.afn.call(null,a,b,c,d,e);
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){var self__ = this;
var _ = this;return self__.afn.call(null,a,b,c,d,e,f);
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){var self__ = this;
var _ = this;return self__.afn.call(null,a,b,c,d,e,f,g);
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){var self__ = this;
var _ = this;return self__.afn.call(null,a,b,c,d,e,f,g,h);
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){var self__ = this;
var _ = this;return self__.afn.call(null,a,b,c,d,e,f,g,h,i);
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){var self__ = this;
var _ = this;return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j);
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){var self__ = this;
var _ = this;return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k);
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){var self__ = this;
var _ = this;return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l);
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){var self__ = this;
var _ = this;return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m);
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){var self__ = this;
var _ = this;return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var self__ = this;
var _ = this;return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var self__ = this;
var _ = this;return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var self__ = this;
var _ = this;return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var self__ = this;
var _ = this;return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var self__ = this;
var _ = this;return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var self__ = this;
var _ = this;return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){var self__ = this;
var _ = this;return cljs.core.apply.call(null,self__.afn,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
});
cljs.core.MetaFn.prototype.cljs$core$Fn$ = true;
cljs.core.MetaFn.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;return (new cljs.core.MetaFn(self__.afn,new_meta));
});
cljs.core.MetaFn.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.meta;
});
cljs.core.__GT_MetaFn = (function __GT_MetaFn(afn,meta){return (new cljs.core.MetaFn(afn,meta));
});
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){if((cljs.core.fn_QMARK_.call(null,o)) && (!((function (){var G__5665 = o;if(G__5665)
{var bit__4387__auto__ = (G__5665.cljs$lang$protocol_mask$partition0$ & (262144));if((bit__4387__auto__) || (G__5665.cljs$core$IWithMeta$))
{return true;
} else
{if((!G__5665.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,G__5665);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,G__5665);
}
})())))
{return (new cljs.core.MetaFn(o,meta));
} else
{if((o == null))
{return null;
} else
{return cljs.core._with_meta.call(null,o,meta);
}
}
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){if((function (){var and__3711__auto__ = !((o == null));if(and__3711__auto__)
{var G__5669 = o;if(G__5669)
{var bit__4387__auto__ = (G__5669.cljs$lang$protocol_mask$partition0$ & (131072));if((bit__4387__auto__) || (G__5669.cljs$core$IMeta$))
{return true;
} else
{if((!G__5669.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMeta,G__5669);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMeta,G__5669);
}
} else
{return and__3711__auto__;
}
})())
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){if((coll == null))
{return null;
} else
{return cljs.core._peek.call(null,coll);
}
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){if((coll == null))
{return null;
} else
{return cljs.core._pop.call(null,coll);
}
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){return coll;
});
var disj__2 = (function (coll,k){if((coll == null))
{return null;
} else
{return cljs.core._disjoin.call(null,coll,k);
}
});
var disj__3 = (function() { 
var G__5670__delegate = function (coll,k,ks){while(true){
if((coll == null))
{return null;
} else
{var ret = disj.call(null,coll,k);if(cljs.core.truth_(ks))
{{
var G__5671 = ret;
var G__5672 = cljs.core.first.call(null,ks);
var G__5673 = cljs.core.next.call(null,ks);
coll = G__5671;
k = G__5672;
ks = G__5673;
continue;
}
} else
{return ret;
}
}
break;
}
};
var G__5670 = function (coll,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5670__delegate.call(this,coll,k,ks);};
G__5670.cljs$lang$maxFixedArity = 2;
G__5670.cljs$lang$applyTo = (function (arglist__5674){
var coll = cljs.core.first(arglist__5674);
arglist__5674 = cljs.core.next(arglist__5674);
var k = cljs.core.first(arglist__5674);
var ks = cljs.core.rest(arglist__5674);
return G__5670__delegate(coll,k,ks);
});
G__5670.cljs$core$IFn$_invoke$arity$variadic = G__5670__delegate;
return G__5670;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$core$IFn$_invoke$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$core$IFn$_invoke$arity$1 = disj__1;
disj.cljs$core$IFn$_invoke$arity$2 = disj__2;
disj.cljs$core$IFn$_invoke$arity$variadic = disj__3.cljs$core$IFn$_invoke$arity$variadic;
return disj;
})()
;
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){return ((coll == null)) || (cljs.core.not.call(null,cljs.core.seq.call(null,coll)));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){if((x == null))
{return false;
} else
{var G__5676 = x;if(G__5676)
{var bit__4387__auto__ = (G__5676.cljs$lang$protocol_mask$partition0$ & (8));if((bit__4387__auto__) || (G__5676.cljs$core$ICollection$))
{return true;
} else
{if((!G__5676.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICollection,G__5676);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICollection,G__5676);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){if((x == null))
{return false;
} else
{var G__5678 = x;if(G__5678)
{var bit__4387__auto__ = (G__5678.cljs$lang$protocol_mask$partition0$ & (4096));if((bit__4387__auto__) || (G__5678.cljs$core$ISet$))
{return true;
} else
{if((!G__5678.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISet,G__5678);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISet,G__5678);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){var G__5680 = x;if(G__5680)
{var bit__4387__auto__ = (G__5680.cljs$lang$protocol_mask$partition0$ & (512));if((bit__4387__auto__) || (G__5680.cljs$core$IAssociative$))
{return true;
} else
{if((!G__5680.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAssociative,G__5680);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAssociative,G__5680);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){var G__5682 = x;if(G__5682)
{var bit__4387__auto__ = (G__5682.cljs$lang$protocol_mask$partition0$ & (16777216));if((bit__4387__auto__) || (G__5682.cljs$core$ISequential$))
{return true;
} else
{if((!G__5682.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISequential,G__5682);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISequential,G__5682);
}
});
/**
* Returns true if coll satisfies ISorted
*/
cljs.core.sorted_QMARK_ = (function sorted_QMARK_(x){var G__5684 = x;if(G__5684)
{var bit__4387__auto__ = (G__5684.cljs$lang$protocol_mask$partition0$ & (268435456));if((bit__4387__auto__) || (G__5684.cljs$core$ISorted$))
{return true;
} else
{if((!G__5684.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISorted,G__5684);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISorted,G__5684);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){var G__5686 = x;if(G__5686)
{var bit__4387__auto__ = (G__5686.cljs$lang$protocol_mask$partition0$ & (524288));if((bit__4387__auto__) || (G__5686.cljs$core$IReduce$))
{return true;
} else
{if((!G__5686.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IReduce,G__5686);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IReduce,G__5686);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){if((x == null))
{return false;
} else
{var G__5689 = x;if(G__5689)
{var bit__4387__auto__ = (G__5689.cljs$lang$protocol_mask$partition0$ & (1024));if((bit__4387__auto__) || (G__5689.cljs$core$IMap$))
{return true;
} else
{if((!G__5689.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMap,G__5689);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMap,G__5689);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){var G__5691 = x;if(G__5691)
{var bit__4387__auto__ = (G__5691.cljs$lang$protocol_mask$partition0$ & (16384));if((bit__4387__auto__) || (G__5691.cljs$core$IVector$))
{return true;
} else
{if((!G__5691.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IVector,G__5691);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IVector,G__5691);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){var G__5693 = x;if(G__5693)
{var bit__4380__auto__ = (G__5693.cljs$lang$protocol_mask$partition1$ & (512));if((bit__4380__auto__) || (G__5693.cljs$core$IChunkedSeq$))
{return true;
} else
{return false;
}
} else
{return false;
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){var obj5697 = {};return obj5697;
});
var js_obj__1 = (function() { 
var G__5698__delegate = function (keyvals){return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__5698 = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__5698__delegate.call(this,keyvals);};
G__5698.cljs$lang$maxFixedArity = 0;
G__5698.cljs$lang$applyTo = (function (arglist__5699){
var keyvals = cljs.core.seq(arglist__5699);
return G__5698__delegate(keyvals);
});
G__5698.cljs$core$IFn$_invoke$arity$variadic = G__5698__delegate;
return G__5698;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$core$IFn$_invoke$arity$0 = js_obj__0;
js_obj.cljs$core$IFn$_invoke$arity$variadic = js_obj__1.cljs$core$IFn$_invoke$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){var keys = [];goog.object.forEach(obj,((function (keys){
return (function (val,key,obj__$1){return keys.push(key);
});})(keys))
);
return keys;
});
cljs.core.js_delete = (function js_delete(obj,key){return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){var i__$1 = i;var j__$1 = j;var len__$1 = len;while(true){
if((len__$1 === (0)))
{return to;
} else
{(to[j__$1] = (from[i__$1]));
{
var G__5700 = (i__$1 + (1));
var G__5701 = (j__$1 + (1));
var G__5702 = (len__$1 - (1));
i__$1 = G__5700;
j__$1 = G__5701;
len__$1 = G__5702;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){var i__$1 = (i + (len - (1)));var j__$1 = (j + (len - (1)));var len__$1 = len;while(true){
if((len__$1 === (0)))
{return to;
} else
{(to[j__$1] = (from[i__$1]));
{
var G__5703 = (i__$1 - (1));
var G__5704 = (j__$1 - (1));
var G__5705 = (len__$1 - (1));
i__$1 = G__5703;
j__$1 = G__5704;
len__$1 = G__5705;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = (function (){var obj5707 = {};return obj5707;
})();
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){return (void 0 === x);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){if((s == null))
{return false;
} else
{var G__5709 = s;if(G__5709)
{var bit__4387__auto__ = (G__5709.cljs$lang$protocol_mask$partition0$ & (64));if((bit__4387__auto__) || (G__5709.cljs$core$ISeq$))
{return true;
} else
{if((!G__5709.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,G__5709);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,G__5709);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){var G__5711 = s;if(G__5711)
{var bit__4387__auto__ = (G__5711.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4387__auto__) || (G__5711.cljs$core$ISeqable$))
{return true;
} else
{if((!G__5711.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__5711);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__5711);
}
});
cljs.core.boolean$ = (function boolean$(x){if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){var or__3723__auto__ = cljs.core.fn_QMARK_.call(null,f);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var G__5715 = f;if(G__5715)
{var bit__4387__auto__ = (G__5715.cljs$lang$protocol_mask$partition0$ & (1));if((bit__4387__auto__) || (G__5715.cljs$core$IFn$))
{return true;
} else
{if((!G__5715.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IFn,G__5715);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IFn,G__5715);
}
}
});
/**
* Returns true if n is an integer.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){return (typeof n === 'number') && (!(isNaN(n))) && (!((n === Infinity))) && ((parseFloat(n) === parseInt(n,(10))));
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){if((cljs.core.get.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){if((!((coll == null))) && (cljs.core.associative_QMARK_.call(null,coll)) && (cljs.core.contains_QMARK_.call(null,coll,k)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get.call(null,coll,k)], null);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){return true;
});
var distinct_QMARK___2 = (function (x,y){return !(cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3 = (function() { 
var G__5722__delegate = function (x,y,more){if(!(cljs.core._EQ_.call(null,x,y)))
{var s = cljs.core.PersistentHashSet.fromArray([x,y], true);var xs = more;while(true){
var x__$1 = cljs.core.first.call(null,xs);var etc = cljs.core.next.call(null,xs);if(cljs.core.truth_(xs))
{if(cljs.core.contains_QMARK_.call(null,s,x__$1))
{return false;
} else
{{
var G__5723 = cljs.core.conj.call(null,s,x__$1);
var G__5724 = etc;
s = G__5723;
xs = G__5724;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__5722 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5722__delegate.call(this,x,y,more);};
G__5722.cljs$lang$maxFixedArity = 2;
G__5722.cljs$lang$applyTo = (function (arglist__5725){
var x = cljs.core.first(arglist__5725);
arglist__5725 = cljs.core.next(arglist__5725);
var y = cljs.core.first(arglist__5725);
var more = cljs.core.rest(arglist__5725);
return G__5722__delegate(x,y,more);
});
G__5722.cljs$core$IFn$_invoke$arity$variadic = G__5722__delegate;
return G__5722;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$variadic = distinct_QMARK___3.cljs$core$IFn$_invoke$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Coerces coll to a (possibly empty) sequence, if it is not already
* one. Will not force a lazy seq. (sequence nil) yields ()
*/
cljs.core.sequence = (function sequence(coll){if(cljs.core.seq_QMARK_.call(null,coll))
{return coll;
} else
{var or__3723__auto__ = cljs.core.seq.call(null,coll);if(or__3723__auto__)
{return or__3723__auto__;
} else
{return cljs.core.List.EMPTY;
}
}
});
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){if((x === y))
{return (0);
} else
{if((x == null))
{return (-1);
} else
{if((y == null))
{return (1);
} else
{if((cljs.core.type.call(null,x) === cljs.core.type.call(null,y)))
{if((function (){var G__5727 = x;if(G__5727)
{var bit__4380__auto__ = (G__5727.cljs$lang$protocol_mask$partition1$ & (2048));if((bit__4380__auto__) || (G__5727.cljs$core$IComparable$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._compare.call(null,x,y);
} else
{return goog.array.defaultCompare(x,y);
}
} else
{throw (new Error("compare on non-nil objects of different types"));

}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){var xl = cljs.core.count.call(null,xs);var yl = cljs.core.count.call(null,ys);if((xl < yl))
{return (-1);
} else
{if((xl > yl))
{return (1);
} else
{return compare_indexed.call(null,xs,ys,xl,(0));

}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){while(true){
var d = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));if(((d === (0))) && (((n + (1)) < len)))
{{
var G__5745 = xs;
var G__5746 = ys;
var G__5747 = len;
var G__5748 = (n + (1));
xs = G__5745;
ys = G__5746;
len = G__5747;
n = G__5748;
continue;
}
} else
{return d;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compare_indexed.cljs$core$IFn$_invoke$arity$2 = compare_indexed__2;
compare_indexed.cljs$core$IFn$_invoke$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){if(cljs.core._EQ_.call(null,f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){var r = f.call(null,x,y);if(typeof r === 'number')
{return r;
} else
{if(cljs.core.truth_(r))
{return (-1);
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return (1);
} else
{return (0);
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){return sort.call(null,cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){if(cljs.core.seq.call(null,coll))
{var a = cljs.core.to_array.call(null,coll);goog.array.stableSort(a,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sort.cljs$core$IFn$_invoke$arity$1 = sort__1;
sort.cljs$core$IFn$_invoke$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){return cljs.core.sort.call(null,(function (x,y){return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sort_by.cljs$core$IFn$_invoke$arity$2 = sort_by__2;
sort_by.cljs$core$IFn$_invoke$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){var temp__4124__auto__ = cljs.core.seq.call(null,coll);if(temp__4124__auto__)
{var s = temp__4124__auto__;return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s),cljs.core.next.call(null,s));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){var val__$1 = val;var coll__$1 = cljs.core.seq.call(null,coll);while(true){
if(coll__$1)
{var nval = f.call(null,val__$1,cljs.core.first.call(null,coll__$1));if(cljs.core.reduced_QMARK_.call(null,nval))
{return cljs.core.deref.call(null,nval);
} else
{{
var G__5770 = nval;
var G__5771 = cljs.core.next.call(null,coll__$1);
val__$1 = G__5770;
coll__$1 = G__5771;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
seq_reduce.cljs$core$IFn$_invoke$arity$2 = seq_reduce__2;
seq_reduce.cljs$core$IFn$_invoke$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){var a = cljs.core.to_array.call(null,coll);goog.array.shuffle(a);
return cljs.core.vec.call(null,a);
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){if((function (){var G__5774 = coll;if(G__5774)
{var bit__4380__auto__ = (G__5774.cljs$lang$protocol_mask$partition0$ & (524288));if((bit__4380__auto__) || (G__5774.cljs$core$IReduce$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{if(coll instanceof Array)
{return cljs.core.array_reduce.call(null,coll,f);
} else
{if(typeof coll === 'string')
{return cljs.core.array_reduce.call(null,coll,f);
} else
{if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IReduce,coll))
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);

}
}
}
}
});
var reduce__3 = (function (f,val,coll){if((function (){var G__5775 = coll;if(G__5775)
{var bit__4380__auto__ = (G__5775.cljs$lang$protocol_mask$partition0$ & (524288));if((bit__4380__auto__) || (G__5775.cljs$core$IReduce$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._reduce.call(null,coll,f,val);
} else
{if(coll instanceof Array)
{return cljs.core.array_reduce.call(null,coll,f,val);
} else
{if(typeof coll === 'string')
{return cljs.core.array_reduce.call(null,coll,f,val);
} else
{if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IReduce,coll))
{return cljs.core._reduce.call(null,coll,f,val);
} else
{return cljs.core.seq_reduce.call(null,f,val,coll);

}
}
}
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reduce.cljs$core$IFn$_invoke$arity$2 = reduce__2;
reduce.cljs$core$IFn$_invoke$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){if(!((coll == null)))
{return cljs.core._kv_reduce.call(null,coll,f,init);
} else
{return init;
}
});
cljs.core.identity = (function identity(x){return x;
});
cljs.core.completing = (function() {
var completing = null;
var completing__1 = (function (f){return completing.call(null,f,cljs.core.identity);
});
var completing__2 = (function (f,cf){return (function() {
var G__5776 = null;
var G__5776__0 = (function (){return f.call(null);
});
var G__5776__1 = (function (x){return cf.call(null,x);
});
var G__5776__2 = (function (x,y){return f.call(null,x,y);
});
G__5776 = function(x,y){
switch(arguments.length){
case 0:
return G__5776__0.call(this);
case 1:
return G__5776__1.call(this,x);
case 2:
return G__5776__2.call(this,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__5776.cljs$core$IFn$_invoke$arity$0 = G__5776__0;
G__5776.cljs$core$IFn$_invoke$arity$1 = G__5776__1;
G__5776.cljs$core$IFn$_invoke$arity$2 = G__5776__2;
return G__5776;
})()
});
completing = function(f,cf){
switch(arguments.length){
case 1:
return completing__1.call(this,f);
case 2:
return completing__2.call(this,f,cf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
completing.cljs$core$IFn$_invoke$arity$1 = completing__1;
completing.cljs$core$IFn$_invoke$arity$2 = completing__2;
return completing;
})()
;
/**
* reduce with a transformation of f (xf). If init is not
* supplied, (f) will be called to produce it. f should be a reducing
* step function that accepts both 1 and 2 arguments, if it accepts
* only 2 you can add the arity-1 with 'completing'. Returns the result
* of applying (the transformed) xf to init and the first item in coll,
* then applying xf to that result and the 2nd item, etc. If coll
* contains no items, returns init and f is not called. Note that
* certain transforms may inject or skip items.
*/
cljs.core.transduce = (function() {
var transduce = null;
var transduce__3 = (function (xform,f,coll){return transduce.call(null,xform,f,f.call(null),coll);
});
var transduce__4 = (function (xform,f,init,coll){var f__$1 = xform.call(null,f);var ret = cljs.core.reduce.call(null,f__$1,init,coll);return f__$1.call(null,ret);
});
transduce = function(xform,f,init,coll){
switch(arguments.length){
case 3:
return transduce__3.call(this,xform,f,init);
case 4:
return transduce__4.call(this,xform,f,init,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transduce.cljs$core$IFn$_invoke$arity$3 = transduce__3;
transduce.cljs$core$IFn$_invoke$arity$4 = transduce__4;
return transduce;
})()
;
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){return (0);
});
var _PLUS___1 = (function (x){return x;
});
var _PLUS___2 = (function (x,y){return (x + y);
});
var _PLUS___3 = (function() { 
var G__5785__delegate = function (x,y,more){return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__5785 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5785__delegate.call(this,x,y,more);};
G__5785.cljs$lang$maxFixedArity = 2;
G__5785.cljs$lang$applyTo = (function (arglist__5786){
var x = cljs.core.first(arglist__5786);
arglist__5786 = cljs.core.next(arglist__5786);
var y = cljs.core.first(arglist__5786);
var more = cljs.core.rest(arglist__5786);
return G__5785__delegate(x,y,more);
});
G__5785.cljs$core$IFn$_invoke$arity$variadic = G__5785__delegate;
return G__5785;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$core$IFn$_invoke$arity$0 = _PLUS___0;
_PLUS_.cljs$core$IFn$_invoke$arity$1 = _PLUS___1;
_PLUS_.cljs$core$IFn$_invoke$arity$2 = _PLUS___2;
_PLUS_.cljs$core$IFn$_invoke$arity$variadic = _PLUS___3.cljs$core$IFn$_invoke$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){return (- x);
});
var ___2 = (function (x,y){return (x - y);
});
var ___3 = (function() { 
var G__5787__delegate = function (x,y,more){return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__5787 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5787__delegate.call(this,x,y,more);};
G__5787.cljs$lang$maxFixedArity = 2;
G__5787.cljs$lang$applyTo = (function (arglist__5788){
var x = cljs.core.first(arglist__5788);
arglist__5788 = cljs.core.next(arglist__5788);
var y = cljs.core.first(arglist__5788);
var more = cljs.core.rest(arglist__5788);
return G__5787__delegate(x,y,more);
});
G__5787.cljs$core$IFn$_invoke$arity$variadic = G__5787__delegate;
return G__5787;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$core$IFn$_invoke$arity$1 = ___1;
_.cljs$core$IFn$_invoke$arity$2 = ___2;
_.cljs$core$IFn$_invoke$arity$variadic = ___3.cljs$core$IFn$_invoke$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){return (1);
});
var _STAR___1 = (function (x){return x;
});
var _STAR___2 = (function (x,y){return (x * y);
});
var _STAR___3 = (function() { 
var G__5793__delegate = function (x,y,more){return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__5793 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5793__delegate.call(this,x,y,more);};
G__5793.cljs$lang$maxFixedArity = 2;
G__5793.cljs$lang$applyTo = (function (arglist__5794){
var x = cljs.core.first(arglist__5794);
arglist__5794 = cljs.core.next(arglist__5794);
var y = cljs.core.first(arglist__5794);
var more = cljs.core.rest(arglist__5794);
return G__5793__delegate(x,y,more);
});
G__5793.cljs$core$IFn$_invoke$arity$variadic = G__5793__delegate;
return G__5793;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$core$IFn$_invoke$arity$0 = _STAR___0;
_STAR_.cljs$core$IFn$_invoke$arity$1 = _STAR___1;
_STAR_.cljs$core$IFn$_invoke$arity$2 = _STAR___2;
_STAR_.cljs$core$IFn$_invoke$arity$variadic = _STAR___3.cljs$core$IFn$_invoke$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){return _SLASH_.call(null,(1),x);
});
var _SLASH___2 = (function (x,y){return (x / y);
});
var _SLASH___3 = (function() { 
var G__5799__delegate = function (x,y,more){return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__5799 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5799__delegate.call(this,x,y,more);};
G__5799.cljs$lang$maxFixedArity = 2;
G__5799.cljs$lang$applyTo = (function (arglist__5800){
var x = cljs.core.first(arglist__5800);
arglist__5800 = cljs.core.next(arglist__5800);
var y = cljs.core.first(arglist__5800);
var more = cljs.core.rest(arglist__5800);
return G__5799__delegate(x,y,more);
});
G__5799.cljs$core$IFn$_invoke$arity$variadic = G__5799__delegate;
return G__5799;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$core$IFn$_invoke$arity$1 = _SLASH___1;
_SLASH_.cljs$core$IFn$_invoke$arity$2 = _SLASH___2;
_SLASH_.cljs$core$IFn$_invoke$arity$variadic = _SLASH___3.cljs$core$IFn$_invoke$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){return true;
});
var _LT___2 = (function (x,y){return (x < y);
});
var _LT___3 = (function() { 
var G__5801__delegate = function (x,y,more){while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__5802 = y;
var G__5803 = cljs.core.first.call(null,more);
var G__5804 = cljs.core.next.call(null,more);
x = G__5802;
y = G__5803;
more = G__5804;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__5801 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5801__delegate.call(this,x,y,more);};
G__5801.cljs$lang$maxFixedArity = 2;
G__5801.cljs$lang$applyTo = (function (arglist__5805){
var x = cljs.core.first(arglist__5805);
arglist__5805 = cljs.core.next(arglist__5805);
var y = cljs.core.first(arglist__5805);
var more = cljs.core.rest(arglist__5805);
return G__5801__delegate(x,y,more);
});
G__5801.cljs$core$IFn$_invoke$arity$variadic = G__5801__delegate;
return G__5801;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$core$IFn$_invoke$arity$1 = _LT___1;
_LT_.cljs$core$IFn$_invoke$arity$2 = _LT___2;
_LT_.cljs$core$IFn$_invoke$arity$variadic = _LT___3.cljs$core$IFn$_invoke$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){return true;
});
var _LT__EQ___2 = (function (x,y){return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__5806__delegate = function (x,y,more){while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__5807 = y;
var G__5808 = cljs.core.first.call(null,more);
var G__5809 = cljs.core.next.call(null,more);
x = G__5807;
y = G__5808;
more = G__5809;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__5806 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5806__delegate.call(this,x,y,more);};
G__5806.cljs$lang$maxFixedArity = 2;
G__5806.cljs$lang$applyTo = (function (arglist__5810){
var x = cljs.core.first(arglist__5810);
arglist__5810 = cljs.core.next(arglist__5810);
var y = cljs.core.first(arglist__5810);
var more = cljs.core.rest(arglist__5810);
return G__5806__delegate(x,y,more);
});
G__5806.cljs$core$IFn$_invoke$arity$variadic = G__5806__delegate;
return G__5806;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$core$IFn$_invoke$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$core$IFn$_invoke$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = _LT__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){return true;
});
var _GT___2 = (function (x,y){return (x > y);
});
var _GT___3 = (function() { 
var G__5811__delegate = function (x,y,more){while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__5812 = y;
var G__5813 = cljs.core.first.call(null,more);
var G__5814 = cljs.core.next.call(null,more);
x = G__5812;
y = G__5813;
more = G__5814;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__5811 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5811__delegate.call(this,x,y,more);};
G__5811.cljs$lang$maxFixedArity = 2;
G__5811.cljs$lang$applyTo = (function (arglist__5815){
var x = cljs.core.first(arglist__5815);
arglist__5815 = cljs.core.next(arglist__5815);
var y = cljs.core.first(arglist__5815);
var more = cljs.core.rest(arglist__5815);
return G__5811__delegate(x,y,more);
});
G__5811.cljs$core$IFn$_invoke$arity$variadic = G__5811__delegate;
return G__5811;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$core$IFn$_invoke$arity$1 = _GT___1;
_GT_.cljs$core$IFn$_invoke$arity$2 = _GT___2;
_GT_.cljs$core$IFn$_invoke$arity$variadic = _GT___3.cljs$core$IFn$_invoke$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){return true;
});
var _GT__EQ___2 = (function (x,y){return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__5816__delegate = function (x,y,more){while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__5817 = y;
var G__5818 = cljs.core.first.call(null,more);
var G__5819 = cljs.core.next.call(null,more);
x = G__5817;
y = G__5818;
more = G__5819;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__5816 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5816__delegate.call(this,x,y,more);};
G__5816.cljs$lang$maxFixedArity = 2;
G__5816.cljs$lang$applyTo = (function (arglist__5820){
var x = cljs.core.first(arglist__5820);
arglist__5820 = cljs.core.next(arglist__5820);
var y = cljs.core.first(arglist__5820);
var more = cljs.core.rest(arglist__5820);
return G__5816__delegate(x,y,more);
});
G__5816.cljs$core$IFn$_invoke$arity$variadic = G__5816__delegate;
return G__5816;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$core$IFn$_invoke$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$core$IFn$_invoke$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = _GT__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){return (x - (1));
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){return x;
});
var max__2 = (function (x,y){var x__4030__auto__ = x;var y__4031__auto__ = y;return ((x__4030__auto__ > y__4031__auto__) ? x__4030__auto__ : y__4031__auto__);
});
var max__3 = (function() { 
var G__5833__delegate = function (x,y,more){return cljs.core.reduce.call(null,max,(function (){var x__4030__auto__ = x;var y__4031__auto__ = y;return ((x__4030__auto__ > y__4031__auto__) ? x__4030__auto__ : y__4031__auto__);
})(),more);
};
var G__5833 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5833__delegate.call(this,x,y,more);};
G__5833.cljs$lang$maxFixedArity = 2;
G__5833.cljs$lang$applyTo = (function (arglist__5834){
var x = cljs.core.first(arglist__5834);
arglist__5834 = cljs.core.next(arglist__5834);
var y = cljs.core.first(arglist__5834);
var more = cljs.core.rest(arglist__5834);
return G__5833__delegate(x,y,more);
});
G__5833.cljs$core$IFn$_invoke$arity$variadic = G__5833__delegate;
return G__5833;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$core$IFn$_invoke$arity$1 = max__1;
max.cljs$core$IFn$_invoke$arity$2 = max__2;
max.cljs$core$IFn$_invoke$arity$variadic = max__3.cljs$core$IFn$_invoke$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){return x;
});
var min__2 = (function (x,y){var x__4037__auto__ = x;var y__4038__auto__ = y;return ((x__4037__auto__ < y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
});
var min__3 = (function() { 
var G__5839__delegate = function (x,y,more){return cljs.core.reduce.call(null,min,(function (){var x__4037__auto__ = x;var y__4038__auto__ = y;return ((x__4037__auto__ < y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
})(),more);
};
var G__5839 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5839__delegate.call(this,x,y,more);};
G__5839.cljs$lang$maxFixedArity = 2;
G__5839.cljs$lang$applyTo = (function (arglist__5840){
var x = cljs.core.first(arglist__5840);
arglist__5840 = cljs.core.next(arglist__5840);
var y = cljs.core.first(arglist__5840);
var more = cljs.core.rest(arglist__5840);
return G__5839__delegate(x,y,more);
});
G__5839.cljs$core$IFn$_invoke$arity$variadic = G__5839__delegate;
return G__5839;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$core$IFn$_invoke$arity$1 = min__1;
min.cljs$core$IFn$_invoke$arity$2 = min__2;
min.cljs$core$IFn$_invoke$arity$variadic = min__3.cljs$core$IFn$_invoke$arity$variadic;
return min;
})()
;
cljs.core.byte$ = (function byte$(x){return x;
});
/**
* Coerce to char
*/
cljs.core.char$ = (function char$(x){if(typeof x === 'number')
{return String.fromCharCode(x);
} else
{if((typeof x === 'string') && ((x.length === (1))))
{return x;
} else
{throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.core.short$ = (function short$(x){return x;
});
cljs.core.float$ = (function float$(x){return x;
});
cljs.core.double$ = (function double$(x){return x;
});
cljs.core.unchecked_byte = (function unchecked_byte(x){return x;
});
cljs.core.unchecked_char = (function unchecked_char(x){return x;
});
cljs.core.unchecked_short = (function unchecked_short(x){return x;
});
cljs.core.unchecked_float = (function unchecked_float(x){return x;
});
cljs.core.unchecked_double = (function unchecked_double(x){return x;
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core.unchecked_add = (function() {
var unchecked_add = null;
var unchecked_add__0 = (function (){return (0);
});
var unchecked_add__1 = (function (x){return x;
});
var unchecked_add__2 = (function (x,y){return (x + y);
});
var unchecked_add__3 = (function() { 
var G__5841__delegate = function (x,y,more){return cljs.core.reduce.call(null,unchecked_add,(x + y),more);
};
var G__5841 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5841__delegate.call(this,x,y,more);};
G__5841.cljs$lang$maxFixedArity = 2;
G__5841.cljs$lang$applyTo = (function (arglist__5842){
var x = cljs.core.first(arglist__5842);
arglist__5842 = cljs.core.next(arglist__5842);
var y = cljs.core.first(arglist__5842);
var more = cljs.core.rest(arglist__5842);
return G__5841__delegate(x,y,more);
});
G__5841.cljs$core$IFn$_invoke$arity$variadic = G__5841__delegate;
return G__5841;
})()
;
unchecked_add = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_add__0.call(this);
case 1:
return unchecked_add__1.call(this,x);
case 2:
return unchecked_add__2.call(this,x,y);
default:
return unchecked_add__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_add.cljs$lang$maxFixedArity = 2;
unchecked_add.cljs$lang$applyTo = unchecked_add__3.cljs$lang$applyTo;
unchecked_add.cljs$core$IFn$_invoke$arity$0 = unchecked_add__0;
unchecked_add.cljs$core$IFn$_invoke$arity$1 = unchecked_add__1;
unchecked_add.cljs$core$IFn$_invoke$arity$2 = unchecked_add__2;
unchecked_add.cljs$core$IFn$_invoke$arity$variadic = unchecked_add__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_add;
})()
;
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core.unchecked_add_int = (function() {
var unchecked_add_int = null;
var unchecked_add_int__0 = (function (){return (0);
});
var unchecked_add_int__1 = (function (x){return x;
});
var unchecked_add_int__2 = (function (x,y){return (x + y);
});
var unchecked_add_int__3 = (function() { 
var G__5843__delegate = function (x,y,more){return cljs.core.reduce.call(null,unchecked_add_int,(x + y),more);
};
var G__5843 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5843__delegate.call(this,x,y,more);};
G__5843.cljs$lang$maxFixedArity = 2;
G__5843.cljs$lang$applyTo = (function (arglist__5844){
var x = cljs.core.first(arglist__5844);
arglist__5844 = cljs.core.next(arglist__5844);
var y = cljs.core.first(arglist__5844);
var more = cljs.core.rest(arglist__5844);
return G__5843__delegate(x,y,more);
});
G__5843.cljs$core$IFn$_invoke$arity$variadic = G__5843__delegate;
return G__5843;
})()
;
unchecked_add_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_add_int__0.call(this);
case 1:
return unchecked_add_int__1.call(this,x);
case 2:
return unchecked_add_int__2.call(this,x,y);
default:
return unchecked_add_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_add_int.cljs$lang$maxFixedArity = 2;
unchecked_add_int.cljs$lang$applyTo = unchecked_add_int__3.cljs$lang$applyTo;
unchecked_add_int.cljs$core$IFn$_invoke$arity$0 = unchecked_add_int__0;
unchecked_add_int.cljs$core$IFn$_invoke$arity$1 = unchecked_add_int__1;
unchecked_add_int.cljs$core$IFn$_invoke$arity$2 = unchecked_add_int__2;
unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_add_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_add_int;
})()
;
cljs.core.unchecked_dec = (function unchecked_dec(x){return (x - (1));
});
cljs.core.unchecked_dec_int = (function unchecked_dec_int(x){return (x - (1));
});
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core.unchecked_divide_int = (function() {
var unchecked_divide_int = null;
var unchecked_divide_int__1 = (function (x){return unchecked_divide_int.call(null,(1),x);
});
var unchecked_divide_int__2 = (function (x,y){return (x / y);
});
var unchecked_divide_int__3 = (function() { 
var G__5845__delegate = function (x,y,more){return cljs.core.reduce.call(null,unchecked_divide_int,unchecked_divide_int.call(null,x,y),more);
};
var G__5845 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5845__delegate.call(this,x,y,more);};
G__5845.cljs$lang$maxFixedArity = 2;
G__5845.cljs$lang$applyTo = (function (arglist__5846){
var x = cljs.core.first(arglist__5846);
arglist__5846 = cljs.core.next(arglist__5846);
var y = cljs.core.first(arglist__5846);
var more = cljs.core.rest(arglist__5846);
return G__5845__delegate(x,y,more);
});
G__5845.cljs$core$IFn$_invoke$arity$variadic = G__5845__delegate;
return G__5845;
})()
;
unchecked_divide_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_divide_int__1.call(this,x);
case 2:
return unchecked_divide_int__2.call(this,x,y);
default:
return unchecked_divide_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_divide_int.cljs$lang$maxFixedArity = 2;
unchecked_divide_int.cljs$lang$applyTo = unchecked_divide_int__3.cljs$lang$applyTo;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$1 = unchecked_divide_int__1;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$2 = unchecked_divide_int__2;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_divide_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_divide_int;
})()
;
cljs.core.unchecked_inc = (function unchecked_inc(x){return (x + (1));
});
cljs.core.unchecked_inc_int = (function unchecked_inc_int(x){return (x + (1));
});
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core.unchecked_multiply = (function() {
var unchecked_multiply = null;
var unchecked_multiply__0 = (function (){return (1);
});
var unchecked_multiply__1 = (function (x){return x;
});
var unchecked_multiply__2 = (function (x,y){return (x * y);
});
var unchecked_multiply__3 = (function() { 
var G__5847__delegate = function (x,y,more){return cljs.core.reduce.call(null,unchecked_multiply,(x * y),more);
};
var G__5847 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5847__delegate.call(this,x,y,more);};
G__5847.cljs$lang$maxFixedArity = 2;
G__5847.cljs$lang$applyTo = (function (arglist__5848){
var x = cljs.core.first(arglist__5848);
arglist__5848 = cljs.core.next(arglist__5848);
var y = cljs.core.first(arglist__5848);
var more = cljs.core.rest(arglist__5848);
return G__5847__delegate(x,y,more);
});
G__5847.cljs$core$IFn$_invoke$arity$variadic = G__5847__delegate;
return G__5847;
})()
;
unchecked_multiply = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_multiply__0.call(this);
case 1:
return unchecked_multiply__1.call(this,x);
case 2:
return unchecked_multiply__2.call(this,x,y);
default:
return unchecked_multiply__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_multiply.cljs$lang$maxFixedArity = 2;
unchecked_multiply.cljs$lang$applyTo = unchecked_multiply__3.cljs$lang$applyTo;
unchecked_multiply.cljs$core$IFn$_invoke$arity$0 = unchecked_multiply__0;
unchecked_multiply.cljs$core$IFn$_invoke$arity$1 = unchecked_multiply__1;
unchecked_multiply.cljs$core$IFn$_invoke$arity$2 = unchecked_multiply__2;
unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = unchecked_multiply__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_multiply;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core.unchecked_multiply_int = (function() {
var unchecked_multiply_int = null;
var unchecked_multiply_int__0 = (function (){return (1);
});
var unchecked_multiply_int__1 = (function (x){return x;
});
var unchecked_multiply_int__2 = (function (x,y){return (x * y);
});
var unchecked_multiply_int__3 = (function() { 
var G__5849__delegate = function (x,y,more){return cljs.core.reduce.call(null,unchecked_multiply_int,(x * y),more);
};
var G__5849 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5849__delegate.call(this,x,y,more);};
G__5849.cljs$lang$maxFixedArity = 2;
G__5849.cljs$lang$applyTo = (function (arglist__5850){
var x = cljs.core.first(arglist__5850);
arglist__5850 = cljs.core.next(arglist__5850);
var y = cljs.core.first(arglist__5850);
var more = cljs.core.rest(arglist__5850);
return G__5849__delegate(x,y,more);
});
G__5849.cljs$core$IFn$_invoke$arity$variadic = G__5849__delegate;
return G__5849;
})()
;
unchecked_multiply_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_multiply_int__0.call(this);
case 1:
return unchecked_multiply_int__1.call(this,x);
case 2:
return unchecked_multiply_int__2.call(this,x,y);
default:
return unchecked_multiply_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_multiply_int.cljs$lang$maxFixedArity = 2;
unchecked_multiply_int.cljs$lang$applyTo = unchecked_multiply_int__3.cljs$lang$applyTo;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$0 = unchecked_multiply_int__0;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$1 = unchecked_multiply_int__1;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$2 = unchecked_multiply_int__2;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_multiply_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_multiply_int;
})()
;
cljs.core.unchecked_negate = (function unchecked_negate(x){return (- x);
});
cljs.core.unchecked_negate_int = (function unchecked_negate_int(x){return (- x);
});
cljs.core.unchecked_remainder_int = (function unchecked_remainder_int(x,n){return cljs.core.mod.call(null,x,n);
});
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core.unchecked_subtract = (function() {
var unchecked_subtract = null;
var unchecked_subtract__1 = (function (x){return (- x);
});
var unchecked_subtract__2 = (function (x,y){return (x - y);
});
var unchecked_subtract__3 = (function() { 
var G__5851__delegate = function (x,y,more){return cljs.core.reduce.call(null,unchecked_subtract,(x - y),more);
};
var G__5851 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5851__delegate.call(this,x,y,more);};
G__5851.cljs$lang$maxFixedArity = 2;
G__5851.cljs$lang$applyTo = (function (arglist__5852){
var x = cljs.core.first(arglist__5852);
arglist__5852 = cljs.core.next(arglist__5852);
var y = cljs.core.first(arglist__5852);
var more = cljs.core.rest(arglist__5852);
return G__5851__delegate(x,y,more);
});
G__5851.cljs$core$IFn$_invoke$arity$variadic = G__5851__delegate;
return G__5851;
})()
;
unchecked_subtract = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_subtract__1.call(this,x);
case 2:
return unchecked_subtract__2.call(this,x,y);
default:
return unchecked_subtract__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_subtract.cljs$lang$maxFixedArity = 2;
unchecked_subtract.cljs$lang$applyTo = unchecked_subtract__3.cljs$lang$applyTo;
unchecked_subtract.cljs$core$IFn$_invoke$arity$1 = unchecked_subtract__1;
unchecked_subtract.cljs$core$IFn$_invoke$arity$2 = unchecked_subtract__2;
unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = unchecked_subtract__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_subtract;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core.unchecked_subtract_int = (function() {
var unchecked_subtract_int = null;
var unchecked_subtract_int__1 = (function (x){return (- x);
});
var unchecked_subtract_int__2 = (function (x,y){return (x - y);
});
var unchecked_subtract_int__3 = (function() { 
var G__5853__delegate = function (x,y,more){return cljs.core.reduce.call(null,unchecked_subtract_int,(x - y),more);
};
var G__5853 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5853__delegate.call(this,x,y,more);};
G__5853.cljs$lang$maxFixedArity = 2;
G__5853.cljs$lang$applyTo = (function (arglist__5854){
var x = cljs.core.first(arglist__5854);
arglist__5854 = cljs.core.next(arglist__5854);
var y = cljs.core.first(arglist__5854);
var more = cljs.core.rest(arglist__5854);
return G__5853__delegate(x,y,more);
});
G__5853.cljs$core$IFn$_invoke$arity$variadic = G__5853__delegate;
return G__5853;
})()
;
unchecked_subtract_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_subtract_int__1.call(this,x);
case 2:
return unchecked_subtract_int__2.call(this,x,y);
default:
return unchecked_subtract_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_subtract_int.cljs$lang$maxFixedArity = 2;
unchecked_subtract_int.cljs$lang$applyTo = unchecked_subtract_int__3.cljs$lang$applyTo;
unchecked_subtract_int.cljs$core$IFn$_invoke$arity$1 = unchecked_subtract_int__1;
unchecked_subtract_int.cljs$core$IFn$_invoke$arity$2 = unchecked_subtract_int__2;
unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_subtract_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_subtract_int;
})()
;
cljs.core.fix = (function fix(q){if((q >= (0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){return (x | (0));
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.unchecked_int = (function unchecked_int(x){return cljs.core.fix.call(null,x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){return cljs.core.fix.call(null,x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.unchecked_long = (function unchecked_long(x){return cljs.core.fix.call(null,x);
});
cljs.core.booleans = (function booleans(x){return x;
});
cljs.core.bytes = (function bytes(x){return x;
});
cljs.core.chars = (function chars(x){return x;
});
cljs.core.shorts = (function shorts(x){return x;
});
cljs.core.ints = (function ints(x){return x;
});
cljs.core.floats = (function floats(x){return x;
});
cljs.core.doubles = (function doubles(x){return x;
});
cljs.core.longs = (function longs(x){return x;
});
/**
* Modulus of num and div with original javascript behavior. i.e. bug for negative numbers
*/
cljs.core.js_mod = (function js_mod(n,d){return (n % d);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){return (((n % d) + d) % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){var rem = (n % d);return cljs.core.fix.call(null,((n - rem) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){var q = cljs.core.quot.call(null,n,d);return (n - (d * q));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){return Math.random.call(null);
});
var rand__1 = (function (n){return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rand.cljs$core$IFn$_invoke$arity$0 = rand__0;
rand.cljs$core$IFn$_invoke$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){return (x >> n);
});
/**
* DEPRECATED: Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){return (x >>> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.unsigned_bit_shift_right = (function unsigned_bit_shift_right(x,n){return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){var v__$1 = (v - ((v >> (1)) & (1431655765)));var v__$2 = ((v__$1 & (858993459)) + ((v__$1 >> (2)) & (858993459)));return ((((v__$2 + (v__$2 >> (4))) & (252645135)) * (16843009)) >> (24));
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){return true;
});
var _EQ__EQ___2 = (function (x,y){return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3 = (function() { 
var G__5879__delegate = function (x,y,more){while(true){
if(_EQ__EQ_.call(null,x,y))
{if(cljs.core.next.call(null,more))
{{
var G__5880 = y;
var G__5881 = cljs.core.first.call(null,more);
var G__5882 = cljs.core.next.call(null,more);
x = G__5880;
y = G__5881;
more = G__5882;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__5879 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5879__delegate.call(this,x,y,more);};
G__5879.cljs$lang$maxFixedArity = 2;
G__5879.cljs$lang$applyTo = (function (arglist__5883){
var x = cljs.core.first(arglist__5883);
arglist__5883 = cljs.core.next(arglist__5883);
var y = cljs.core.first(arglist__5883);
var more = cljs.core.rest(arglist__5883);
return G__5879__delegate(x,y,more);
});
G__5879.cljs$core$IFn$_invoke$arity$variadic = G__5879__delegate;
return G__5879;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = _EQ__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){return (n > (0));
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){return (n === (0));
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){return (x < (0));
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){var n__$1 = n;var xs = cljs.core.seq.call(null,coll);while(true){
if((xs) && ((n__$1 > (0))))
{{
var G__5884 = (n__$1 - (1));
var G__5885 = cljs.core.next.call(null,xs);
n__$1 = G__5884;
xs = G__5885;
continue;
}
} else
{return xs;
}
break;
}
});
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){return "";
});
var str__1 = (function (x){if((x == null))
{return "";
} else
{return ''+x;
}
});
var str__2 = (function() { 
var G__5886__delegate = function (x,ys){var sb = (new goog.string.StringBuffer(str.call(null,x)));var more = ys;while(true){
if(cljs.core.truth_(more))
{{
var G__5887 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__5888 = cljs.core.next.call(null,more);
sb = G__5887;
more = G__5888;
continue;
}
} else
{return sb.toString();
}
break;
}
};
var G__5886 = function (x,var_args){
var ys = null;if (arguments.length > 1) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__5886__delegate.call(this,x,ys);};
G__5886.cljs$lang$maxFixedArity = 1;
G__5886.cljs$lang$applyTo = (function (arglist__5889){
var x = cljs.core.first(arglist__5889);
var ys = cljs.core.rest(arglist__5889);
return G__5886__delegate(x,ys);
});
G__5886.cljs$core$IFn$_invoke$arity$variadic = G__5886__delegate;
return G__5886;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$core$IFn$_invoke$arity$0 = str__0;
str.cljs$core$IFn$_invoke$arity$1 = str__1;
str.cljs$core$IFn$_invoke$arity$variadic = str__2.cljs$core$IFn$_invoke$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){return s.substring(start);
});
var subs__3 = (function (s,start,end){return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subs.cljs$core$IFn$_invoke$arity$2 = subs__2;
subs.cljs$core$IFn$_invoke$arity$3 = subs__3;
return subs;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(((cljs.core.counted_QMARK_.call(null,x)) && (cljs.core.counted_QMARK_.call(null,y)) && (!((cljs.core.count.call(null,x) === cljs.core.count.call(null,y)))))?false:(function (){var xs = cljs.core.seq.call(null,x);var ys = cljs.core.seq.call(null,y);while(true){
if((xs == null))
{return (ys == null);
} else
{if((ys == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs),cljs.core.first.call(null,ys)))
{{
var G__5893 = cljs.core.next.call(null,xs);
var G__5894 = cljs.core.next.call(null,ys);
xs = G__5893;
ys = G__5894;
continue;
}
} else
{return false;

}
}
}
break;
}
})()):null));
});
cljs.core.hash_coll = (function hash_coll(coll){if(cljs.core.seq.call(null,coll))
{var res = cljs.core.hash.call(null,cljs.core.first.call(null,coll));var s = cljs.core.next.call(null,coll);while(true){
if((s == null))
{return res;
} else
{{
var G__5895 = cljs.core.hash_combine.call(null,res,cljs.core.hash.call(null,cljs.core.first.call(null,s)));
var G__5896 = cljs.core.next.call(null,s);
res = G__5895;
s = G__5896;
continue;
}
}
break;
}
} else
{return (0);
}
});
cljs.core.hash_imap = (function hash_imap(m){var h = (0);var s = cljs.core.seq.call(null,m);while(true){
if(s)
{var e = cljs.core.first.call(null,s);{
var G__5897 = ((h + (cljs.core.hash.call(null,cljs.core.key.call(null,e)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e)))) % (4503599627370496));
var G__5898 = cljs.core.next.call(null,s);
h = G__5897;
s = G__5898;
continue;
}
} else
{return h;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){var h = (0);var s__$1 = cljs.core.seq.call(null,s);while(true){
if(s__$1)
{var e = cljs.core.first.call(null,s__$1);{
var G__5900 = ((h + cljs.core.hash.call(null,e)) % (4503599627370496));
var G__5901 = cljs.core.next.call(null,s__$1);
h = G__5900;
s__$1 = G__5901;
continue;
}
} else
{return h;
}
break;
}
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){var seq__5908_5914 = cljs.core.seq.call(null,fn_map);var chunk__5909_5915 = null;var count__5910_5916 = (0);var i__5911_5917 = (0);while(true){
if((i__5911_5917 < count__5910_5916))
{var vec__5912_5918 = cljs.core._nth.call(null,chunk__5909_5915,i__5911_5917);var key_name_5919 = cljs.core.nth.call(null,vec__5912_5918,(0),null);var f_5920 = cljs.core.nth.call(null,vec__5912_5918,(1),null);var str_name_5921 = cljs.core.name.call(null,key_name_5919);(obj[str_name_5921] = f_5920);
{
var G__5922 = seq__5908_5914;
var G__5923 = chunk__5909_5915;
var G__5924 = count__5910_5916;
var G__5925 = (i__5911_5917 + (1));
seq__5908_5914 = G__5922;
chunk__5909_5915 = G__5923;
count__5910_5916 = G__5924;
i__5911_5917 = G__5925;
continue;
}
} else
{var temp__4126__auto___5926 = cljs.core.seq.call(null,seq__5908_5914);if(temp__4126__auto___5926)
{var seq__5908_5927__$1 = temp__4126__auto___5926;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5908_5927__$1))
{var c__4493__auto___5928 = cljs.core.chunk_first.call(null,seq__5908_5927__$1);{
var G__5929 = cljs.core.chunk_rest.call(null,seq__5908_5927__$1);
var G__5930 = c__4493__auto___5928;
var G__5931 = cljs.core.count.call(null,c__4493__auto___5928);
var G__5932 = (0);
seq__5908_5914 = G__5929;
chunk__5909_5915 = G__5930;
count__5910_5916 = G__5931;
i__5911_5917 = G__5932;
continue;
}
} else
{var vec__5913_5950 = cljs.core.first.call(null,seq__5908_5927__$1);var key_name_5951 = cljs.core.nth.call(null,vec__5913_5950,(0),null);var f_5952 = cljs.core.nth.call(null,vec__5913_5950,(1),null);var str_name_5955 = cljs.core.name.call(null,key_name_5951);(obj[str_name_5955] = f_5952);
{
var G__5956 = cljs.core.next.call(null,seq__5908_5927__$1);
var G__5957 = null;
var G__5958 = (0);
var G__5959 = (0);
seq__5908_5914 = G__5956;
chunk__5909_5915 = G__5957;
count__5910_5916 = G__5958;
i__5911_5917 = G__5959;
continue;
}
}
} else
{}
}
break;
}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 65937646;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorStr = "cljs.core/List";
cljs.core.List.cljs$lang$ctorPrWriter = (function (this__4300__auto__,writer__4301__auto__,opt__4302__auto__){return cljs.core._write.call(null,writer__4301__auto__,"cljs.core/List");
});
cljs.core.List.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.List.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.List.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.List(self__.meta,self__.first,self__.rest,self__.count,self__.__hash));
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.count === (1)))
{return null;
} else
{return self__.rest;
}
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._rest.call(null,coll__$1);
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4134__auto__ = self__.__hash;if(!((h__4134__auto__ == null)))
{return h__4134__auto__;
} else
{var h__4134__auto____$1 = cljs.core.hash_ordered_coll.call(null,coll__$1);self__.__hash = h__4134__auto____$1;
return h__4134__auto____$1;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.List.EMPTY;
});
cljs.core.List.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,coll__$1);
});
cljs.core.List.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,start,coll__$1);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.count === (1)))
{return cljs.core.List.EMPTY;
} else
{return self__.rest;
}
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.List(meta__$1,self__.first,self__.rest,self__.count,self__.__hash));
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return (new cljs.core.List(self__.meta,o,coll__$1,(self__.count + (1)),null));
});
cljs.core.__GT_List = (function __GT_List(meta,first,rest,count,__hash){return (new cljs.core.List(meta,first,rest,count,__hash));
});

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 65937614;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorStr = "cljs.core/EmptyList";
cljs.core.EmptyList.cljs$lang$ctorPrWriter = (function (this__4300__auto__,writer__4301__auto__,opt__4302__auto__){return cljs.core._write.call(null,writer__4301__auto__,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.EmptyList.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.EmptyList.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.EmptyList(self__.meta));
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (0);
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (0);
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.EmptyList.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,coll__$1);
});
cljs.core.EmptyList.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,start,coll__$1);
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return null;
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.EmptyList(meta__$1));
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return (new cljs.core.List(self__.meta,o,null,(1),null));
});
cljs.core.__GT_EmptyList = (function __GT_EmptyList(meta){return (new cljs.core.EmptyList(meta));
});
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){var G__5964 = coll;if(G__5964)
{var bit__4387__auto__ = (G__5964.cljs$lang$protocol_mask$partition0$ & (134217728));if((bit__4387__auto__) || (G__5964.cljs$core$IReversible$))
{return true;
} else
{if((!G__5964.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IReversible,G__5964);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IReversible,G__5964);
}
});
cljs.core.rseq = (function rseq(coll){return cljs.core._rseq.call(null,coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){if(cljs.core.reversible_QMARK_.call(null,coll))
{return cljs.core.rseq.call(null,coll);
} else
{return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (xs){var arr = ((((xs instanceof cljs.core.IndexedSeq)) && ((xs.i === (0))))?xs.arr:(function (){var arr = [];var xs__$1 = xs;while(true){
if(!((xs__$1 == null)))
{arr.push(cljs.core._first.call(null,xs__$1));
{
var G__5989 = cljs.core._next.call(null,xs__$1);
xs__$1 = G__5989;
continue;
}
} else
{return arr;
}
break;
}
})());var i = arr.length;var r = cljs.core.List.EMPTY;while(true){
if((i > (0)))
{{
var G__5990 = (i - (1));
var G__5991 = cljs.core._conj.call(null,r,(arr[(i - (1))]));
i = G__5990;
r = G__5991;
continue;
}
} else
{return r;
}
break;
}
};
var list = function (var_args){
var xs = null;if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return list__delegate.call(this,xs);};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__5992){
var xs = cljs.core.seq(arglist__5992);
return list__delegate(xs);
});
list.cljs$core$IFn$_invoke$arity$variadic = list__delegate;
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 65929452;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorStr = "cljs.core/Cons";
cljs.core.Cons.cljs$lang$ctorPrWriter = (function (this__4300__auto__,writer__4301__auto__,opt__4302__auto__){return cljs.core._write.call(null,writer__4301__auto__,"cljs.core/Cons");
});
cljs.core.Cons.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.Cons.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.Cons.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.Cons(self__.meta,self__.first,self__.rest,self__.__hash));
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.rest == null))
{return null;
} else
{return cljs.core.seq.call(null,self__.rest);
}
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4134__auto__ = self__.__hash;if(!((h__4134__auto__ == null)))
{return h__4134__auto__;
} else
{var h__4134__auto____$1 = cljs.core.hash_ordered_coll.call(null,coll__$1);self__.__hash = h__4134__auto____$1;
return h__4134__auto____$1;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});
cljs.core.Cons.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,coll__$1);
});
cljs.core.Cons.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,start,coll__$1);
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.rest == null))
{return cljs.core.List.EMPTY;
} else
{return self__.rest;
}
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.Cons(meta__$1,self__.first,self__.rest,self__.__hash));
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return (new cljs.core.Cons(null,o,coll__$1,self__.__hash));
});
cljs.core.__GT_Cons = (function __GT_Cons(meta,first,rest,__hash){return (new cljs.core.Cons(meta,first,rest,__hash));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){if((function (){var or__3723__auto__ = (coll == null);if(or__3723__auto__)
{return or__3723__auto__;
} else
{var G__5996 = coll;if(G__5996)
{var bit__4380__auto__ = (G__5996.cljs$lang$protocol_mask$partition0$ & (64));if((bit__4380__auto__) || (G__5996.cljs$core$ISeq$))
{return true;
} else
{return false;
}
} else
{return false;
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){var G__5998 = x;if(G__5998)
{var bit__4387__auto__ = (G__5998.cljs$lang$protocol_mask$partition0$ & (33554432));if((bit__4387__auto__) || (G__5998.cljs$core$IList$))
{return true;
} else
{if((!G__5998.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IList,G__5998);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IList,G__5998);
}
});
cljs.core.hash_keyword = (function hash_keyword(k){return ((cljs.core.hash_symbol.call(null,k) + (2654435769)) | (0));
});

/**
* @constructor
*/
cljs.core.Keyword = (function (ns,name,fqn,_hash){
this.ns = ns;
this.name = name;
this.fqn = fqn;
this._hash = _hash;
this.cljs$lang$protocol_mask$partition0$ = 2153775105;
this.cljs$lang$protocol_mask$partition1$ = 4096;
})
cljs.core.Keyword.cljs$lang$type = true;
cljs.core.Keyword.cljs$lang$ctorStr = "cljs.core/Keyword";
cljs.core.Keyword.cljs$lang$ctorPrWriter = (function (this__4300__auto__,writer__4301__auto__,opt__4302__auto__){return cljs.core._write.call(null,writer__4301__auto__,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (o,writer,_){var self__ = this;
var o__$1 = this;return cljs.core._write.call(null,writer,(":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fqn)));
});
cljs.core.Keyword.prototype.cljs$core$INamed$_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.name;
});
cljs.core.Keyword.prototype.cljs$core$INamed$_namespace$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.ns;
});
cljs.core.Keyword.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var h__4134__auto__ = self__._hash;if(!((h__4134__auto__ == null)))
{return h__4134__auto__;
} else
{var h__4134__auto____$1 = cljs.core.hash_keyword.call(null,this$__$1);self__._hash = h__4134__auto____$1;
return h__4134__auto____$1;
}
});
cljs.core.Keyword.prototype.call = (function() {
var G__6023 = null;
var G__6023__2 = (function (self__,coll){var self__ = this;
var self____$1 = this;var kw = self____$1;return cljs.core.get.call(null,coll,kw);
});
var G__6023__3 = (function (self__,coll,not_found){var self__ = this;
var self____$1 = this;var kw = self____$1;return cljs.core.get.call(null,coll,kw,not_found);
});
G__6023 = function(self__,coll,not_found){
switch(arguments.length){
case 2:
return G__6023__2.call(this,self__,coll);
case 3:
return G__6023__3.call(this,self__,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__6023.cljs$core$IFn$_invoke$arity$2 = G__6023__2;
G__6023.cljs$core$IFn$_invoke$arity$3 = G__6023__3;
return G__6023;
})()
;
cljs.core.Keyword.prototype.apply = (function (self__,args6018){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args6018)));
});
cljs.core.Keyword.prototype.cljs$core$IFn$_invoke$arity$1 = (function (coll){var self__ = this;
var kw = this;return cljs.core.get.call(null,coll,kw);
});
cljs.core.Keyword.prototype.cljs$core$IFn$_invoke$arity$2 = (function (coll,not_found){var self__ = this;
var kw = this;return cljs.core.get.call(null,coll,kw,not_found);
});
cljs.core.Keyword.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if((other instanceof cljs.core.Keyword))
{return (self__.fqn === other.fqn);
} else
{return false;
}
});
cljs.core.Keyword.prototype.toString = (function (){var self__ = this;
var _ = this;return (":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fqn));
});
cljs.core.Keyword.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.__GT_Keyword = (function __GT_Keyword(ns,name,fqn,_hash){return (new cljs.core.Keyword(ns,name,fqn,_hash));
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){return (x instanceof cljs.core.Keyword);
});
cljs.core.keyword_identical_QMARK_ = (function keyword_identical_QMARK_(x,y){if((x === y))
{return true;
} else
{if(((x instanceof cljs.core.Keyword)) && ((y instanceof cljs.core.Keyword)))
{return (x.fqn === y.fqn);
} else
{return false;
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){if((function (){var G__6025 = x;if(G__6025)
{var bit__4380__auto__ = (G__6025.cljs$lang$protocol_mask$partition1$ & (4096));if((bit__4380__auto__) || (G__6025.cljs$core$INamed$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._namespace.call(null,x);
} else
{throw (new Error(("Doesn't support namespace: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))));
}
});
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){if((name instanceof cljs.core.Keyword))
{return name;
} else
{if((name instanceof cljs.core.Symbol))
{return (new cljs.core.Keyword(cljs.core.namespace.call(null,name),cljs.core.name.call(null,name),name.str,null));
} else
{if(typeof name === 'string')
{var parts = name.split("/");if((parts.length === (2)))
{return (new cljs.core.Keyword((parts[(0)]),(parts[(1)]),name,null));
} else
{return (new cljs.core.Keyword(null,(parts[(0)]),name,null));
}
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){return (new cljs.core.Keyword(ns,name,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(ns)?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/"):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),null));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keyword.cljs$core$IFn$_invoke$arity$1 = keyword__1;
keyword.cljs$core$IFn$_invoke$arity$2 = keyword__2;
return keyword;
})()
;

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,fn,s,__hash){
this.meta = meta;
this.fn = fn;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374988;
})
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorStr = "cljs.core/LazySeq";
cljs.core.LazySeq.cljs$lang$ctorPrWriter = (function (this__4300__auto__,writer__4301__auto__,opt__4302__auto__){return cljs.core._write.call(null,writer__4301__auto__,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.LazySeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.LazySeq.prototype.sval = (function (){var self__ = this;
var coll = this;if((self__.fn == null))
{return self__.s;
} else
{self__.s = self__.fn.call(null);
self__.fn = null;
return self__.s;
}
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;cljs.core._seq.call(null,coll__$1);
if((self__.s == null))
{return null;
} else
{return cljs.core.next.call(null,self__.s);
}
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4134__auto__ = self__.__hash;if(!((h__4134__auto__ == null)))
{return h__4134__auto__;
} else
{var h__4134__auto____$1 = cljs.core.hash_ordered_coll.call(null,coll__$1);self__.__hash = h__4134__auto____$1;
return h__4134__auto____$1;
}
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});
cljs.core.LazySeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,coll__$1);
});
cljs.core.LazySeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,start,coll__$1);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;cljs.core._seq.call(null,coll__$1);
if((self__.s == null))
{return null;
} else
{return cljs.core.first.call(null,self__.s);
}
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;cljs.core._seq.call(null,coll__$1);
if(!((self__.s == null)))
{return cljs.core.rest.call(null,self__.s);
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;coll__$1.sval();
if((self__.s == null))
{return null;
} else
{var ls = self__.s;while(true){
if((ls instanceof cljs.core.LazySeq))
{{
var G__6026 = ls.sval();
ls = G__6026;
continue;
}
} else
{self__.s = ls;
return cljs.core.seq.call(null,self__.s);
}
break;
}
}
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.LazySeq(meta__$1,self__.fn,self__.s,self__.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons.call(null,o,coll__$1);
});
cljs.core.__GT_LazySeq = (function __GT_LazySeq(meta,fn,s,__hash){return (new cljs.core.LazySeq(meta,fn,s,__hash));
});

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.ChunkBuffer.cljs$lang$type = true;
cljs.core.ChunkBuffer.cljs$lang$ctorStr = "cljs.core/ChunkBuffer";
cljs.core.ChunkBuffer.cljs$lang$ctorPrWriter = (function (this__4300__auto__,writer__4301__auto__,opt__4302__auto__){return cljs.core._write.call(null,writer__4301__auto__,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){var self__ = this;
var _ = this;(self__.buf[self__.end] = o);
return self__.end = (self__.end + (1));
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){var self__ = this;
var _ = this;var ret = (new cljs.core.ArrayChunk(self__.buf,(0),self__.end));self__.buf = null;
return ret;
});
cljs.core.__GT_ChunkBuffer = (function __GT_ChunkBuffer(buf,end){return (new cljs.core.ChunkBuffer(buf,end));
});
cljs.core.chunk_buffer = (function chunk_buffer(capacity){return (new cljs.core.ChunkBuffer((new Array(capacity)),(0)));
});

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljs.core.ArrayChunk.cljs$lang$type = true;
cljs.core.ArrayChunk.cljs$lang$ctorStr = "cljs.core/ArrayChunk";
cljs.core.ArrayChunk.cljs$lang$ctorPrWriter = (function (this__4300__auto__,writer__4301__auto__,opt__4302__auto__){return cljs.core._write.call(null,writer__4301__auto__,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.array_reduce.call(null,self__.arr,f,(self__.arr[self__.off]),(self__.off + (1)));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.array_reduce.call(null,self__.arr,f,start,self__.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.off === self__.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(self__.arr,(self__.off + (1)),self__.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){var self__ = this;
var coll__$1 = this;return (self__.arr[(self__.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){var self__ = this;
var coll__$1 = this;if(((i >= (0))) && ((i < (self__.end - self__.off))))
{return (self__.arr[(self__.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (self__.end - self__.off);
});
cljs.core.__GT_ArrayChunk = (function __GT_ArrayChunk(arr,off,end){return (new cljs.core.ArrayChunk(arr,off,end));
});
cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){return (new cljs.core.ArrayChunk(arr,(0),arr.length));
});
var array_chunk__2 = (function (arr,off){return (new cljs.core.ArrayChunk(arr,off,arr.length));
});
var array_chunk__3 = (function (arr,off,end){return (new cljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_chunk.cljs$core$IFn$_invoke$arity$1 = array_chunk__1;
array_chunk.cljs$core$IFn$_invoke$arity$2 = array_chunk__2;
array_chunk.cljs$core$IFn$_invoke$arity$3 = array_chunk__3;
return array_chunk;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta,__hash){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31850732;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
cljs.core.ChunkedCons.cljs$lang$type = true;
cljs.core.ChunkedCons.cljs$lang$ctorStr = "cljs.core/ChunkedCons";
cljs.core.ChunkedCons.cljs$lang$ctorPrWriter = (function (this__4300__auto__,writer__4301__auto__,opt__4302__auto__){return cljs.core._write.call(null,writer__4301__auto__,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.ChunkedCons.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((cljs.core._count.call(null,self__.chunk) > (1)))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,self__.chunk),self__.more,self__.meta,null));
} else
{var more__$1 = cljs.core._seq.call(null,self__.more);if((more__$1 == null))
{return null;
} else
{return more__$1;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4134__auto__ = self__.__hash;if(!((h__4134__auto__ == null)))
{return h__4134__auto__;
} else
{var h__4134__auto____$1 = cljs.core.hash_ordered_coll.call(null,coll__$1);self__.__hash = h__4134__auto____$1;
return h__4134__auto____$1;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._nth.call(null,self__.chunk,(0));
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((cljs.core._count.call(null,self__.chunk) > (1)))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,self__.chunk),self__.more,self__.meta,null));
} else
{if((self__.more == null))
{return cljs.core.List.EMPTY;
} else
{return self__.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.more == null))
{return cljs.core.List.EMPTY;
} else
{return self__.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){var self__ = this;
var coll__$1 = this;return (new cljs.core.ChunkedCons(self__.chunk,self__.more,m,self__.__hash));
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;return cljs.core.cons.call(null,o,this$__$1);
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.more == null))
{return null;
} else
{return self__.more;
}
});
cljs.core.__GT_ChunkedCons = (function __GT_ChunkedCons(chunk,more,meta,__hash){return (new cljs.core.ChunkedCons(chunk,more,meta,__hash));
});
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){if((cljs.core._count.call(null,chunk) === (0)))
{return rest;
} else
{return (new cljs.core.ChunkedCons(chunk,rest,null,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){return b.add(x);
});
cljs.core.chunk = (function chunk(b){return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){return cljs.core._chunked_first.call(null,s);
});
cljs.core.chunk_rest = (function chunk_rest(s){return cljs.core._chunked_rest.call(null,s);
});
cljs.core.chunk_next = (function chunk_next(s){if((function (){var G__6065 = s;if(G__6065)
{var bit__4380__auto__ = (G__6065.cljs$lang$protocol_mask$partition1$ & (1024));if((bit__4380__auto__) || (G__6065.cljs$core$IChunkedNext$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._chunked_next.call(null,s);
} else
{return cljs.core.seq.call(null,cljs.core._chunked_rest.call(null,s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){var ary = [];var s__$1 = s;while(true){
if(cljs.core.seq.call(null,s__$1))
{ary.push(cljs.core.first.call(null,s__$1));
{
var G__6066 = cljs.core.next.call(null,s__$1);
s__$1 = G__6066;
continue;
}
} else
{return ary;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){var ret = (new Array(cljs.core.count.call(null,coll)));var i_6067 = (0);var xs_6068 = cljs.core.seq.call(null,coll);while(true){
if(xs_6068)
{(ret[i_6067] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs_6068)));
{
var G__6069 = (i_6067 + (1));
var G__6070 = cljs.core.next.call(null,xs_6068);
i_6067 = G__6069;
xs_6068 = G__6070;
continue;
}
} else
{}
break;
}
return ret;
});
cljs.core.int_array = (function() {
var int_array = null;
var int_array__1 = (function (size_or_seq){if(typeof size_or_seq === 'number')
{return int_array.call(null,size_or_seq,null);
} else
{return cljs.core.into_array.call(null,size_or_seq);
}
});
var int_array__2 = (function (size,init_val_or_seq){var a = (new Array(size));if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s = cljs.core.seq.call(null,init_val_or_seq);var i = (0);var s__$1 = s;while(true){
if((s__$1) && ((i < size)))
{(a[i] = cljs.core.first.call(null,s__$1));
{
var G__6071 = (i + (1));
var G__6072 = cljs.core.next.call(null,s__$1);
i = G__6071;
s__$1 = G__6072;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__4593__auto___6073 = size;var i_6074 = (0);while(true){
if((i_6074 < n__4593__auto___6073))
{(a[i_6074] = init_val_or_seq);
{
var G__6075 = (i_6074 + (1));
i_6074 = G__6075;
continue;
}
} else
{}
break;
}
return a;
}
});
int_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return int_array__1.call(this,size);
case 2:
return int_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
int_array.cljs$core$IFn$_invoke$arity$1 = int_array__1;
int_array.cljs$core$IFn$_invoke$arity$2 = int_array__2;
return int_array;
})()
;
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){if(typeof size_or_seq === 'number')
{return long_array.call(null,size_or_seq,null);
} else
{return cljs.core.into_array.call(null,size_or_seq);
}
});
var long_array__2 = (function (size,init_val_or_seq){var a = (new Array(size));if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s = cljs.core.seq.call(null,init_val_or_seq);var i = (0);var s__$1 = s;while(true){
if((s__$1) && ((i < size)))
{(a[i] = cljs.core.first.call(null,s__$1));
{
var G__6076 = (i + (1));
var G__6077 = cljs.core.next.call(null,s__$1);
i = G__6076;
s__$1 = G__6077;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__4593__auto___6078 = size;var i_6079 = (0);while(true){
if((i_6079 < n__4593__auto___6078))
{(a[i_6079] = init_val_or_seq);
{
var G__6080 = (i_6079 + (1));
i_6079 = G__6080;
continue;
}
} else
{}
break;
}
return a;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
long_array.cljs$core$IFn$_invoke$arity$1 = long_array__1;
long_array.cljs$core$IFn$_invoke$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){if(typeof size_or_seq === 'number')
{return double_array.call(null,size_or_seq,null);
} else
{return cljs.core.into_array.call(null,size_or_seq);
}
});
var double_array__2 = (function (size,init_val_or_seq){var a = (new Array(size));if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s = cljs.core.seq.call(null,init_val_or_seq);var i = (0);var s__$1 = s;while(true){
if((s__$1) && ((i < size)))
{(a[i] = cljs.core.first.call(null,s__$1));
{
var G__6081 = (i + (1));
var G__6082 = cljs.core.next.call(null,s__$1);
i = G__6081;
s__$1 = G__6082;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__4593__auto___6083 = size;var i_6084 = (0);while(true){
if((i_6084 < n__4593__auto___6083))
{(a[i_6084] = init_val_or_seq);
{
var G__6085 = (i_6084 + (1));
i_6084 = G__6085;
continue;
}
} else
{}
break;
}
return a;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
double_array.cljs$core$IFn$_invoke$arity$1 = double_array__1;
double_array.cljs$core$IFn$_invoke$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){if(typeof size_or_seq === 'number')
{return object_array.call(null,size_or_seq,null);
} else
{return cljs.core.into_array.call(null,size_or_seq);
}
});
var object_array__2 = (function (size,init_val_or_seq){var a = (new Array(size));if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s = cljs.core.seq.call(null,init_val_or_seq);var i = (0);var s__$1 = s;while(true){
if((s__$1) && ((i < size)))
{(a[i] = cljs.core.first.call(null,s__$1));
{
var G__6086 = (i + (1));
var G__6087 = cljs.core.next.call(null,s__$1);
i = G__6086;
s__$1 = G__6087;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__4593__auto___6088 = size;var i_6089 = (0);while(true){
if((i_6089 < n__4593__auto___6088))
{(a[i_6089] = init_val_or_seq);
{
var G__6090 = (i_6089 + (1));
i_6089 = G__6090;
continue;
}
} else
{}
break;
}
return a;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
object_array.cljs$core$IFn$_invoke$arity$1 = object_array__1;
object_array.cljs$core$IFn$_invoke$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){if(cljs.core.counted_QMARK_.call(null,s))
{return cljs.core.count.call(null,s);
} else
{var s__$1 = s;var i = n;var sum = (0);while(true){
if(((i > (0))) && (cljs.core.seq.call(null,s__$1)))
{{
var G__6091 = cljs.core.next.call(null,s__$1);
var G__6092 = (i - (1));
var G__6093 = (sum + (1));
s__$1 = G__6091;
i = G__6092;
sum = G__6093;
continue;
}
} else
{return sum;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){if((arglist == null))
{return null;
} else
{if((cljs.core.next.call(null,arglist) == null))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));

}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){return (new cljs.core.LazySeq(null,(function (){return null;
}),null,null));
});
var concat__1 = (function (x){return (new cljs.core.LazySeq(null,(function (){return x;
}),null,null));
});
var concat__2 = (function (x,y){return (new cljs.core.LazySeq(null,(function (){var s = cljs.core.seq.call(null,x);if(s)
{if(cljs.core.chunked_seq_QMARK_.call(null,s))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s),concat.call(null,cljs.core.chunk_rest.call(null,s),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s),concat.call(null,cljs.core.rest.call(null,s),y));
}
} else
{return y;
}
}),null,null));
});
var concat__3 = (function() { 
var G__6094__delegate = function (x,y,zs){var cat = (function cat(xys,zs__$1){return (new cljs.core.LazySeq(null,(function (){var xys__$1 = cljs.core.seq.call(null,xys);if(xys__$1)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__$1))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__$1),cat.call(null,cljs.core.chunk_rest.call(null,xys__$1),zs__$1));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__$1),cat.call(null,cljs.core.rest.call(null,xys__$1),zs__$1));
}
} else
{if(cljs.core.truth_(zs__$1))
{return cat.call(null,cljs.core.first.call(null,zs__$1),cljs.core.next.call(null,zs__$1));
} else
{return null;
}
}
}),null,null));
});return cat.call(null,concat.call(null,x,y),zs);
};
var G__6094 = function (x,y,var_args){
var zs = null;if (arguments.length > 2) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6094__delegate.call(this,x,y,zs);};
G__6094.cljs$lang$maxFixedArity = 2;
G__6094.cljs$lang$applyTo = (function (arglist__6095){
var x = cljs.core.first(arglist__6095);
arglist__6095 = cljs.core.next(arglist__6095);
var y = cljs.core.first(arglist__6095);
var zs = cljs.core.rest(arglist__6095);
return G__6094__delegate(x,y,zs);
});
G__6094.cljs$core$IFn$_invoke$arity$variadic = G__6094__delegate;
return G__6094;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$core$IFn$_invoke$arity$0 = concat__0;
concat.cljs$core$IFn$_invoke$arity$1 = concat__1;
concat.cljs$core$IFn$_invoke$arity$2 = concat__2;
concat.cljs$core$IFn$_invoke$arity$variadic = concat__3.cljs$core$IFn$_invoke$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){return cljs.core.seq.call(null,args);
});
var list_STAR___2 = (function (a,args){return cljs.core.cons.call(null,a,args);
});
var list_STAR___3 = (function (a,b,args){return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___4 = (function (a,b,c,args){return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___5 = (function() { 
var G__6096__delegate = function (a,b,c,d,more){return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__6096 = function (a,b,c,d,var_args){
var more = null;if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__6096__delegate.call(this,a,b,c,d,more);};
G__6096.cljs$lang$maxFixedArity = 4;
G__6096.cljs$lang$applyTo = (function (arglist__6097){
var a = cljs.core.first(arglist__6097);
arglist__6097 = cljs.core.next(arglist__6097);
var b = cljs.core.first(arglist__6097);
arglist__6097 = cljs.core.next(arglist__6097);
var c = cljs.core.first(arglist__6097);
arglist__6097 = cljs.core.next(arglist__6097);
var d = cljs.core.first(arglist__6097);
var more = cljs.core.rest(arglist__6097);
return G__6096__delegate(a,b,c,d,more);
});
G__6096.cljs$core$IFn$_invoke$arity$variadic = G__6096__delegate;
return G__6096;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$core$IFn$_invoke$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$core$IFn$_invoke$arity$1 = list_STAR___1;
list_STAR_.cljs$core$IFn$_invoke$arity$2 = list_STAR___2;
list_STAR_.cljs$core$IFn$_invoke$arity$3 = list_STAR___3;
list_STAR_.cljs$core$IFn$_invoke$arity$4 = list_STAR___4;
list_STAR_.cljs$core$IFn$_invoke$arity$variadic = list_STAR___5.cljs$core$IFn$_invoke$arity$variadic;
return list_STAR_;
})()
;
/**
* Returns a new, transient version of the collection, in constant time.
*/
cljs.core.transient$ = (function transient$(coll){return cljs.core._as_transient.call(null,coll);
});
/**
* Returns a new, persistent version of the transient collection, in
* constant time. The transient collection cannot be used after this
* call, any such use will throw an exception.
*/
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){return cljs.core._persistent_BANG_.call(null,tcoll);
});
/**
* Adds x to the transient collection, and return coll. The 'addition'
* may happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj_BANG_ = (function() {
var conj_BANG_ = null;
var conj_BANG___0 = (function (){return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});
var conj_BANG___1 = (function (coll){return coll;
});
var conj_BANG___2 = (function (tcoll,val){return cljs.core._conj_BANG_.call(null,tcoll,val);
});
var conj_BANG___3 = (function() { 
var G__6098__delegate = function (tcoll,val,vals){while(true){
var ntcoll = cljs.core._conj_BANG_.call(null,tcoll,val);if(cljs.core.truth_(vals))
{{
var G__6099 = ntcoll;
var G__6100 = cljs.core.first.call(null,vals);
var G__6101 = cljs.core.next.call(null,vals);
tcoll = G__6099;
val = G__6100;
vals = G__6101;
continue;
}
} else
{return ntcoll;
}
break;
}
};
var G__6098 = function (tcoll,val,var_args){
var vals = null;if (arguments.length > 2) {
  vals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6098__delegate.call(this,tcoll,val,vals);};
G__6098.cljs$lang$maxFixedArity = 2;
G__6098.cljs$lang$applyTo = (function (arglist__6102){
var tcoll = cljs.core.first(arglist__6102);
arglist__6102 = cljs.core.next(arglist__6102);
var val = cljs.core.first(arglist__6102);
var vals = cljs.core.rest(arglist__6102);
return G__6098__delegate(tcoll,val,vals);
});
G__6098.cljs$core$IFn$_invoke$arity$variadic = G__6098__delegate;
return G__6098;
})()
;
conj_BANG_ = function(tcoll,val,var_args){
var vals = var_args;
switch(arguments.length){
case 0:
return conj_BANG___0.call(this);
case 1:
return conj_BANG___1.call(this,tcoll);
case 2:
return conj_BANG___2.call(this,tcoll,val);
default:
return conj_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,val, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_BANG_.cljs$lang$maxFixedArity = 2;
conj_BANG_.cljs$lang$applyTo = conj_BANG___3.cljs$lang$applyTo;
conj_BANG_.cljs$core$IFn$_invoke$arity$0 = conj_BANG___0;
conj_BANG_.cljs$core$IFn$_invoke$arity$1 = conj_BANG___1;
conj_BANG_.cljs$core$IFn$_invoke$arity$2 = conj_BANG___2;
conj_BANG_.cljs$core$IFn$_invoke$arity$variadic = conj_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return conj_BANG_;
})()
;
/**
* When applied to a transient map, adds mapping of key(s) to
* val(s). When applied to a transient vector, sets the val at index.
* Note - index must be <= (count vector). Returns coll.
* @param {...*} var_args
*/
cljs.core.assoc_BANG_ = (function() {
var assoc_BANG_ = null;
var assoc_BANG___3 = (function (tcoll,key,val){return cljs.core._assoc_BANG_.call(null,tcoll,key,val);
});
var assoc_BANG___4 = (function() { 
var G__6103__delegate = function (tcoll,key,val,kvs){while(true){
var ntcoll = cljs.core._assoc_BANG_.call(null,tcoll,key,val);if(cljs.core.truth_(kvs))
{{
var G__6104 = ntcoll;
var G__6105 = cljs.core.first.call(null,kvs);
var G__6106 = cljs.core.second.call(null,kvs);
var G__6107 = cljs.core.nnext.call(null,kvs);
tcoll = G__6104;
key = G__6105;
val = G__6106;
kvs = G__6107;
continue;
}
} else
{return ntcoll;
}
break;
}
};
var G__6103 = function (tcoll,key,val,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__6103__delegate.call(this,tcoll,key,val,kvs);};
G__6103.cljs$lang$maxFixedArity = 3;
G__6103.cljs$lang$applyTo = (function (arglist__6108){
var tcoll = cljs.core.first(arglist__6108);
arglist__6108 = cljs.core.next(arglist__6108);
var key = cljs.core.first(arglist__6108);
arglist__6108 = cljs.core.next(arglist__6108);
var val = cljs.core.first(arglist__6108);
var kvs = cljs.core.rest(arglist__6108);
return G__6103__delegate(tcoll,key,val,kvs);
});
G__6103.cljs$core$IFn$_invoke$arity$variadic = G__6103__delegate;
return G__6103;
})()
;
assoc_BANG_ = function(tcoll,key,val,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc_BANG___3.call(this,tcoll,key,val);
default:
return assoc_BANG___4.cljs$core$IFn$_invoke$arity$variadic(tcoll,key,val, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
assoc_BANG_.cljs$lang$maxFixedArity = 3;
assoc_BANG_.cljs$lang$applyTo = assoc_BANG___4.cljs$lang$applyTo;
assoc_BANG_.cljs$core$IFn$_invoke$arity$3 = assoc_BANG___3;
assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = assoc_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return assoc_BANG_;
})()
;
/**
* Returns a transient map that doesn't contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc_BANG_ = (function() {
var dissoc_BANG_ = null;
var dissoc_BANG___2 = (function (tcoll,key){return cljs.core._dissoc_BANG_.call(null,tcoll,key);
});
var dissoc_BANG___3 = (function() { 
var G__6109__delegate = function (tcoll,key,ks){while(true){
var ntcoll = cljs.core._dissoc_BANG_.call(null,tcoll,key);if(cljs.core.truth_(ks))
{{
var G__6110 = ntcoll;
var G__6111 = cljs.core.first.call(null,ks);
var G__6112 = cljs.core.next.call(null,ks);
tcoll = G__6110;
key = G__6111;
ks = G__6112;
continue;
}
} else
{return ntcoll;
}
break;
}
};
var G__6109 = function (tcoll,key,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6109__delegate.call(this,tcoll,key,ks);};
G__6109.cljs$lang$maxFixedArity = 2;
G__6109.cljs$lang$applyTo = (function (arglist__6113){
var tcoll = cljs.core.first(arglist__6113);
arglist__6113 = cljs.core.next(arglist__6113);
var key = cljs.core.first(arglist__6113);
var ks = cljs.core.rest(arglist__6113);
return G__6109__delegate(tcoll,key,ks);
});
G__6109.cljs$core$IFn$_invoke$arity$variadic = G__6109__delegate;
return G__6109;
})()
;
dissoc_BANG_ = function(tcoll,key,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return dissoc_BANG___2.call(this,tcoll,key);
default:
return dissoc_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,key, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dissoc_BANG_.cljs$lang$maxFixedArity = 2;
dissoc_BANG_.cljs$lang$applyTo = dissoc_BANG___3.cljs$lang$applyTo;
dissoc_BANG_.cljs$core$IFn$_invoke$arity$2 = dissoc_BANG___2;
dissoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = dissoc_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return dissoc_BANG_;
})()
;
/**
* Removes the last item from a transient vector. If
* the collection is empty, throws an exception. Returns coll
*/
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){return cljs.core._pop_BANG_.call(null,tcoll);
});
/**
* disj[oin]. Returns a transient set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj_BANG_ = (function() {
var disj_BANG_ = null;
var disj_BANG___2 = (function (tcoll,val){return cljs.core._disjoin_BANG_.call(null,tcoll,val);
});
var disj_BANG___3 = (function() { 
var G__6114__delegate = function (tcoll,val,vals){while(true){
var ntcoll = cljs.core._disjoin_BANG_.call(null,tcoll,val);if(cljs.core.truth_(vals))
{{
var G__6115 = ntcoll;
var G__6116 = cljs.core.first.call(null,vals);
var G__6117 = cljs.core.next.call(null,vals);
tcoll = G__6115;
val = G__6116;
vals = G__6117;
continue;
}
} else
{return ntcoll;
}
break;
}
};
var G__6114 = function (tcoll,val,var_args){
var vals = null;if (arguments.length > 2) {
  vals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6114__delegate.call(this,tcoll,val,vals);};
G__6114.cljs$lang$maxFixedArity = 2;
G__6114.cljs$lang$applyTo = (function (arglist__6118){
var tcoll = cljs.core.first(arglist__6118);
arglist__6118 = cljs.core.next(arglist__6118);
var val = cljs.core.first(arglist__6118);
var vals = cljs.core.rest(arglist__6118);
return G__6114__delegate(tcoll,val,vals);
});
G__6114.cljs$core$IFn$_invoke$arity$variadic = G__6114__delegate;
return G__6114;
})()
;
disj_BANG_ = function(tcoll,val,var_args){
var vals = var_args;
switch(arguments.length){
case 2:
return disj_BANG___2.call(this,tcoll,val);
default:
return disj_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,val, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
disj_BANG_.cljs$lang$maxFixedArity = 2;
disj_BANG_.cljs$lang$applyTo = disj_BANG___3.cljs$lang$applyTo;
disj_BANG_.cljs$core$IFn$_invoke$arity$2 = disj_BANG___2;
disj_BANG_.cljs$core$IFn$_invoke$arity$variadic = disj_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return disj_BANG_;
})()
;
cljs.core.apply_to = (function apply_to(f,argc,args){var args__$1 = cljs.core.seq.call(null,args);if((argc === (0)))
{return f.call(null);
} else
{var a4637 = cljs.core._first.call(null,args__$1);var args__$2 = cljs.core._rest.call(null,args__$1);if((argc === (1)))
{if(f.cljs$core$IFn$_invoke$arity$1)
{return f.cljs$core$IFn$_invoke$arity$1(a4637);
} else
{return f.call(null,a4637);
}
} else
{var b4638 = cljs.core._first.call(null,args__$2);var args__$3 = cljs.core._rest.call(null,args__$2);if((argc === (2)))
{if(f.cljs$core$IFn$_invoke$arity$2)
{return f.cljs$core$IFn$_invoke$arity$2(a4637,b4638);
} else
{return f.call(null,a4637,b4638);
}
} else
{var c4639 = cljs.core._first.call(null,args__$3);var args__$4 = cljs.core._rest.call(null,args__$3);if((argc === (3)))
{if(f.cljs$core$IFn$_invoke$arity$3)
{return f.cljs$core$IFn$_invoke$arity$3(a4637,b4638,c4639);
} else
{return f.call(null,a4637,b4638,c4639);
}
} else
{var d4640 = cljs.core._first.call(null,args__$4);var args__$5 = cljs.core._rest.call(null,args__$4);if((argc === (4)))
{if(f.cljs$core$IFn$_invoke$arity$4)
{return f.cljs$core$IFn$_invoke$arity$4(a4637,b4638,c4639,d4640);
} else
{return f.call(null,a4637,b4638,c4639,d4640);
}
} else
{var e4641 = cljs.core._first.call(null,args__$5);var args__$6 = cljs.core._rest.call(null,args__$5);if((argc === (5)))
{if(f.cljs$core$IFn$_invoke$arity$5)
{return f.cljs$core$IFn$_invoke$arity$5(a4637,b4638,c4639,d4640,e4641);
} else
{return f.call(null,a4637,b4638,c4639,d4640,e4641);
}
} else
{var f4642 = cljs.core._first.call(null,args__$6);var args__$7 = cljs.core._rest.call(null,args__$6);if((argc === (6)))
{if(f.cljs$core$IFn$_invoke$arity$6)
{return f.cljs$core$IFn$_invoke$arity$6(a4637,b4638,c4639,d4640,e4641,f4642);
} else
{return f.call(null,a4637,b4638,c4639,d4640,e4641,f4642);
}
} else
{var g4643 = cljs.core._first.call(null,args__$7);var args__$8 = cljs.core._rest.call(null,args__$7);if((argc === (7)))
{if(f.cljs$core$IFn$_invoke$arity$7)
{return f.cljs$core$IFn$_invoke$arity$7(a4637,b4638,c4639,d4640,e4641,f4642,g4643);
} else
{return f.call(null,a4637,b4638,c4639,d4640,e4641,f4642,g4643);
}
} else
{var h4644 = cljs.core._first.call(null,args__$8);var args__$9 = cljs.core._rest.call(null,args__$8);if((argc === (8)))
{if(f.cljs$core$IFn$_invoke$arity$8)
{return f.cljs$core$IFn$_invoke$arity$8(a4637,b4638,c4639,d4640,e4641,f4642,g4643,h4644);
} else
{return f.call(null,a4637,b4638,c4639,d4640,e4641,f4642,g4643,h4644);
}
} else
{var i4645 = cljs.core._first.call(null,args__$9);var args__$10 = cljs.core._rest.call(null,args__$9);if((argc === (9)))
{if(f.cljs$core$IFn$_invoke$arity$9)
{return f.cljs$core$IFn$_invoke$arity$9(a4637,b4638,c4639,d4640,e4641,f4642,g4643,h4644,i4645);
} else
{return f.call(null,a4637,b4638,c4639,d4640,e4641,f4642,g4643,h4644,i4645);
}
} else
{var j4646 = cljs.core._first.call(null,args__$10);var args__$11 = cljs.core._rest.call(null,args__$10);if((argc === (10)))
{if(f.cljs$core$IFn$_invoke$arity$10)
{return f.cljs$core$IFn$_invoke$arity$10(a4637,b4638,c4639,d4640,e4641,f4642,g4643,h4644,i4645,j4646);
} else
{return f.call(null,a4637,b4638,c4639,d4640,e4641,f4642,g4643,h4644,i4645,j4646);
}
} else
{var k4647 = cljs.core._first.call(null,args__$11);var args__$12 = cljs.core._rest.call(null,args__$11);if((argc === (11)))
{if(f.cljs$core$IFn$_invoke$arity$11)
{return f.cljs$core$IFn$_invoke$arity$11(a4637,b4638,c4639,d4640,e4641,f4642,g4643,h4644,i4645,j4646,k4647);
} else
{return f.call(null,a4637,b4638,c4639,d4640,e4641,f4642,g4643,h4644,i4645,j4646,k4647);
}
} else
{var l4648 = cljs.core._first.call(null,args__$12);var args__$13 = cljs.core._rest.call(null,args__$12);if((argc === (12)))
{if(f.cljs$core$IFn$_invoke$arity$12)
{return f.cljs$core$IFn$_invoke$arity$12(a4637,b4638,c4639,d4640,e4641,f4642,g4643,h4644,i4645,j4646,k4647,l4648);
} else
{return f.call(null,a4637,b4638,c4639,d4640,e4641,f4642,g4643,h4644,i4645,j4646,k4647,l4648);
}
} else
{var m4649 = cljs.core._first.call(null,args__$13);var args__$14 = cljs.core._rest.call(null,args__$13);if((argc === (13)))
{if(f.cljs$core$IFn$_invoke$arity$13)
{return f.cljs$core$IFn$_invoke$arity$13(a4637,b4638,c4639,d4640,e4641,f4642,g4643,h4644,i4645,j4646,k4647,l4648,m4649);
} else
{return f.call(null,a4637,b4638,c4639,d4640,e4641,f4642,g4643,h4644,i4645,j4646,k4647,l4648,m4649);
}
} else
{var n4650 = cljs.core._first.call(null,args__$14);var args__$15 = cljs.core._rest.call(null,args__$14);if((argc === (14)))
{if(f.cljs$core$IFn$_invoke$arity$14)
{return f.cljs$core$IFn$_invoke$arity$14(a4637,b4638,c4639,d4640,e4641,f4642,g4643,h4644,i4645,j4646,k4647,l4648,m4649,n4650);
} else
{return f.call(null,a4637,b4638,c4639,d4640,e4641,f4642,g4643,h4644,i4645,j4646,k4647,l4648,m4649,n4650);
}
} else
{var o4651 = cljs.core._first.call(null,args__$15);var args__$16 = cljs.core._rest.call(null,args__$15);if((argc === (15)))
{if(f.cljs$core$IFn$_invoke$arity$15)
{return f.cljs$core$IFn$_invoke$arity$15(a4637,b4638,c4639,d4640,e4641,f4642,g4643,h4644,i4645,j4646,k4647,l4648,m4649,n4650,o4651);
} else
{return f.call(null,a4637,b4638,c4639,d4640,e4641,f4642,g4643,h4644,i4645,j4646,k4647,l4648,m4649,n4650,o4651);
}
} else
{var p4652 = cljs.core._first.call(null,args__$16);var args__$17 = cljs.core._rest.call(null,args__$16);if((argc === (16)))
{if(f.cljs$core$IFn$_invoke$arity$16)
{return f.cljs$core$IFn$_invoke$arity$16(a4637,b4638,c4639,d4640,e4641,f4642,g4643,h4644,i4645,j4646,k4647,l4648,m4649,n4650,o4651,p4652);
} else
{return f.call(null,a4637,b4638,c4639,d4640,e4641,f4642,g4643,h4644,i4645,j4646,k4647,l4648,m4649,n4650,o4651,p4652);
}
} else
{var q4653 = cljs.core._first.call(null,args__$17);var args__$18 = cljs.core._rest.call(null,args__$17);if((argc === (17)))
{if(f.cljs$core$IFn$_invoke$arity$17)
{return f.cljs$core$IFn$_invoke$arity$17(a4637,b4638,c4639,d4640,e4641,f4642,g4643,h4644,i4645,j4646,k4647,l4648,m4649,n4650,o4651,p4652,q4653);
} else
{return f.call(null,a4637,b4638,c4639,d4640,e4641,f4642,g4643,h4644,i4645,j4646,k4647,l4648,m4649,n4650,o4651,p4652,q4653);
}
} else
{var r4654 = cljs.core._first.call(null,args__$18);var args__$19 = cljs.core._rest.call(null,args__$18);if((argc === (18)))
{if(f.cljs$core$IFn$_invoke$arity$18)
{return f.cljs$core$IFn$_invoke$arity$18(a4637,b4638,c4639,d4640,e4641,f4642,g4643,h4644,i4645,j4646,k4647,l4648,m4649,n4650,o4651,p4652,q4653,r4654);
} else
{return f.call(null,a4637,b4638,c4639,d4640,e4641,f4642,g4643,h4644,i4645,j4646,k4647,l4648,m4649,n4650,o4651,p4652,q4653,r4654);
}
} else
{var s4655 = cljs.core._first.call(null,args__$19);var args__$20 = cljs.core._rest.call(null,args__$19);if((argc === (19)))
{if(f.cljs$core$IFn$_invoke$arity$19)
{return f.cljs$core$IFn$_invoke$arity$19(a4637,b4638,c4639,d4640,e4641,f4642,g4643,h4644,i4645,j4646,k4647,l4648,m4649,n4650,o4651,p4652,q4653,r4654,s4655);
} else
{return f.call(null,a4637,b4638,c4639,d4640,e4641,f4642,g4643,h4644,i4645,j4646,k4647,l4648,m4649,n4650,o4651,p4652,q4653,r4654,s4655);
}
} else
{var t4656 = cljs.core._first.call(null,args__$20);var args__$21 = cljs.core._rest.call(null,args__$20);if((argc === (20)))
{if(f.cljs$core$IFn$_invoke$arity$20)
{return f.cljs$core$IFn$_invoke$arity$20(a4637,b4638,c4639,d4640,e4641,f4642,g4643,h4644,i4645,j4646,k4647,l4648,m4649,n4650,o4651,p4652,q4653,r4654,s4655,t4656);
} else
{return f.call(null,a4637,b4638,c4639,d4640,e4641,f4642,g4643,h4644,i4645,j4646,k4647,l4648,m4649,n4650,o4651,p4652,q4653,r4654,s4655,t4656);
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
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
});
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){var fixed_arity = f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count.call(null,args,(fixed_arity + (1)));if((bc <= fixed_arity))
{return cljs.core.apply_to.call(null,f,bc,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){var arglist = cljs.core.list_STAR_.call(null,x,args);var fixed_arity = f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count.call(null,arglist,(fixed_arity + (1)));if((bc <= fixed_arity))
{return cljs.core.apply_to.call(null,f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist));
}
});
var apply__4 = (function (f,x,y,args){var arglist = cljs.core.list_STAR_.call(null,x,y,args);var fixed_arity = f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count.call(null,arglist,(fixed_arity + (1)));if((bc <= fixed_arity))
{return cljs.core.apply_to.call(null,f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist));
}
});
var apply__5 = (function (f,x,y,z,args){var arglist = cljs.core.list_STAR_.call(null,x,y,z,args);var fixed_arity = f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count.call(null,arglist,(fixed_arity + (1)));if((bc <= fixed_arity))
{return cljs.core.apply_to.call(null,f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist));
}
});
var apply__6 = (function() { 
var G__6119__delegate = function (f,a,b,c,d,args){var arglist = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));var fixed_arity = f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count.call(null,arglist,(fixed_arity + (1)));if((bc <= fixed_arity))
{return cljs.core.apply_to.call(null,f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist));
}
};
var G__6119 = function (f,a,b,c,d,var_args){
var args = null;if (arguments.length > 5) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__6119__delegate.call(this,f,a,b,c,d,args);};
G__6119.cljs$lang$maxFixedArity = 5;
G__6119.cljs$lang$applyTo = (function (arglist__6120){
var f = cljs.core.first(arglist__6120);
arglist__6120 = cljs.core.next(arglist__6120);
var a = cljs.core.first(arglist__6120);
arglist__6120 = cljs.core.next(arglist__6120);
var b = cljs.core.first(arglist__6120);
arglist__6120 = cljs.core.next(arglist__6120);
var c = cljs.core.first(arglist__6120);
arglist__6120 = cljs.core.next(arglist__6120);
var d = cljs.core.first(arglist__6120);
var args = cljs.core.rest(arglist__6120);
return G__6119__delegate(f,a,b,c,d,args);
});
G__6119.cljs$core$IFn$_invoke$arity$variadic = G__6119__delegate;
return G__6119;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$core$IFn$_invoke$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$core$IFn$_invoke$arity$2 = apply__2;
apply.cljs$core$IFn$_invoke$arity$3 = apply__3;
apply.cljs$core$IFn$_invoke$arity$4 = apply__4;
apply.cljs$core$IFn$_invoke$arity$5 = apply__5;
apply.cljs$core$IFn$_invoke$arity$variadic = apply__6.cljs$core$IFn$_invoke$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() {
var vary_meta = null;
var vary_meta__2 = (function (obj,f){return cljs.core.with_meta.call(null,obj,f.call(null,cljs.core.meta.call(null,obj)));
});
var vary_meta__3 = (function (obj,f,a){return cljs.core.with_meta.call(null,obj,f.call(null,cljs.core.meta.call(null,obj),a));
});
var vary_meta__4 = (function (obj,f,a,b){return cljs.core.with_meta.call(null,obj,f.call(null,cljs.core.meta.call(null,obj),a,b));
});
var vary_meta__5 = (function (obj,f,a,b,c){return cljs.core.with_meta.call(null,obj,f.call(null,cljs.core.meta.call(null,obj),a,b,c));
});
var vary_meta__6 = (function (obj,f,a,b,c,d){return cljs.core.with_meta.call(null,obj,f.call(null,cljs.core.meta.call(null,obj),a,b,c,d));
});
var vary_meta__7 = (function() { 
var G__6121__delegate = function (obj,f,a,b,c,d,args){return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),a,b,c,d,args));
};
var G__6121 = function (obj,f,a,b,c,d,var_args){
var args = null;if (arguments.length > 6) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return G__6121__delegate.call(this,obj,f,a,b,c,d,args);};
G__6121.cljs$lang$maxFixedArity = 6;
G__6121.cljs$lang$applyTo = (function (arglist__6122){
var obj = cljs.core.first(arglist__6122);
arglist__6122 = cljs.core.next(arglist__6122);
var f = cljs.core.first(arglist__6122);
arglist__6122 = cljs.core.next(arglist__6122);
var a = cljs.core.first(arglist__6122);
arglist__6122 = cljs.core.next(arglist__6122);
var b = cljs.core.first(arglist__6122);
arglist__6122 = cljs.core.next(arglist__6122);
var c = cljs.core.first(arglist__6122);
arglist__6122 = cljs.core.next(arglist__6122);
var d = cljs.core.first(arglist__6122);
var args = cljs.core.rest(arglist__6122);
return G__6121__delegate(obj,f,a,b,c,d,args);
});
G__6121.cljs$core$IFn$_invoke$arity$variadic = G__6121__delegate;
return G__6121;
})()
;
vary_meta = function(obj,f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return vary_meta__2.call(this,obj,f);
case 3:
return vary_meta__3.call(this,obj,f,a);
case 4:
return vary_meta__4.call(this,obj,f,a,b);
case 5:
return vary_meta__5.call(this,obj,f,a,b,c);
case 6:
return vary_meta__6.call(this,obj,f,a,b,c,d);
default:
return vary_meta__7.cljs$core$IFn$_invoke$arity$variadic(obj,f,a,b,c,d, cljs.core.array_seq(arguments, 6));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vary_meta.cljs$lang$maxFixedArity = 6;
vary_meta.cljs$lang$applyTo = vary_meta__7.cljs$lang$applyTo;
vary_meta.cljs$core$IFn$_invoke$arity$2 = vary_meta__2;
vary_meta.cljs$core$IFn$_invoke$arity$3 = vary_meta__3;
vary_meta.cljs$core$IFn$_invoke$arity$4 = vary_meta__4;
vary_meta.cljs$core$IFn$_invoke$arity$5 = vary_meta__5;
vary_meta.cljs$core$IFn$_invoke$arity$6 = vary_meta__6;
vary_meta.cljs$core$IFn$_invoke$arity$variadic = vary_meta__7.cljs$core$IFn$_invoke$arity$variadic;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){return false;
});
var not_EQ___2 = (function (x,y){return !(cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3 = (function() { 
var G__6123__delegate = function (x,y,more){return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__6123 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
