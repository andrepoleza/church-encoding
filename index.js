'use strict';

module.exports = {
	churchToInteger: require('./lib/churchToInteger'),
	integerToChurch: require('./lib/integerToChurch'),
	ifThenElse: require('./lib/ifThenElse'),

	// numerals
	zero: require('./lib/numerals/zero'),
	one: require('./lib/numerals/one'),
	two: require('./lib/numerals/two'),
	three: require('./lib/numerals/three'),
	successor: require('./lib/numerals/successor'),
	addition: require('./lib/numerals/addition'),
	multiplication: require('./lib/numerals/multiplication'),
	exponentiation: require('./lib/numerals/exponentiation'),
	predecessor: require('./lib/numerals/predecessor'),

	// booleans
	trueExpression: require('./lib/booleans/true'),
	falseExpression: require('./lib/booleans/false'),
	andOperation: require('./lib/booleans/and'),
	orOperation: require('./lib/booleans/or'),
	notOperation: require('./lib/booleans/not'),
	xorOperation: require('./lib/booleans/xor'),
	nandOperation: require('./lib/booleans/nand'),
	norOperation: require('./lib/booleans/nor'),
	xnorOperation: require('./lib/booleans/xnor'),

	// predicates
	isZero: require('./lib/predicates/isZero')
};
