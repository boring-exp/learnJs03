const { beforeEach } = require("node:test")

function getTask(i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello world' + i)
    }, 2000)
  })
}

// getTask()
//   .then(() => {return getTask(1)})
//   .then(() => {return getTask(2)})
//   .then(() => {return getTask(3)})
//   .then(() => {return getTask(4)})

// 伪代码
// function main() {
//   const a/* promise */ = getTask(1);
//   const b = getTask(2);
//   console.log(b)
//   const c = getTask(3);
//   const d = getTask(4);
// }

// main();
// console.log('end')

// 生成器
// function * generator() {
//   // yield
//   console.log('1')
//   const a = yield 1;
//   console.log(a)
//   console.log('2')
//   const b = yield 2;
//   console.log(b)
//   console.log('3')
//   const c = yield 3;
//   console.log(c)
//   console.log('4')
//   const d = yield 4;
//   console.log(d)
//   console.log('end')
// }

// const gen = generator();
// console.log(gen.next()) // {value: ${yield后面的值}, done: false}
// console.log(gen.next('a'))
// console.log(gen.next('b'))
// console.log(gen.next('c'))
// console.log(gen.next('d'))


async function main() {
  // await 后面跟的是一个promise
  const a = await getTask(1);
  console.log(a)
  const b = await getTask(2);
  console.log(b)
  const c = await getTask(3);
  console.log(c)
  const d = await getTask(4);
  console.log(d)
  const e = await getTask(5);
  console.log(e)
}

