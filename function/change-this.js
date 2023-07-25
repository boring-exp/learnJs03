// 改变this指向
// 1. call [this, ...args]
// 2. apply [this, []]
// 3. bind
const test = {
  name: 'test',
  sayHi: function (time, money) {
    console.log(time, money)
    console.log(this)
  }
}

const people = {
  name: 'people'
}

const test2 = test.sayHi
// people.test2('15:19')
// test2.apply(people, ['15:19', 100])
// 拿到函数+call/apply+函数参数
test2.call(people, ...['15:19', 100])

function test3() {
  // console.log(arguments)
  // Array.prototype.forEach.call(arguments, console.log)

  const FFeach = Array.prototype.forEach.bind(arguments)
  FFeach(console.log)
  // arguments.forEach(console.log) // 类数组
}

test3(1, 2, 3, 4)

// function platform(fn) {
//   fn = (item) => console.log(item)
//   fn(item, index, arr)
// }

// platform(console.log)
// platform((item) => console.log(item))


// bind用法
const freeSayHi = test.sayHi
const bindSayHi = freeSayHi.bind(test)
bindSayHi('bind', 100)

// TODO: 用apply和call，实现自定义myBind

// TODO: 实现函数柯里化myCurrying函数
function add(a, b, c) {}
const curryingadd = myCurrying(add)
curryingadd(1)(2)(3)
function addFour(a, b, c, d) {}
const curryingaddFour = myCurrying(addFour)
curryingaddFour(1)(2)(3)(4)



// 箭头函数和普通函数的区别
// 1. 箭头函数没有this，但是可以访问外层function类型函数的this
// 1.1 没有arguments
// 2. 箭头函数不能作为构造函数
// 3. 箭头函数没有prototype
// 4. 箭头函数没有原型链