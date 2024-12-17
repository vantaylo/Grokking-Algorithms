const quickSort = require('./quickSort');

describe('quickSort function', () => {
  it('should sort an empty array', () => {
    const input = [];
    const expected = [];
    expect(quickSort(input)).toEqual(expected);
  });

  it('should sort an already sorted array', () => {
    const input = [1, 2, 3, 4, 5];
    const expected = [1, 2, 3, 4, 5];
    expect(quickSort(input)).toEqual(expected);
  });

  it('should sort a reverse sorted array', () => {
    const input = [5, 4, 3, 2, 1];
    const expected = [1, 2, 3, 4, 5];
    expect(quickSort(input)).toEqual(expected);
  });

  it('should sort an array with duplicate values', () => {
    const input = [5, 2, 5, 1, 2];
    const expected = [1, 2, 2, 5, 5];
    expect(quickSort(input)).toEqual(expected);
  });

  it('should sort an array with negative values', () => {
    const input = [-5, 2, -5, 1, -2];
    const expected = [-5, -5, -2, 1, 2];
    expect(quickSort(input)).toEqual(expected);
  });

  it('should sort a random array', () => {
    const input = [3, 1, 4, 1, 5, 9, 2, 6];
    const expected = [1, 1, 2, 3, 4, 5, 6, 9];
    expect(quickSort(input)).toEqual(expect.arrayContaining(expected));
    expect(quickSort(input)).toEqual(expected);
  });
  
});