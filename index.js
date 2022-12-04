const bubbleSort = require("./bubblesort");
const mergeSort = require("./mergesort");
const quicksort = require("./quicksort");
const bastCaseArray = [1, 2, 3, 4];
const averageCaseArray = [10, 4, 6, 9, 28, 56, 0, 45, 74, 97, 34];
const worstCaseArray = Array.from({ length: 100000 }, () =>
  Math.floor(Math.random() * 100001)
);

console.log("-----------------Quick Sort -----------------");
let timeSpan = "quicksort->best case->";
console.time(timeSpan);
quicksort(bastCaseArray);
console.timeEnd(timeSpan);

timeSpan = "quickSort->average case->";
console.time(timeSpan);
quicksort(averageCaseArray);
console.timeEnd(timeSpan);

timeSpan = "quickSort->worst case->";
console.time(timeSpan);
quicksort(worstCaseArray);
console.timeEnd(timeSpan);
console.log("----------------- -----------------");
console.log("-----------------Merge Sort -----------------");
timeSpan = "mergesort->best case->";
console.time(timeSpan);
mergeSort(bastCaseArray);
console.timeEnd(timeSpan);

timeSpan = "mergesort->average case->";
console.time(timeSpan);
mergeSort(averageCaseArray);
console.timeEnd(timeSpan);

timeSpan = "mergesort->worst case->";
console.time(timeSpan);
mergeSort(worstCaseArray);
console.timeEnd(timeSpan);

console.log("----------------- -----------------");
console.log("-----------------Bubble Sort -----------------");
timeSpan = "bubblesort->best case->";
console.time(timeSpan);
bubbleSort(bastCaseArray);
console.timeEnd(timeSpan);

timeSpan = "bubblesort->average case->";
console.time(timeSpan);
bubbleSort(averageCaseArray);
console.timeEnd(timeSpan);

timeSpan = "bubblesort->worst case->";
console.time(timeSpan);
bubbleSort(worstCaseArray);
console.timeEnd(timeSpan);
