const convertToCelsius = function(t) {
    return (t - 32) * (5 / 9);
};

const convertToFahrenheit = function(t) {
    return (9 / 5) * t - 32;
};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit
};
