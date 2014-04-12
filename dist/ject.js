!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.ject=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
/* ject */

function ject(str, obj) {
  var keys = str.match(/({{.+?}})/g);
  keys.forEach(function(v, i) {
    var key = keys[i].replace(/{{(.+)}}/, '$1');
    if (obj[key]) { str = str.replace(keys[i], obj[key]); }
  });
  return str;
}

/* Exports */

module.exports = ject;

},{}]},{},[1])
(1)
});