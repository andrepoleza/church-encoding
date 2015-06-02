'use strict';

var test = require('ava');
var churchEncoding = require('./');

function printToConsole(x) {
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

	t.assert(one(printToConsole('what') === 'what'));
	t.assert(two(printToConsole('what') === 'whatwhat'));
	t.assert(three(printToConsole('what') === 'whatwhatwhat'));

	t.end();
});
