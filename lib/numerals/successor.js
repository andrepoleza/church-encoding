'use strict';

// λn.λf.λx.f (n f x)
function successor(n) {
	return function(f) {
		return function(x) {
			return f(n(f)(x));
		};
	};
}

module.exports = successor;
