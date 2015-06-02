'use strict';

var trueExpression = require('./true');

function orOperation(first) {
	return function(second) {
		return (first)(trueExpression)(second);
	}
}

module.exports = orOperation;
