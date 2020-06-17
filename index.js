/*jshint esversion: 6 */

//#region Module Information Storage
class storage {

    constructor() {

        this.source = "SOURCE";
        this.json = null;
        this.path = null;

    }

}
var info = new storage();
//#endregion

//#region Check if valid url
function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' +
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$', 'i');
    return !!pattern.test(str);
}
//#endregion

//#region From File
exports.fromFile = function (file) {

    if (!file.endsWith(".json") && !file.endsWith(".jsonc")) {

        return false;

    } else {

        var fs = require('fs'),
            data = fs.readFileSync(file);

        if (data instanceof Buffer) {
            data = data.toString('utf8');
        }

        info.source = file;
        info.json = exports.parse(data);

        return info.json;

    }

};
//#endregion

//#region Remove Comments
exports.removeComments = function (str) {
  return str.replace(/(\/\*(.|\n)*?\*\/)|(\/\/(.+))/gm, "");
};
//#endregion

//#region Parse json with/without comments
exports.parse = function (file) {
    return JSON.parse(exports.removeComments(file));
};
//#endregion

//#region Get object size
exports.objSize = function (obj) {
    return Object.keys(obj).length;
};
//#endregion

//#region JSON to CSS
exports.toCSS = function (json) {
    if (json instanceof String) {
        json = exports.parse(json);
    }
    function jsontocss(obj) {
      var output = "",
        keys = Object.keys(obj),
        contents = {};
      for (let i = 0; i < exports.objSize(obj); i++) {
        var key = keys[i];
        output += key + "{";
        for (let x = 0; x < exports.objSize(obj[key]); x++) {
          var subkey = Object.keys(obj[key])[x];
          if (obj[key][subkey] instanceof Object) {
            if (subkey.includes(",")) {
                  subkey = subkey.split(",");
                  for (let z = 0; z < subkey.length; z++) {
                    contents[key + " " + subkey[z]] = obj[key][subkey];
                  }
                } else {
                  contents[key + " " + subkey] = obj[key][subkey];
                }
          } else {
            output += subkey + ":" + obj[key][subkey] + ";";
          }
        } output += "}";
      }
      if (exports.objSize(contents) > 0) {
        for (let i = 0; i < exports.objSize(contents); i++) {
          output += exports.toCSS(contents);
        }
      }
      return output;
    }
    return jsontocss(json);
};
//#endregion

//#region Minify JSON
exports.minify = function (str) {
  if (str instanceof Object) {
    str = JSON.stringify(json);
  }
  return str.replace(/\s(?=([^"\\]*(\\.|"([^"\\]*\\.)*[^"\\]*"))*[^"]*$)/gm,'');
};
//#endregion

