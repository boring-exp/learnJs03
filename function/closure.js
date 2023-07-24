// 闭包
const obj = {
  name: 1
}

// 此函数执行时一定要有obj，一定要有外部数据（环境）
function closure() {
  console.log(obj)
}

const val1 = closure // val1 = function + environment

function simpleFn(obj) {
  console.log(obj)
}

const val2 = simpleFn // val2 = function
const arr = [1, 2, 3, 4, 5, 6]
const result = []
for (var i = 0; i < arr.length; i++) {
  const clo = function () { return i } // function + env[i]
  // console.log(clo())
  result.push(clo)
}
console.log(result)
console.log(result[5]())