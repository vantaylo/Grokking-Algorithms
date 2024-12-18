class HashTable {
  constructor() {
    this.values = {};
    this.length = 0;
  }
}

HashTable.prototype.insert = function(key, value) {
  this.values[key] = value;
  this.length++;
}

HashTable.prototype.lookup = function(key) {
  return this.values[key];
}

HashTable.prototype.delete = function(key) {
  delete this.values[key];
  this.length--;
}

HashTable.prototype.update = function(key, value) {
  this.values[key] = value;
}

module.exports = HashTable;