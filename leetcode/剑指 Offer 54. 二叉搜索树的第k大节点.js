/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
    let counter = 0;
    let output = null;

    function dfs(node) {
        if (node === null) return;
        dfs(node.right);
        counter++;
        if (counter === k) {
            output = node.val;
            return;
        }
        dfs(node.left);
    }

    dfs(root);
    return output;
};

var kthLargest = function (root, k) {
    let newSet = new Set();
    const dfs = (node) => {
        if (node === null) return
        newSet.add(node.val);
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);
    let output = [...newSet];
    output.sort((a, b) => {
        return b - a;
    });
    return output[k - 1];
}

