const http = require('http')

const server = http.createServer((req, res) => {
  // 响应状态吗
  res.statusCode = 200
  // 响应描述
  res.statusMessage = 'already compelate'
  // 响应头
  res.setHeader('content-type', 'text/html;charset=utf-8')
  // 响应体
  res.write('123')

  res.end('服务启动')
  
})

server.listen(9000,()=> {
  console.log('服务已启动');
})