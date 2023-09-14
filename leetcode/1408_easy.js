//leetcode 1408_easy
// Time: 2020_12_30
//Zanning Wang

/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    let output = [];
    for (let i=0; i<=words.length - 2; i++){
        for (let j=i+1; j<=words.length - 1; j++){
            if (words[j].includes(words[i])){
                output.push(words[i]);
            }else if (words[i].includes(words[j])){
                output.push(words[j]);
            }
        }
    }
    output = new Set(output);
    console.log(Array.from((output)));
    return Array.from((output));

};

stringMatching(["leetcoder","leetcode","od","hamlet","am"])

//from leetcode sort at first before for loop
/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(arr) {
    let res = [];
    arr.sort((a,b)=>a.length-b.length)
    for(let i = 0; i < arr.length-1;i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[j].indexOf(arr[i]) !== -1) {
                res.push(arr[i])
                break
            }
        }
    }
    return res

};