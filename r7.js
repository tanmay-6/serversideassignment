//17. Write a JavaScript function to split a string and convert it into an array of words.
function splitStringIntoArray(str) {
    return str.split(" ");
}

// Example usage
var sentence = "This is a sample sentence";
var wordsArray = splitStringIntoArray(sentence);
console.log(wordsArray);
