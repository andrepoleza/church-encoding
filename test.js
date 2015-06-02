'use strict';

var test = require('ava');
var churchEncoding = require('./');

// Aliases
var ce = churchEncoding;
var churchToInteger = ce.churchToInteger;
var zero = ce.zero;
var one = ce.one;
var two = ce.two;
var three = ce.three;
var successor = ce.successor;
var addition = ce.addition;

test('ensures that all church numbers are functions', function(t) {
	t.assert(typeof zero === 'function');
	t.assert(typeof one === 'function');
	t.assert(typeof two === 'function');
	t.assert(typeof three === 'function');

	t.end();
});

test('ensures that all church numbers are equal to its integer numbers', function(t) {
	t.assert(churchToInteger(zero) === 0)
	t.assert(churchToInteger(one) === 1);
	t.assert(churchToInteger(two) === 2);
	t.assert(churchToInteger(three) === 3);

	t.end();
});

test('ensures that successor function adds one to the argument', function(t) {
	t.assert(churchToInteger(successor(zero)) === 1);
	t.assert(churchToInteger(successor(successor(zero))) === 2);
	t.assert(churchToInteger(successor(successor(successor(zero)))) === 3);

	t.end();
});

test('ensures that addition function really adds the 1st arg to 2nd', function(t) {
	t.assert(churchToInteger(addition(one)(one)) === 2);
	t.assert(churchToInteger(addition(zero)(one)) === 1);
	t.assert(churchToInteger(addition(two)(two)) === churchToInteger(successor(successor(two))));

	t.end();
});

var trueExpression = ce.trueExpression;
var falseExpression = ce.falseExpression;
var ifThenElse = ce.ifThenElse;

var ifBranch = function() { };
var elseBranch = function() { };

test('checks if the test chooses the first branch if the condition is true', function(t) {
	t.assert(ifThenElse(trueExpression)(ifBranch)(elseBranch) === ifBranch);

	t.end();
});

test('checks if the test chooses the second branch if the condition is false', function(t) {
	t.assert(ifThenElse(falseExpression)(ifBranch)(elseBranch) === elseBranch);

	t.end();
});
