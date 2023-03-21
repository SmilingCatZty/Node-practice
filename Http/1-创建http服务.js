// 导入http模块
const http = require('http')

// 创建服务对象
const server = http.createServer((request, response) => {
  response.setHeader('content-type','text/html;charset=utf-8')
  response.end('hello HTTP 你好')  //设置响应体并结束
})

// 监听端口，启动服务
// 给127.0.0.1:9000发请求
server.listen(9000, () => {
  console.log('服务已经启动');
})