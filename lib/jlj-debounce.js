(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){(function (){
var jljDebounce = require('./jlj-debounce.js')

global.jljDebounce = jljDebounce

window.Vue && global.Vue.use(jljDebounce)

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./jlj-debounce.js":2}],2:[function(require,module,exports){

const debounce = {
  inserted: function (el, binding) {
    let timer
    el.addEventListener('keyup', () => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        binding.value()
      }, 1000)
    })
  }
}

if (typeof exports === 'object') {
  module.exports = debounce
} else if (typeof define === 'function' && define.amd) {
  define([], function () {
    return debounce
  })
}

},{}]},{},[1]);
