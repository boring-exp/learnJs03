// js中的面向对象编程
// 1.封装（隐藏数据，暴露方法）
// 2.继承
// 函数作为构造函数，函数中包括属性和方法
function Person(name, age) {
  // 构造函数中的this指向实例对象
  this.name = name;
  this.age = age;

  this.getName = function () {
    console.log(this.name);
    return this.name;
  }

  this.setName = function (name) {
    this.name = name;
  }
}

Person.prototype.who = function () {
  console.log(this.name);
}

const obj1 = new Person('pjw', 24);
obj1.setName('ceshi');

// 写函数的时候，尽量语义化你想要做的操作
obj1.name = 'ceshi2';
console.log(obj1.getName());
obj1.who()

// 请仿写数组的yourselfForeach方法
const arr = [1, 2, 3]
// TODO: arr.yourselfForeach((item) => {console.log(item)})
// arr.forEach((item) => {console.log(item)})
Array.prototype.yourselfForeach = function (callback) {
  console.log(this)
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}
Array.prototype.yourselfMap = function (callback) {
  console.log(this)
  const reuslt = []
  for (let i = 0; i < this.length; i++) {
    reuslt.push(callback(this[i], i, this))
  }
  return reuslt
}
arr.yourselfForeach((item) => { console.log(item) })
const reuslt = arr.yourselfMap(item => item + 1)
console.log(reuslt)