# church-encoding

[![npm version](https://badge.fury.io/js/church-encoding.svg)](http://badge.fury.io/js/church-encoding)
[![Build Status](https://travis-ci.org/andrepoleza/church-encoding.svg?branch=master)](https://travis-ci.org/andrepoleza/church-encoding)
[![Dependency Status](https://david-dm.org/andrepoleza/church-encoding.svg)](https://david-dm.org/andrepoleza/church-encoding)

> [Church Encoding](http://en.wikipedia.org/wiki/Church_encoding) in JavaScript.

## Operations available

* ifThenElse

### Arithmetical
* successor
* addition
* multiplication
* exponentiation
* predecessor
* subtraction

### Logical
* trueExpression
* falseExpression
* andOperation
* orOperation
* notOperation
* xorOperation
* nandOperation
* xnorOperation
* norOperation

### Predicates
* isZero
* isLessOrEqual
* isGreaterOrEqual
* areEqual
* areNotEqual
* isLess

#### Helpers
* churchToInteger
* integerToChurch

## Install

```
$ npm install --save church-encoding
```


## Usage

```js
var churchEncoding = require('church-encoding');

//=> Exposes all functions mentioned above
```
