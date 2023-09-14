/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    if (!head) return null;
    let newMap = new Map();
    let node = head;
    while (node) {
        newMap.set(node, new Node(node.val));
        node = node.next;
    }
    node = head;
    while (node) {
        newMap.get(node).next = node.next ? newMap.get(node.next) : null;
        newMap.get(node).random = node.random ? newMap.get(node.random) : null;
        node = node.next
    }
    return newMap.get(head);
};