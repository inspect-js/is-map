import test from 'ava';
import isMap from './';

test(t => {
	t.true(isMap(new Map()));
	t.false(isMap(new Set()));
	t.false(isMap({}));
	t.false(isMap([]));

	t.end();
});
