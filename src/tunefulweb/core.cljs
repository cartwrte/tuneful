(ns tunefulweb.core
  (:require [jayq.core :refer [ajax]]
            [dommy.core :as d :refer-macros [sel sel1]]
            [crate.core :as crate]
            [clojure.browser.repl :as repl]
            [goog.events :as events]
            [cljs.core.async :refer [put! chan <!]]
            [clojure.string :as string])
  (:require-macros [crate.def-macros :refer [defpartial]]
                   [tunefulweb.macros :as macros]
                   [cljs.core.async.macros :refer [go]]
                   [jayq.macros :refer [let-ajax]])
  (:import [goog.net Jsonp]
           [goog Uri]))

;(repl/connect "http://localhost:9000/repl")

                                        ; ============================= ;
                                        ; TODO:                         ;
                                        ; ----------------------------- ;
                                        ; X Format price/currency       ;
                                        ; X Auto country chooser        ;
                                        ; * GitHub                      ;
                                        ; - Highlight search terms      ;
                                        ;   in text                     ;
                                        ; X Remove TH when no results   ;
                                        ; * Handle ajax failure         ;
                                        ; X Fix button                  ;
                                        ; * Separate M V & C            ;
                                        ; / core.async + goog.net.Jsonp ;
                                        ; X Format titles               ;
                                        ; O Use Transit for JSON        ;
                                        ; * Perhaps order by            ;
                                        ;   price/number of tracks?     ;
                                        ; X Title wrap for long terms   ;
                                        ; * Tests                       ;
                                        ; ============================= ;

(enable-console-print!)

;; ## Forward declarations

(declare <jsonp start-search)

;; ## Global vars

(def
  ^{:doc "State of the app. Currently we maintain the locale and a 
          list of search terms entered by the users."}
  state (atom {:locale nil
               :terms []}))

(def
  ^:const
  ^{:doc "Currency formats, used by `format-price`."}
  currencies {:GB ["£" 2]
              :US ["$" 2]})

;; ## Application setup

;; Discover the locale. Don't allow a search to
;; begin until we know what this is. Could have
;; done with a watch instead?
(go
  (let [{ctry :X-Appengine-Country}
        (js->clj (<! (<jsonp "http://ajaxhttpheaders.appspot.com"))
                 :keywordize-keys true)]
    (swap! state assoc :locale ctry)
    (-> (sel1 :#search)
        (d/remove-attr! :disabled)
        (d/set-text! (str "search " (:locale @state))))))

;; ### Event binding

;; When we click the search button, call `start-search`.
(d/listen! (sel1 :#search) :click #(start-search %))

;; Trap enter key when pressed in search term field and
;; call `start-search`
(d/listen! (sel1 :#term) :keydown
           #(when (= (.-keyCode %) 13) (start-search %)))

;; ## Functions

(defn <jsonp
  "Returns a core.async channel for getting data from `uri`."
  [uri]
  (let [out (chan)
        req (Jsonp. (Uri. uri))]
    (.send req nil (fn [res] (put! out res)))
    out))

(defn format-price
  "Format `price` according to a user's locale using rules in the
  global `currencies` var."
  [price]
  (let [[currency num-dp] ((keyword (:locale @state)) currencies)]
    (str currency (.toFixed price num-dp))))

(defn filter-1
  "Remove items with -1 or no price."
  [albums]
  (filter (fn [album]
            (and
             (number? (:collectionPrice album))
             (> (:collectionPrice album) -1)))
          albums))

;; ## Display functions and Crate partials

(defn tds-from
  "Create Crate :td entries from the map m, using only the 
  values for the keys specified."
  [m keys]
  (let [select-vals (comp vec vals select-keys)
        ks (map first keys)]
    (map (fn [x] [:td x])
         (select-vals m ks))))

(defn tabulate
  "Tabulate data as a DOM table using only the 
  values for the keys (ks) specified. data should
  be a seq of maps."
  [data ks]
  (crate/html
   [:table.table.table-striped
    [:thead
     [:tr (map (fn [x] [:th (second x)]) ks)]]
    [:tbody
     (map (fn [x] [:tr (tds-from x ks)]) data)]]))

;; Clickable image of an album. Links to iTunes.
(defpartial make-icon
  [art-url itunes-url]
  [:a {:href itunes-url :target "_blank"}
   [:img {:src art-url}]])

;; Create a link to a google search for an album.
(defpartial google-link
  [artist album]
  (let [link (str "https://www.google.co.uk/#q="
                  (js/encodeURIComponent (str \" artist "\" "))
                  (js/encodeURIComponent (str \" album "\" review")))]
    [:a {:href link :target "_blank"} "search"]))

(defn convert-artwork-urls
  [data]
  (map #(assoc % :icon (make-icon (:artworkUrl60 %) (:collectionViewUrl %)))
       data))

(defn add-google-links
  [data]
  (map #(assoc % :reviews (google-link (:artistName %) (:collectionName %)))
       data))

(defn format-prices
  [data]
  (map #(assoc % :collectionPrice (format-price (:collectionPrice %)))
       data))

(defn truncate
  "Truncate the search terms if they're too long to display in the title"
  [term]
  (if (> (count term) 23)
    (str (subs term 0 23) "...")
    term))

(defn display
  [_ _ xhr]
  (let [data (js->clj (.-responseJSON xhr) :keywordize-keys true)
        result-count (:resultCount data)
        results (:results data)
        ks [[:icon ""]
            [:artistName "Artist"]
            [:collectionName "Album"]
            [:trackCount "Tracks"]
            [:collectionPrice "Price"]
            [:copyright "Label"]
            [:reviews "Reviews"]]]
    (-> (sel1 :#resultCount) (d/set-html! result-count))
    (if (= result-count 0)
      (-> (sel1 :#content)
          (d/set-html! "Nothing found"))
      (-> (sel1 :#content)
          (d/clear!)
          (d/append! (tabulate (-> (filter-1 (sort-by :collectionPrice results))
                                   (add-google-links)
                                   (format-prices)
                                   (convert-artwork-urls))
                               ks))))
    (-> (sel1 :#search)
        (d/remove-attr! :disabled)
        (d/set-text! (str "search " (:locale @state))))
    (-> (sel1 :#term) (d/remove-attr! :disabled))))

(defn search [term]
  (ajax (str "http://itunes.apple.com/search?term=" term
             "&media=music&limit=300&country=" (:locale @state)
             "&entity=album&genreId=5")
        {:dataType "JSONP"
         :success  display}))

(defn start-search [_]
  (let [term (-> (sel1 :#term) d/value)]
    (if (empty? term)
      (println "No term!")
      (do
        (swap! state assoc :terms (string/split term #"[ ]+"))
        (-> (sel1 :#search)
            (d/set-attr! :disabled)
            (d/set-text! "searching..."))
        (-> (sel1 :#search-text)
            (d/set-text! (truncate (.toLowerCase term))))
        (-> (sel1 :#term)
            (d/set-attr! :disabled))
        (-> (sel1 :#content)
            (d/clear!))
        (-> (sel1 :#resultCount)
            (d/clear!))
        (search term)))))

