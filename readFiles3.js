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

async function test() {
  try {
    let res1 = await my_readFiles('./comments/a1.txt')
    console.log(res1)
  } catch (error) {
    console.log(error)
  }
  let res2 = await my_readFiles('./comments/b.txt')
  console.log(res2)

  let res3 = await my_readFiles('./comments/c.txt')
  console.log(res3)
}

test()
