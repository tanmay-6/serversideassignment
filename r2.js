//12. Write a JavaScript function to validate whether a given value is RegExp or not.
function isRegExp(value) {
    return Object.prototype.toString.call(value) === '[object RegExp]';
}

console.log(isRegExp(/test/)); // true
console.log(isRegExp('test')); // false