//1. Write a JavaScript program to find all the index positions of a given word within a given string.
function findWordIndexes(inputString, word) {
    let indexes = [];
    let currentIndex = inputString.indexOf(word);

    while (currentIndex !== -1) {
        indexes.push(currentIndex);
        currentIndex = inputString.indexOf(word, currentIndex + 1);
    }

    return indexes;
}

// Example usage:
let inputString = "JavaScript is a programming language, JavaScript is widely used for web development.";
let word = "JavaScript";
let wordIndexes = findWordIndexes(inputString, word);

console.log("Indexes of the word '" + word + "': " + wordIndexes.join(", "));
