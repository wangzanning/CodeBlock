//leetcode 415_easy
// Time: 2020_12_30
//Zanning Wang
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let output = 0;
    num1 = Array.from(num1).reverse().join('');
    num2 = Array.from(num2).reverse().join('');
    if (num1.length >= num2.length) {
        for (let i = 0; i < num2.length; i++) {
            output += (parseInt(num1[i], 10) + parseInt(num2[i], 10)) * Math.pow(10, i);
            console.log(output)
        }
        let reminder = num1.substring(num2.length, num1.length);
        reminder = Array.from(reminder).reverse().join('');
        output += reminder * Math.pow(10, num2.length);
        console.log(reminder * Math.pow(10, num2.length))
    } else {
        for (let i = 0; i < num1.length; i++) {
            output += (parseInt(num1[i], 10) + parseInt(num2[i], 10)) * Math.pow(10, i);
            console.log(output);
        }
        let reminder = num2.substring(num1.length, num2.length);
        reminder = Array.from(reminder).reverse().join('');
        output += reminder * Math.pow(10, num1.length);
        console.log(reminder * Math.pow(10, num1.length))
    }
    console.log(output.toString())
    return output.toString();


};

//From LeetCode
const addStrings = (num1, num2) => {
    while (num1.length > num2.length) num2 = '0' + num2;
    while (num1.length < num2.length) num1 = '0' + num1; // 先补0对齐
    let res = '';     // 结果字符串
    let carry = 0;    // 进位
    for (let i = num1.length - 1; i >= 0; i--) { // 加法 从右往左做
        const sum = +num1[i] + +num2[i] + carry;   // +号将字符转数字
        res = sum % 10 + res;                      // 模10的结果 + res字符串
        carry = sum > 9 ? 1 : 0;
    }
    return carry == 1 ? '1' + res : res;
};

// 作者：xiao_ben_zhu
// 链接：https://leetcode-cn.com/problems/add-strings/solution/he-addbinaryna-dao-ti-xiang-si-lao-lao-shi-shi-zuo/
//     来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

addStrings("18582506933032752", "366213329703");

