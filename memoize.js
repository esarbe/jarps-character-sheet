/*
* memoize.js
* by @philogb 
* with tweaks from @addyosmani, @philogb, @mathias, @DmitryBaranovsk, @JamieMason
* perf tests: http://bit.ly/q3zpG3
* Released under an MIT license.
*/

	function memoize(func) {
  "use strict";
  var cache = (func.memoize = func.memoize || {}),
    stringifyJson = JSON.stringify,
    sliceArray = Array.prototype.slice;
   return function () {
     var hash = stringifyJson(sliceArray.call(arguments));
     return (hash in cache) ? cache[hash] : cache[hash] = func.apply(this, arguments);
   };
}; 
