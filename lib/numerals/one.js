'use strict';

function one(f) {
	return function(x) {
		return f(x);
	};
}

module.exports = one;
