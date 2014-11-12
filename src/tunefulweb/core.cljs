(ns tunefulweb.core
  (:require [jayq.core :refer [ajax]]
            [dommy.core :as d :refer-macros [sel sel1]]
            [crate.core :as crate]
            [goog.events :as events]
            [cljs.core.async :refer [put! chan <!]]
            [clojure.string :as string])
  (:require-macros [crate.def-macros :refer [defpartial]]
                   [tunefulweb.macros :as macros]
                   [cljs.core.async.macros :refer [go]]
                   [jayq.macros :refer [let-ajax]])
  (:import [goog.net Jsonp]
           [goog Uri]))

#_(
   (loop [html [:p]
          remaining s
          last-idx 0]
     (if (= (.indexOf remaining "test") -1)
       (conj html remaining)
       (let [idx (.indexOf remaining "test")
             prev (subs remaining 0 (dec idx))
             end (+ idx (count "test"))]
         (recur
          (conj (conj html prev) [:span.hl "test"])
          (subs remaining end)
          end))))
   )

;; ============================= ;;
;; TODO:                         ;;
;; ----------------------------- ;;
;; X Format price/currency       ;;
;; X Auto country chooser        ;;
;; * Highlight search terms      ;;
;;   in text                     ;;
;; * Remove TH when no results   ;;
;; * Handle ajax failure         ;;
;; * Separate M V & C            ;;
;; / core.async + goog.net.Jsonp ;;
;; X Format titles               ;;
;; O Use Transit for JSON        ;;
;; * Perhaps order by            ;;
;;   price/number of tracks?     ;;
;; * Title wrap for long terms   ;;
;; * Tests                       ;;
;; ============================= ;;

(enable-console-print!)

(def state (atom {:locale nil
                  :terms []}))

(def ^:const currencies {:GB ["£" 2]
                         :US ["$" 2]})

(defn format-price
  [price]
  (let [[currency num-dp] ((keyword (:locale @state)) currencies)]
    (str currency (.toFixed price num-dp))))

(defn <jsonp [uri]
  (let [out (chan)
        req (Jsonp. (Uri. uri))]
    (.send req nil (fn [res] (put! out res)))
    out))

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

(defn filter-1
  "Remove items with -1 or no price."
  [albums]
  (filter (fn [album]
            (and
             (number? (:collectionPrice album))
             (> (:collectionPrice album) -1)))
          albums))

(defpartial make-icon [artUrl itunesUrl]
  [:a {:href itunesUrl :target "_blank"}
   [:img {:src artUrl}]])

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

(defn hl-search-terms
  "Show all instances of the search words the user has entered in
  string s (by marking them out as Crate constructs)."
  [data]
  (let [index-of (fn
                   ([t s]
                      (.indexOf t s))
                   ([t s i]
                      (.indexOf t s i)))
        lc string/lower-case
        actual-term (fn [t r]
                      (let [start (index-of (lc r) (lc t))
                            end (+ start (count t))]
                        (subs r start end)))
        terms (:terms @state)
        highlight (fn [k m]
                    (loop [html [:p]
                           remaining (k m)
                           last-idx 0]
                      (if (= (index-of (lc remaining) (lc (first terms))) -1)
                        (conj html remaining)
                        (let [idx (index-of (lc remaining)
                                            (lc (first terms)))
                              actual (actual-term (first terms) remaining) ; the term as it appears 
                              prec (subs remaining 0 (dec idx)) ; preceding string before match
                              end (+ idx (count (first terms)))] ; idx of match end
                          (recur
                           (conj (conj html prec) [:span.hl actual])
                           (subs remaining end)
                           end)))))]
    (map #(assoc % :collectionName (highlight :collectionName %)) data)))

(defn display
  [content text-status xhr]
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
    ;;    (println results)
    (-> (sel1 :#resultCount) (d/set-html! result-count))
    (-> (sel1 :#content)
        (d/clear!)
        (d/append! (tabulate (-> (filter-1 (sort-by :collectionPrice results))
                                 (add-google-links)
                                 (format-prices)
                                 (hl-search-terms)
                                 (convert-artwork-urls))
                             ks)))
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
            (d/set-text! (.toLowerCase term)))
        (-> (sel1 :#term)
            (d/set-attr! :disabled))
        (-> (sel1 :#content)
            (d/clear!))
        (-> (sel1 :#resultCount)
            (d/clear!))
        (search term)))))

(d/listen! (sel1 :#search) :click start-search)

;; trap enter key when pressed in search term field
(d/listen! (sel1 :#term) :keydown
           #(when (= (.-keyCode %) 13) (start-search %)))


