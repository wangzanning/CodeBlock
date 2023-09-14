// 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
// 返回容器可以储存的最大水量。
// 输入：[1,8,6,2,5,4,8,3,7]
// 输出：49
// 解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。


/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  if (height.length === 0) return 0
  let maxArea = 0;
  let width = 0;
  let tall = 0;
  let tempArea;
  for (let i = 0; i < height.length; i++) {
    for (let k = i + 1; k < height.length ; k++) {
      width = k - i;
      tall = Math.min(height[i], height[k]);
      tempArea = width * tall;
      if (tempArea > maxArea) {
        maxArea = tempArea;
      }
    }
  }

  return maxArea;
};

var maxArea2 = function(height) {
  if (height.length === 0) return 0
  let maxArea = 0;
  let left = 0
  let right = height.length -1;
  while (left < right) {
    temp = (right - left) * Math.min(height[left], height[right]);
    if (temp > maxArea) {
      maxArea = temp
    }
    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;

};


console.log('max', maxArea2([1,8,6,2,5,4,8,3,7]))
