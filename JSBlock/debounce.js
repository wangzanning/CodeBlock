function debounce(fn, delay) {
    let timer = null;
    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(fn, delay);
    }
}

function throttle(fn, delay) {
    let flag = true;
    return function () {
        if (!flag) {
            return false
        }
        flag = false
        setInterval(() => {
            fn();
            flag = true;
        }, delay)
    }
}

function throttleNew(fn, delay) {
    let free = true, nextArgs = null;
    return recur = function (...args) {
        if (free) {
            fn(...args);
            free = false;
            setTimeout(()=>{
                free = true
                if (nextArgs) {
                    recur(...nextArgs);
                    nextArgs = null;
                }
            }, delay)
        } else {
            nextArgs = args
        }
    }
}

function thorttle(fn, delay) {
    let free = true, nextArgs = null;
    return function recur (...args) {
        if (free) {
            fn(...args);
            free = false
            setTimeout(()=>{
                if (nextArgs) {
                    free = true;
                    recur(...nextArgs);
                    nextArgs = null
                }
            })
        } else {
            nextArgs = args;
        }
    }
}

function debounce(fn, delay) {
    let timer = null;
    return function () {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(()=>{
            fn()
        }, delay);
    }
}
