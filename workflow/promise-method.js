// 1. promise的实现

// 2. promise.all
// 异步任务队列->promise array
function factoryTask(i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`hello world${i}`)
    }, 1000 * i)
  })
}
const taskQueue = []
for (let i = 0; i < 10; i++) {
  taskQueue.push(factoryTask(i))
}
// factoryTask(1).then((data) => {
//   return factoryTask(2)
// }).then((data) => {
//   return factoryTask(3)
// })

// factoryTask(1).then(console.log)
// factoryTask(2).then(console.log)
// factoryTask(3).then(console.log)
// factoryTask(4).then(console.log)

// 直接产生一个rejected状态的promise
// taskQueue.push(Promise.reject('error'))
// taskQueue.push(Promise.reject('error2'))
// 所有的promise都转换为fullfilled状态，才会执行then
// Promise.all(taskQueue).then((data) => {
//   console.log(data)
// }, (err) => { console.log(err) })

// 2. 请实现promise.all
// function myPromiseAll() {}
// myPromiseAll(taskQueue).then((data) => {}, (error) => {})
// Promise.allSettled(taskQueue).then((data) => {
//   console.log(data)
// })
// 3. 请实现allSettled 
// function myPromiseAllSettled() {}
// myPromiseAllSettled(taskQueue).then((data) => {})

Promise.race(taskQueue).then((data) => {
  console.log(data)
})