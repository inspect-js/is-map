'use strict';

module.exports = function (o) {
	return Object.prototype.toString.call(o) === '[object Map]';
};
