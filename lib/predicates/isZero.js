'use strict';

var trueExpression = require('./../booleans/true');
var falseExpression = require('./../booleans/false');

function isZero(n) {
    return n(function(x) { return falseExpression; })(trueExpression);
}

module.exports = isZero;
