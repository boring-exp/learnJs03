// === >= <= !==

// 多个条件
// &&(与) ||（或）
// &&: 两个条件都为真，结果才为真
// ||: 两个条件有一个为真，结果就为真
// !: 取反

console.log(!false)
console.log(true && false)
console.log(false || false)

const name = 'pjw'
if (name === 'pjw') {
  console.log('是pjw')
} else if (name === 'ceshi') {
  console.log('是ceshi')
} else {
  console.log('是其他')
}