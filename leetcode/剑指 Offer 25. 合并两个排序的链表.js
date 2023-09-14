/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let newLinkList = new ListNode();
    let pointer = newLinkList;
    while (l1 !== null && l2 !== null){
        if (l1.val < l2.val){
            pointer.next = l1;
            pointer = pointer.next;
            l1 = l1.next;
        }else if (l1.val >= l2.val){
            pointer.next = l2;
            pointer = pointer.next;
            l2 = l2.next;
        }
    }
    if (l1 === null){
        pointer.next = l2
    }
    if (l2 === null){
        pointer.next = l1;
    }
    return newLinkList.next;
};