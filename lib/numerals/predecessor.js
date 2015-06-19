'use strict';

function predecessor(n) {
    return function(f) {
        return function(x) {
            return n(function(g) {
                return function(h) {
                    return h(g(f));
                };
            })(function(u) {
                return x;
            })(function(u) {
                return u;
            });
        };
    };
}

module.exports = predecessor;
