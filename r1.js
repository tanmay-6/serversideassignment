//11. Write a JavaScript function to validate whether a given value is a number or not.
function isNumber(value) {
    return !isNaN(value);
}

console.log(isNumber(12)); // true
console.log(isNumber('12')); // true
console.log(isNumber('12a')); // false