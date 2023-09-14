/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    if (root === null) return root
    if (root === p || root === q) return root;

    const r1 = lowestCommonAncestor(root.right, p, q);
    const r2 = lowestCommonAncestor(root.left, p, q);

    if (r1&&r2){
        return root;
    }
    if (r1) return r1;
    if (r2) return r2;
};