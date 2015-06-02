'use strict';

function zero(f) {
	return function(x) {
		return x;
	};
}

module.exports = zero;
