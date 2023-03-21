const express = require('express')

// 创建应用对象
const app = express()

// 设置路由
app.get('/home', (req, res) => {
  // 跳转响应
  res.redirect('www.baidu.com')
  // 下载响应
  res.download(__dirname + '/package.json')
  // json响应
  res.json({
    name: '',
    slogen:''
  })
  // 文件响应
  res.sendFile(__dirname, '/观书有感2.txt')
  
  
  res.end('hello expess')
})

// 监听端口
app.listen(3000, () => {
  console.log('端口已启动,当前端口号为3000');
})