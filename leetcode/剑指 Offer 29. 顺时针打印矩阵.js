/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let res = [];
    let left = 0;
    let right = matrix[0].length-1;
    let top = 0;
    let bottom = matrix.length-1;
    let total = matrix[0].length*matrix.length;
    while(true){
        for(let i=left;i<=right;i++){
            res.push(matrix[top][i]);
        }
        top++;
        if(res.length === total) break;
        for(let i=top;i<= bottom;i++){
            res.push(matrix[i][right]);
        }
        right--;
        if(res.length === total) break;
        for(let i=right;i>=left;i--){
            res.push(matrix[bottom][i]);
        }
        bottom--;
        if(res.length === total) break;
        for(let i=bottom;i>=top;i--){
            res.push(matrix[i][left]);
        }
        left++;
        if(res.length === total) break;
    }
    console.log(res);
    return res;
};

spiralOrder([[1,2,3],[4,5,6],[7,8,9]]);