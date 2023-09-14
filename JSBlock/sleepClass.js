class SleepClass{
    constructor(name) {
        this.name = name;
        this.queue = [];
        console.log(`I am ${this.name}`);
        setTimeout(()=>{
            this.next();
        },0)
    }
    next() {
        const fn = this.queue.shift();
        fn && fn();
    }

    sleep(timer){
        const fn = ()=>{
            setTimeout(()=>{
                this.next();
                console.log(`sleep${timer}`)
            },timer)
        }
        this.queue.push(fn());
        return this;
    }
    eat(food){
        const fn = ()=>{
            setTimeout(()=>{
                console.log(`eat${food}`)
                this.next()
            },0)
        }
        this.queue.push(fn());
        return this;
    }
    sleepFirst(timer){
        const fn = ()=>{
            setTimeout(()=>{
                console.log(`sleep${timer}`)
                this.next();
            },timer)
        }
        this.queue.unshift(fn());
        return this;
    }

}

function callLazy(name){
    return new SleepClass(name);
}