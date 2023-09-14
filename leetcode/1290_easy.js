//leetcode 1290_easy
// Time: 2020_12_30
//Zanning Wang
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let output = '';
    while (head){
        output += head.val;
        head = head.next;
    }
    output = parseInt(output, 2);
    console.log(output);
    return output;
};

getDecimalValue([1,0,0,1,0,0,1,1,1,0,0,0,0,0,0])