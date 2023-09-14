/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) {
        return true
    }
    function isSame(left, right){
        if (!left && ! right) return true;
        if (!left || ! right) return false;
        if (left.val !== right.val) return false
        return isSame(left.left,right.right) && isSame(left.right, right.left);
    }
    return isSame(root.left, root.right)
};