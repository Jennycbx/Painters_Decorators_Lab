const assert = require('assert')
const Room = require('../room.js')


describe('Room', function () {

    let room;

    beforeEach(function () {
        room = new Room(50, false)
    })

    it('should have an area', function () {
        const actual = room.area;
        assert.strictEqual(actual, 50)

    })

    it('should not start painted' , function () {
        const actual = room.painted;
        assert.strictEqual(actual, false)
    })

    it('has been painted', function () {
        room.painted = true
        const actual = room.painted;
        assert.strictEqual(actual, true)
    })
})