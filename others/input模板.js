// node 对单行文本的输入
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
    console.log(result)
})

// node 对多行文本的输入
const readline = require("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output: process.stdout
})

let lines = []

rl.on("line", (line) => {
    lines.push(line.split(' '))
    //对lines数组进行操作
    console.log(result)
})


//js处理输入
var line;
var lines = [];
while((line = read_line()) != ''){
    let arr = line.split(' ');
    lines.push(line);
}
console.log(lines);
