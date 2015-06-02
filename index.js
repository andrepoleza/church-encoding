'use strict';

// NOTICE: ALL FUNCTIONS >>>MUST BE<<< CURRIED!

module.exports = {
	zero: require('./lib/zero'),
	one: require('./lib/one'),
	two: require('./lib/two'),
	three: require('./lib/three'),
	successor: require('./lib/successor'),
	addition: require('./lib/addition'),
	churchToInteger: require('./lib/churchToInteger'),
	ifThenElse: require('./lib/ifThenElse'),
	trueExpression: require('./lib/true'),
	falseExpression: require('./lib/false'),
	andOperation: require('./lib/and'),
	orOperation: require('./lib/or')
}
