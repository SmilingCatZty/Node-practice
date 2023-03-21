const express = require('express')

// 创建应用对象
const app = express()

// 声明中间件
app.use((req, res, next) => {
  // 检测请求头的reffer是否为.0.0.1
  let refer = res.get('referer')
  if (refer) {
    let url = new URL(refer)
    let hostName = url.hostname
    if (hostName !== '127.0.0.1') {
      res.status(404).send('资源不存在')
      return
    }
  }
  console.log(hostName)
  next()
})

app.use(express.static(__dirname + '/public'))

// 创建路由
app.get('/', (req, res) => {
  res.end('hello expess')
})

// 监听端口
app.listen(3000, () => {
  console.log('端口已启动,当前端口号为3000')
})
