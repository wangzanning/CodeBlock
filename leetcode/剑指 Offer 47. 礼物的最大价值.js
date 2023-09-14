/**
 * @param {number[][]} grid
 * @return {number}
 */
// var maxValue = function (grid) {
//     let i = 0;
//     let j = 0;
//     let res = grid[0][0];
//     while (i < grid.length || j < grid.length) {
//         if (i === grid.length - 1 && j === grid[0].length - 1) {
//             console.log(res);
//             return res;
//         }
//         if (j===grid[0].length-1){
//             res += grid[i + 1][j];
//             i += 1;
//         }else if (i === grid.length - 1){
//             res += grid[i][j + 1];
//             j += 1;
//         }else{
//             if (grid[i + 1][j] >= grid[i][j + 1]) {
//                 res += grid[i + 1][j];
//                 i += 1;
//             } else {
//                 res += grid[i][j + 1];
//                 j += 1;
//             }
//         }
//     }
// };

var maxValue = function (grid) {
    const row = grid.length;
    const col = grid[0].length;
    let dp = [];
    for (let i = 0; i < row; i++) {
        dp[i] = [];
        for (let j = 0; j < col; j++) {
            dp[i][j] = 0;
        }
    }
    dp[0][0] = grid[0][0];
    for (let i = 1; i < row; i++) {
        dp[i][0] = dp[i - 1][0] + grid[i][0];
    }
    for (let j = 1; j < col; j++) {
        dp[0][j] = dp[0][j - 1] + grid[0][j];
    }
    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            dp[i][j] = grid[i][j] + Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
    }
    console.log(dp[row - 1][col - 1]);
    return dp[row - 1][col - 1]
};




maxValue([
    [
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1]
    ]
])