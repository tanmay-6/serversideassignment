/*
18. Write a JavaScript function that takes a string with both
lowercase and upper case letters as a parameter. It converts upper
case letters to lower case, and lower case letters to upper case.
*/
function convertCase(str) {
    let convertedStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            convertedStr += str[i].toLowerCase();
        } else {
            convertedStr += str[i].toUpperCase();
        }
    }
    return convertedStr;
}

// Example usage
var mixedCaseStr = "Hello World";
var convertedStr = convertCase(mixedCaseStr);
console.log(convertedStr); // hELLO wORLD