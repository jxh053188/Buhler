const assert = require('chai').assert;
const balancedBrackets = require('../BalancedBrackets')

describe("Example", function() {
    it("should test", function () {
      assert.strictEqual(balancedBrackets("([])[]({})"), true);
      assert.strictEqual(balancedBrackets("([])"), true);
      assert.strictEqual(balancedBrackets("({})"), true);
      assert.strictEqual(balancedBrackets("()"), true);
      assert.strictEqual(balancedBrackets("{}"), true);
      assert.strictEqual(balancedBrackets( "[]" ), true);
      assert.strictEqual(balancedBrackets( "[(])" ), false);
      assert.strictEqual(balancedBrackets( "[(]))" ), false);
      assert.strictEqual(balancedBrackets( "([)]" ), false);
      assert.strictEqual(balancedBrackets("((()"), false);
      assert.strictEqual(balancedBrackets("("), false);
      assert.strictEqual(balancedBrackets("(("), false);
      assert.strictEqual(balancedBrackets(")"), false);
      assert.strictEqual(balancedBrackets(""), false);
    });
  });