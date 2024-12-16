function binarySearch(array, itemLookingFor) {
  let lowestIndex = 0;
  let highestIndex = array.length - 1;

  while (lowestIndex <= highestIndex) {
    let middleIndex = Math.floor((lowestIndex + highestIndex) / 2);
    let guess = array[middleIndex];

    if (itemLookingFor === guess) {
      return middleIndex;
    }

    if (itemLookingFor < guess)  {
      highestIndex = middleIndex - 1;
    } 
    
    if (itemLookingFor > guess) {
      lowestIndex = middleIndex + 1;
    }
  }

  return -1;
}

module.exports = binarySearch;