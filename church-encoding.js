// Applies "f" to "x" zero times.
var zero = function(f) {
    return function(x) {
        return x;
    }
}

// Applies the fn "f" to the arg "x" once.
var one = function(f) {
    return function(x) {
        return f(x);
    }
}

// Applies the fn "f" to the arg "x" twice.
var two = function(f) {
    return function(x) {
        return f(f(x));
    }
}

// Applies the fn "f" to the arg "x" three times.
var three = function(f) {
    return function(x) {
        return f(f(f(x)));
    }
}
