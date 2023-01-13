class MyClass {
    constructor() {
        console.log("initiate");
    }
    add(arg1, arg2) {
        var result;
        result = arg1 + arg2;
        return result;
    }
    subtract(arg1, arg2) {
        var result;
        result = arg1 - arg2;
        return result;
    }
}

module.exports = MyClass;