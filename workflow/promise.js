// 回调地狱问题
// 1.promise
// 将异步的回调问题，转换成链式调用
// 编程链式调用之后，看起来像同步

// 步骤
// 1.将所有的异步逻辑，封装进promise对象
// 让异步函数，直接返回promise对象
function network() {
  // resolve 对应成功的回调，
  // reject 对应失败的回调
  const callback = (resolve, reject) => {
    setTimeout(() => {
      // console.log('hello world')
      // 转换状态，并携带返回值
      resolve('hello world')
    }, 3000)
  }
  const pro = new Promise(callback)
  return pro
}

network().then((data) => {
  console.log(data)
  // 回调函数的返回值，会被then方法作为返回值
  return network()
}).then((data) => {
  console.log(data)
  return network()
}).then((data) => {
  console.log(data)
})

// 实现sleep函数
function sleep(time) {}
console.log('start')
sleep(3000).then(() => {
  console.log('hello world')
})