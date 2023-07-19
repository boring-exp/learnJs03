const arr = [1, 2, 3, 4, 5]

console.log(arr[4])

const index = 3 // number
arr[index] = 2

console.log(arr)

// 多维数
const arr2 = [[1], [2], [3], [4], [5]]

// 数组并不要求数据类型一致
// 但是一般情况下，我们不会这么做
// 一般情况下，我们会把数据类型一致
// 元组
const arr1 = [1, '2', true, null, undefined, { name: 'aaa' }, [1, 2, 3]]
console.log(arr1)

// 可以给任意位置赋值
const arr3 = [1]
arr3[100] = 100
console.log(arr3)