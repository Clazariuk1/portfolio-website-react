/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
class Test {
  constructor() {
    _defineProperty(this, "main", () => {
      console.log("Christopher Lazariuk. Software, Martial Arts, Creative Arts. Let's connect!");
    });
  }
}
// test
const test = new Test();
test.main();
/******/ })()
;
//# sourceMappingURL=main.0369a40ad91ee71b944cf9b39bf4db6d.js.map