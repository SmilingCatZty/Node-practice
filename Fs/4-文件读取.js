const fs = require('fs')
// 异步读取
fs.readFile('./观书有感.txt', (err,data) => {
  if (err) {
    console.log('err', err);
    return 
  } else {
    console.log(data);
  }
})
// 同步读取
fs.readFileSync('./观书有感.txt', (err,data) => {
  if (err) {
    console.log('err', err);
    return 
  } else {
    console.log(data);
  }
})
// 流式读取
fs.createReadStream('../座右铭.txt')
/**
 * @on
 * data事件
 * chunk块
 * 每次读取65536字节的东西
 */
fs.open('data', trunk => {
  console.log(trunk);
})
/**
 * @end 可选事件
 * data事件
 * chunk块
 * 每次读取65536字节的东西
 */
fs.end('data', trunk => {
  console.log(trunk);
})