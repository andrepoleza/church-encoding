'use strict';

// λf.λx.x
function zero(f) {
	return function(x) {
		return x;
	}
}

module.exports = zero;
