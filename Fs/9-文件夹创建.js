const fs = require('fs')

/**
 * @mkdir make director
 * 1-直接创建
 */

fs.mkdir('./test.txt', err => [console.log(err)])

/**
 * @mkdir make director
 * 2-递归创建
 */

fs.mkdir('./a/b/c', { recursive: true }, err => [console.log(err)])

/**
 * @readdir read director
 * 2-3 读取文件夹
 */
fs.readdir('./a', (err, data) => {
  if (err) {
    console.log(err)
  }
  console.log(data)
})

/**
 * 不推荐使用
 * @rmdir remove director
 * 2-4 删除文件夹
 */
fs.rmdir('./a', {recursive:true}, err => {
  console.log(err);
})

/**
 * 不推荐使用
 * @rm remove director
 * 2-5 删除文件夹
 */
fs.rm('./test.txt', {recursive:true}, err => {
  console.log(err);
})