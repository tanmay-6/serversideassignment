//6. Write a JavaScript program to sort a list of elements using Insertion sort
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

const elements = [5, 3, 8, 4, 2];
const sortedElements = insertionSort(elements);
console.log(sortedElements);