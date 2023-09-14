/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];
    const queue = [root];
    let res = [];
    let level = 0;
    while (queue.length){
        res[level] = [];
        let singlelevel = queue.length;
        while (singlelevel--){
            const first = queue.shift();
            res[level].push(first.val);
            if (first.left) queue.push(first.left);
            if (first.right) queue.push(first.right)
        }
        level++
        console.log(res);
    }
    return res;
};

levelOrder([3,9,20,null,null,15,7])