// 回调函数（和api没任何关系，和异步没有任何关系）
// 函数作为参数传递给另一个函数


// platform平台api
// 我们自己传递的函数


// platform 执行完会得到一个数字1
function platform(/* a变量要传递一个函数 */a) {
  a.fn(1, 2, 3)
}

// const result = platform()
// 所有的人都可以获取result

// 回调函数，被一个第三方函数调用
const fn = function (a, b, c) {
  // 在这里才能获取123
  console.log(a, b, c)
}

const params = { fn }

// 作为参数传递给第三方api
platform(params)

// 平台函数不通过return返回值，而是通过回调函数的参数传递返回值

// 参数位置问题
function test(obj) {
  const { a: first, b, c } = obj;
  // const a = obj.a
  // const b = obj.b
  // const c = obj.c
  console.log(first, obj.c)
}

test({ a: 1, b: 2, c: 3 })


// const params = {
//   appId: '124',
//   path: '23456',
//   success: function () {
//   }
// }
// wx.openEmbeddedMiniProgram(params)

// callback 函数最大的用处是和异步相关