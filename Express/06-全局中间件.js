/**
 * 记录每个请求的 url 和 ip 地址
 * 1.如果服务器端没有数据要返回到客户端的话，就直接用res.end()。
 * 2、如果服务器需要有数据返回到客户端的话，就需要用res.send().
 */

const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

// 声明一个中间件函数
function recordMiddleWare (req, res, next) {
  let { url, ip } = req
  // 将信息保存至accress.log文件中
  fs.appendFileSync(path.resolve(__dirname, './accress.log'), `${url}${ip}3000\r\n`)
  // 调用next
  next()
}

// 使用中间价函数
app.use(recordMiddleWare)
// 创建路由

app.get('/home', (req, res) => {
  res.send('前台首页')
})

app.get('/admin', (req, res) => {
  res.send('后台首页')
})

app.all('*', (req, res) => {
  res.send('<h2>404 Not Fond</h2>')
})
// 监听端口
app.listen(3000, () => {
  console.log('端口已启动,当前端口号为3000');
})