# is-map <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

Is this value a JS Map? This module works cross-realm/iframe, and despite ES6 @@toStringTag.

## Example

```js
var isMap = require('is-map');
assert(!isMap(function () {}));
assert(!isMap(null));
assert(!isMap(function* () { yield 42; return Infinity; });
assert(!isMap(Symbol('foo')));
assert(!isMap(1n));
assert(!isMap(Object(1n)));

assert(!isMap(new Set()));
assert(!isMap(new WeakSet()));
assert(!isMap(new WeakMap()));

assert(isMap(new Map()));

class MyMap extends Map {}
assert(isMap(new MyMap()));
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/is-map
[npm-version-svg]: https://versionbadg.es/inspect-js/is-map.svg
[deps-svg]: https://david-dm.org/inspect-js/is-map.svg
[deps-url]: https://david-dm.org/inspect-js/is-map
[dev-deps-svg]: https://david-dm.org/inspect-js/is-map/dev-status.svg
[dev-deps-url]: https://david-dm.org/inspect-js/is-map#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/is-map.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/is-map.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/is-map.svg
[downloads-url]: https://npm-stat.com/charts.html?package=is-map
[codecov-image]: https://codecov.io/gh/inspect-js/is-map/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/inspect-js/is-map/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/inspect-js/is-map
[actions-url]: https://github.com/inspect-js/is-map/actions
