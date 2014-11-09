(ns tunefulweb.macros
  (:import [java.util Locale]))

(defmacro iso-countries [] (vec (Locale/getISOCountries)))
