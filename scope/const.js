const b = 1;
b = 2 // 每一个赋值的数据，需要新的内存空间保存

const a = {
  value: 1
}

a.value = 2

const test = {
  name: 1,
  age: 2
}

test.name = 'aaa'

// 不行
// test = {
//   name: 2,
//   age: 2,
// }

console.log(test)