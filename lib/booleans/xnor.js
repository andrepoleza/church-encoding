'use strict';

var xorOperation = require('./xor');
var notOperation = require('./not');

function xnorOperation(first) {
	return function(second) {
		return notOperation(xorOperation(first)(second));
	};
}

module.exports = xnorOperation;
