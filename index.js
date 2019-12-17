'use strict';

var $mapHas = typeof Map === 'function' && Map.prototype && Map.prototype.has;
var $setHas = typeof Set === 'function' && Set.prototype && Set.prototype.has;

module.exports = function isSet(x) {
	if (!$mapHas || !x || typeof x !== 'object') {
		// `Set` is either not present in this environment or does not have a `has` method, or the argument is of an incorrect type
		return false;
	}

	try {
		$mapHas.call(x);
		if ($setHas) {
			try {
				$setHas.call(x);
			} catch (e) {
				return true;
			}
		}
		return x instanceof Map; // core-js workaround, pre-v2.5.0
	} catch (e) {}

	return false;
};
