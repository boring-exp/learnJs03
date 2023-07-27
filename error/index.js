// error 
// {code: 1111, message: 'error message', other: {// 函数参数}}
// const str = JSON.stringify({code: 1111, message: 'error message', other: {}})
// const obj = JSON.parse(str)
function validUser(user) {
  if (user.name !== 'admin') {
    throw new Error(JSON.stringify({ code: 0001, message: '用于验证错误', other: { user: user.name } })) // name, message, stack
  }
}

// getError({name: 'ad'})

try {
  validUser({ name: 'ad' })
} catch (err) {
  console.log(err.message)
  // 错误日志上报
}
