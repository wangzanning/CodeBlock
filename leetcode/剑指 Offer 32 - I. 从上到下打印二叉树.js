/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
    if (!root) return [];
    let res = [];
    let newQueue = [root];
    while (newQueue.length) {
        let node = newQueue.shift();
        res.push(node.val);
        node.left && newQueue.push(node.left)
        node.right && newQueue.push(node.right)
    }
    return res;
};