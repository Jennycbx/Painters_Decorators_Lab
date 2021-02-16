const Paint = function (litresOfPaint) {
    this.litresOfPaint = litresOfPaint
}

Paint.prototype.setPaintEmpty = function () {
    this.litresOfPaint = 0
}

Paint.prototype.emptyCan = function () {
    this.litresOfPaint = 0
}


module.exports = Paint;