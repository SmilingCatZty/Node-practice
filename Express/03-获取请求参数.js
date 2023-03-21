const express = require('express')

const app = express()

app.get('/home', (req, res) => {
  // 获取path
  const path = req.path
  // 获取query参数
  const query = req.query
  // 获取ip
  const ip = req.ip
  // 获取请求头
  const head = req.get('host')

  res.end('welcom to express')
})

app.listen(3000, () => {
  console.log('3000');
})