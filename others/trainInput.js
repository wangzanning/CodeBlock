var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function(line){
    var tokens = line.split(' ');
    console.log(parseInt(tokens[0]) + parseInt(tokens[1]));
});

let para = parseInt(readline());
let lines = [];
while(line=readline()){
    let line = line.split(' ');  //字符串转换为字符数组
    lines.push(line);
}

