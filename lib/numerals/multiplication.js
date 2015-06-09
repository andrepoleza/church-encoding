'use strict';

function multiplication(a) {
	return function(b) {
		return function(f) {
			return function(x) {
				return (a)(b(f))(x);
			};
		};
	};
}

module.exports = multiplication;
