'use strict';

var test = require('ava');
var isMap = require('../');

test(function (t) {
	t.assert(isMap(new Map()));
	t.assert(!isMap(new Set()));
	t.assert(!isMap({}));
});
