'use strict';

// λf.λx.f x
function one(f) {
	return function(x) {
		return f(x);
	};
}

module.exports = one;
