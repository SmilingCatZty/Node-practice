const http = require('http')

const server = http.createServer((request, response) => {
  // 获取请求的方法
  let { method } = request
  let pathName = new URL(request.url, 'http://127.0.0.1')
  console.log(method);
  console.log(pathName);
  response.end('practice')
  response.setHeader('content-type','text/html;charset=utf-8')
  if (method === 'GET' && pathName === '/login') {
    response.end('登录成功')
    return 
  } else {
    response.end('登录失败')
    return
  }
})

server.listen(9000,()=>{
  console.log('服务已经启动,端口9000');
})