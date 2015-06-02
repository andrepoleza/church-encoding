'use strict';

// NOTICE: ALL FUNCTIONS >>>MUST BE<<< CURRIED!

// Converts the Church number "n" (a function) to its correspondent integer.
function churchToInteger(n) {
	return n(function(x) { return x + 1; })(0);
}

// λf.λx.x
function zero(f) {
	return function(x) {
		return x;
	}
}

// λf.λx.f x
function one(f) {
	return function(x) {
		return f(x);
	}
}

// λf.λx.f (f x)
function two(f) {
	return function(x) {
		return f(f(x));
	}
}

// λf.λx.f (f (f x))
function three(f) {
	return function(x) {
		return f(f(f(x)));
	}
}

// λn.λf.λx.f (n f x)
function successor(n) {
	return function(f) {
		return function(x) {
			return f(n(f)(x));
		}
	}
}

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

module.exports.zero = zero;
module.exports.one = one;
module.exports.two = two;
module.exports.three = three;
module.exports.successor = successor;
module.exports.addition = addition;
module.exports.churchToInteger = churchToInteger;
