'use strict';

var zero = require('./numerals/zero');
var successor = require('./numerals/successor');

function integerToChurch(n) {
    if (n === 0) {
        return zero;
    } else {
        return successor(integerToChurch(n - 1));
    }
}

module.exports = integerToChurch;
