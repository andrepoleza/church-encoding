'use strict';

var trueExpression = require('./true');
var falseExpression = require('./false');

function notOperation(x) {
	return (x)(falseExpression)(trueExpression);
}

module.exports = notOperation;
