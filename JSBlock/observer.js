// 发布订阅模式
class Observer {
    constructor() {
        this.eventBus = {};
    }
    on(eventName, fn) {
        this.eventBus[eventName] = this.eventBus[eventName] || [];
        this.eventBus[eventName].push(fn);
    }
    emit(eventName, data) {
        if (this.eventBus[eventName]) {
            this.eventBus[eventName].forEach((fn)=>{
                fn(data);
            })
        }
    }
    off(eventName, fn) {
        if (this.eventBus[eventName]) {
            this.eventBus[eventName] = fn ? this.eventBus[eventName].filter((item)=>item !== fn) : [];
            
        }
    }

}
