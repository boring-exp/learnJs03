// 作用域
// es2015之前只有全局作用域和函数作用域
// es2015之后增加了一个块级作用域
// with作用域 eval作用域

// 1. 全局作用域
a = 1
// var 声明全局变量(没在函数声明时)
// 2. 函数作用域
function fn() {
  var b = 2
  console.log(b)
}

fn()

// 3. 块级别作用域
// const let // 声明块作用域
{
  let c = 1
  var d = 2
  console.log(a)
}

// 作用域查找时，先找当前作用域，再找上一级作用域，直到全局作用域

// console.log(c)
// console.log(d)

