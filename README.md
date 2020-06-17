# json-reader 1.0.0-beta

- [json-reader 1.0.0-beta](#json-reader-100-beta)
  - [What is json-reader](#what-is-json-reader)
  - [How to install](#how-to-install)
  - [Usage](#usage)

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

Using json-reader is like any other node module, here is some basic usage on how to parse a `.jsonc` file into a JavaScript object (Exact same with `.json` files, just change the file name)

```js
const { fromFile } = require('json-reader');
```