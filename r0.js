//10. Write a JavaScript function to validate whether a given value type is null or not.
function isNull(value) {
    return value === null;
}

console.log(isNull(null)); // true
console.log(isNull('test')); // false