const fs = require('fs')

const p = new Promise((resolve, reject) => {
  fs.readFile('./comments/b1.txt', 'utf-8', (err, data) => {
    if (err) {
      reject('读取文件错误')
    }
    resolve(data)
  })
})

p.then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
