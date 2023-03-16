/**
 * 新建一个文件
 * 座右铭.txt
 * 写入内容 '三人行，则必有我师'
 */

// 1、导入fs模块
const fs = require('fs')

/**
 * 2、写入文件
 * 异步写入：fs.writeFile(file,data[,options],callback)
 * 同步写入：fs.writeFileSync(file,data[,options],callback)
 * @file  文件名
 * @data  待写入的数据
 * @options  选项设置（可选）
 * @callback 
 */

// 同步写入
fs.writeFile('./座右铭.txt', '三人行，则必有我师', err => {
  // 写入失败：错误对象
  // 写入成功：null
  if (err) {
    console.log('写入失败');
    return
  } else {
    console.log('写入成功');
  }
})
//异步写入
fs.writeFileSync('./异步写入','异步写入')