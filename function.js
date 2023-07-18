// 函数
// y=f(x) x -> Y
// x当作入参
// y当作输出
// 函数的定义
function add(a, b, c) {
  // 各种各样的表达式
  // 放回单个值

  var d = a + b + c
  return d
  // 隐式返回值 undefined
}
function add() {
  return 'hello'
}

// 函数调用 函数名() 组成的
// add(1, 2, 3)
var result = add()
console.log(result)
// js里面没有函数重载
// 函数的覆盖

// 函数重载，同一个函数名的函数，
// 会因为参数个数和类型的不同，
// 而执行不同的逻辑

// function add(int a) {

// }

// function add(int a, int b) {

// }
// add(1)
// add(1, 2)