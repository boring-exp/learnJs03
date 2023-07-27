// 4.原型式继承: 你给我父级对象，我直接返回一个子级对象
// 子级对象的原型指向父级对象
// Object.create()方法就是原型式继承的实现
function createChild(o) {
  function F() { }
  F.prototype = o;
  return new F();
}

const parent = {
  name: 'pjw'
}
// function child() {}
// child.prototype = parent
// const childIns = new child()
const child = Object.create(parent);

// 5. 寄生式继承: 在原型式继承的基础上，增加一些方法
function factoryCreateChild(obj) {
  const instance = createChild(obj);
  // 做一些处理
  instance.sayName = function () {
    console.log(this.name);
  }
  return instance;
}

const test2 = {
  name: 'pjw'
}
const test2New = factoryCreateChild(test2)
test2New.sayName()

// const obj = {}
// function f() {}
// f.prototype = obj;
// const instance = new f();
// 6. 寄生组合继承
function inheritPrototype(subType, superType) {
  let subTypeIns = createChild(superType.prototype);
  // 创建对象
  subTypeIns.constructor = subType; // 增强对象 
  subType.prototype = subTypeIns; // 赋值对象
}

function parentType() {
  this.name = 'pjw';
  this.arr = [1, 2, 3];
}


function childType() {
  parentType.call(this);
  this.childProperty = 'child';
}

inheritPrototype(childType, parentType);

const instance6 = new childType();