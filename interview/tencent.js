// 在线面试平台。将链接分享给你的朋友以加入相同的房间。
// Author: tdzl2003<dengyun@meideng.net>
//Q1.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

function mergeSumList(l1, l2) {
  let newLinkList = new ListNode();
  let pointer = newLinkList;

  while(l1!== null && l2 !== null) {
    let temp = new ListNode;
    temp.val = l1.val + l2.val;
    pointer.next = temp;
    pointer = pointer.next;
    l1 = l1.next;
    l2 = l2.next;
  }
  if (l1 === null) {
    pointer.next = l2;
  }
  if (l2 === null) {
    pointer.next = l1;
  }
  return newLinkList.next;
}

//Q2
//动态规划实现
//我写完发现和题目有出入，我是从最上面根节点开始往下找，找不相邻的偷法中，收益最大的那一条路线，题设中的size是最长的路劲
function bestStolen(head, size) {
  let dp = new Array(size).fill(0);
  dp[0] = head.val;
  dp[1] = 0
  let n = 2;
  while(n < size) {
    situation1 = dp[n+1]
    situation2 = dp[n] + head.val
    dp[i] = Math.max(situation1, situation2);
    n++;
  }
  return Math.max(Array.from(dp));

}


//Q3
//判断二叉树是否相等；
//递归实现
//html中可以使用
function checkTreeEqual(tree1, tree2) {
  if (tree1 === null && tree2 === null) return true;
  if (tree1 === null || tree2 === null) return false;
  if (tree1.val !== tree2.val) return false;
  return checkTreeEqual(tree1.left, tree2.left) && checkTreeEqual(tree1.right, tree2.right);
}


//Q4

function mergeSortedList(l1, l2) {
  let pointer1 = 0;
  let pointer2 = 0;
  let res = [];
  while(pointer1 < l1.length && pointer2 < l2.length) {
    if (l1[pointer1] < l2[pointer2]) {
      res.push(l1[pointer]);
      pointer1++;
    }else if (l1[pointer1] > l2[pointer2]) {
      res.push(l2[pointer]);
      pointer2++
    }else {
      res.push(l1[pointer]);
      res.push(l2[pointer]);
      pointer1++;
      pointer2++;
    }
    if (pointer1 >= l1.length && pointer2 < l2.length) {
      let temp = l1.slice(pointer1);
      res = res.conccat(temp);
      break;
    }
    if (pointer1 < l1.length && pointer2 >= l2.length) {
      let temp = l2.slice(pointer2);
      res = res.conccat(temp);
      break;
    }
  }
  //求中位数，如果长度为奇数直接输出，偶数求平均
  let total_length = res.length;
  if (total_length % 2 === 1) {
    let middle = Math.floor(total_length/2);
    return res[middle];
  }else {
    let middle1 = Math.floor(total_length/2);
    let middle2 = middle+1;
    return (middle1 + middle) / 2
  }
}


