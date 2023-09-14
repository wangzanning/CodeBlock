/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (!preorder.length || ! inorder.length) return null
    let root = preorder[0];
    let rootNode = new TreeNode(root);
    let rootIndex = inorder.indexOf(root);

    rootNode.left = buildTree(preorder.slice(1,rootIndex+1), inorder.slice(0,rootIndex));
    rootNode.right = buildTree(preorder.slice(rootIndex+1),inorder.slice(rootIndex+1));
    return rootNode;
};