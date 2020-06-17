# json-reader 1.0.0-beta

- [json-reader 1.0.0-beta](#json-reader-100-beta)
  - [What is json-reader](#what-is-json-reader)
  - [How to install](#how-to-install)
  - [Usage](#usage)
    - [Functions](#functions)

## What is json-reader

json-reader is a node.js module that allows you to read `.json` and `.jsonc` files and convert them to objects and other files

## How to install

Using npm saving as production dependency (if you use it in production)

```shell
npm install json-reader --save
```

Or to save as developer dependency (if you use it only in development)

```shell
npm install json-reader --save-dev
```

## Usage

Using json-reader is like any other node module, go to (This Example)[./example/index.js] to see an example

### Functions 

This is the enitre list of functions:

`fromFile("path/to/json/or/jsonc")` This will return a object from the file passed into it, will return false if error gets thrown

`removeComments("/* Some comments */Some normal text!")` This will remove all single line comments and block comments (JavaScript style)

`parse("json string")` This will remove all comments from the string passed into it and then parse it and return the object

`objSize(obj)` This will return the size of an object

`toCSS(obj_or_json_string)` This will turn a json string or a json object (NOT A FILE PATH) into a css string, see (This Script)[./example/style.jsonc] to see how a that file would be formatted

`minify(json_string_or_obj)` This will minify a json object (and convert to a string) or just minify the json string