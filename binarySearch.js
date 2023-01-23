function binarySearch(array, itemLookingFor) {
  let lowestIndex = 0;
  let highestIndex = length(array);

  while (lowestIndex <= highestIndex) {
    let middleIndex = lowestIndex + highestIndex / 2;
    let guess = array[middleIndex];

    if (guess === itemLookingFor) {
      return middleIndex;
    }

    if (guess > itemLookingFor) {
      highestIndex = middleIndex - 1;
    } else {
      lowestIndex = middleIndex + 1;
    }

    return null;
  }
}