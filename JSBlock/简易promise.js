class PromiseM{
    constructor(process) {
        this.status = 'pending';
        this.msg = ''
        process(this.resolve.bind(this), this.reject.bind(this));
        return this
    }
    resolve(val){
        this.status = 'fulfilled';
        this.msg = val;
    }
    reject(val){
        this.status = 'reject';
        this.msg = val;
    }
    then(fulfilled,reject) {
        if (this.status === 'fulfilled') {
            fulfilled(this.msg);
        }
        if (this.status === 'rejected') {
            reject(this.msg);
        }
    }
}

var newP = new PromiseM(function (resolve,reject){
    resolve('123');
})

newP.then((success)=>console.log(success),()=>console.log('fail'));
