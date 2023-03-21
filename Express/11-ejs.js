const express = require('express')
const path = require('path')

// 创建应用对象
const app = express()

// 设置模板引擎
app.set('view engine', 'ejs') //pug  twing都是模板引擎
// 设置存放位置: 模板文件：具有模板语法内容的文件
app.set('views', path.resolve(__dirname, './views'))
// 通过render方法做响应

app.get('/home', (req, res) => {
  let data  = '前端未死,逝者犹存'
  res.render('home', { data })
  // 创建模板文件
 
})

// 监听端口
app.listen(3000, () => {
  console.log('端口已启动,当前端口号为3000')
})
