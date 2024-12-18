const HashTable = require('./hashTable');

describe('Hash', () => {
  it('insert ', () => {
    const hashTable = new HashTable();
    hashTable.insert('test', 'test');
    expect(hashTable.lookup('test')).toEqual('test');
  });

  it('lookup ', () => {
    const hashTable = new HashTable();
    hashTable.insert('test', 'test');
    expect(hashTable.lookup('test')).toEqual('test');
  });

  it('delete ', () => {
    const hashTable = new HashTable();
    hashTable.insert('test', 'test');
    hashTable.delete('test');
    expect(hashTable.lookup('test')).toBeUndefined();
  });

  it('update ', () => {
    const hashTable = new HashTable();
    hashTable.insert('test', 'test');
    hashTable.update('test', 'test2');
    expect(hashTable.lookup('test')).toEqual('test2');
  });

  // *Edge Cases
  // Empty Hash Table
  // Key Not Found
  // Duplicate Keys
  // Null/Undefined Keys or Values

  it('Empty Hash Table', () => {
    const hashTable = new HashTable();
    expect(hashTable.lookup('test')).toBeUndefined();
  });

  it('Key Not Found', () => {
    const hashTable = new HashTable();
    hashTable.insert('test', 'test');
    expect(hashTable.lookup('test2')).toBeUndefined();
  });

  it('Duplicate Keys', () => {
    const hashTable = new HashTable();
    hashTable.insert('test', 'test');
    hashTable.insert('test', 'test2');
    expect(hashTable.lookup('test')).toEqual('test2');
  });

  it('Null/Undefined Keys or Values', () => {
    const hashTable = new HashTable();
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

  // *Key Types
  // Different Key Types
  // Custom Hash Functions

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

