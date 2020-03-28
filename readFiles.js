const fs = require('fs')

function my_readFiles(path) {
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

my_readFiles('./comments/a.txt')
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
