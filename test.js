// test.js
const assert = require('assert');
function add(a, b) {
  return a + b;
}
 // Replace with the actual path to your calculator module.

function testAdd() {
  const result = add(2, 3);
  assert.strictEqual(result, 5);
}

testAdd();
