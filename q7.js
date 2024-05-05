//7. Write a JavaScript program to sort a list of elements using Bubble sort
function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

var elements = [5, 3, 8, 4, 2];
var sortedElements = bubbleSort(elements);
console.log(sortedElements);