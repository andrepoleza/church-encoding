'use strict';

var notOperation = require('./../booleans/not');
var isGreaterOrEqual = require('./isGreaterOrEqual');

function isLess(a) {
    return function(b) {
        return notOperation(isGreaterOrEqual(a)(b));
    };
}

module.exports = isLess;
