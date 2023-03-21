const express = require('express')

// 创建应用对象
const app = express()

// 创建路由
app.get('/home', (req, res) => {
  res.end('hello expess')
})

// 监听端口
app.listen(3000, () => {
  console.log('端口已启动,当前端口号为3000');
})