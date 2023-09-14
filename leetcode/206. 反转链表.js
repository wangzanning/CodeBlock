/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head) {
    return head;
  }
  let res = new ListNode;
  res.val = head.val;
  while ( head.next) {
    let temp = new ListNode;
    temp.val = head.next.val;
    temp.next = res;
    res = temp;
    head = head.next;
  }
  return res;
};


/**
 * 调换指针先后顺序
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head || !head.next) {
    return head;
  }
  let pre = null, temp = null, cur = head;
  while (cur) {
    temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  return pre;


};
