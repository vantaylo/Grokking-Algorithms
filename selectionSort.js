function findSmallestValue(array) {
  currentSmallestValue = 0;
  indexCurrentSmallestValue = 0;

for (i = 0; i <= array.length; i++) {
  if (arr[i] < currentSmallestValue) {
    currentSmallestValue = arr[i];
    indexCurrentSmallestValue = i;
  }
}

return indexCurrentSmallestValue;

}