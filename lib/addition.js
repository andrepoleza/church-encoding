'use strict'

// λa.λb.f.λx.a f (n f x)
function addition(a) {
	return function(b) {
		return function(f) {
			return function(x) {
				return a(f)(b(f)(x));
			}
		}
	}
}

module.exports = addition;
