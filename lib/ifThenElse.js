'use strict';

function ifThenElse(x) {
	return function(trueExpression) {
		return function(falseExpression) {
			return (x)(trueExpression)(falseExpression);
		};
	};
}

module.exports = ifThenElse;
