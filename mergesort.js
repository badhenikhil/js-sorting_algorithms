function mergeSort(input) {
  if (input.length < 2) return input;

  const mid = Math.floor(input.length / 2);
  const leftArray = input.slice(0, mid);
  const rightArray = input.slice(mid);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray, rightArray) {
  const sortedArray = [];
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] < rightArray[0]) sortedArray.push(leftArray.shift());
    else sortedArray.push(rightArray.shift());
  }

  return [...sortedArray, ...leftArray, ...rightArray];
}

module.exports = mergeSort;
