const fs = require('fs')
/**
 * 2、追加文件
 * @file  文件名
 * @data  待写入的数据
 * @options  选项设置（可选）
 * @callback
 */
// 异步
fs.appendFile('./座右铭.txt', ',择其善者而从之，其不善者而改之', err => {
  if (err) {
    console.log(err)
    return
  } else {
    console.log('写入成功')
  }
})
// 同步
fs.appendFileSync('./座右铭.txt', ',\r\n温故而知新，可以为师', err => {
  if (err) {
    console.log(err)
    return
  } else {
    console.log('写入成功')
  }
})
// writeFile,持续写入用这个
fs.writeFile('./座右铭.txt', ',择其善者而从之，其不善者而改之', { flag: 'a' }, err => {
  if (err) {
    console.log(err)
    return
  } else {
    console.log('写入成功')
  }
})
