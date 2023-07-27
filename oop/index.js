function superType() {
    this.arr = [1, 2, 3];
}


superType.prototype.getSuperValue = function () {
    return this.arr;
}


function childType() {
    this.childProperty = '儿子';
}

childType.prototype = new superType();


// const instance = new childType();
// console.log(instance.getSuperValue());
// instance.setArr(4);