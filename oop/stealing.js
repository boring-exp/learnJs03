function superType() {
  this.arr = [2, 2, 3];
}

function subType() {
  // 把父类所有的属性和方法都拿过来
  // 类似与手动
  // this.arr = [1, 2, 3];
  // this.method = function () {}
  superType.call(this);
}

subType.prototype = new superType();
subType.prototype.getSuperValue = function () {
  return this.arr
}

const instance = new subType();
console.log(instance.getSuperValue());
