'use strict';

var notOperation = require('./not');
var xorOperation = require('./xor');

function xnorOperation(first) {
	return function(second) {
		return notOperation(xorOperation(first)(second));
	};
}

module.exports = xnorOperation;
