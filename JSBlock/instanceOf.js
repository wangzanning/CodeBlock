function new_instance (child, father) {
    let left = child.__proto__;
    let right = father.prototype;
    while (true) {
        if (left === null) {
            return false
        }
        if (left === right) {
            return true;
        }
        left = left.__proto__;
    }
}
