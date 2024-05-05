//2. Write a JavaScript program to find the first index of a given element in an array using the linear search algorithm.
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index of the first occurrence of the target element
        }
    }
    return -1; // Return -1 if the target element is not found in the array
}

// Example usage:
let array = [3, 6, 9, 12, 15, 18];
let targetElement = 12;
let firstIndex = linearSearch(array, targetElement);

if (firstIndex !== -1) {
    console.log("The first index of " + targetElement + " in the array is: " + firstIndex);
} else {
    console.log(targetElement + " is not found in the array.");
}
