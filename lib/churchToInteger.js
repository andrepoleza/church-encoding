'use strict';

// Converts the Church number "n" (a function) to its correspondent integer.
module.exports = function (n) {
	return n(function(x) { return x + 1; })(0);
};
