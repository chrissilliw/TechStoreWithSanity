"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/p-is-promise";
exports.ids = ["vendor-chunks/p-is-promise"];
exports.modules = {

/***/ "(ssr)/./node_modules/p-is-promise/index.js":
/*!********************************************!*\
  !*** ./node_modules/p-is-promise/index.js ***!
  \********************************************/
/***/ ((module) => {

eval("\n\nconst isObject = value => value !== null &&\n\t(typeof value === 'object' || typeof value === 'function');\n\nmodule.exports = value => (\n\tvalue instanceof Promise ||\n\t(\n\t\tisObject(value) &&\n\t\ttypeof value.then === 'function' &&\n\t\ttypeof value.catch === 'function'\n\t)\n);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcC1pcy1wcm9taXNlL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlY2gtc3RvcmUvLi9ub2RlX21vZHVsZXMvcC1pcy1wcm9taXNlL2luZGV4LmpzPzkyMDIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBpc09iamVjdCA9IHZhbHVlID0+IHZhbHVlICE9PSBudWxsICYmXG5cdCh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gdmFsdWUgPT4gKFxuXHR2YWx1ZSBpbnN0YW5jZW9mIFByb21pc2UgfHxcblx0KFxuXHRcdGlzT2JqZWN0KHZhbHVlKSAmJlxuXHRcdHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nICYmXG5cdFx0dHlwZW9mIHZhbHVlLmNhdGNoID09PSAnZnVuY3Rpb24nXG5cdClcbik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/p-is-promise/index.js\n");

/***/ })

};
;