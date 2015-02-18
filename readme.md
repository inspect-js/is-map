# is-map [![Build Status](https://travis-ci.org/arthurvr/is-map.svg?branch=master)](https://travis-ci.org/arthurvr/is-map)

> Node module to easily check if an object is an [ES6 `Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

## Installation

```
$ npm install is-map --save
```

## Usage

```javascript
var isMap = require('is-map');

isMap(new Map());
//=> true

isMap({});
//=> false
```

## License

MIT © Arthur Verschaeve
