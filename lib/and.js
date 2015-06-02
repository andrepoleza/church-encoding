'use strict';

var falseExpression = require('./false');

function andOperation(first) {
	return function(second) {
		return (first)(second)(falseExpression);
	}
}

module.exports = andOperation;
