var CQueue = function() {
    this.stack1 = [];
    this.stack2 = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.stack1.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if (this.stack2.length) return this.stack2.pop();
    while (this.stack1.length){
        let temp = this.stack1.pop();
        this.stack2.push(temp);
    }
    return this.stack2.pop()|| -1
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */