/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
    let output= [];
    while (head){
        output.push(head.val);
        head = head.next;
    }
    output = output.reverse();
    return output;
};

var reversePrint = function(head) {
    if (head === null || head.next === null){
        return head;
    }
    let pointer = head.next;
    let temp = null;
    head.next = null;
    while (pointer !== null){
        temp = pointer.next;
        pointer.next = head;
        head = pointer;
        pointer = temp;
    }
    return head;

};