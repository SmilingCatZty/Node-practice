/**
 * 针对 /admin 和 /setting 的请求，要求路由携带 code=521 参数,如果未携带，则提示【暗号错误】
 */

const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

// 声明一个路由中间件函数
const checkCodeMiddleWare = (req,res,next) => {
  if (req.query.code === '521') {
    // 如果满足，则让其调用回调函数
    next()
  } else {
    res.send('暗号错误')
  }
}

// 创建路由
app.get('/admin',checkCodeMiddleWare, (req, res) => {
  if (req.query.code === '521') {
    res.send('后台首页')
  } else {
    res.send('暗号错误')
  }
})

app.get('/setting',checkCodeMiddleWare, (req, res) => {
  res.send('后台首页')
})

app.all('*', (req, res) => {
  res.send('<h2>404 Not Fond</h2>')
})
// 监听端口
app.listen(3000, () => {
  console.log('端口已启动,当前端口号为3000');
})