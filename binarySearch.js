function binarySearch(list, item) {
  let lowestIndex = 0;
  let highestIndex = length(list);

  while (lowestIndex <= highestIndex) {
    let middleIndex = lowestIndex + highestIndex / 2;
    let guess = list[middleIndex];

    if (guess === item) {
      return middleIndex;
    }

    if (guess > item) {
      highestIndex = middleIndex - 1;
    } else {
      lowestIndex = middleIndex + 1;
    }

    return null;
  }

}