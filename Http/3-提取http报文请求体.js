// 导入http模块
const http = require('http')

// 创建服务对象
const server = http.createServer((request, response) => {
  // 1、声明一个变量
  let body = ''
  // 2、绑定 data 事件
  request.on('data', chunk => {
    body += chunk
  })
  // 3、绑定end事件
  request.on('end', () => {
    console.log(body)
    response.end('结束了')
  })
})

// 监听端口，启动服务
// 给127.0.0.1:9000发请求
server.listen(9000, () => {
  console.log('服务已经启动')
})
