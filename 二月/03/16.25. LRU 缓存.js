/**
 * 设计和构建一个“最近最少使用”缓存，该缓存会删除最近最少使用的项目。缓存应该从键映射到值(允许你插入和检索特定键对应的值)，
 * 并在初始化时指定最大容量。当缓存被填满时，它应该删除最近最少使用的项目。
 * 应该支持以下操作： 获取数据 get 和 写入数据 put 。
 * 获取数据 get(key) - 如果密钥 (key) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1。
 * 写入数据 put(key, value) - 如果密钥不存在，则写入其数据值。当缓存容量达到上限时，它应该在写入新数据之前删除最近最少使用的数据值，从而为新的数据值留出空间。
 */

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.limit = capacity;
  this.stack = new Map();
};

/**
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function (key) {
  if (!this.stack.has(key)) {
      console.log(-1);
      return -1;
  }
  const v = this.stack.get(key);
  this.stack.delete(key)
  this.stack.set(key,v)
  return v;
};

/**
* @param {number} key
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function (key, value) {
  if (this.stack.has(key)) {
      this.stack.delete(key);
  }
  this.stack.set(key, value);

  if (this.stack.size > this.limit) {
      const first = this.stack.keys().next().value
      this.stack.delete(first);
  }
};

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/
const cache = new LRUCache(2 /* 缓存容量 */);

cache.put(1, 1);
cache.put(2, 2);
cache.get(1); // 返回  1
cache.put(3, 3); // 该操作会使得密钥 2 作废
cache.get(2); // 返回 -1 (未找到)
cache.put(4, 4); // 该操作会使得密钥 1 作废
cache.get(1); // 返回 -1 (未找到)
cache.get(3); // 返回  3
cache.get(4); // 返回  4
