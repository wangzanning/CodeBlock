
console.log('Hello World!');
function countMost(str){
    let dict = {};
    for(let i=0;i<str.length;i++){
        if(str[i].length){
            dict[str[i]]++;
        }else{
            dict[str[i]]=1;
        }
    }
    console.log(dict);
    let big=0;
    let res;
    for(let i in dict){
        if(dict[i]>big){
            big = dict[i];
            res = i;
        }
    }
    console.log(res);
    return res;
}
countMost('fvbkdkkkbnk345kkkkkkkk');

// export function consoleTemp() {
//     console.log('okkkk');
// }

