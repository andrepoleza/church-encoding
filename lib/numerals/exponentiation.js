'use strict';

function exponentiation(a) {
    return function(b) {
        return b(a);
    };
}

module.exports = exponentiation;
