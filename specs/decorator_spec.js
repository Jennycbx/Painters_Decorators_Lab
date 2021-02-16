const assert = require('assert')
const Decorator = require('../decorator.js')
const Paint = require('../paint.js');
const Room = require('../room.js');

describe('Decorator', function () {

    let decorator;

    beforeEach(function () {
        decorator = new Decorator()
        paint1 = new Paint()
        room1 = new Room(10, true)
    })

    it('should start with no stock', function () {
        const actual = decorator.stock;
        assert.deepStrictEqual(actual, [])
    })

    it('should be able to add a can of paint to stock', function () {
        decorator.addPaintToStock('paint')
        const expected = ['paint'];
        const actual = decorator.stock
        assert.deepStrictEqual(actual, expected)
    })

    it('should calculate total litres in stock', function () {
        decorator.addPaintToStock(paint1);
        const actual = decorator.calculateLitresInStock()
        assert.strictEqual(actual, 20)
    })

    it('should have enough to paint room', function () {
        decorator.addPaintToStock(paint1)
        const actual = decorator.enoughPaint(room1);
        assert.strictEqual(actual, true)
    })

    it('can room be painted', function () {
        decorator.addPaintToStock(paint1);
        decorator.enoughPaint(room1);
        const actual = room1.painted;
        assert.strictEqual(actual, true)
    })
})