const fs = require('fs')

// 调用rename方法
/**
 * @rename
 * 1、移动
 * 2、重命名
 */
fs.rename('./观书有感.txt', 'Fs/观书有感.txt', err => {
  console.log(err);
})