'use strict';

// λf.λx.f (f (f x))
function three(f) {
	return function(x) {
		return f(f(f(x)));
	};
}

module.exports = three;
