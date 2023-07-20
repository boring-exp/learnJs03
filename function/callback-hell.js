// 回调地狱
function network(url, fn) {
  // 请求url，通过fn返回url结果
  fn({ data: url })
}

// 当回调函数有依赖关系是，会出现回调地狱
const fn = function (params) {
  console.log(params)
  network(`${params.data}|second`, function (params) {
    console.log(params);
    // network(`${params.data}|third`, function (params) {
    //   console.log(params);
    //   network(`${params.data}|forth`, function (params) {
    //     console.log(params);
    //     network(`${params.data}|fifth`, function (params) {
    //       console.log(params);
    //     })
    //   })
    // })
  })
}

network('first', fn)

// const r1 = network('first')
// const r2 = network(`${r1}|second`)
// const r3 = network(`${r2}|third`)
// const r4 = network(`${r3}|forth`)
// const r5 = network(`${r4}|fifth`)

// 每次请求数据有依赖关系
wx.request({
  url: 'https://www.baidu.com',
  data: { name: 'pjw' },
  success(params) {
    wx.request({
      url: 'https://www.baidu.com',
      data: params.data,
      sunccess(params) {
        wx.request({
          url: "https://www.baidu.com",
          data: params.data,
          success(params) {
            // todo: 业务逻辑
          }
        })
      }
    });
  }
})

// let result = null;
// 1. request
// 2. request 回调函数
// 3. 第二个request
// wx.request({
//   url: 'https://www.baidu.com',
//   data: { name: 'pjw' },
//   success(params) {
//     result = params.data
//   }
// })

// wx.request({
//   url: 'https://www.baidu.com',
//   data: result,
//   success(params) {
//     result = params.data
//   }
// })
