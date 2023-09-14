/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
    if (head.val === val) return head.next;
    if (!head) return [];
    let pre = head;
    while (pre) {
        let cur = pre;
        let next = cur.next;
        if (next.val === val) {
            nextNext = next.next;
            pre.next = nextNext;
            break;
        } else {
            pre = pre.next;
        }
    }
    return head;
};