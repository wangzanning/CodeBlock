/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
    let upper = '1'+ '0'.repeat(n);
    upper = parseInt(upper);
    let output = [];
    for (let i=1; i<upper; i++){
        output.push(i);
    }
    console.log(output);
    return output;
};

printNumbers(1);