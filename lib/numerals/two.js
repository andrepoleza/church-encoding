'use strict';

function two(f) {
	return function(x) {
		return f(f(x));
	};
}


module.exports = two;
