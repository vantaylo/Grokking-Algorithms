const HashTable = require('./hashTable');

describe('Hash', () => {
  // *Basic Operations
  // Insertion
  // Lookup
  // Deletion
  // Update

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

