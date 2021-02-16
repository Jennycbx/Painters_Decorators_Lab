const assert = require('assert')
const Paint = require('../paint.js')

describe('Room', function () {

    let room;

    beforeEach(function () {
        paint = new Paint(15)
    })

    it('should have litres of paint', function () {
        const actual = paint.litresOfPaint;
        assert.strictEqual(actual, 15)
    })

    it('should check if paint can is empty', function () {
        paint.setPaintEmpty()
        const actual = paint.litresOfPaint;
        assert.strictEqual(actual, 0)
    })

    it('can empty itself of paint', function () {
        paint.emptyCan()
        const actual = paint.litresOfPaint;
        assert.strictEqual(actual, 0)
    })
})


