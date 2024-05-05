//9. Write a JavaScript program to check if a numeric array is sorted or not.
function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}


const array1 = [1, 2, 3, 4, 5];
console.log(isSorted(array1)); //  true

const array2 = [5, 4, 3, 2, 1];
console.log(isSorted(array2)); //  false