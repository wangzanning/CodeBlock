// let inputString = 'abbcbb';
// let res = [];
// for (let i=0; i<inputString.length;i++){
//     for(let j=i+1; j<inputString.length;j++){
//         let old = inputString.slice(i,j+1);
//         let newString = old.split('').reverse().join('');
//         if (old === newString && old.length > 1){
//             res.push(old);
//             console.log(old);
//             console.log('----------');
//         }
//     }
// }

const readline = require("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output: process.stdout
})

let result = 0

rl.on("line", (line) => {
    if(line.length === 1) {
        console.log(0)
        return
    }
    for(let i = 0; i < line.length; i++) {
        // 以当前字母为对称轴
        for (let j = 1; j < line.length; j++) {
            if (line[i - j] && line[i + j] && line[i - j] === line[i + j]) {
                result += 1
            } else {
                break
            }
        }
        // 以空隙为对称轴
        for (let j = 0; j < line.length; j++) {
            if (line[i - j] && line[i - j + 1] && line[i - j] === line[i + j + 1]) {
                result += 1
            } else {
                break
            }
        }
    }
    console.log(result)
})



