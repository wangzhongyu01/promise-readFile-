const fs = require('fs')

function ml_readFile(path) {
  const p = new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        return reject('读取文件失败')
      }

      resolve(data)
    })
  })

  return p
}

ml_readFile('./comments/a.txt')
  .then(res => {
    console.log(res)
    return ml_readFile('./comments/b.txt')
  })
  .then(res => {
    console.log(res)
    return ml_readFile('./comments/c.txt')
  })
  .then(res => {
    console.log(res)
  })
