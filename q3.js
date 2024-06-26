//3. Write a JavaScript program to sort a list of elements using Quick sort.
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === Math.floor(arr.length / 2)) {
            continue;
        }
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

let arr = [9, 4, 2, 7, 5, 1, 8, 3, 6];
console.log("Original array:", arr);

let sortedArr = quickSort(arr);
console.log("Sorted array:", sortedArr);
