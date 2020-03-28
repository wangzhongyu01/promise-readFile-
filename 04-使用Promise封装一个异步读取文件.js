//1. 引入模块
const fs = require('fs')

//2. 异步读取 的一个promise封装
const p = new Promise((resolve, reject) => {
  fs.readFile('./a1.txt', 'utf8', (err, data) => {
    // 处理异常 异常截流
    if (err) {
      return reject('读取失败')
    }

    // 操作成功
    resolve(data)
  })
})

//3. 使用
p.then(res => {
  console.log('走then了', res)
}).catch(err => {
  console.log('走catch', err)
})

// fs.readFile('./a.txt', 'utf8', (err, data) => {
//   // 异常截流
//   if (err) {
//     return console.log('读取失败')
//   }
//   console.log(data)
// })
