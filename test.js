'use strict';

var test = require('ava');
var churchEncoding = require('./');

// Aliases
var ce = churchEncoding;

var zero = ce.zero;
var one = ce.one;
var two = ce.two;
var three = ce.three;

test('all church numbers === functions', function(t) {
	t.assert(typeof zero === 'function');
	t.assert(typeof one === 'function');
	t.assert(typeof two === 'function');
	t.assert(typeof three === 'function');

	t.end();
});

var churchToInteger = ce.churchToInteger;

test('church numerals', function(t) {
	t.assert(churchToInteger(zero) === 0);
	t.assert(churchToInteger(one) === 1);
	t.assert(churchToInteger(two) === 2);
	t.assert(churchToInteger(three) === 3);

	t.end();
});

var successor = ce.successor;

test('successor', function(t) {
	t.assert(churchToInteger(successor(zero)) === 1);
	t.assert(churchToInteger(successor(successor(zero))) === 2);
	t.assert(churchToInteger(successor(successor(successor(zero)))) === 3);

	t.end();
});

var addition = ce.addition;

test('addition', function(t) {
	t.assert(churchToInteger(addition(zero)(zero)) === 0);
	t.assert(churchToInteger(addition(zero)(one)) === 1);
	t.assert(churchToInteger(addition(one)(zero)) === 1);
	t.assert(churchToInteger(addition(one)(one)) === 2);

	t.assert(churchToInteger(addition(two)(two)) === churchToInteger(successor(successor(two))));

	t.end();
});

var trueExpression = ce.trueExpression;
var falseExpression = ce.falseExpression;
var ifThenElse = ce.ifThenElse;

var ifBranch = function() { };
var elseBranch = function() { };

test('if branch', function(t) {
	t.assert(ifThenElse(trueExpression)(ifBranch)(elseBranch) === ifBranch);

	t.end();
});

test('else branch', function(t) {
	t.assert(ifThenElse(falseExpression)(ifBranch)(elseBranch) === elseBranch);

	t.end();
});

var andOperation = ce.andOperation;

test('and operation', function(t) {
	t.assert(andOperation(trueExpression)(trueExpression)(true)(false) === true);
	t.assert(andOperation(trueExpression)(falseExpression)(true)(false) === false);
	t.assert(andOperation(falseExpression)(trueExpression)(true)(false) === false);
	t.assert(andOperation(falseExpression)(falseExpression)(true)(false) === false);

	t.end();
});

var orOperation = ce.orOperation;

test('or operation', function(t) {
	t.assert(orOperation(trueExpression)(trueExpression)(true)(false) === true);
	t.assert(orOperation(trueExpression)(falseExpression)(true)(false) === true);
	t.assert(orOperation(falseExpression)(trueExpression)(true)(false) === true);
	t.assert(orOperation(falseExpression)(falseExpression)(true)(false) === false);

	t.end();
});

var notOperation = ce.notOperation;

test('not operation', function(t) {
	t.assert(notOperation(trueExpression)(true)(false) === false);
	t.assert(notOperation(falseExpression)(true)(false) === true);

	t.assert(notOperation(andOperation(trueExpression)(trueExpression))(true)(false) === false);
	t.assert(notOperation(andOperation(trueExpression)(falseExpression))(true)(false) === true);
	t.assert(notOperation(andOperation(falseExpression)(trueExpression))(true)(false) === true);
	t.assert(notOperation(andOperation(falseExpression)(falseExpression))(true)(false) === true);

	t.assert(notOperation(orOperation(trueExpression)(trueExpression))(true)(false) === false);
	t.assert(notOperation(orOperation(trueExpression)(falseExpression))(true)(false) === false);
	t.assert(notOperation(orOperation(falseExpression)(trueExpression))(true)(false) === false);
	t.assert(notOperation(orOperation(falseExpression)(falseExpression))(true)(false) === true);

	t.end();
});

var xorOperation = ce.xorOperation;

test('xor operation', function(t) {
	t.assert(xorOperation(trueExpression)(trueExpression)(true)(false) === false);
	t.assert(xorOperation(trueExpression)(falseExpression)(true)(false) === true);
	t.assert(xorOperation(falseExpression)(trueExpression)(true)(false) === true);
	t.assert(xorOperation(falseExpression)(falseExpression)(true)(false) === false);

	t.end();
});

var nandOperation = ce.nandOperation;

test('nand operation', function(t) {
	t.assert(nandOperation(trueExpression)(trueExpression)(true)(false) === false);
	t.assert(nandOperation(trueExpression)(falseExpression)(true)(false) === true);
	t.assert(nandOperation(falseExpression)(trueExpression)(true)(false) === true);
	t.assert(nandOperation(falseExpression)(falseExpression)(true)(false) === true);

	t.end();
});

var norOperation = ce.norOperation;

test('nor operation', function(t) {
	t.assert(norOperation(trueExpression)(trueExpression)(true)(false) === false);
	t.assert(norOperation(trueExpression)(falseExpression)(true)(false) === false);
	t.assert(norOperation(falseExpression)(trueExpression)(true)(false) === false);
	t.assert(norOperation(falseExpression)(falseExpression)(true)(false) === true);

	t.end();
});

var xnorOperation = ce.xnorOperation;

test('xnor operation', function(t) {
	t.assert(xnorOperation(trueExpression)(trueExpression)(true)(false) === true);
	t.assert(xnorOperation(trueExpression)(falseExpression)(true)(false) === false);
	t.assert(xnorOperation(falseExpression)(trueExpression)(true)(false) === false);
	t.assert(xnorOperation(falseExpression)(falseExpression)(true)(false) === true);

	t.end();
});
