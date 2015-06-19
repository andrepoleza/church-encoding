'use strict';

var predecessor = require('./predecessor');

function subtraction(a) {
    return function(b) {
        return (b)(predecessor)(a);
    };
}

module.exports = subtraction;
