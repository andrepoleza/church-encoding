'use strict';

var notOperation = require('./not');
var orOperation = require('./or');

function norOperation(first) {
	return function(second) {
		return notOperation(orOperation(first)(second));
	};
}

module.exports = norOperation;
