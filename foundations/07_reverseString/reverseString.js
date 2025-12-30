const reverseString = function(string) {
    let letters = [];
    for (let i = string.length - 1; i >= 0; i--) {
        letters.push(string.at(i));
    }
    return letters.join("");
};

// Do not edit below this line
module.exports = reverseString;
