const assert = require('assert');
const add = require('../index');

assert.strictEqual(add(2, 3, 6), 11);
console.log('All tests passed!');
