// 定时
// setTimeout(() => { console.log('setTimeout') }, 3000)
// console.log('start')

// 1. callback函数/ jquery时代
function network(callback) {
  // 2. 异步
  setTimeout(() => {
    callback('callback')
  }, 3000)
}

// 单线程
network((data) => {
  console.log(data)
  network((data) => {
    console.log(data)
    network((data) => {
      console.log(data)
    })
  })
  // 难道外边执行逻辑完全不需要这里的数据了吗
})

console.log('hello world')