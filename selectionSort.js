function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
   let lowestValue = arr[i];
   let indexOflowestValue = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < lowestValue) {
        lowestValue = arr[j];
        indexOflowestValue = j;
      }
    }

    let temp = arr[i];
    arr[i] = arr[indexOflowestValue];
    arr[indexOflowestValue] = temp;
  }

  return arr;
}

module.exports = selectionSort;