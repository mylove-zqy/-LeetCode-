//请实现两个函数，分别用来序列化和反序列化二叉树。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
//使用广度优先
let p = null;
var serialize = function (root) {
  p = root;
  return null;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  return p;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
