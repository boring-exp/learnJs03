// 闭包
const obj = {
  name: 1
}

// 此函数执行时一定要有obj，一定要有外部数据（环境）
function closure() {
  console.log(obj)
}

const val1 = closure // val1 = function + environment

globalThis.val1 = val1

function simpleFn(obj) {
  console.log(obj)
}

const val2 = simpleFn // val2 = function
globalThis.val2 = val2
const arr = [1, 2, 3, 4, 5, 6]
const result = []
for (var i = 0; i < arr.length; i++) {
  // const clo = function () { return i } // function + env[i]

  // 立即执行函数 iife -> wrapper
  const clo = (function wrapper(i_inner) {
    return function () {
      return i_inner;
    }
  })(i)
  result.push(clo)
}
// 闭包是语言的特性
console.log(result)
console.log(result[5]())

// 闭包的问题
// 1. 闭包会导致内存泄漏

// 函数currying, 柯里化
// 一个函数只有一个参数 y = f(x)
// lambda表达式和lambda演算 x, λx.y, (λx.y) z
// λx.x  (λx.x)z -> z
// 一个函数有多个参数 y = f(x, z, m, n)

// addMulParam(1, 2, 3)
function addMulParam(a, b, c) {
  return add(a)(b)(c)
}

// add(1)(2)(3)
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c
    }
  }
}

console.log(addMulParam(1, 2, 3))

// 实现一个函数，函数返回柯里化函数
add(1, 2, 3, 4)
// function add(a, b, c, d) { return a + b + c + d }
muli(1, 2)
// function muli(a, b) {return a * b}
function currying() {
  // TODO: ??
}
const addCurrying = currying(add)
const mulCurrying = currying(muli)
addCurrying(1)(2)(3)(4)
mulCurrying(1)(2)