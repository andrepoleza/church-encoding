'use strict';

var test = require('ava');
var churchEncoding = require('./');

// Aliases
var ce = churchEncoding;

var zero = ce.zero;
var one = ce.one;
var two = ce.two;
var three = ce.three;

var churchToInteger = ce.churchToInteger;

test('churchToInteger', function(t) {
	t.assert(churchToInteger(zero) === 0);
	t.assert(churchToInteger(one) === 1);
	t.assert(churchToInteger(two) === 2);
	t.assert(churchToInteger(three) === 3);

	t.end();
});

var integerToChurch = ce.integerToChurch;

test('integerToChurch', function(t) {
	t.assert(integerToChurch(0) === zero);
	t.assert(churchToInteger(integerToChurch(1)) === 1);
	t.assert(churchToInteger(integerToChurch(2)) === 2);
	t.assert(churchToInteger(integerToChurch(3)) === 3);

	t.end();
});

var successor = ce.successor;

test('numerals/successor', function(t) {
	t.assert(churchToInteger(successor(zero)) === 1);
	t.assert(churchToInteger(successor(one)) === 2);
	t.assert(churchToInteger(successor(two)) === 3);
	t.assert(churchToInteger(successor(three)) === 4);

	t.assert(churchToInteger(successor(successor(zero))) === 2);
	t.assert(churchToInteger(successor(successor(successor(zero)))) === 3);
	t.assert(churchToInteger(successor(successor(successor(successor(zero))))) === 4);

	t.end();
});

var addition = ce.addition;

test('numerals/addition', function(t) {
	t.assert(churchToInteger(addition(zero)(zero)) === 0);
	t.assert(churchToInteger(addition(zero)(one)) === 1);
	t.assert(churchToInteger(addition(zero)(two)) === 2);
	t.assert(churchToInteger(addition(zero)(three)) === 3);
	t.assert(churchToInteger(addition(one)(one)) === 2);
	t.assert(churchToInteger(addition(one)(two)) === 3);
	t.assert(churchToInteger(addition(one)(three)) === 4);
	t.assert(churchToInteger(addition(two)(two)) === 4);
	t.assert(churchToInteger(addition(two)(three)) === 5);
	t.assert(churchToInteger(addition(three)(three)) === 6);

	t.end();
});

var multiplication = ce.multiplication;

test('numerals/multiplication', function(t) {
	t.assert(churchToInteger(multiplication(one)(one)) === 1);
	t.assert(churchToInteger(multiplication(one)(two)) === 2);
	t.assert(churchToInteger(multiplication(one)(three)) === 3);
	t.assert(churchToInteger(multiplication(two)(three)) === 6);
	t.assert(churchToInteger(multiplication(three)(three)) === 9);

	t.end();
});

var exponentiation = ce.exponentiation;

test('numerals/exponentiation', function(t) {
	t.assert(churchToInteger(exponentiation(one)(one)) === 1);
	t.assert(churchToInteger(exponentiation(one)(two)) === 1);
	t.assert(churchToInteger(exponentiation(one)(three)) === 1);
	t.assert(churchToInteger(exponentiation(two)(one)) === 2);
	t.assert(churchToInteger(exponentiation(two)(two)) === 4);
	t.assert(churchToInteger(exponentiation(two)(three)) === 8);
	t.assert(churchToInteger(exponentiation(three)(one)) === 3);
	t.assert(churchToInteger(exponentiation(three)(two)) === 9);
	t.assert(churchToInteger(exponentiation(three)(three)) === 27);

	t.end();
});

var predecessor = ce.predecessor;

test('numerals/predecessor', function(t) {
	t.assert(churchToInteger(predecessor(zero)) === 0);
	t.assert(churchToInteger(predecessor(one)) === 0);
	t.assert(churchToInteger(predecessor(two)) === 1);
	t.assert(churchToInteger(predecessor(three)) === 2);
	t.assert(churchToInteger(predecessor(successor(three))) === 3);

	t.end();
});

var trueExpression = ce.trueExpression;
var falseExpression = ce.falseExpression;
var ifThenElse = ce.ifThenElse;

var ifBranch = function() { };
var elseBranch = function() { };

test('if', function(t) {
	t.assert(ifThenElse(trueExpression)(ifBranch)(elseBranch) === ifBranch);
	t.assert(ifThenElse(trueExpression)(ifBranch)(elseBranch) !== elseBranch);

	t.end();
});

test('else', function(t) {
	t.assert(ifThenElse(falseExpression)(ifBranch)(elseBranch) === elseBranch);
	t.assert(ifThenElse(falseExpression)(ifBranch)(elseBranch) !== ifBranch);

	t.end();
});

var andOperation = ce.andOperation;

test('booleans/and', function(t) {
	t.assert(andOperation(trueExpression)(trueExpression)(true)(false) === true);
	t.assert(andOperation(trueExpression)(falseExpression)(true)(false) === false);
	t.assert(andOperation(falseExpression)(trueExpression)(true)(false) === false);
	t.assert(andOperation(falseExpression)(falseExpression)(true)(false) === false);

	t.end();
});

var orOperation = ce.orOperation;

test('booleans/or', function(t) {
	t.assert(orOperation(trueExpression)(trueExpression)(true)(false) === true);
	t.assert(orOperation(trueExpression)(falseExpression)(true)(false) === true);
	t.assert(orOperation(falseExpression)(trueExpression)(true)(false) === true);
	t.assert(orOperation(falseExpression)(falseExpression)(true)(false) === false);

	t.end();
});

var notOperation = ce.notOperation;

test('booleans/not', function(t) {
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

test('booleans/xor', function(t) {
	t.assert(xorOperation(trueExpression)(trueExpression)(true)(false) === false);
	t.assert(xorOperation(trueExpression)(falseExpression)(true)(false) === true);
	t.assert(xorOperation(falseExpression)(trueExpression)(true)(false) === true);
	t.assert(xorOperation(falseExpression)(falseExpression)(true)(false) === false);

	t.end();
});

var nandOperation = ce.nandOperation;

test('booleans/nand', function(t) {
	t.assert(nandOperation(trueExpression)(trueExpression)(true)(false) === false);
	t.assert(nandOperation(trueExpression)(falseExpression)(true)(false) === true);
	t.assert(nandOperation(falseExpression)(trueExpression)(true)(false) === true);
	t.assert(nandOperation(falseExpression)(falseExpression)(true)(false) === true);

	t.end();
});

var norOperation = ce.norOperation;

test('booleans/nor', function(t) {
	t.assert(norOperation(trueExpression)(trueExpression)(true)(false) === false);
	t.assert(norOperation(trueExpression)(falseExpression)(true)(false) === false);
	t.assert(norOperation(falseExpression)(trueExpression)(true)(false) === false);
	t.assert(norOperation(falseExpression)(falseExpression)(true)(false) === true);

	t.end();
});

var xnorOperation = ce.xnorOperation;

test('booleans/xnor', function(t) {
	t.assert(xnorOperation(trueExpression)(trueExpression)(true)(false) === true);
	t.assert(xnorOperation(trueExpression)(falseExpression)(true)(false) === false);
	t.assert(xnorOperation(falseExpression)(trueExpression)(true)(false) === false);
	t.assert(xnorOperation(falseExpression)(falseExpression)(true)(false) === true);

	t.end();
});

var isZero = ce.isZero;

test('predicates/isZero', function(t) {
	t.assert(isZero(zero) === trueExpression);
	t.assert(isZero(one) === falseExpression);
	t.assert(isZero(two) === falseExpression);
	t.assert(isZero(three) === falseExpression);

	t.end();
});
