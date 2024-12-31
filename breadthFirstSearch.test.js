const breadthFirstSearch = require('./breadthFirstSearch');

describe('Breadth First Search algorithm', () => {
  it('should return the correct traversal path', () => {
    const graph = {
      a: ['b', 'c'],
      b: ['a', 'd'],
      c: ['a', 'd'],
      d: ['b', 'c'],
    };
    const start = 'a';
    const expected = ['a', 'b', 'c', 'd'];
    expect(breadthFirstSearch(graph, start)).toEqual(expected);
  });

  it('should return an empty array for an empty graph', () => {
    const graph = {};
    const start = 'a';
    const expected = [];
    expect(breadthFirstSearch(graph, start)).toEqual(expected);
  });

  it('should return the single node for a single node graph', () => {
    const graph = { a: [] };
    const start = 'a';
    const expected = ['a'];
    expect(breadthFirstSearch(graph, start)).toEqual(expected);
  });

  it('should return the correct traversal path for a disconnected graph', () => {
    const graph = {
      a: ['b', 'c'],
      b: ['a', 'd'],
      c: ['a', 'd'],
      d: ['b', 'c'],
      e: ['f'],
      f: ['e'],
    };
    const start = 'a';
    const expected = ['a', 'b', 'c', 'd'];
    expect(breadthFirstSearch(graph, start)).toEqual(expected);
  });

  it('should return the correct traversal path for a cyclic graph', () => {
    const graph = {
      a: ['b', 'c'],
      b: ['a', 'd'],
      c: ['a', 'd'],
      d: ['b', 'c', 'e'],
      e: ['d'],
    };
    const start = 'a';
    const expected = ['a', 'b', 'c', 'd', 'e'];
    expect(breadthFirstSearch(graph, start)).toEqual(expected);
  });

  it('should return the correct traversal path for a graph with multiple edges', () => {
    const graph = {
      a: ['b', 'c'],
      b: ['a', 'c'],
      c: ['a', 'b'],
    };
    const start = 'a';
    const expected = ['a', 'b', 'c'];
    expect(breadthFirstSearch(graph, start)).toEqual(expected);
  });
});
