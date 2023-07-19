const arr = [1, 2, 3, 4]

// 前置自增和后置自增
// 前置：先自增，在赋值
// 后置：先赋值，在自增
// let ii = 0
// const a = ++ii
// console.log(a)
// console.log(ii)
// const b = ++ii
// ii = ii + 1;

const set = new Set([1, 3, 4])

// for (/* 1 */ let i = 0, j = 1;
//      /* 2 */ i + j < arr.length; // true 执行block; false 退出for循环
//      /* 4 */ ++i, j++) {
//   /* 3 */
//   console.log(arr[i])
// }

// 一个不好的地方，原数据很轻易地被改变
for (let i = 0; set.has(arr[i]); i++) {
  console.log(arr[i])
}


// 不管怎样先执行一次，再判断条件
let i = 0
// do {
//   console.log('do while')
//   // i++;
// } while(i < 0)

// statement 未真时，运行block中地代码
while(i < 0) {
  console.log('do while')
  // i++;
}

// 对象遍历
// for in
// for of
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of