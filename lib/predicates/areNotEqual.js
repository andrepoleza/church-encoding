'use strict';

var notOperation = require('./../booleans/not');
var areEqual = require('./areEqual');

function areNotEqual(a) {
    return function(b) {
        return notOperation(areEqual(a)(b));
    };
}

module.exports = areNotEqual;
