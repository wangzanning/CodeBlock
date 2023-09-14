/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 *
 * @param head ListNode类
 * @param k int整型
 * @return ListNode类
 */
function reverseKGroup( head ,  k ) {
  function reverse(head) {
    if (!head) return head
    let temp = head;
    let next = head.next
    head = next.next
    head = temp;
    head = head.next;
  }
  let length = 0
  let counter = 0
  let temp_length = 0;
  let count_time = 0
  while (!head) {
    head= head.next;
    temp_length +=1;
  }
  let res = new ListNode();
  while (!head) {
    if (temp_length - count_time * k < k) {
      res.next = head;
    }
    head = head.next;
    counter += 1;
    let temp = head.next;
    if (counter === k) {
      reverse_temp = new ListNode();
      reverse_temp = reverse(head);
      res.next = reverse_temp;
      counter = 0;
      count_time +=1
      head = temp;
    }


  }
  return res.next;
  // write code here
}
module.exports = {
  reverseKGroup : reverseKGroup
};
