# is-map [![Build Status](https://travis-ci.org/arthurvr/is-map.svg?branch=master)](https://travis-ci.org/arthurvr/is-map)

> Node module to easily check if an object is an [ES6 `Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

## Installation

```
$ npm install --save is-map
```

## Usage

```js
var isMap = require('is-map');

isMap(new Map());
//=> true

isMap({});
//=> false
```
## Related

* [`is-weakmap`](https://github.com/arthurvr/is-weakmap)
* [`is-set`](https://github.com/arthurvr/is-set)
* [`is-weakset`](https://github.com/arthurvr/is-weakset)

## License

MIT © [Arthur Verschaeve](http://arthurverschaeve.be)
