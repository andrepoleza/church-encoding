'use strict';

var trueExpression = require('./true');
var falseExpression = require('./false');

function xorOperation(first) {
	return function(second) {
		return (first)(second(falseExpression)(trueExpression))(second(trueExpression)(falseExpression));
	};
}

module.exports = xorOperation;
