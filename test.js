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

var subtraction = ce.subtraction;

test('numerals/subtraction', function(t) {
	t.assert(churchToInteger(subtraction(three)(three)) === 0);
	t.assert(churchToInteger(subtraction(three)(two)) === 1);
	t.assert(churchToInteger(subtraction(three)(one)) === 2);
	t.assert(churchToInteger(subtraction(three)(zero)) === 3);
	t.assert(churchToInteger(subtraction(two)(two)) === 0);
	t.assert(churchToInteger(subtraction(two)(one)) === 1);
	t.assert(churchToInteger(subtraction(two)(zero)) === 2);
	t.assert(churchToInteger(subtraction(one)(one)) === 0);
	t.assert(churchToInteger(subtraction(one)(zero)) === 1);
	t.assert(churchToInteger(subtraction(zero)(zero)) === 0);

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

var isLessOrEqual = ce.isLessOrEqual;

test('predicates/isLessOrEqual', function(t) {
	t.assert(isLessOrEqual(zero)(zero) === trueExpression);
	t.assert(isLessOrEqual(zero)(one) === trueExpression);
	t.assert(isLessOrEqual(zero)(two) === trueExpression);
	t.assert(isLessOrEqual(zero)(three) === trueExpression);
	t.assert(isLessOrEqual(one)(zero) === falseExpression);
	t.assert(isLessOrEqual(one)(one) === trueExpression);
	t.assert(isLessOrEqual(one)(two) === trueExpression);
	t.assert(isLessOrEqual(one)(three) === trueExpression);
	t.assert(isLessOrEqual(two)(zero) === falseExpression);
	t.assert(isLessOrEqual(two)(one) === falseExpression);
	t.assert(isLessOrEqual(two)(two) === trueExpression);
	t.assert(isLessOrEqual(two)(three) === trueExpression);
	t.assert(isLessOrEqual(three)(zero) === falseExpression);
	t.assert(isLessOrEqual(three)(one) === falseExpression);
	t.assert(isLessOrEqual(three)(two) === falseExpression);
	t.assert(isLessOrEqual(three)(three) === trueExpression);

	t.end();
});

var isGreaterOrEqual = ce.isGreaterOrEqual;

test('predicates/isGreaterOrEqual', function(t) {
	t.assert(isGreaterOrEqual(zero)(zero) === trueExpression);
	t.assert(isGreaterOrEqual(zero)(one) === falseExpression);
	t.assert(isGreaterOrEqual(zero)(two) === falseExpression);
	t.assert(isGreaterOrEqual(zero)(three) === falseExpression);
	t.assert(isGreaterOrEqual(one)(zero) === trueExpression);
	t.assert(isGreaterOrEqual(one)(one) === trueExpression);
	t.assert(isGreaterOrEqual(one)(two) === falseExpression);
	t.assert(isGreaterOrEqual(one)(three) === falseExpression);
	t.assert(isGreaterOrEqual(two)(zero) === trueExpression);
	t.assert(isGreaterOrEqual(two)(one) === trueExpression);
	t.assert(isGreaterOrEqual(two)(two) === trueExpression);
	t.assert(isGreaterOrEqual(two)(three) === falseExpression);
	t.assert(isGreaterOrEqual(three)(zero) === trueExpression);
	t.assert(isGreaterOrEqual(three)(one) === trueExpression);
	t.assert(isGreaterOrEqual(three)(two) === trueExpression);
	t.assert(isGreaterOrEqual(three)(three) === trueExpression);

	t.end();
});

var areEqual = ce.areEqual;

test('predicates/areEqual', function(t) {
	t.assert(areEqual(zero)(zero) === trueExpression);
	t.assert(areEqual(zero)(one) === falseExpression);
	t.assert(areEqual(zero)(two) === falseExpression);
	t.assert(areEqual(zero)(three) === falseExpression);
	t.assert(areEqual(one)(zero) === falseExpression);
	t.assert(areEqual(one)(one) === trueExpression);
	t.assert(areEqual(one)(two) === falseExpression);
	t.assert(areEqual(one)(three) === falseExpression);
	t.assert(areEqual(two)(zero) === falseExpression);
	t.assert(areEqual(two)(one) === falseExpression);
	t.assert(areEqual(two)(two) === trueExpression);
	t.assert(areEqual(two)(three) === falseExpression);
	t.assert(areEqual(three)(zero) === falseExpression);
	t.assert(areEqual(three)(one) === falseExpression);
	t.assert(areEqual(three)(two) === falseExpression);
	t.assert(areEqual(three)(three) === trueExpression);

	t.end();
});

var areNotEqual = ce.areNotEqual;

test('predicates/areNotEqual', function(t) {
	t.assert(areNotEqual(zero)(zero) === falseExpression);
	t.assert(areNotEqual(zero)(one) === trueExpression);
	t.assert(areNotEqual(zero)(two) === trueExpression);
	t.assert(areNotEqual(zero)(three) === trueExpression);
	t.assert(areNotEqual(one)(zero) === trueExpression);
	t.assert(areNotEqual(one)(one) === falseExpression);
	t.assert(areNotEqual(one)(two) === trueExpression);
	t.assert(areNotEqual(one)(three) === trueExpression);
	t.assert(areNotEqual(two)(zero) === trueExpression);
	t.assert(areNotEqual(two)(one) === trueExpression);
	t.assert(areNotEqual(two)(two) === falseExpression);
	t.assert(areNotEqual(two)(three) === trueExpression);
	t.assert(areNotEqual(three)(zero) === trueExpression);
	t.assert(areNotEqual(three)(one) === trueExpression);
	t.assert(areNotEqual(three)(two) === trueExpression);
	t.assert(areNotEqual(three)(three) === falseExpression);

	t.end();
});

var isLess = ce.isLess;

test('predicates/isLess', function(t) {
	t.assert(isLess(zero)(zero) === falseExpression);
	t.assert(isLess(zero)(one) === trueExpression);
	t.assert(isLess(zero)(two) === trueExpression);
	t.assert(isLess(zero)(three) === trueExpression);
	t.assert(isLess(one)(zero) === falseExpression);
	t.assert(isLess(one)(one) === falseExpression);
	t.assert(isLess(one)(two) === trueExpression);
	t.assert(isLess(one)(three) === trueExpression);
	t.assert(isLess(two)(zero) === falseExpression);
	t.assert(isLess(two)(one) === falseExpression);
	t.assert(isLess(two)(two) === falseExpression);
	t.assert(isLess(two)(three) === trueExpression);
	t.assert(isLess(three)(zero) === falseExpression);
	t.assert(isLess(three)(one) === falseExpression);
	t.assert(isLess(three)(two) === falseExpression);
	t.assert(isLess(three)(three) === falseExpression);

	t.end();
});

var isGreater = ce.isGreater;

test('predicates/isGreater', function(t) {
	t.assert(isGreater(zero)(zero) === falseExpression);
	t.assert(isGreater(zero)(one) === falseExpression);
	t.assert(isGreater(zero)(two) === falseExpression);
	t.assert(isGreater(zero)(three) === falseExpression);
	t.assert(isGreater(one)(zero) === trueExpression);
	t.assert(isGreater(one)(one) === falseExpression);
	t.assert(isGreater(one)(two) === falseExpression);
	t.assert(isGreater(one)(three) === falseExpression);
	t.assert(isGreater(two)(zero) === trueExpression);
	t.assert(isGreater(two)(one) === trueExpression);
	t.assert(isGreater(two)(two) === falseExpression);
	t.assert(isGreater(two)(three) === falseExpression);
	t.assert(isGreater(three)(zero) === trueExpression);
	t.assert(isGreater(three)(one) === trueExpression);
	t.assert(isGreater(three)(two) === trueExpression);
	t.assert(isGreater(three)(three) === falseExpression);

	t.end();
});
