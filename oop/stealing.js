function superType() {
  this.name = '父亲';
}

function childType() {

}

// 1.原型继承: 子类的原型，指向父类的实例
childType.prototype = new superType();
childType.prototype.constructor = childType;
const instance = new childType();

// 2.构造函数继承: 子类初始化时，调用父类的构造函数，将父类的属性赋值给子类
function childType2() {
  superType.call(this);
}
const instance2 = new childType2();

// 3.原型和构造函数的组合
function childType3() {
  superType.call(this);
}
childType3.prototype = new superType();
childType.prototype.constructor = childType;
const instance3 = new childType3();