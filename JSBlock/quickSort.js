function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  // if (!Array.isArray(arr)) {
  //   return;
  // }
  let midIndex = parseInt(arr.length / 2);
  let midNum = arr.splice(midIndex, 1);
  let smallList = [];
  let bigList = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > midNum) {
      bigList.push(arr[i]);
    } else {
      smallList.push(arr[i]);
    }
  }
  return quickSort(smallList).concat(midNum).concat(quickSort(bigList));
}

console.log(quickSort([2, 5, 3, 54, 77, 3, 55]));
