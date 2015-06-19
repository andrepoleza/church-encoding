'use strict';

var andOperation = require('./../booleans/and');
var isGreaterOrEqual = require('./isGreaterOrEqual');
var isLessOrEqual = require('./isLessOrEqual');

function areEqual(a) {
    return function(b) {
        return andOperation(isGreaterOrEqual(a)(b))(isLessOrEqual(a)(b));
    };
}

module.exports = areEqual;
