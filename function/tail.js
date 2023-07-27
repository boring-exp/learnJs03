// 尾递归优化
// 用递归的方式写1+10
// function sum(n) {
//   if (n === 1) {
//     return 1;
//   }
//   return n + sum(n - 1);
// }

function a() {
  return a()
}

a()