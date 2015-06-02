'use strict';

var test = require('ava');
var churchEncoding = require('./');

test(function(t) {
	t.assert(typeof churchEncoding.zero === 'function');
	t.assert(typeof churchEncoding.one === 'function');
	t.assert(typeof churchEncoding.two === 'function');
	t.assert(typeof churchEncoding.three === 'function');
	t.end();
});
