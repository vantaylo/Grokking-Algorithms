const HashTablePrototype = {
  insert(key, value){
    this.values[key] = value;
    this.length++;
  },
  lookup(key){
    return this.values[key];
  },
  delete(key) {
    delete this.values[key];
    this.length--;  
  },
  update(key, value) {
    this.values[key] = value
  }
};

function createHashTable(){
  const hashTable = Object.create(HashTablePrototype);
  hashTable.values = {};
  hashTable.length = 0;
  return hashTable;
};

module.exports = createHashTable;