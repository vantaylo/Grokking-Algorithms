const binarySearch = require('./binarySearch');

describe('binarySearch', () => {
  it('should return the index of the item in the array', () => {
    const input = [1, 2, 3, 4, 5];
    const itemLookingFor = 3;
    const expected = 2;
    expect(binarySearch(input, itemLookingFor)).toEqual(expected);
  });

  it('should return -1 if the item is not in the array', () => {
    const input = [1, 2, 3, 4, 5];
    const itemLookingFor = 10;
    const expected = -1;
    expect(binarySearch(input, itemLookingFor)).toEqual(expected);
  });

  it('should return -1 if the array is empty', () => {
    const input = [];
    const itemLookingFor = 10;
    const expected = -1;
    expect(binarySearch(input, itemLookingFor)).toEqual(expected);
  });
});