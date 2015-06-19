'use strict';

var isZero = require('./isZero');
var subtraction = require('./../numerals/subtraction');

function isLessOrEqual(a) {
    return function(b) {
        return isZero(subtraction(a)(b));
    };
}

module.exports = isLessOrEqual;
