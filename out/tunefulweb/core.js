// Compiled by ClojureScript 0.0-2371
goog.provide('tunefulweb.core');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('cljs.core.async');
goog.require('goog.Uri');
goog.require('crate.core');
goog.require('clojure.browser.repl');
goog.require('goog.net.Jsonp');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('jayq.core');
goog.require('crate.core');
goog.require('clojure.string');
goog.require('dommy.core');
goog.require('clojure.string');
goog.require('clojure.browser.repl');
goog.require('goog.events');
goog.require('dommy.core');
cljs.core.enable_console_print_BANG_.call(null);
/**
* State of the app. Currently we maintain the locale and a
* list of search terms entered by the users.
*/
tunefulweb.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"locale","locale",-2115712697),null,new cljs.core.Keyword(null,"terms","terms",-1556977978),cljs.core.PersistentVector.EMPTY], null));
/**
* Currency formats, used by `format-price`.
*/
tunefulweb.core.currencies = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"GB","GB",1529633027),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u00A3",(2)], null),new cljs.core.Keyword(null,"US","US",-389850479),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["$",(2)], null)], null);
var c__5894__auto___9318 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5894__auto___9318){
return (function (){var f__5895__auto__ = (function (){var switch__5879__auto__ = ((function (c__5894__auto___9318){
return (function (state_9303){var state_val_9304 = (state_9303[(1)]);if((state_val_9304 === (5)))
{var inst_9293 = (state_9303[(2)]);var inst_9294 = cljs.core.get.call(null,inst_9293,new cljs.core.Keyword(null,"X-Appengine-Country","X-Appengine-Country",-1561761835));var inst_9295 = cljs.core.swap_BANG_.call(null,tunefulweb.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"locale","locale",-2115712697),inst_9294);var inst_9296 = document.getElementById("search");var inst_9297 = dommy.core.remove_attr_BANG_.call(null,inst_9296,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));var inst_9298 = cljs.core.deref.call(null,tunefulweb.core.state);var inst_9299 = new cljs.core.Keyword(null,"locale","locale",-2115712697).cljs$core$IFn$_invoke$arity$1(inst_9298);var inst_9300 = ("search "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_9299));var inst_9301 = dommy.core.set_text_BANG_.call(null,inst_9297,inst_9300);var state_9303__$1 = (function (){var statearr_9305 = state_9303;(statearr_9305[(7)] = inst_9295);
return statearr_9305;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9303__$1,inst_9301);
} else
{if((state_val_9304 === (4)))
{var inst_9287 = (state_9303[(8)]);var state_9303__$1 = state_9303;var statearr_9306_9319 = state_9303__$1;(statearr_9306_9319[(2)] = inst_9287);
(statearr_9306_9319[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9304 === (3)))
{var inst_9287 = (state_9303[(8)]);var inst_9290 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9287);var state_9303__$1 = state_9303;var statearr_9307_9320 = state_9303__$1;(statearr_9307_9320[(2)] = inst_9290);
(statearr_9307_9320[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9304 === (2)))
{var inst_9287 = (state_9303[(8)]);var inst_9286 = (state_9303[(2)]);var inst_9287__$1 = cljs.core.js__GT_clj.call(null,inst_9286,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);var inst_9288 = cljs.core.seq_QMARK_.call(null,inst_9287__$1);var state_9303__$1 = (function (){var statearr_9308 = state_9303;(statearr_9308[(8)] = inst_9287__$1);
return statearr_9308;
})();if(inst_9288)
{var statearr_9309_9321 = state_9303__$1;(statearr_9309_9321[(1)] = (3));
} else
{var statearr_9310_9322 = state_9303__$1;(statearr_9310_9322[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9304 === (1)))
{var inst_9284 = tunefulweb.core._LT_jsonp.call(null,"http://ajaxhttpheaders.appspot.com");var state_9303__$1 = state_9303;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9303__$1,(2),inst_9284);
} else
{return null;
}
}
}
}
}
});})(c__5894__auto___9318))
;return ((function (switch__5879__auto__,c__5894__auto___9318){
return (function() {
var state_machine__5880__auto__ = null;
var state_machine__5880__auto____0 = (function (){var statearr_9314 = [null,null,null,null,null,null,null,null,null];(statearr_9314[(0)] = state_machine__5880__auto__);
(statearr_9314[(1)] = (1));
return statearr_9314;
});
var state_machine__5880__auto____1 = (function (state_9303){while(true){
var ret_value__5881__auto__ = (function (){try{while(true){
var result__5882__auto__ = switch__5879__auto__.call(null,state_9303);if(cljs.core.keyword_identical_QMARK_.call(null,result__5882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5882__auto__;
}
break;
}
}catch (e9315){if((e9315 instanceof Object))
{var ex__5883__auto__ = e9315;var statearr_9316_9323 = state_9303;(statearr_9316_9323[(5)] = ex__5883__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9303);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e9315;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9324 = state_9303;
state_9303 = G__9324;
continue;
}
} else
{return ret_value__5881__auto__;
}
break;
}
});
state_machine__5880__auto__ = function(state_9303){
switch(arguments.length){
case 0:
return state_machine__5880__auto____0.call(this);
case 1:
return state_machine__5880__auto____1.call(this,state_9303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5880__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5880__auto____0;
state_machine__5880__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5880__auto____1;
return state_machine__5880__auto__;
})()
;})(switch__5879__auto__,c__5894__auto___9318))
})();var state__5896__auto__ = (function (){var statearr_9317 = f__5895__auto__.call(null);(statearr_9317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5894__auto___9318);
return statearr_9317;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5896__auto__);
});})(c__5894__auto___9318))
);
dommy.core.listen_BANG_.call(null,document.getElementById("search"),new cljs.core.Keyword(null,"click","click",1912301393),(function (p1__9325_SHARP_){return tunefulweb.core.start_search.call(null,p1__9325_SHARP_);
}));
dommy.core.listen_BANG_.call(null,document.getElementById("term"),new cljs.core.Keyword(null,"keydown","keydown",-629268186),(function (p1__9326_SHARP_){if(cljs.core._EQ_.call(null,p1__9326_SHARP_.keyCode,(13)))
{return tunefulweb.core.start_search.call(null,p1__9326_SHARP_);
} else
{return null;
}
}));
/**
* Returns a core.async channel for getting data from `uri`.
*/
tunefulweb.core._LT_jsonp = (function _LT_jsonp(uri){var out = cljs.core.async.chan.call(null);var req = (new goog.net.Jsonp((new goog.Uri(uri))));req.send(null,((function (out,req){
return (function (res){return cljs.core.async.put_BANG_.call(null,out,res);
});})(out,req))
);
return out;
});
/**
* Format `price` according to a user's locale using rules in the
* global `currencies` var.
*/
tunefulweb.core.format_price = (function format_price(price){var vec__9328 = cljs.core.keyword.call(null,new cljs.core.Keyword(null,"locale","locale",-2115712697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tunefulweb.core.state))).call(null,tunefulweb.core.currencies);var currency = cljs.core.nth.call(null,vec__9328,(0),null);var num_dp = cljs.core.nth.call(null,vec__9328,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(currency)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(price.toFixed(num_dp)));
});
/**
* Remove items with -1 or no price.
*/
tunefulweb.core.filter_1 = (function filter_1(albums){return cljs.core.filter.call(null,(function (album){return (typeof new cljs.core.Keyword(null,"collectionPrice","collectionPrice",1922451847).cljs$core$IFn$_invoke$arity$1(album) === 'number') && ((new cljs.core.Keyword(null,"collectionPrice","collectionPrice",1922451847).cljs$core$IFn$_invoke$arity$1(album) > (-1)));
}),albums);
});
/**
* Create Crate :td entries from the map m, using only the
* values for the keys specified.
*/
tunefulweb.core.tds_from = (function tds_from(m,keys){var select_vals = cljs.core.comp.call(null,cljs.core.vec,cljs.core.vals,cljs.core.select_keys);var ks = cljs.core.map.call(null,cljs.core.first,keys);return cljs.core.map.call(null,((function (select_vals,ks){
return (function (x){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),x], null);
});})(select_vals,ks))
,select_vals.call(null,m,ks));
});
/**
* Tabulate data as a DOM table using only the
* values for the keys (ks) specified. data should
* be a seq of maps.
*/
tunefulweb.core.tabulate = (function tabulate(data,ks){return crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table.table-striped","table.table.table-striped",-1226196412),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.map.call(null,(function (x){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.second.call(null,x)], null);
}),ks)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.map.call(null,(function (x){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),tunefulweb.core.tds_from.call(null,x,ks)], null);
}),data)], null)], null));
});
var group__5962__auto___9329 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);tunefulweb.core.make_icon = ((function (group__5962__auto___9329){
return (function make_icon(art_url,itunes_url){var elem__5963__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),itunes_url,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),art_url], null)], null)], null));elem__5963__auto__.setAttribute("crateGroup",group__5962__auto___9329);
return elem__5963__auto__;
});})(group__5962__auto___9329))
;
tunefulweb.core.make_icon.prototype._crateGroup = group__5962__auto___9329;
var group__5962__auto___9330 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);tunefulweb.core.google_link = ((function (group__5962__auto___9330){
return (function google_link(artist,album){var elem__5963__auto__ = crate.core.html.call(null,(function (){var link = ("https://www.google.co.uk/#q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(("\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(artist)+"\" ")))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(("\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(album)+"\" review"))));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),link,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"search"], null);
})());elem__5963__auto__.setAttribute("crateGroup",group__5962__auto___9330);
return elem__5963__auto__;
});})(group__5962__auto___9330))
;
tunefulweb.core.google_link.prototype._crateGroup = group__5962__auto___9330;
tunefulweb.core.convert_artwork_urls = (function convert_artwork_urls(data){return cljs.core.map.call(null,(function (p1__9331_SHARP_){return cljs.core.assoc.call(null,p1__9331_SHARP_,new cljs.core.Keyword(null,"icon","icon",1679606541),tunefulweb.core.make_icon.call(null,new cljs.core.Keyword(null,"artworkUrl60","artworkUrl60",1465847553).cljs$core$IFn$_invoke$arity$1(p1__9331_SHARP_),new cljs.core.Keyword(null,"collectionViewUrl","collectionViewUrl",-606466837).cljs$core$IFn$_invoke$arity$1(p1__9331_SHARP_)));
}),data);
});
tunefulweb.core.add_google_links = (function add_google_links(data){return cljs.core.map.call(null,(function (p1__9332_SHARP_){return cljs.core.assoc.call(null,p1__9332_SHARP_,new cljs.core.Keyword(null,"reviews","reviews",-315606921),tunefulweb.core.google_link.call(null,new cljs.core.Keyword(null,"artistName","artistName",270965001).cljs$core$IFn$_invoke$arity$1(p1__9332_SHARP_),new cljs.core.Keyword(null,"collectionName","collectionName",979279159).cljs$core$IFn$_invoke$arity$1(p1__9332_SHARP_)));
}),data);
});
tunefulweb.core.format_prices = (function format_prices(data){return cljs.core.map.call(null,(function (p1__9333_SHARP_){return cljs.core.assoc.call(null,p1__9333_SHARP_,new cljs.core.Keyword(null,"collectionPrice","collectionPrice",1922451847),tunefulweb.core.format_price.call(null,new cljs.core.Keyword(null,"collectionPrice","collectionPrice",1922451847).cljs$core$IFn$_invoke$arity$1(p1__9333_SHARP_)));
}),data);
});
/**
* Truncate the search terms if they're too long to display in the title
*/
tunefulweb.core.truncate = (function truncate(term){if((cljs.core.count.call(null,term) > (23)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,term,(0),(23)))+"...");
} else
{return term;
}
});
tunefulweb.core.display = (function display(_,___$1,xhr){var data = cljs.core.js__GT_clj.call(null,xhr.responseJSON,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);var result_count = new cljs.core.Keyword(null,"resultCount","resultCount",239113266).cljs$core$IFn$_invoke$arity$1(data);var results = new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(data);var ks = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"icon","icon",1679606541),""], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"artistName","artistName",270965001),"Artist"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collectionName","collectionName",979279159),"Album"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trackCount","trackCount",1597528429),"Tracks"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collectionPrice","collectionPrice",1922451847),"Price"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"copyright","copyright",-1829660853),"Label"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reviews","reviews",-315606921),"Reviews"], null)], null);dommy.core.set_html_BANG_.call(null,document.getElementById("resultCount"),result_count);
if(cljs.core._EQ_.call(null,result_count,(0)))
{dommy.core.set_html_BANG_.call(null,document.getElementById("content"),"Nothing found");
} else
{dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,document.getElementById("content")),tunefulweb.core.tabulate.call(null,tunefulweb.core.convert_artwork_urls.call(null,tunefulweb.core.format_prices.call(null,tunefulweb.core.add_google_links.call(null,tunefulweb.core.filter_1.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"collectionPrice","collectionPrice",1922451847),results))))),ks));
}
dommy.core.set_text_BANG_.call(null,dommy.core.remove_attr_BANG_.call(null,document.getElementById("search"),new cljs.core.Keyword(null,"disabled","disabled",-1529784218)),("search "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"locale","locale",-2115712697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tunefulweb.core.state)))));
return dommy.core.remove_attr_BANG_.call(null,document.getElementById("term"),new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
});
tunefulweb.core.search = (function search(term){return jayq.core.ajax.call(null,("http://itunes.apple.com/search?term="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(term)+"&media=music&limit=300&country="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"locale","locale",-2115712697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tunefulweb.core.state)))+"&entity=album&genreId=5"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dataType","dataType",1069893619),"JSONP",new cljs.core.Keyword(null,"success","success",1890645906),tunefulweb.core.display], null));
});
tunefulweb.core.start_search = (function start_search(_){var term = dommy.core.value.call(null,document.getElementById("term"));if(cljs.core.empty_QMARK_.call(null,term))
{return cljs.core.println.call(null,"No term!");
} else
{cljs.core.swap_BANG_.call(null,tunefulweb.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"terms","terms",-1556977978),clojure.string.split.call(null,term,/[ ]+/));
dommy.core.set_text_BANG_.call(null,dommy.core.set_attr_BANG_.call(null,document.getElementById("search"),new cljs.core.Keyword(null,"disabled","disabled",-1529784218)),"searching...");
dommy.core.set_text_BANG_.call(null,document.getElementById("search-text"),tunefulweb.core.truncate.call(null,term.toLowerCase()));
dommy.core.set_attr_BANG_.call(null,document.getElementById("term"),new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
dommy.core.clear_BANG_.call(null,document.getElementById("content"));
dommy.core.clear_BANG_.call(null,document.getElementById("resultCount"));
return tunefulweb.core.search.call(null,term);
}
});

//# sourceMappingURL=core.js.map