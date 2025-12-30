const palindromes = function(str) {
    const alphanum = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const cleaned = str.toLowerCase().split('').filter(c => alphanum.includes(c)).reverse().join('');
    return cleaned === cleaned.split('').reverse().join('');
};

console.log(palindromes('racecar'));

// Do not edit below this line
module.exports = palindromes;
