// 隐藏起来的接口
// {a,b}
let a = 1;
const user = {
  name: 1,
}

// setInterval(() => {
//   user.name += 1 // user.name = user.name + 1
//   a++
//   console.log(user.name, a, 'index.js')
// }, 1000)

function testFn() {
  console.log('testFn')
}

// 导出语句
export {
  a as test,
  testFn,
  user
}

export const b = 'b';
// 建议做法
// export {a, b}
// 1. 可以单独导出
// 2. 可以批量导出{}
// 3. 导出时起别名as
export default testFn