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
                   [jayq.macros :refer [let-ajax]]))

;; ============================= ;;
;; TODO:                         ;;
;; ----------------------------- ;;
;; * Format price/currency       ;;
;; * Auto country chooser        ;;  
;; * Remove TH when no results   ;;
;; * Handle ajax failure         ;;
;; * Separate M V & C            ;;
;; * core.async + goog.net.Jsonp ;;
;; X Format titles               ;;
;; * Tests                       ;;
;; ============================= ;;

(enable-console-print!)

(def currencies {:GB ["£" ".02f"]
                 :US ["$" ".02f"]})

;; Figure out locale
;;
;;(defn locale []
;;  (let [result (promise)])
;;  
;;  (ajax "http://ajaxhttpheaders.appspot.com"
;;        {:dataType :JSONP
;;         :success  (fn [_ status xhr]
;;                     (let [data (js->clj (.-responseJSON xhr) :keywordize-keys true)]
;;                       (-> (sel1 :#country)
;;                           (d/set-text! (:X-Appengine-Country data)))))}))
;;(locale)
;;

(let-ajax [locale {:url "http://ajaxhttpheaders.appspot.com"
                   :dataType :jsonp}]
          (println (str "What did we get? "
                        (:X-Appengine-Country (js->clj locale :keywordize-keys true)))))

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

(defn convert-artwork-urls
  [data]
  (map #(assoc % :icon (make-icon (:artworkUrl100 %) (:collectionViewUrl %)))
       data))

(defpartial google-link
  [artist album]
  (let [link (str "https://www.google.co.uk/#q="
                  (js/encodeURIComponent (str \" artist "\" "))
                  (js/encodeURIComponent (str \" album "\" review")))]
    [:a {:href link :target "_blank"} "Search"]))

(defn add-google-links
  [data]
  (map #(assoc % :reviews (google-link (:artistName %) (:collectionName %)))
       data))

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
                                 (convert-artwork-urls))
                             ks)))
    (-> (sel1 :#search)
        (d/remove-attr! :disabled)
        (d/set-text! "Search"))
    (-> (sel1 :#term) (d/remove-attr! :disabled))))

(defn search [term]
  (ajax (str "http://itunes.apple.com/search?term=" term
             "&media=music&limit=300&country=GB&entity=album&genreId=5")
        {:dataType "JSONP"
         :success  display}))

(defn start-search [_]
  (let [term (-> (sel1 :#term) d/value)]
    (if (empty? term)
      (println "No term!")
      (do (-> (sel1 :#search)
              (d/set-attr! :disabled)
              (d/set-text! "Searching..."))
          (-> (sel1 :#search-text)
              (d/set-text! term))
          (-> (sel1 :#term)
              (d/set-attr! :disabled))
          (-> (sel1 :#content)
              (d/clear!))
          (-> (sel1 :#resultCount)
              (d/clear!))
          (search term)))))

(d/listen! (sel1 :#search) :click start-search)

(d/listen! (sel1 :#term) :keydown
           #(when (= (.-keyCode %) 13) (start-search %)))


