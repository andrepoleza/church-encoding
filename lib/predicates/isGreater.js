'use strict';

var notOperation = require('./../booleans/not');
var isLessOrEqual = require('./isLessOrEqual');

function isGreater(a) {
    return function(b) {
        return notOperation(isLessOrEqual(a)(b));
    };
}

module.exports = isGreater;
