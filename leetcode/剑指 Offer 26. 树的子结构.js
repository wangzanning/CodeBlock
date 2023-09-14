/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
    function recur(a, b) {
        if (!b) return true;
        if (!a) return false;
        if (a.val !== b.val) return false;
        return recur(a.left, b.left) && recur(a.right, b.right);
    }

    if (!A || !B) return false;
    return recur(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);


};