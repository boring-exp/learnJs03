'use strict'
// this是动态绑定的
// c++/java中this是静态绑定的
const obj = {
  name: 'obj',
  sayHi: function (/**{thisInner:obj} */) {
    // 指代当前对象
    // 隐士赋值
    // const this = thisInner
    console.log(this)
  }
}

// 非严格模式下
// 1.就近原则，谁调用的这个函数，this就指向谁
// 把this理解为函数的隐藏参数，将函数的调用者作为this的值传入
// 2.构造函数中的this指向实例对象
// 严格模式下
// 函数的直接调用，this指向undefined
obj.sayHi()
// sayHi({thisInner=obj})

const obj2 = {
  name: 'obj2',
  sayHi: obj.sayHi
}

obj2.sayHi()
// syaHi([thisInner=obj2])

const sayHi = obj.sayHi
sayHi()
// sayHi([thisInner=window])