const express = require('express')

// 创建应用对象
const app = express()

// 创建路由
app.get('/:id', (req, res) => {
  console.log(req.params.id);
  res.end('hello expess')
})

// 监听端口
app.listen(3000, () => {
  console.log('端口已启动,当前端口号为3000');
})