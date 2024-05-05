//5. Write a JavaScript program to sort a list of elements using Heap sort.

function heapSort(arr) {
    buildMaxHeap(arr);
    for (let i = arr.length - 1; i > 0; i--) {
        swap(arr, 0, i);
        heapify(arr, 0, i);
    }
    return arr;
}


function buildMaxHeap(arr) {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, i, n);
    }
}

function heapify(arr, i, n) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest !== i) {
        swap(arr, i, largest);
        heapify(arr, largest, n);
    }
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const arr = [4, 10, 3, 5, 1];
const sortedArr = heapSort(arr);
console.log(sortedArr);