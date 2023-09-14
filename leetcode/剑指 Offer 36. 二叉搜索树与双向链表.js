/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
    function dfs(cur) {
        if (!cur) return
        dfs(cur.left, pre)
        if (pre) {
            pre.right = cur;
        } else {
            head = cur;
        }
        cur.left = pre;
        pre = cur;
        dfs(cur.right, pre)
    }

    if (!root) return
    let head = null;
    let pre = head;
    dfs(root)
    head.left = pre;
    pre.right = head;

    return head;

};