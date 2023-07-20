// pop,push,shift
const arr = [1, 2, 3, 4, 5]
const arr1 = [{ name: 1 }, { name: 2 }, { name: 3 }]

// 引用类型在做copy时，只是copy了引用地址；浅拷贝
// 深拷贝的意思为：新建一个对象，把原对象的属性值copy过来，如果属性值是引用类型，再把引用类型的属性值copy过来
const test = {
  name: arr1[0].name
}
// const test = arr1[0] // 浅拷贝
test.name = 2
// 1. 数组遍历
// const callback = function (item, index, arr) {
//   console.log(item, index, arr)
// }
arr1.forEach(function (item) {
  // 如果原数组中的item时引用数据类型，那对引用数据类型的修改
  // 会影响原数组中的数据
  // 一般情况下不这么做
  item.name = item.name + 1
})

// 2. map
const newArr1 = arr1.map(function (item) {
  return { name: item.name + 1 }
})

console.log(newArr1)
console.log(arr1)

// 3. Array.isArray 判断是否是数组

// 4. every
const result = arr.every(function (item) {
  return item < 5
})
console.log(result)

// 4. find找出第一个满足条件的元素
const arr4 = [{ name: 'pjw' }, { name: 'xxx' }, { name: 'ttt' }]
const arr4Result = arr4.find(function (item) {
  return item.name === 'xxx'
})
// if (arr4Result) {
//   console.log('找到了')
// } else {
//   console.log('没找到')
// }
console.log(arr4Result)

// 4.1 findIndex
const arr4ResultIndex = arr4.findIndex(function (item) {
  return item.name === 'pjw'
})
console.log(arr4ResultIndex)
// if (arr4ResultIndex > -1) {
//   console.log('找到了')
// } else {
//   console.log('没找到')
// }

// 5. include

// 6. filter
const arr6 = [{ name: '1', isVip: true }, { name: '2', isVip: false }]
const arr6Result = arr6.filter(function (item) {
  // if (item.isVip) {
  //   return true
  // } else {
  //   return false
  // }
  return !item.isVip
})

// 7. 数据扁平化，面试
const arr7 = [1, 2, 3, [4, 5, 6, [7, 8, 9]]]
// TODO:请将数组扁平化，不能用flat
// TODO:将一个对象深拷贝
const arr7Result = arr7.flat(1)
console.log(arr7Result)

// 7. Join
const arr8 = [1, 2, 3, 4, 5]
// 默认是,
const arr8Result = arr8.join('&')
console.log(arr8Result)

// 8.reverse反转数组

// 9.
const arr9 = [1, 3, 10, 4, 5]
arr9.sort(function (a, b) {
  // 排序规则
  return a - b
})
console.log(arr9)

// 10. slice函数
const arr10 = [1, 2, 3, 4, 5]
const arr10Result = arr10.slice(1, 3)
console.log(arr10Result)

// 11. splice splice(start, deleteCount, item1)
// 删除元素 splice(start, deleteCount)
// 添加元素 splice(start, 0, item1, item2)

// 12.reduce