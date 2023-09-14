/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    arr = arr.sort((a,b)=>a-b);
    let res= arr.slice(0,k);
    return res;
};


//快排
var getLeastNumbers = function(arr, k) {
    let len = arr.length
    if (!len || !k) return []
    let start = 0
    let end = len - 1
    // 寻找一次标杆元素的位置
    let index = quikSort(arr, start, end)
    // 如果标杆元素的位置不等于 K
    while(index !== k - 1) {
        if (index > k-1) {
            // 如果上一次查找，标杆元素位置大于目标位置
            end = index-1
            index = quikSort(arr, start, end)
        } else {
            // 如果上一次查找，标杆元素位置小于目标位置
            start = index + 1
            index = quikSort(arr, start, end)
        }
    }
    return arr.slice(0, index+1)
};

function quikSort(arr, left, right) {
    let pivot = arr[left]
    while(left < right) {
        while(left < right && arr[right] >= pivot) right--
        arr[left] = arr[right]
        while(left < right && arr[left] < pivot) left++
        arr[right] = arr[left]
    }
    arr[left] = pivot
    return left
}

// 作者：_tank_
// 链接：https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/solution/javascript-pai-xu-kuai-pai-si-wei-zui-xiao-dui-san/
//     来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

getLeastNumbers([0,1,1,1,4,5,3,7,7,8,10,2,7,8,0,5,2,16,12,1,19,15,5,18,2,2,22,15,8,22,17,6,22,6,22,26,32,8,10,11,2,26,9,12,9,7,28,33,20,7,2,17,44,3,52,27,2,23,19,56,56,58,36,31,1,19,19,6,65,49,27,63,29,1,69,47,56,61,40,43,10,71,60,66,42,44,10,12,83,69,73,2,65,93,92,47,35,39,13,75],75);
