/**
 *
 * @param prices int整型一维数组
 * @return int整型
 */
function maxProfit( prices ) {
  // write code here
  let res = new Array(prices.length).fill(0);
  for (let i=0; i<prices.length; i++) {
    let temp_max = 0;
    for (let j=i+1; j<prices.length; j++ ){
      if (prices[j] > prices[i]) {
        let profit = prices[j] - prices[i];
        if (profit > temp_max) {temp_max = profit}
      }
    }
    res[i] = temp_max;
  }
  let res_max = Math.max(...res);
  return res_max;
}

function test(arr, target) {
  let left = 0;
  let right = arr.length -1;
  while(left <= right) {
    let mid = Math.floor((left+right)/2);
    if (target > arr[mid]) {
      left = mid + 1;
    }else if (target < arr[mid]) {
      right = mid - 1;
    } else {
      console.log(mid);
      return mid;
    }
  }
}

test([1,2,3,5,7,9,12], 5);
