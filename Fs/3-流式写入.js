const fs = require('fs')

// 创建一个写入流对象
const ws = fs.createWriteStream('./观书有感')

// 写入:适用于大文件频繁写入，手动关闭通断
ws.write('床前明月光\r\n')
ws.write('疑是地上霜\r\n')
ws.write('举头望明月\r\n')
ws.write('低头思故乡\r\n')

// 关闭通道
ws.close()