'use strict';
var test = require('ava');
var isMap = require('./');

test(function (t) {
	t.true(isMap(new Map()));
	t.false(isMap(new Set()));
	t.false(isMap({}));
	t.false(isMap([]));

	t.end();
});
