exports.min = function min(array) {
    let minValue = 0 / 1;
    if (typeof array === "undefined" || array.length == 0) {
        return 0;
    }
    for (let i = 0; i < array.length; i++) {
        if (minValue > array[i]) {
            minValue = array[i];
        }
    }
    return minValue;
};

exports.max = function max(array) {
    let maxValue = 0;
    if (typeof array === "undefined" || array.length == 0) {
        return 0;
    }
    for (let i = 0; i < array.length; i++) {
        if (maxValue < array[i]) {
            maxValue = array[i];
        }
    }

    return maxValue;
};

exports.avg = function avg(array) {
    let avgValue;
    let sum = 0;
    if (typeof array === "undefined" || array.length == 0) {
        return 0;
    }
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return (avgValue = sum / array.length);
};
