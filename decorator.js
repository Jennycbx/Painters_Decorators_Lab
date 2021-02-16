const Paint = require("./paint")
const Room = require("./room")

const Decorator = function (stock=null) {
    this.stock = []
}

Decorator.prototype.paintInStock = function () {
    return this.stock.length
}


Decorator.prototype.addPaintToStock = function (paint) {
    this.stock.push(paint)
}

Decorator.prototype.calculateLitresInStock = function () {
    let totalLitres = this.paintInStock() * 20
    return totalLitres
}


Decorator.prototype.enoughPaint = function (room) {
    if (this.calculateLitresInStock() >= room.area) {
        return true, room.painted = true
    }
    else {
        return false
    }
}


module.exports = Decorator;