// Compiled by ClojureScript 0.0-2371
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* Returns a selector in string format.
* Accepts string, keyword, or collection.
*/
dommy.core.selector = (function selector(data){if(cljs.core.coll_QMARK_.call(null,data))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else
{if((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))
{return cljs.core.name.call(null,data);
} else
{return null;
}
}
});
dommy.core.text = (function text(elem){var or__3640__auto__ = elem.textContent;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return elem.innerText;
}
});
dommy.core.html = (function html(elem){return elem.innerHTML;
});
dommy.core.value = (function value(elem){return elem.value;
});
dommy.core.class$ = (function class$(elem){return elem.className;
});
dommy.core.attr = (function attr(elem,k){if(cljs.core.truth_(k))
{return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else
{return null;
}
});
/**
* The computed style of `elem`, optionally specifying the key of
* a particular style to return
*/
dommy.core.style = (function() {
var style = null;
var style__1 = (function (elem){return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});
var style__2 = (function (elem,k){return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});
style = function(elem,k){
switch(arguments.length){
case 1:
return style__1.call(this,elem);
case 2:
return style__2.call(this,elem,k);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
style.cljs$core$IFn$_invoke$arity$1 = style__1;
style.cljs$core$IFn$_invoke$arity$2 = style__2;
return style;
})()
;
dommy.core.px = (function px(elem,k){var pixels = dommy.core.style.call(null,elem,k);if(cljs.core.seq.call(null,pixels))
{return parseInt(pixels);
} else
{return null;
}
});
/**
* Does `elem` contain `c` in its class list
*/
dommy.core.has_class_QMARK_ = (function has_class_QMARK_(elem,c){var c__$1 = dommy.utils.as_str.call(null,c);var temp__4124__auto__ = elem.classList;if(cljs.core.truth_(temp__4124__auto__))
{var class_list = temp__4124__auto__;return class_list.contains(c__$1);
} else
{var temp__4126__auto__ = dommy.core.class$.call(null,elem);if(cljs.core.truth_(temp__4126__auto__))
{var class_name = temp__4126__auto__;var temp__4126__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);if(cljs.core.truth_(temp__4126__auto____$1))
{var i = temp__4126__auto____$1;return (i >= (0));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
*/
dommy.core.hidden_QMARK_ = (function hidden_QMARK_(elem){return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.core.bounding_client_rect = (function bounding_client_rect(elem){var r = elem.getBoundingClientRect();return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function parent(elem){return elem.parentNode;
});
dommy.core.children = (function children(elem){return elem.children;
});
/**
* Lazy seq of the ancestors of `elem`
*/
dommy.core.ancestors = (function ancestors(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
* Returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));return ((function (matches){
return (function (elem){return (matches.indexOf(elem) >= (0));
});
;})(matches))
});
matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return matches_pred__1.call(this,base);
case 2:
return matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matches_pred.cljs$core$IFn$_invoke$arity$1 = matches_pred__1;
matches_pred.cljs$core$IFn$_invoke$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* Closest ancestor of `elem` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){return closest.call(null,document.body,elem,selector);
});
var closest__3 = (function (base,elem,selector){return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__13703_SHARP_){return !((p1__13703_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});
closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return closest__2.call(this,base,elem);
case 3:
return closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
closest.cljs$core$IFn$_invoke$arity$2 = closest__2;
closest.cljs$core$IFn$_invoke$arity$3 = closest__3;
return closest;
})()
;
/**
* Is `descendant` a descendant of `ancestor`?
* (http://goo.gl/T8pgCX)
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){if(cljs.core.truth_(ancestor.contains))
{return ancestor.contains(descendant);
} else
{if(cljs.core.truth_(ancestor.compareDocumentPosition))
{return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else
{return null;
}
}
});
/**
* Set the textContent of `elem` to `text`, fall back to innerText
*/
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){if(!((void 0 === elem.textContent)))
{elem.textContent = text;
} else
{elem.innerText = text;
}
return elem;
});
/**
* Set the innerHTML of `elem` to `html`
*/
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){elem.innerHTML = html;
return elem;
});
/**
* Set the value of `elem` to `value`
*/
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){elem.value = value;
return elem;
});
/**
* Set the css class of `elem` to `elem`
*/
dommy.core.set_class_BANG_ = (function set_class_BANG_(elem,c){return elem.className = c;
});
/**
* Set the style of `elem` using key-value pairs:
* 
* (set-style! elem :display "block" :color "red")
* @param {...*} var_args
*/
dommy.core.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var style = elem.style;var seq__13710_13716 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__13711_13717 = null;var count__13712_13718 = (0);var i__13713_13719 = (0);while(true){
if((i__13713_13719 < count__13712_13718))
{var vec__13714_13720 = cljs.core._nth.call(null,chunk__13711_13717,i__13713_13719);var k_13721 = cljs.core.nth.call(null,vec__13714_13720,(0),null);var v_13722 = cljs.core.nth.call(null,vec__13714_13720,(1),null);style.setProperty(dommy.utils.as_str.call(null,k_13721),v_13722);
{
var G__13723 = seq__13710_13716;
var G__13724 = chunk__13711_13717;
var G__13725 = count__13712_13718;
var G__13726 = (i__13713_13719 + (1));
seq__13710_13716 = G__13723;
chunk__13711_13717 = G__13724;
count__13712_13718 = G__13725;
i__13713_13719 = G__13726;
continue;
}
} else
{var temp__4126__auto___13727 = cljs.core.seq.call(null,seq__13710_13716);if(temp__4126__auto___13727)
{var seq__13710_13728__$1 = temp__4126__auto___13727;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13710_13728__$1))
{var c__4410__auto___13729 = cljs.core.chunk_first.call(null,seq__13710_13728__$1);{
var G__13730 = cljs.core.chunk_rest.call(null,seq__13710_13728__$1);
var G__13731 = c__4410__auto___13729;
var G__13732 = cljs.core.count.call(null,c__4410__auto___13729);
var G__13733 = (0);
seq__13710_13716 = G__13730;
chunk__13711_13717 = G__13731;
count__13712_13718 = G__13732;
i__13713_13719 = G__13733;
continue;
}
} else
{var vec__13715_13734 = cljs.core.first.call(null,seq__13710_13728__$1);var k_13735 = cljs.core.nth.call(null,vec__13715_13734,(0),null);var v_13736 = cljs.core.nth.call(null,vec__13715_13734,(1),null);style.setProperty(dommy.utils.as_str.call(null,k_13735),v_13736);
{
var G__13737 = cljs.core.next.call(null,seq__13710_13728__$1);
var G__13738 = null;
var G__13739 = (0);
var G__13740 = (0);
seq__13710_13716 = G__13737;
chunk__13711_13717 = G__13738;
count__13712_13718 = G__13739;
i__13713_13719 = G__13740;
continue;
}
}
} else
{}
}
break;
}
return elem;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__13741){
var elem = cljs.core.first(arglist__13741);
var kvs = cljs.core.rest(arglist__13741);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var seq__13748_13754 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__13749_13755 = null;var count__13750_13756 = (0);var i__13751_13757 = (0);while(true){
if((i__13751_13757 < count__13750_13756))
{var vec__13752_13758 = cljs.core._nth.call(null,chunk__13749_13755,i__13751_13757);var k_13759 = cljs.core.nth.call(null,vec__13752_13758,(0),null);var v_13760 = cljs.core.nth.call(null,vec__13752_13758,(1),null);dommy.core.set_style_BANG_.call(null,elem,k_13759,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_13760)+"px"));
{
var G__13761 = seq__13748_13754;
var G__13762 = chunk__13749_13755;
var G__13763 = count__13750_13756;
var G__13764 = (i__13751_13757 + (1));
seq__13748_13754 = G__13761;
chunk__13749_13755 = G__13762;
count__13750_13756 = G__13763;
i__13751_13757 = G__13764;
continue;
}
} else
{var temp__4126__auto___13765 = cljs.core.seq.call(null,seq__13748_13754);if(temp__4126__auto___13765)
{var seq__13748_13766__$1 = temp__4126__auto___13765;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13748_13766__$1))
{var c__4410__auto___13767 = cljs.core.chunk_first.call(null,seq__13748_13766__$1);{
var G__13768 = cljs.core.chunk_rest.call(null,seq__13748_13766__$1);
var G__13769 = c__4410__auto___13767;
var G__13770 = cljs.core.count.call(null,c__4410__auto___13767);
var G__13771 = (0);
seq__13748_13754 = G__13768;
chunk__13749_13755 = G__13769;
count__13750_13756 = G__13770;
i__13751_13757 = G__13771;
continue;
}
} else
{var vec__13753_13772 = cljs.core.first.call(null,seq__13748_13766__$1);var k_13773 = cljs.core.nth.call(null,vec__13753_13772,(0),null);var v_13774 = cljs.core.nth.call(null,vec__13753_13772,(1),null);dommy.core.set_style_BANG_.call(null,elem,k_13773,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_13774)+"px"));
{
var G__13775 = cljs.core.next.call(null,seq__13748_13766__$1);
var G__13776 = null;
var G__13777 = (0);
var G__13778 = (0);
seq__13748_13754 = G__13775;
chunk__13749_13755 = G__13776;
count__13750_13756 = G__13777;
i__13751_13757 = G__13778;
continue;
}
}
} else
{}
}
break;
}
return elem;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__13779){
var elem = cljs.core.first(arglist__13779);
var kvs = cljs.core.rest(arglist__13779);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.core.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){return set_attr_BANG_.call(null,elem,k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){var k__$1 = dommy.utils.as_str.call(null,k);if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_.call(null,v))
{var G__13788 = elem;(G__13788[k__$1] = v);
return G__13788;
} else
{var G__13789 = elem;G__13789.setAttribute(k__$1,v);
return G__13789;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__13796__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var seq__13790_13797 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));var chunk__13791_13798 = null;var count__13792_13799 = (0);var i__13793_13800 = (0);while(true){
if((i__13793_13800 < count__13792_13799))
{var vec__13794_13801 = cljs.core._nth.call(null,chunk__13791_13798,i__13793_13800);var k_13802__$1 = cljs.core.nth.call(null,vec__13794_13801,(0),null);var v_13803__$1 = cljs.core.nth.call(null,vec__13794_13801,(1),null);set_attr_BANG_.call(null,elem,k_13802__$1,v_13803__$1);
{
var G__13804 = seq__13790_13797;
var G__13805 = chunk__13791_13798;
var G__13806 = count__13792_13799;
var G__13807 = (i__13793_13800 + (1));
seq__13790_13797 = G__13804;
chunk__13791_13798 = G__13805;
count__13792_13799 = G__13806;
i__13793_13800 = G__13807;
continue;
}
} else
{var temp__4126__auto___13808 = cljs.core.seq.call(null,seq__13790_13797);if(temp__4126__auto___13808)
{var seq__13790_13809__$1 = temp__4126__auto___13808;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13790_13809__$1))
{var c__4410__auto___13810 = cljs.core.chunk_first.call(null,seq__13790_13809__$1);{
var G__13811 = cljs.core.chunk_rest.call(null,seq__13790_13809__$1);
var G__13812 = c__4410__auto___13810;
var G__13813 = cljs.core.count.call(null,c__4410__auto___13810);
var G__13814 = (0);
seq__13790_13797 = G__13811;
chunk__13791_13798 = G__13812;
count__13792_13799 = G__13813;
i__13793_13800 = G__13814;
continue;
}
} else
{var vec__13795_13815 = cljs.core.first.call(null,seq__13790_13809__$1);var k_13816__$1 = cljs.core.nth.call(null,vec__13795_13815,(0),null);var v_13817__$1 = cljs.core.nth.call(null,vec__13795_13815,(1),null);set_attr_BANG_.call(null,elem,k_13816__$1,v_13817__$1);
{
var G__13818 = cljs.core.next.call(null,seq__13790_13809__$1);
var G__13819 = null;
var G__13820 = (0);
var G__13821 = (0);
seq__13790_13797 = G__13818;
chunk__13791_13798 = G__13819;
count__13792_13799 = G__13820;
i__13793_13800 = G__13821;
continue;
}
}
} else
{}
}
break;
}
return elem;
};
var G__13796 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__13796__delegate.call(this,elem,k,v,kvs);};
G__13796.cljs$lang$maxFixedArity = 3;
G__13796.cljs$lang$applyTo = (function (arglist__13822){
var elem = cljs.core.first(arglist__13822);
arglist__13822 = cljs.core.next(arglist__13822);
var k = cljs.core.first(arglist__13822);
arglist__13822 = cljs.core.next(arglist__13822);
var v = cljs.core.first(arglist__13822);
var kvs = cljs.core.rest(arglist__13822);
return G__13796__delegate(elem,k,v,kvs);
});
G__13796.cljs$core$IFn$_invoke$arity$variadic = G__13796__delegate;
return G__13796;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* Removes dom attributes on and returns `elem`.
* `class` and `classes` are special cases which clear
* out the class name on removal.
* @param {...*} var_args
*/
dommy.core.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){var k_13831__$1 = dommy.utils.as_str.call(null,k);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_13831__$1)))
{dommy.core.set_class_BANG_.call(null,elem,"");
} else
{elem.removeAttribute(k_13831__$1);
}
return elem;
});
var remove_attr_BANG___3 = (function() { 
var G__13832__delegate = function (elem,k,ks){var seq__13827_13833 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__13828_13834 = null;var count__13829_13835 = (0);var i__13830_13836 = (0);while(true){
if((i__13830_13836 < count__13829_13835))
{var k_13837__$1 = cljs.core._nth.call(null,chunk__13828_13834,i__13830_13836);remove_attr_BANG_.call(null,elem,k_13837__$1);
{
var G__13838 = seq__13827_13833;
var G__13839 = chunk__13828_13834;
var G__13840 = count__13829_13835;
var G__13841 = (i__13830_13836 + (1));
seq__13827_13833 = G__13838;
chunk__13828_13834 = G__13839;
count__13829_13835 = G__13840;
i__13830_13836 = G__13841;
continue;
}
} else
{var temp__4126__auto___13842 = cljs.core.seq.call(null,seq__13827_13833);if(temp__4126__auto___13842)
{var seq__13827_13843__$1 = temp__4126__auto___13842;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13827_13843__$1))
{var c__4410__auto___13844 = cljs.core.chunk_first.call(null,seq__13827_13843__$1);{
var G__13845 = cljs.core.chunk_rest.call(null,seq__13827_13843__$1);
var G__13846 = c__4410__auto___13844;
var G__13847 = cljs.core.count.call(null,c__4410__auto___13844);
var G__13848 = (0);
seq__13827_13833 = G__13845;
chunk__13828_13834 = G__13846;
count__13829_13835 = G__13847;
i__13830_13836 = G__13848;
continue;
}
} else
{var k_13849__$1 = cljs.core.first.call(null,seq__13827_13843__$1);remove_attr_BANG_.call(null,elem,k_13849__$1);
{
var G__13850 = cljs.core.next.call(null,seq__13827_13843__$1);
var G__13851 = null;
var G__13852 = (0);
var G__13853 = (0);
seq__13827_13833 = G__13850;
chunk__13828_13834 = G__13851;
count__13829_13835 = G__13852;
i__13830_13836 = G__13853;
continue;
}
}
} else
{}
}
break;
}
return elem;
};
var G__13832 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__13832__delegate.call(this,elem,k,ks);};
G__13832.cljs$lang$maxFixedArity = 2;
G__13832.cljs$lang$applyTo = (function (arglist__13854){
var elem = cljs.core.first(arglist__13854);
arglist__13854 = cljs.core.next(arglist__13854);
var k = cljs.core.first(arglist__13854);
var ks = cljs.core.rest(arglist__13854);
return G__13832__delegate(elem,k,ks);
});
G__13832.cljs$core$IFn$_invoke$arity$variadic = G__13832__delegate;
return G__13832;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
/**
* Toggles a dom attribute `k` on `elem`, optionally specifying
* the boolean value with `add?`
*/
dommy.core.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){return toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){if(add_QMARK_)
{return dommy.core.set_attr_BANG_.call(null,elem,k);
} else
{return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});
toggle_attr_BANG_ = function(elem,k,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_attr_BANG___2.call(this,elem,k);
case 3:
return toggle_attr_BANG___3.call(this,elem,k,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_attr_BANG___2;
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_attr_BANG___3;
return toggle_attr_BANG_;
})()
;
/**
* Add `classes` to `elem`, trying to use Element::classList, and
* falling back to fast string parsing/manipulation
* @param {...*} var_args
*/
dommy.core.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);if(cljs.core.seq.call(null,classes__$1))
{var temp__4124__auto___13879 = elem.classList;if(cljs.core.truth_(temp__4124__auto___13879))
{var class_list_13880 = temp__4124__auto___13879;var seq__13867_13881 = cljs.core.seq.call(null,classes__$1);var chunk__13868_13882 = null;var count__13869_13883 = (0);var i__13870_13884 = (0);while(true){
if((i__13870_13884 < count__13869_13883))
{var c_13885 = cljs.core._nth.call(null,chunk__13868_13882,i__13870_13884);class_list_13880.add(c_13885);
{
var G__13886 = seq__13867_13881;
var G__13887 = chunk__13868_13882;
var G__13888 = count__13869_13883;
var G__13889 = (i__13870_13884 + (1));
seq__13867_13881 = G__13886;
chunk__13868_13882 = G__13887;
count__13869_13883 = G__13888;
i__13870_13884 = G__13889;
continue;
}
} else
{var temp__4126__auto___13890 = cljs.core.seq.call(null,seq__13867_13881);if(temp__4126__auto___13890)
{var seq__13867_13891__$1 = temp__4126__auto___13890;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13867_13891__$1))
{var c__4410__auto___13892 = cljs.core.chunk_first.call(null,seq__13867_13891__$1);{
var G__13893 = cljs.core.chunk_rest.call(null,seq__13867_13891__$1);
var G__13894 = c__4410__auto___13892;
var G__13895 = cljs.core.count.call(null,c__4410__auto___13892);
var G__13896 = (0);
seq__13867_13881 = G__13893;
chunk__13868_13882 = G__13894;
count__13869_13883 = G__13895;
i__13870_13884 = G__13896;
continue;
}
} else
{var c_13897 = cljs.core.first.call(null,seq__13867_13891__$1);class_list_13880.add(c_13897);
{
var G__13898 = cljs.core.next.call(null,seq__13867_13891__$1);
var G__13899 = null;
var G__13900 = (0);
var G__13901 = (0);
seq__13867_13881 = G__13898;
chunk__13868_13882 = G__13899;
count__13869_13883 = G__13900;
i__13870_13884 = G__13901;
continue;
}
}
} else
{}
}
break;
}
} else
{var seq__13871_13902 = cljs.core.seq.call(null,classes__$1);var chunk__13872_13903 = null;var count__13873_13904 = (0);var i__13874_13905 = (0);while(true){
if((i__13874_13905 < count__13873_13904))
{var c_13906 = cljs.core._nth.call(null,chunk__13872_13903,i__13874_13905);var class_name_13907 = dommy.core.class$.call(null,elem);if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_13907,c_13906)))
{} else
{dommy.core.set_class_BANG_.call(null,elem,(((class_name_13907 === ""))?c_13906:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_13907)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_13906))));
}
{
var G__13908 = seq__13871_13902;
var G__13909 = chunk__13872_13903;
var G__13910 = count__13873_13904;
var G__13911 = (i__13874_13905 + (1));
seq__13871_13902 = G__13908;
chunk__13872_13903 = G__13909;
count__13873_13904 = G__13910;
i__13874_13905 = G__13911;
continue;
}
} else
{var temp__4126__auto___13912 = cljs.core.seq.call(null,seq__13871_13902);if(temp__4126__auto___13912)
{var seq__13871_13913__$1 = temp__4126__auto___13912;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13871_13913__$1))
{var c__4410__auto___13914 = cljs.core.chunk_first.call(null,seq__13871_13913__$1);{
var G__13915 = cljs.core.chunk_rest.call(null,seq__13871_13913__$1);
var G__13916 = c__4410__auto___13914;
var G__13917 = cljs.core.count.call(null,c__4410__auto___13914);
var G__13918 = (0);
seq__13871_13902 = G__13915;
chunk__13872_13903 = G__13916;
count__13873_13904 = G__13917;
i__13874_13905 = G__13918;
continue;
}
} else
{var c_13919 = cljs.core.first.call(null,seq__13871_13913__$1);var class_name_13920 = dommy.core.class$.call(null,elem);if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_13920,c_13919)))
{} else
{dommy.core.set_class_BANG_.call(null,elem,(((class_name_13920 === ""))?c_13919:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_13920)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_13919))));
}
{
var G__13921 = cljs.core.next.call(null,seq__13871_13913__$1);
var G__13922 = null;
var G__13923 = (0);
var G__13924 = (0);
seq__13871_13902 = G__13921;
chunk__13872_13903 = G__13922;
count__13873_13904 = G__13923;
i__13874_13905 = G__13924;
continue;
}
}
} else
{}
}
break;
}
}
} else
{}
return elem;
});
var add_class_BANG___3 = (function() { 
var G__13925__delegate = function (elem,classes,more_classes){var seq__13875_13926 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__13876_13927 = null;var count__13877_13928 = (0);var i__13878_13929 = (0);while(true){
if((i__13878_13929 < count__13877_13928))
{var c_13930 = cljs.core._nth.call(null,chunk__13876_13927,i__13878_13929);add_class_BANG_.call(null,elem,c_13930);
{
var G__13931 = seq__13875_13926;
var G__13932 = chunk__13876_13927;
var G__13933 = count__13877_13928;
var G__13934 = (i__13878_13929 + (1));
seq__13875_13926 = G__13931;
chunk__13876_13927 = G__13932;
count__13877_13928 = G__13933;
i__13878_13929 = G__13934;
continue;
}
} else
{var temp__4126__auto___13935 = cljs.core.seq.call(null,seq__13875_13926);if(temp__4126__auto___13935)
{var seq__13875_13936__$1 = temp__4126__auto___13935;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13875_13936__$1))
{var c__4410__auto___13937 = cljs.core.chunk_first.call(null,seq__13875_13936__$1);{
var G__13938 = cljs.core.chunk_rest.call(null,seq__13875_13936__$1);
var G__13939 = c__4410__auto___13937;
var G__13940 = cljs.core.count.call(null,c__4410__auto___13937);
var G__13941 = (0);
seq__13875_13926 = G__13938;
chunk__13876_13927 = G__13939;
count__13877_13928 = G__13940;
i__13878_13929 = G__13941;
continue;
}
} else
{var c_13942 = cljs.core.first.call(null,seq__13875_13936__$1);add_class_BANG_.call(null,elem,c_13942);
{
var G__13943 = cljs.core.next.call(null,seq__13875_13936__$1);
var G__13944 = null;
var G__13945 = (0);
var G__13946 = (0);
seq__13875_13926 = G__13943;
chunk__13876_13927 = G__13944;
count__13877_13928 = G__13945;
i__13878_13929 = G__13946;
continue;
}
}
} else
{}
}
break;
}
return elem;
};
var G__13925 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__13925__delegate.call(this,elem,classes,more_classes);};
G__13925.cljs$lang$maxFixedArity = 2;
G__13925.cljs$lang$applyTo = (function (arglist__13947){
var elem = cljs.core.first(arglist__13947);
arglist__13947 = cljs.core.next(arglist__13947);
var classes = cljs.core.first(arglist__13947);
var more_classes = cljs.core.rest(arglist__13947);
return G__13925__delegate(elem,classes,more_classes);
});
G__13925.cljs$core$IFn$_invoke$arity$variadic = G__13925__delegate;
return G__13925;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
/**
* Remove `c` from `elem` class list
* @param {...*} var_args
*/
dommy.core.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,c){var c__$1 = dommy.utils.as_str.call(null,c);var temp__4124__auto___13956 = elem.classList;if(cljs.core.truth_(temp__4124__auto___13956))
{var class_list_13957 = temp__4124__auto___13956;class_list_13957.remove(c__$1);
} else
{var class_name_13958 = dommy.core.class$.call(null,elem);var new_class_name_13959 = dommy.utils.remove_class_str.call(null,class_name_13958,c__$1);if((class_name_13958 === new_class_name_13959))
{} else
{dommy.core.set_class_BANG_.call(null,elem,new_class_name_13959);
}
}
return elem;
});
var remove_class_BANG___3 = (function() { 
var G__13960__delegate = function (elem,class$,classes){var seq__13952 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__13953 = null;var count__13954 = (0);var i__13955 = (0);while(true){
if((i__13955 < count__13954))
{var c = cljs.core._nth.call(null,chunk__13953,i__13955);remove_class_BANG_.call(null,elem,c);
{
var G__13961 = seq__13952;
var G__13962 = chunk__13953;
var G__13963 = count__13954;
var G__13964 = (i__13955 + (1));
seq__13952 = G__13961;
chunk__13953 = G__13962;
count__13954 = G__13963;
i__13955 = G__13964;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__13952);if(temp__4126__auto__)
{var seq__13952__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13952__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__13952__$1);{
var G__13965 = cljs.core.chunk_rest.call(null,seq__13952__$1);
var G__13966 = c__4410__auto__;
var G__13967 = cljs.core.count.call(null,c__4410__auto__);
var G__13968 = (0);
seq__13952 = G__13965;
chunk__13953 = G__13966;
count__13954 = G__13967;
i__13955 = G__13968;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__13952__$1);remove_class_BANG_.call(null,elem,c);
{
var G__13969 = cljs.core.next.call(null,seq__13952__$1);
var G__13970 = null;
var G__13971 = (0);
var G__13972 = (0);
seq__13952 = G__13969;
chunk__13953 = G__13970;
count__13954 = G__13971;
i__13955 = G__13972;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var G__13960 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__13960__delegate.call(this,elem,class$,classes);};
G__13960.cljs$lang$maxFixedArity = 2;
G__13960.cljs$lang$applyTo = (function (arglist__13973){
var elem = cljs.core.first(arglist__13973);
arglist__13973 = cljs.core.next(arglist__13973);
var class$ = cljs.core.first(arglist__13973);
var classes = cljs.core.rest(arglist__13973);
return G__13960__delegate(elem,class$,classes);
});
G__13960.cljs$core$IFn$_invoke$arity$variadic = G__13960__delegate;
return G__13960;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.core.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,c){var c__$1 = dommy.utils.as_str.call(null,c);var temp__4124__auto___13974 = elem.classList;if(cljs.core.truth_(temp__4124__auto___13974))
{var class_list_13975 = temp__4124__auto___13974;class_list_13975.toggle(c__$1);
} else
{toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}
return elem;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){if(add_QMARK_)
{dommy.core.add_class_BANG_.call(null,elem,class$);
} else
{dommy.core.remove_class_BANG_.call(null,elem,class$);
}
return elem;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
/**
* Display or hide the given `elem` (using display: none).
* Takes an optional boolean `show?`
*/
dommy.core.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){return toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});
var toggle_BANG___2 = (function (elem,show_QMARK_){return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.core.hide_BANG_ = (function hide_BANG_(elem){return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function show_BANG_(elem){return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));if((window.innerHeight < (top + elem.offsetHeight)))
{return elem.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
dommy.core.create_element = (function() {
var create_element = null;
var create_element__1 = (function (tag){return document.createElement(dommy.utils.as_str.call(null,tag));
});
var create_element__2 = (function (tag_ns,tag){return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});
create_element = function(tag_ns,tag){
switch(arguments.length){
case 1:
return create_element__1.call(this,tag_ns);
case 2:
return create_element__2.call(this,tag_ns,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_element.cljs$core$IFn$_invoke$arity$1 = create_element__1;
create_element.cljs$core$IFn$_invoke$arity$2 = create_element__2;
return create_element;
})()
;
dommy.core.create_text_node = (function create_text_node(text){return document.createTextNode(text);
});
/**
* Clears all children from `elem`
*/
dommy.core.clear_BANG_ = (function clear_BANG_(elem){return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
* Append `child` to `parent`
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){var G__13981 = parent;G__13981.appendChild(child);
return G__13981;
});
var append_BANG___3 = (function() { 
var G__13986__delegate = function (parent,child,more_children){var seq__13982_13987 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__13983_13988 = null;var count__13984_13989 = (0);var i__13985_13990 = (0);while(true){
if((i__13985_13990 < count__13984_13989))
{var c_13991 = cljs.core._nth.call(null,chunk__13983_13988,i__13985_13990);append_BANG_.call(null,parent,c_13991);
{
var G__13992 = seq__13982_13987;
var G__13993 = chunk__13983_13988;
var G__13994 = count__13984_13989;
var G__13995 = (i__13985_13990 + (1));
seq__13982_13987 = G__13992;
chunk__13983_13988 = G__13993;
count__13984_13989 = G__13994;
i__13985_13990 = G__13995;
continue;
}
} else
{var temp__4126__auto___13996 = cljs.core.seq.call(null,seq__13982_13987);if(temp__4126__auto___13996)
{var seq__13982_13997__$1 = temp__4126__auto___13996;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13982_13997__$1))
{var c__4410__auto___13998 = cljs.core.chunk_first.call(null,seq__13982_13997__$1);{
var G__13999 = cljs.core.chunk_rest.call(null,seq__13982_13997__$1);
var G__14000 = c__4410__auto___13998;
var G__14001 = cljs.core.count.call(null,c__4410__auto___13998);
var G__14002 = (0);
seq__13982_13987 = G__13999;
chunk__13983_13988 = G__14000;
count__13984_13989 = G__14001;
i__13985_13990 = G__14002;
continue;
}
} else
{var c_14003 = cljs.core.first.call(null,seq__13982_13997__$1);append_BANG_.call(null,parent,c_14003);
{
var G__14004 = cljs.core.next.call(null,seq__13982_13997__$1);
var G__14005 = null;
var G__14006 = (0);
var G__14007 = (0);
seq__13982_13987 = G__14004;
chunk__13983_13988 = G__14005;
count__13984_13989 = G__14006;
i__13985_13990 = G__14007;
continue;
}
}
} else
{}
}
break;
}
return parent;
};
var G__13986 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__13986__delegate.call(this,parent,child,more_children);};
G__13986.cljs$lang$maxFixedArity = 2;
G__13986.cljs$lang$applyTo = (function (arglist__14008){
var parent = cljs.core.first(arglist__14008);
arglist__14008 = cljs.core.next(arglist__14008);
var child = cljs.core.first(arglist__14008);
var more_children = cljs.core.rest(arglist__14008);
return G__13986__delegate(parent,child,more_children);
});
G__13986.cljs$core$IFn$_invoke$arity$variadic = G__13986__delegate;
return G__13986;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$core$IFn$_invoke$arity$2 = append_BANG___2;
append_BANG_.cljs$core$IFn$_invoke$arity$variadic = append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return append_BANG_;
})()
;
/**
* Prepend `child` to `parent`
* @param {...*} var_args
*/
dommy.core.prepend_BANG_ = (function() {
var prepend_BANG_ = null;
var prepend_BANG___2 = (function (parent,child){var G__14014 = parent;G__14014.insertBefore(child,parent.firstChild);
return G__14014;
});
var prepend_BANG___3 = (function() { 
var G__14019__delegate = function (parent,child,more_children){var seq__14015_14020 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__14016_14021 = null;var count__14017_14022 = (0);var i__14018_14023 = (0);while(true){
if((i__14018_14023 < count__14017_14022))
{var c_14024 = cljs.core._nth.call(null,chunk__14016_14021,i__14018_14023);prepend_BANG_.call(null,parent,c_14024);
{
var G__14025 = seq__14015_14020;
var G__14026 = chunk__14016_14021;
var G__14027 = count__14017_14022;
var G__14028 = (i__14018_14023 + (1));
seq__14015_14020 = G__14025;
chunk__14016_14021 = G__14026;
count__14017_14022 = G__14027;
i__14018_14023 = G__14028;
continue;
}
} else
{var temp__4126__auto___14029 = cljs.core.seq.call(null,seq__14015_14020);if(temp__4126__auto___14029)
{var seq__14015_14030__$1 = temp__4126__auto___14029;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14015_14030__$1))
{var c__4410__auto___14031 = cljs.core.chunk_first.call(null,seq__14015_14030__$1);{
var G__14032 = cljs.core.chunk_rest.call(null,seq__14015_14030__$1);
var G__14033 = c__4410__auto___14031;
var G__14034 = cljs.core.count.call(null,c__4410__auto___14031);
var G__14035 = (0);
seq__14015_14020 = G__14032;
chunk__14016_14021 = G__14033;
count__14017_14022 = G__14034;
i__14018_14023 = G__14035;
continue;
}
} else
{var c_14036 = cljs.core.first.call(null,seq__14015_14030__$1);prepend_BANG_.call(null,parent,c_14036);
{
var G__14037 = cljs.core.next.call(null,seq__14015_14030__$1);
var G__14038 = null;
var G__14039 = (0);
var G__14040 = (0);
seq__14015_14020 = G__14037;
chunk__14016_14021 = G__14038;
count__14017_14022 = G__14039;
i__14018_14023 = G__14040;
continue;
}
}
} else
{}
}
break;
}
return parent;
};
var G__14019 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14019__delegate.call(this,parent,child,more_children);};
G__14019.cljs$lang$maxFixedArity = 2;
G__14019.cljs$lang$applyTo = (function (arglist__14041){
var parent = cljs.core.first(arglist__14041);
arglist__14041 = cljs.core.next(arglist__14041);
var child = cljs.core.first(arglist__14041);
var more_children = cljs.core.rest(arglist__14041);
return G__14019__delegate(parent,child,more_children);
});
G__14019.cljs$core$IFn$_invoke$arity$variadic = G__14019__delegate;
return G__14019;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return prepend_BANG_;
})()
;
/**
* Insert `elem` before `other`, `other` must have a parent
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){var p = dommy.core.parent.call(null,other);if(cljs.core.truth_(p))
{} else
{throw (new Error(("Assert failed: Target element must have a parent\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null))))));
}
p.insertBefore(elem,other);
return elem;
});
/**
* Insert `elem` after `other`, `other` must have a parent
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var temp__4124__auto___14042 = other.nextSibling;if(cljs.core.truth_(temp__4124__auto___14042))
{var next_14043 = temp__4124__auto___14042;dommy.core.insert_before_BANG_.call(null,elem,next_14043);
} else
{dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}
return elem;
});
/**
* Replace `elem` with `new`, return `new`
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){var p = dommy.core.parent.call(null,elem);if(cljs.core.truth_(p))
{} else
{throw (new Error(("Assert failed: Target element must have a parent\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null))))));
}
p.replaceChild(new$,elem);
return new$;
});
/**
* Replace children of `elem` with `child`
*/
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(p,child){return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
* Remove `elem` from `parent`, return `parent`
*/
dommy.core.remove_BANG_ = (function() {
var remove_BANG_ = null;
var remove_BANG___1 = (function (elem){var p = dommy.core.parent.call(null,elem);if(cljs.core.truth_(p))
{} else
{throw (new Error(("Assert failed: Target element must have a parent\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null))))));
}
return remove_BANG_.call(null,p,elem);
});
var remove_BANG___2 = (function (p,elem){var G__14045 = p;G__14045.removeChild(elem);
return G__14045;
});
remove_BANG_ = function(p,elem){
switch(arguments.length){
case 1:
return remove_BANG___1.call(this,p);
case 2:
return remove_BANG___2.call(this,p,elem);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_BANG_.cljs$core$IFn$_invoke$arity$1 = remove_BANG___1;
remove_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_BANG___2;
return remove_BANG_;
})()
;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__14046){var vec__14047 = p__14046;var special_mouse_event = cljs.core.nth.call(null,vec__14047,(0),null);var real_mouse_event = cljs.core.nth.call(null,vec__14047,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__14047,special_mouse_event,real_mouse_event){
return (function (f){return ((function (vec__14047,special_mouse_event,real_mouse_event){
return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3640__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__3628__auto__ = related_target;if(cljs.core.truth_(and__3628__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__3628__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
;})(vec__14047,special_mouse_event,real_mouse_event))
});})(vec__14047,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,elem,event.target,selector);if(cljs.core.truth_((function (){var and__3628__auto__ = selected_target;if(cljs.core.truth_(and__3628__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else
{return and__3628__auto__;
}
})()))
{event.selectedTarget = selected_target;
return f.call(null,event);
} else
{return null;
}
});
});
/**
* Returns a nested map of event listeners on `elem`
*/
dommy.core.event_listeners = (function event_listeners(elem){var or__3640__auto__ = elem.dommyEventListeners;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){var elem__$1 = elem;return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__14048){
var elem = cljs.core.first(arglist__14048);
arglist__14048 = cljs.core.next(arglist__14048);
var f = cljs.core.first(arglist__14048);
var args = cljs.core.rest(arglist__14048);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
* Adds `f` as a listener for events of type `event-type` on
* `elem-sel`, which must either be a DOM node, or a sequence
* whose first item is a DOM node.
* 
* In other words, the call to `listen!` can take two forms:
* 
* If `elem-sel` is a DOM node, i.e., you're doing something like:
* 
* (listen! elem :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on the `elem`.
* 
* If `elem-sel` is a sequence:
* 
* (listen! [elem :.selector.for :.some.descendants] :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on descendants of `elem` that match the selector
* 
* Also accepts any number of event-type and handler pairs for setting
* multiple listeners at once:
* 
* (listen! some-elem :click click-handler :hover hover-handler)
* @param {...*} var_args
*/
dommy.core.listen_BANG_ = (function() { 
var listen_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__14072_14095 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_14096 = cljs.core.nth.call(null,vec__14072_14095,(0),null);var selector_14097 = cljs.core.nth.call(null,vec__14072_14095,(1),null);var seq__14073_14098 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__14080_14099 = null;var count__14081_14100 = (0);var i__14082_14101 = (0);while(true){
if((i__14082_14101 < count__14081_14100))
{var vec__14089_14102 = cljs.core._nth.call(null,chunk__14080_14099,i__14082_14101);var orig_type_14103 = cljs.core.nth.call(null,vec__14089_14102,(0),null);var f_14104 = cljs.core.nth.call(null,vec__14089_14102,(1),null);var seq__14083_14105 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14103,new cljs.core.PersistentArrayMap.fromArray([orig_type_14103,cljs.core.identity], true, false)));var chunk__14085_14106 = null;var count__14086_14107 = (0);var i__14087_14108 = (0);while(true){
if((i__14087_14108 < count__14086_14107))
{var vec__14090_14109 = cljs.core._nth.call(null,chunk__14085_14106,i__14087_14108);var actual_type_14110 = cljs.core.nth.call(null,vec__14090_14109,(0),null);var factory_14111 = cljs.core.nth.call(null,vec__14090_14109,(1),null);var canonical_f_14112 = (cljs.core.truth_(selector_14097)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14096,selector_14097):cljs.core.identity).call(null,factory_14111.call(null,f_14104));dommy.core.update_event_listeners_BANG_.call(null,elem_14096,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14097,actual_type_14110,f_14104], null),canonical_f_14112);
if(cljs.core.truth_(elem_14096.addEventListener))
{elem_14096.addEventListener(cljs.core.name.call(null,actual_type_14110),canonical_f_14112);
} else
{elem_14096.attachEvent(cljs.core.name.call(null,actual_type_14110),canonical_f_14112);
}
{
var G__14113 = seq__14083_14105;
var G__14114 = chunk__14085_14106;
var G__14115 = count__14086_14107;
var G__14116 = (i__14087_14108 + (1));
seq__14083_14105 = G__14113;
chunk__14085_14106 = G__14114;
count__14086_14107 = G__14115;
i__14087_14108 = G__14116;
continue;
}
} else
{var temp__4126__auto___14117 = cljs.core.seq.call(null,seq__14083_14105);if(temp__4126__auto___14117)
{var seq__14083_14118__$1 = temp__4126__auto___14117;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14083_14118__$1))
{var c__4410__auto___14119 = cljs.core.chunk_first.call(null,seq__14083_14118__$1);{
var G__14120 = cljs.core.chunk_rest.call(null,seq__14083_14118__$1);
var G__14121 = c__4410__auto___14119;
var G__14122 = cljs.core.count.call(null,c__4410__auto___14119);
var G__14123 = (0);
seq__14083_14105 = G__14120;
chunk__14085_14106 = G__14121;
count__14086_14107 = G__14122;
i__14087_14108 = G__14123;
continue;
}
} else
{var vec__14091_14124 = cljs.core.first.call(null,seq__14083_14118__$1);var actual_type_14125 = cljs.core.nth.call(null,vec__14091_14124,(0),null);var factory_14126 = cljs.core.nth.call(null,vec__14091_14124,(1),null);var canonical_f_14127 = (cljs.core.truth_(selector_14097)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14096,selector_14097):cljs.core.identity).call(null,factory_14126.call(null,f_14104));dommy.core.update_event_listeners_BANG_.call(null,elem_14096,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14097,actual_type_14125,f_14104], null),canonical_f_14127);
if(cljs.core.truth_(elem_14096.addEventListener))
{elem_14096.addEventListener(cljs.core.name.call(null,actual_type_14125),canonical_f_14127);
} else
{elem_14096.attachEvent(cljs.core.name.call(null,actual_type_14125),canonical_f_14127);
}
{
var G__14128 = cljs.core.next.call(null,seq__14083_14118__$1);
var G__14129 = null;
var G__14130 = (0);
var G__14131 = (0);
seq__14083_14105 = G__14128;
chunk__14085_14106 = G__14129;
count__14086_14107 = G__14130;
i__14087_14108 = G__14131;
continue;
}
}
} else
{}
}
break;
}
{
var G__14132 = seq__14073_14098;
var G__14133 = chunk__14080_14099;
var G__14134 = count__14081_14100;
var G__14135 = (i__14082_14101 + (1));
seq__14073_14098 = G__14132;
chunk__14080_14099 = G__14133;
count__14081_14100 = G__14134;
i__14082_14101 = G__14135;
continue;
}
} else
{var temp__4126__auto___14136 = cljs.core.seq.call(null,seq__14073_14098);if(temp__4126__auto___14136)
{var seq__14073_14137__$1 = temp__4126__auto___14136;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14073_14137__$1))
{var c__4410__auto___14138 = cljs.core.chunk_first.call(null,seq__14073_14137__$1);{
var G__14139 = cljs.core.chunk_rest.call(null,seq__14073_14137__$1);
var G__14140 = c__4410__auto___14138;
var G__14141 = cljs.core.count.call(null,c__4410__auto___14138);
var G__14142 = (0);
seq__14073_14098 = G__14139;
chunk__14080_14099 = G__14140;
count__14081_14100 = G__14141;
i__14082_14101 = G__14142;
continue;
}
} else
{var vec__14092_14143 = cljs.core.first.call(null,seq__14073_14137__$1);var orig_type_14144 = cljs.core.nth.call(null,vec__14092_14143,(0),null);var f_14145 = cljs.core.nth.call(null,vec__14092_14143,(1),null);var seq__14074_14146 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14144,new cljs.core.PersistentArrayMap.fromArray([orig_type_14144,cljs.core.identity], true, false)));var chunk__14076_14147 = null;var count__14077_14148 = (0);var i__14078_14149 = (0);while(true){
if((i__14078_14149 < count__14077_14148))
{var vec__14093_14150 = cljs.core._nth.call(null,chunk__14076_14147,i__14078_14149);var actual_type_14151 = cljs.core.nth.call(null,vec__14093_14150,(0),null);var factory_14152 = cljs.core.nth.call(null,vec__14093_14150,(1),null);var canonical_f_14153 = (cljs.core.truth_(selector_14097)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14096,selector_14097):cljs.core.identity).call(null,factory_14152.call(null,f_14145));dommy.core.update_event_listeners_BANG_.call(null,elem_14096,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14097,actual_type_14151,f_14145], null),canonical_f_14153);
if(cljs.core.truth_(elem_14096.addEventListener))
{elem_14096.addEventListener(cljs.core.name.call(null,actual_type_14151),canonical_f_14153);
} else
{elem_14096.attachEvent(cljs.core.name.call(null,actual_type_14151),canonical_f_14153);
}
{
var G__14154 = seq__14074_14146;
var G__14155 = chunk__14076_14147;
var G__14156 = count__14077_14148;
var G__14157 = (i__14078_14149 + (1));
seq__14074_14146 = G__14154;
chunk__14076_14147 = G__14155;
count__14077_14148 = G__14156;
i__14078_14149 = G__14157;
continue;
}
} else
{var temp__4126__auto___14158__$1 = cljs.core.seq.call(null,seq__14074_14146);if(temp__4126__auto___14158__$1)
{var seq__14074_14159__$1 = temp__4126__auto___14158__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14074_14159__$1))
{var c__4410__auto___14160 = cljs.core.chunk_first.call(null,seq__14074_14159__$1);{
var G__14161 = cljs.core.chunk_rest.call(null,seq__14074_14159__$1);
var G__14162 = c__4410__auto___14160;
var G__14163 = cljs.core.count.call(null,c__4410__auto___14160);
var G__14164 = (0);
seq__14074_14146 = G__14161;
chunk__14076_14147 = G__14162;
count__14077_14148 = G__14163;
i__14078_14149 = G__14164;
continue;
}
} else
{var vec__14094_14165 = cljs.core.first.call(null,seq__14074_14159__$1);var actual_type_14166 = cljs.core.nth.call(null,vec__14094_14165,(0),null);var factory_14167 = cljs.core.nth.call(null,vec__14094_14165,(1),null);var canonical_f_14168 = (cljs.core.truth_(selector_14097)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14096,selector_14097):cljs.core.identity).call(null,factory_14167.call(null,f_14145));dommy.core.update_event_listeners_BANG_.call(null,elem_14096,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14097,actual_type_14166,f_14145], null),canonical_f_14168);
if(cljs.core.truth_(elem_14096.addEventListener))
{elem_14096.addEventListener(cljs.core.name.call(null,actual_type_14166),canonical_f_14168);
} else
{elem_14096.attachEvent(cljs.core.name.call(null,actual_type_14166),canonical_f_14168);
}
{
var G__14169 = cljs.core.next.call(null,seq__14074_14159__$1);
var G__14170 = null;
var G__14171 = (0);
var G__14172 = (0);
seq__14074_14146 = G__14169;
chunk__14076_14147 = G__14170;
count__14077_14148 = G__14171;
i__14078_14149 = G__14172;
continue;
}
}
} else
{}
}
break;
}
{
var G__14173 = cljs.core.next.call(null,seq__14073_14137__$1);
var G__14174 = null;
var G__14175 = (0);
var G__14176 = (0);
seq__14073_14098 = G__14173;
chunk__14080_14099 = G__14174;
count__14081_14100 = G__14175;
i__14082_14101 = G__14176;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__14177){
var elem_sel = cljs.core.first(arglist__14177);
var type_fs = cljs.core.rest(arglist__14177);
return listen_BANG___delegate(elem_sel,type_fs);
});
listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_BANG___delegate;
return listen_BANG_;
})()
;
/**
* Removes event listener for the element defined in `elem-sel`,
* which is the same format as listen!.
* 
* The following forms are allowed, and will remove all handlers
* that match the parameters passed in:
* 
* (unlisten! [elem :.selector] :click event-listener)
* 
* (unlisten! [elem :.selector]
* :click event-listener
* :mouseover other-event-listener)
* @param {...*} var_args
*/
dommy.core.unlisten_BANG_ = (function() { 
var unlisten_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__14201_14224 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_14225 = cljs.core.nth.call(null,vec__14201_14224,(0),null);var selector_14226 = cljs.core.nth.call(null,vec__14201_14224,(1),null);var seq__14202_14227 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__14209_14228 = null;var count__14210_14229 = (0);var i__14211_14230 = (0);while(true){
if((i__14211_14230 < count__14210_14229))
{var vec__14218_14231 = cljs.core._nth.call(null,chunk__14209_14228,i__14211_14230);var orig_type_14232 = cljs.core.nth.call(null,vec__14218_14231,(0),null);var f_14233 = cljs.core.nth.call(null,vec__14218_14231,(1),null);var seq__14212_14234 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14232,new cljs.core.PersistentArrayMap.fromArray([orig_type_14232,cljs.core.identity], true, false)));var chunk__14214_14235 = null;var count__14215_14236 = (0);var i__14216_14237 = (0);while(true){
if((i__14216_14237 < count__14215_14236))
{var vec__14219_14238 = cljs.core._nth.call(null,chunk__14214_14235,i__14216_14237);var actual_type_14239 = cljs.core.nth.call(null,vec__14219_14238,(0),null);var __14240 = cljs.core.nth.call(null,vec__14219_14238,(1),null);var keys_14241 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14226,actual_type_14239,f_14233], null);var canonical_f_14242 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14225),keys_14241);dommy.core.update_event_listeners_BANG_.call(null,elem_14225,dommy.utils.dissoc_in,keys_14241);
if(cljs.core.truth_(elem_14225.removeEventListener))
{elem_14225.removeEventListener(cljs.core.name.call(null,actual_type_14239),canonical_f_14242);
} else
{elem_14225.detachEvent(cljs.core.name.call(null,actual_type_14239),canonical_f_14242);
}
{
var G__14243 = seq__14212_14234;
var G__14244 = chunk__14214_14235;
var G__14245 = count__14215_14236;
var G__14246 = (i__14216_14237 + (1));
seq__14212_14234 = G__14243;
chunk__14214_14235 = G__14244;
count__14215_14236 = G__14245;
i__14216_14237 = G__14246;
continue;
}
} else
{var temp__4126__auto___14247 = cljs.core.seq.call(null,seq__14212_14234);if(temp__4126__auto___14247)
{var seq__14212_14248__$1 = temp__4126__auto___14247;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14212_14248__$1))
{var c__4410__auto___14249 = cljs.core.chunk_first.call(null,seq__14212_14248__$1);{
var G__14250 = cljs.core.chunk_rest.call(null,seq__14212_14248__$1);
var G__14251 = c__4410__auto___14249;
var G__14252 = cljs.core.count.call(null,c__4410__auto___14249);
var G__14253 = (0);
seq__14212_14234 = G__14250;
chunk__14214_14235 = G__14251;
count__14215_14236 = G__14252;
i__14216_14237 = G__14253;
continue;
}
} else
{var vec__14220_14254 = cljs.core.first.call(null,seq__14212_14248__$1);var actual_type_14255 = cljs.core.nth.call(null,vec__14220_14254,(0),null);var __14256 = cljs.core.nth.call(null,vec__14220_14254,(1),null);var keys_14257 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14226,actual_type_14255,f_14233], null);var canonical_f_14258 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14225),keys_14257);dommy.core.update_event_listeners_BANG_.call(null,elem_14225,dommy.utils.dissoc_in,keys_14257);
if(cljs.core.truth_(elem_14225.removeEventListener))
{elem_14225.removeEventListener(cljs.core.name.call(null,actual_type_14255),canonical_f_14258);
} else
{elem_14225.detachEvent(cljs.core.name.call(null,actual_type_14255),canonical_f_14258);
}
{
var G__14259 = cljs.core.next.call(null,seq__14212_14248__$1);
var G__14260 = null;
var G__14261 = (0);
var G__14262 = (0);
seq__14212_14234 = G__14259;
chunk__14214_14235 = G__14260;
count__14215_14236 = G__14261;
i__14216_14237 = G__14262;
continue;
}
}
} else
{}
}
break;
}
{
var G__14263 = seq__14202_14227;
var G__14264 = chunk__14209_14228;
var G__14265 = count__14210_14229;
var G__14266 = (i__14211_14230 + (1));
seq__14202_14227 = G__14263;
chunk__14209_14228 = G__14264;
count__14210_14229 = G__14265;
i__14211_14230 = G__14266;
continue;
}
} else
{var temp__4126__auto___14267 = cljs.core.seq.call(null,seq__14202_14227);if(temp__4126__auto___14267)
{var seq__14202_14268__$1 = temp__4126__auto___14267;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14202_14268__$1))
{var c__4410__auto___14269 = cljs.core.chunk_first.call(null,seq__14202_14268__$1);{
var G__14270 = cljs.core.chunk_rest.call(null,seq__14202_14268__$1);
var G__14271 = c__4410__auto___14269;
var G__14272 = cljs.core.count.call(null,c__4410__auto___14269);
var G__14273 = (0);
seq__14202_14227 = G__14270;
chunk__14209_14228 = G__14271;
count__14210_14229 = G__14272;
i__14211_14230 = G__14273;
continue;
}
} else
{var vec__14221_14274 = cljs.core.first.call(null,seq__14202_14268__$1);var orig_type_14275 = cljs.core.nth.call(null,vec__14221_14274,(0),null);var f_14276 = cljs.core.nth.call(null,vec__14221_14274,(1),null);var seq__14203_14277 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14275,new cljs.core.PersistentArrayMap.fromArray([orig_type_14275,cljs.core.identity], true, false)));var chunk__14205_14278 = null;var count__14206_14279 = (0);var i__14207_14280 = (0);while(true){
if((i__14207_14280 < count__14206_14279))
{var vec__14222_14281 = cljs.core._nth.call(null,chunk__14205_14278,i__14207_14280);var actual_type_14282 = cljs.core.nth.call(null,vec__14222_14281,(0),null);var __14283 = cljs.core.nth.call(null,vec__14222_14281,(1),null);var keys_14284 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14226,actual_type_14282,f_14276], null);var canonical_f_14285 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14225),keys_14284);dommy.core.update_event_listeners_BANG_.call(null,elem_14225,dommy.utils.dissoc_in,keys_14284);
if(cljs.core.truth_(elem_14225.removeEventListener))
{elem_14225.removeEventListener(cljs.core.name.call(null,actual_type_14282),canonical_f_14285);
} else
{elem_14225.detachEvent(cljs.core.name.call(null,actual_type_14282),canonical_f_14285);
}
{
var G__14286 = seq__14203_14277;
var G__14287 = chunk__14205_14278;
var G__14288 = count__14206_14279;
var G__14289 = (i__14207_14280 + (1));
seq__14203_14277 = G__14286;
chunk__14205_14278 = G__14287;
count__14206_14279 = G__14288;
i__14207_14280 = G__14289;
continue;
}
} else
{var temp__4126__auto___14290__$1 = cljs.core.seq.call(null,seq__14203_14277);if(temp__4126__auto___14290__$1)
{var seq__14203_14291__$1 = temp__4126__auto___14290__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14203_14291__$1))
{var c__4410__auto___14292 = cljs.core.chunk_first.call(null,seq__14203_14291__$1);{
var G__14293 = cljs.core.chunk_rest.call(null,seq__14203_14291__$1);
var G__14294 = c__4410__auto___14292;
var G__14295 = cljs.core.count.call(null,c__4410__auto___14292);
var G__14296 = (0);
seq__14203_14277 = G__14293;
chunk__14205_14278 = G__14294;
count__14206_14279 = G__14295;
i__14207_14280 = G__14296;
continue;
}
} else
{var vec__14223_14297 = cljs.core.first.call(null,seq__14203_14291__$1);var actual_type_14298 = cljs.core.nth.call(null,vec__14223_14297,(0),null);var __14299 = cljs.core.nth.call(null,vec__14223_14297,(1),null);var keys_14300 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14226,actual_type_14298,f_14276], null);var canonical_f_14301 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14225),keys_14300);dommy.core.update_event_listeners_BANG_.call(null,elem_14225,dommy.utils.dissoc_in,keys_14300);
if(cljs.core.truth_(elem_14225.removeEventListener))
{elem_14225.removeEventListener(cljs.core.name.call(null,actual_type_14298),canonical_f_14301);
} else
{elem_14225.detachEvent(cljs.core.name.call(null,actual_type_14298),canonical_f_14301);
}
{
var G__14302 = cljs.core.next.call(null,seq__14203_14291__$1);
var G__14303 = null;
var G__14304 = (0);
var G__14305 = (0);
seq__14203_14277 = G__14302;
chunk__14205_14278 = G__14303;
count__14206_14279 = G__14304;
i__14207_14280 = G__14305;
continue;
}
}
} else
{}
}
break;
}
{
var G__14306 = cljs.core.next.call(null,seq__14202_14268__$1);
var G__14307 = null;
var G__14308 = (0);
var G__14309 = (0);
seq__14202_14227 = G__14306;
chunk__14209_14228 = G__14307;
count__14210_14229 = G__14308;
i__14211_14230 = G__14309;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__14310){
var elem_sel = cljs.core.first(arglist__14310);
var type_fs = cljs.core.rest(arglist__14310);
return unlisten_BANG___delegate(elem_sel,type_fs);
});
unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* Behaves like `listen!`, but removes the listener after the first event occurs.
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__14318_14325 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_14326 = cljs.core.nth.call(null,vec__14318_14325,(0),null);var selector_14327 = cljs.core.nth.call(null,vec__14318_14325,(1),null);var seq__14319_14328 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__14320_14329 = null;var count__14321_14330 = (0);var i__14322_14331 = (0);while(true){
if((i__14322_14331 < count__14321_14330))
{var vec__14323_14332 = cljs.core._nth.call(null,chunk__14320_14329,i__14322_14331);var type_14333 = cljs.core.nth.call(null,vec__14323_14332,(0),null);var f_14334 = cljs.core.nth.call(null,vec__14323_14332,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_14333,((function (seq__14319_14328,chunk__14320_14329,count__14321_14330,i__14322_14331,vec__14323_14332,type_14333,f_14334,vec__14318_14325,elem_14326,selector_14327){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_14333,this_fn);
return f_14334.call(null,e);
});})(seq__14319_14328,chunk__14320_14329,count__14321_14330,i__14322_14331,vec__14323_14332,type_14333,f_14334,vec__14318_14325,elem_14326,selector_14327))
);
{
var G__14335 = seq__14319_14328;
var G__14336 = chunk__14320_14329;
var G__14337 = count__14321_14330;
var G__14338 = (i__14322_14331 + (1));
seq__14319_14328 = G__14335;
chunk__14320_14329 = G__14336;
count__14321_14330 = G__14337;
i__14322_14331 = G__14338;
continue;
}
} else
{var temp__4126__auto___14339 = cljs.core.seq.call(null,seq__14319_14328);if(temp__4126__auto___14339)
{var seq__14319_14340__$1 = temp__4126__auto___14339;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14319_14340__$1))
{var c__4410__auto___14341 = cljs.core.chunk_first.call(null,seq__14319_14340__$1);{
var G__14342 = cljs.core.chunk_rest.call(null,seq__14319_14340__$1);
var G__14343 = c__4410__auto___14341;
var G__14344 = cljs.core.count.call(null,c__4410__auto___14341);
var G__14345 = (0);
seq__14319_14328 = G__14342;
chunk__14320_14329 = G__14343;
count__14321_14330 = G__14344;
i__14322_14331 = G__14345;
continue;
}
} else
{var vec__14324_14346 = cljs.core.first.call(null,seq__14319_14340__$1);var type_14347 = cljs.core.nth.call(null,vec__14324_14346,(0),null);var f_14348 = cljs.core.nth.call(null,vec__14324_14346,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_14347,((function (seq__14319_14328,chunk__14320_14329,count__14321_14330,i__14322_14331,vec__14324_14346,type_14347,f_14348,seq__14319_14340__$1,temp__4126__auto___14339,vec__14318_14325,elem_14326,selector_14327){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_14347,this_fn);
return f_14348.call(null,e);
});})(seq__14319_14328,chunk__14320_14329,count__14321_14330,i__14322_14331,vec__14324_14346,type_14347,f_14348,seq__14319_14340__$1,temp__4126__auto___14339,vec__14318_14325,elem_14326,selector_14327))
);
{
var G__14349 = cljs.core.next.call(null,seq__14319_14340__$1);
var G__14350 = null;
var G__14351 = (0);
var G__14352 = (0);
seq__14319_14328 = G__14349;
chunk__14320_14329 = G__14350;
count__14321_14330 = G__14351;
i__14322_14331 = G__14352;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__14353){
var elem_sel = cljs.core.first(arglist__14353);
var type_fs = cljs.core.rest(arglist__14353);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;

//# sourceMappingURL=core.js.map