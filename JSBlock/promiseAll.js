function promiseAll(arr) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(arr)) {
            reject(new Error('error'))
        }
        let resArray = [];
        let counter = 0;
        for (let i = 0; i < arr.length; i++) {
            Promise.resolve(arr[i]).then((res) => {
                // resArray[i] = res;
                resArray.push(res);
                counter++;
                if (res.length === counter) {
                    resolve(resArray);
                }
            }).catch(e => reject(e))
        }
    })
}

let promise1 = new Promise((resolve)=>resolve(1));
let promise2 = new Promise((resolve)=>resolve(2));

let promise3 = promiseAll([promise1, promise2]);
console.log(promise3);
promise3.then((res)=>console.log(res));
