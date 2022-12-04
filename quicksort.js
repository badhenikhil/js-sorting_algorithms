function quicksort(input) {
  if (input.length < 2) return input;

  //pick a pivot elm
  const pivotElm = input[input.length - 1];

  //start from left
  //if elm is less than pivot push to left array
  //else push to right array
  const leftArray = [];
  const rightArray = [];

  for (let i = 0, len = input.length - 1; i < len; i++) {
    if (input[i] < pivotElm) leftArray.push(input[i]);
    else rightArray.push(input[i]);
  }
  return [
    ...quicksort([...leftArray]),
    pivotElm,
    ...quicksort([...rightArray]),
  ];
}

module.exports = quicksort;
