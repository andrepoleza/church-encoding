'use strict';

// NOTICE: ALL FUNCTIONS >>>MUST BE<<< CURRIED!

module.exports = {
	churchToInteger: require('./lib/churchToInteger'),
	ifThenElse: require('./lib/ifThenElse'),

	zero: require('./lib/numerals/zero'),
	one: require('./lib/numerals/one'),
	two: require('./lib/numerals/two'),
	three: require('./lib/numerals/three'),

	successor: require('./lib/numerals/successor'),
	addition: require('./lib/numerals/addition'),

	trueExpression: require('./lib/booleans/true'),
	falseExpression: require('./lib/booleans/false'),
	andOperation: require('./lib/booleans/and'),
	orOperation: require('./lib/booleans/or'),
	notOperation: require('./lib/booleans/not'),
	xorOperation: require('./lib/booleans/xor'),
	nandOperation: require('./lib/booleans/nand'),
	norOperation: require('./lib/booleans/nor'),
	xnorOperation: require('./lib/booleans/xnor')
}
