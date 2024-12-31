const createHashTable = require('./hashTable');

describe('Hash', () => {
  it('insert ', () => {
    const hashTable = createHashTable();
    hashTable.insert('test1', 'test');
    hashTable.insert('test2', 'test2');
    hashTable.insert('test3', 'test3');
    expect(hashTable.lookup('test2')).toEqual('test2');
  });

  it('lookup ', () => {
    const hashTable = createHashTable();
    hashTable.insert('test1', 'test');
    hashTable.insert('test2', 'test2');
    hashTable.insert('test3', 'test3');
    expect(hashTable.lookup('test1')).toEqual('test');
  });

  it('delete ', () => {
    const hashTable = createHashTable();
    hashTable.insert('test1', 'test');
    hashTable.insert('test2', 'test2');
    hashTable.insert('test3', 'test3');
    hashTable.delete('test3');
    expect(hashTable.lookup('test3')).toBeUndefined();
  });

  it('update ', () => {
    const hashTable = createHashTable();
    hashTable.insert('test1', 'test');
    hashTable.insert('test2', 'test2');
    hashTable.insert('test3', 'test3');
    hashTable.update('test1', 'testA');
    expect(hashTable.lookup('test1')).toEqual('testA');
  });

  // *Edge Cases
  // Empty Hash Table
  // Key Not Found
  // Duplicate Keys
  // Null/Undefined Keys or Values

  it('Empty Hash Table', () => {
    const hashTable = createHashTable();
    expect(hashTable.lookup('test')).toBeUndefined();
  });

  it('Key Not Found', () => {
    const hashTable = createHashTable();
    hashTable.insert('test', 'test');
    expect(hashTable.lookup('test2')).toBeUndefined();
  });

  it('Duplicate Keys', () => {
    const hashTable = createHashTable();
    hashTable.insert('test', 'test');
    hashTable.insert('test', 'test2');
    expect(hashTable.lookup('test')).toEqual('test2');
  });

  it('Null/Undefined Keys or Values', () => {
    const hashTable = createHashTable();
    hashTable.insert(null, 'test');
    expect(hashTable.lookup(null)).toEqual('test');
    hashTable.insert('test', null);
    expect(hashTable.lookup('test')).toBeNull();
  });

  // *Collision Handling
  // Collision Resolution
  // Insert Multiple Colliding Keys

  // *Performance and Load
  // Large Dataset Handling
  // Load Factor Behavior
  it('Large Dataset Handling', () => {
    const hashTable = createHashTable();
    for (let i = 0; i < 1000; i++) {
      hashTable.insert(i, i);
    }
    for (let i = 0; i < 1000; i++) {
      expect(hashTable.lookup(i)).toEqual(i);
    }
  });

  // it('Load Factor Behavior', () => {
  //   const hashTable = new HashTable();
  //   for (let i = 0; i < 1000; i++) {
  //     hashTable.insert(i, i);
  //   }
  //   expect(hashTable.loadFactor()).toBeLessThanOrEqual(1);
  // });

  // *Key Types
  // Different Key Types
  // Custom Hash Functions
  // it('Different Key Types', () => {
  //   const hashTable = new HashTable();
  //   hashTable.insert(1, 'test');
  //   hashTable.insert('1', 'test2');
  //   expect(hashTable.lookup(1)).toEqual('test');
  //   expect(hashTable.lookup('1')).toEqual('test2');
  // });

  // *Order and Consistency
  // Consistency
  // Order Irrelevance

  // *Boundary Tests
  // Single Element
  // Maximum Capacity

  // *Hash Function Testing
  // Correct Index Calculation
  // Edge Cases for Hash Function
});

