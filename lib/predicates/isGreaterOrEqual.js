'use strict';

var isZero = require('./isZero');
var subtraction = require('./../numerals/subtraction');

function isGreaterOrEqual(a) {
    return function(b) {
        return isZero(subtraction(b)(a));
    };
}

module.exports = isGreaterOrEqual;
