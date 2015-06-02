'use strict';

// λf.λx.f (f x)
function two(f) {
	return function(x) {
		return f(f(x));
	}
}

module.exports = two;
