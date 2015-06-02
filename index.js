'use strict';

// NOTICE: ALL FUNCTIONS >>>MUST BE<<< CURRIED!

// Converts the Church number "n" (a function) to its correspondent integer.
module.exports.churchToInteger = function(n) {
	return n(function(x) { return x + 1; })(0);
};

// Applies "f" to "x" zero times.
// λf.λx.x
module.exports.zero = function(f) {
	return function(x) {
		return x;
	};
};

// Applies the fn "f" to the arg "x" once.
// λf.λx.f x
module.exports.one = function(f) {
	return function(x) {
		return f(x);
	};
};

// Applies the fn "f" to the arg "x" twice.
// λf.λx.f (f x)
module.exports.two = function(f) {
	return function(x) {
		return f(f(x));
	};
};

// Applies the fn "f" to the arg "x" three times.
// λf.λx.f (f (f x))
module.exports.three = function(f) {
	return function(x) {
		return f(f(f(x)));
	};
};

// Sends the arg "f" to the fn "n" and then applies again.
// λn.λf.λx.f (n f x)
module.exports.successor = function(n) {
	return function(f) {
		return function(x) {
			return f(n(f)(x));
		};
	};
};

// Adds "a" to "b".
// -> λa.λb.f.λx.a f (n f x)
module.exports.addition = function(a) {
	return function(b) {
		return function(f) {
			return function(x) {
				return a(f)(b(f)(x));
			};
		};
	};
};
