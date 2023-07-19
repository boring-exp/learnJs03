// set，集合数据类型
// 集合是由一组无序且唯一（即不能重复）的项组成的。
const set = new Set();
set.add(1);
set.add(2);
set.add(2);
set.add(2)
// set.delete(2)
// set.clear()
console.log(set.has(3))
console.log(set)

// 数组
const arr = [1, 2, 2, 3, 4, 5, 5]
// 请将数组中重复的元素去除
// [1,2,3,4,5]
const arrUniqueSet = new Set(arr)
const arrUnique = Array.from(arrUniqueSet)