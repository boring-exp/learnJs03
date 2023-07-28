// function * generator() {
//   const a = 1;
//   const b = yield a + 1;
//   console.log(b)
//   const c = yield b + 1;
//   const d = yield c + 1;
//   return d + 1;
// }

// const gen = generator();
// console.log(gen.next(1))
// console.log(gen.next(1))

function getTask(i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`hello world${i}`)
    }, 2000)
  })
}


function* main() {
  const a = yield getTask(1);
  console.log(a)
  const b = yield getTask(2);
  console.log(b)
  const c = yield getTask(3);
  console.log(c)
  const d = yield getTask(4);
  console.log(d)
  const e = yield getTask(5);
  console.log(e)
}

// function co(generator) {
//   let result = generator.next();
//   function step() {
//     if (result.done) {
//       return result.value;
//     }
//     result.value.then((data) => {
//       result = generator.next(data);
//       step();
//     })
//   }
//   step();
// }

function co(generator, data) {
  let result = generator.next(data);
  if (result.done) {
    return result.value;
  }
  result.value.then((data) => {
    co(generator, data)
  })
}



co(main())