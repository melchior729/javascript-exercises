const add = function(x, y) {
    return x + y;
};

const subtract = function(x, y) {
    return x - y;
};

const sum = function(nums) {
    return nums.reduce((sum, curr) => sum + curr, 0);
};

const multiply = function(nums) {
    return nums.reduce((sum, curr) => sum === 0 ? curr : sum * curr, 0);
};

const power = function(base, exponent) {
    return base ** exponent;
};

const factorial = function(x) {
    let product = 1;
    for (let i = x; i >= 1; i--) {
        product *= i;
    }
    return product;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};
