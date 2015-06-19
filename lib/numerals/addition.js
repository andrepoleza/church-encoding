'use strict';

var successor = require('./successor');

function addition(a) {
	return function(b) {
		return (b)(successor)(a);
	};
}

module.exports = addition;
