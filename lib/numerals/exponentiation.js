'use strict';

// var multiplication = require('./multiplication');

function exponentiation(a) {
    return function(b) {
        return b(a);
    };
}

module.exports = exponentiation;
