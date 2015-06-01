// Applies "f" to "x" zero times.
// λf.λx.x
var zero = function(f) {
    return function(x) {
        return x;
    }
};

// Applies the fn "f" to the arg "x" once.
// λf.λx.f x
var one = function(f) {
    return function(x) {
        return f(x);
    }
};

// Applies the fn "f" to the arg "x" twice.
// λf.λx.f (f x)
var two = function(f) {
    return function(x) {
        return f(f(x));
    }
};

// Applies the fn "f" to the arg "x" three times.
// λf.λx.f (f (f x))
var three = function(f) {
    return function(x) {
        return f(f(f(x)));
    }
};
