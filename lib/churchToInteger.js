'use strict';

function churchToInteger(n) {
	return n(function(x) { return x + 1; })(0);
}

module.exports = churchToInteger;
