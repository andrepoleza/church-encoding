'use strict';

function three(f) {
	return function(x) {
		return f(f(f(x)));
	};
}

module.exports = three;
