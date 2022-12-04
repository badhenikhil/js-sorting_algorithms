function bubbleSort(input) {
  if (input.length < 2) return input;
  const n = input.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (input[j] > input[j + 1]) {
        const temp = input[j];
        input[j] = input[j + 1];
        input[j + 1] = temp;
      }
    }
  }
  return input;
}

module.exports = bubbleSort;
