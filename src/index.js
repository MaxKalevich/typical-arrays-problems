exports.min = function min(array) {
    if (array === undefined || array.length === 0) return 0;
    return Math.min.apply(null, array.sort((a, b) => b - a));
}

exports.max = function max(array) {
    if (array === undefined || array.length === 0) return 0;
    return Math.max.apply(null, array.sort((a, b) => a - b));
}

exports.avg = function avg(array) {
    if (array === undefined || array.length === 0) return 0;
    return array.reduce((a, b) => (a + b)) / array.length;
}
