const fs = require('fs')

/**
 * @unlink
 * 取消连接  unlinkSync
 * @rm 14.4
 * 删除 rmSync
 */

fs.unlink('./座右铭.txt', err => {
  console.log(err);
})

fs.rm('./论语.txt', err => {
  console.log(err);
})