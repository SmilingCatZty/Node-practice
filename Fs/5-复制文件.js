/**
 * 复制观书有感中的内容
 * 流式操作，理想状态下比方式1好，资源占用小
 */
// 方式1、reactFile
const fs = require('fs')
// 读取文件的内容
const data = fs.readFileSync('./观书有感.txt')
// 写入文件
fs.writeFileSync('./观书有感2.txt',data)


// 方式2-流式操作
const rs = fs.createReadStream('./观书有感.txt')
const ws = fs.createWriteStream('./观书有感2.txt')
rs.on('data', chunk => {
  ws.write(chunk)
})

// 方式3
rs.pipe(ws)