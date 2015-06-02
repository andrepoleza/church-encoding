'use strict';

var notOperation = require('./not');
var andOperation = require('./and');

function nandOperation(first) {
	return function(second) {
		return notOperation(andOperation(first)(second));
	}
}

module.exports = nandOperation;
