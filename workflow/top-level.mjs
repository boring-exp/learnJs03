// commonjs
// es module
// .mjs .cjs
// package.json type: module
function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}
const result = await getTask();
await sleep(2000)
console.log(result)
function getTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello world')
    }, 2000)
  })
}