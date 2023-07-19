// 作用域
// 1）静态作用域，（词法作用域）
// 2）动态作用域
// js中没有动态作用域

// 所有定义的变量binding，按照词法作用域进行（程序还未执行）
// 动态作用域，变量的binding，在执行阶段才进行
let x = 10

function test() {
  console.log(x)
}

// 静态作用域binding的时变量，和变量的值无关
// 变量的值需要在调用时才能知道是多少
// compiler result
/**
 * const env = { x_global: 10 }
 * const identifier = { test: { env: [x_global], code: 'console.log(x_global)'}}
 * env.x_global = 20
 * env = { x_global: 20 }
 * test() { env.x_global }
 */
x = 20
console.log(test)

// function main() {
//   let x = 20
//   test()
// }

// main()