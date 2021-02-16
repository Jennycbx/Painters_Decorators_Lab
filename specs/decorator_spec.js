const assert = require('assert')
const Decorator = require('../decorator.js')

describe('Decorator', function () {

    let decorator;

    beforeEach(function () {
        decorator = new Decorator()
    })

    it('should start with no stock', function () {
        const actual = decorator.stock;
        assert.deepStrictEqual(actual, [])
    })

    it('should be able to add a can of paint to stock', function () {
        decorator.addPaintToStock(paint1)
        const actual = decorator.stock;
        assert.strictEqual(actual, 1)
    })
})