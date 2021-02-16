const Decorator = function () {
    this.stock = []
}

Decorator.prototype.addPaintToStock = function (paint) {
    this.stock.push(paint)
    return this.stock.length;
}

module.exports = Decorator;