const express = require('express')

// 创建应用对象
const app = express()

// 静态资源中间件的设置
// 参数为静态资源文件夹的路径
// url输入/css/app.css
app.use(express.static(__dirname + '/public'))

// 创建路由
app.get('/', (req, res) => {
  res.end('hello expess')
})

// 监听端口
app.listen(3000, () => {
  console.log('端口已启动,当前端口号为3000');
})

/**
 * 1、index.html为默认打开的资源
 * 2、如果静态资源和路径同事匹配，先匹配到的先展示
 * 3、路由响应动态资源，静态资源中间件响应静态资源
 */