// jshint esversion: 6

// All possible functions
const { fromFile, objSize, toCSS, minify } = require('json-reader');

// files
const jsonc_file = "example/example.jsonc"; // .json will work the same as well
const jsonstyle_file = "example/style.jsonc";

var json_obj = fromFile(jsonc_file); // This will return a object from the example.jsonc file
var css = toCSS(fromFile(jsonstyle_file)); // This returns a minified css string from the contents of "style.jsonc"
var obj_size = objSize(json_obj); // Will return 2
var minified = minify(json_obj); // This will turn the object into a string and minify it, it will also minify json strings that are formatted

// Print to console
console.log(json_obj);
console.log(css);
console.log(obj_size);
console.log(minified);