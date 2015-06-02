'use strict';

var test = require('ava');
var churchEncoding = require('./');

function dumbFn(x) {
	return x;
}

// Aliases
var ce = churchEncoding;
var zero = ce.zero;
var one = ce.one;
var two = ce.two;
var three = ce.three;
var successor = ce.successor;

test(function(t) {
	t.assert(typeof zero === 'function');
	t.assert(typeof one === 'function');
	t.assert(typeof two === 'function');
	t.assert(typeof three === 'function');

	t.assert(one(dumbFn('what') === 'what'));
	t.assert(two(dumbFn('what') === 'whatwhat'));
	t.assert(three(dumbFn('what') === 'whatwhatwhat'));

	t.end();
});
