// 原型
// 1. 函数是一个对象
// 2. 函数可以作为构造函数(constructor)使用

// Array() 是一个构造函数，构造器
// const arr = new Array()
// function Foo() {}
// const f = new Foo()
// console.log(f)
// console.log(f.__proto__ === Foo.prototype) // true

// const id = Foo
// console.log(id)
// console.log(Foo.prototype.constructor === Foo) // true
// {constructor: ƒ}
const arr = []
// class-base inherit
// new Array()
// arr {
//   map: () => {},
//   filter: () => {},
//   reduce: () => {},
//   ...
// }
Array.prototype.hello = function() {
  console.log('hello')
  return 1;
}

console.log(arr.hello())