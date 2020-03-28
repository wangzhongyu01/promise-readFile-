//1. 引入模块
const fs = require('fs')

//2. 异步读取 的一个promise封装
function ml_readF(path) {
  //2.1 创建 promise 实例
  const p = new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      // 处理异常 异常截流
      if (err) {
        return reject('读取失败')
      }

      // 操作成功
      resolve(data)
    })
  })

  //2.2 返回出来
  return p
}

//3. 使用
// ml_readF('./a.txt')  读取a文件的promise实例
// .then() 得到的结果, 由调用这个then() 之前的promise里面的resolve() 决定的
ml_readF('./a.txt')
  .then(res1 => {
    console.log(res1)
    return ml_readF('./b.txt')
  })
  .then(res2 => {
    console.log(res2)
    return ml_readF('./c.txt')
  })
  .then(res3 => {
    console.log(res3)
  })

// ml_readF('./a.txt').then(res => {

// })
// ml_readF('./b.txt').then(res => {

// })
// ml_readF('./c.txt').then(res => {

// })

// p.then(res => {
//   console.log('走then了', res)
// }).catch(err => {
//   console.log('走catch', err)
// })
