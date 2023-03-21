// 导入http模块
const http = require('http')

// 创建服务对象
const server = http.createServer((request, response) => {
  response.setHeader('content-type', 'text/html;charset=utf-8')
  // 获取请求的方法
  console.log(request.method);
  // 获取请求的URL
  console.log(request.url); //只包含路径和查询字符串
  // 获取http协议的版本号
  console.log(request.httpVersion);
  // 获取http请求头
  console.log(request.headers);

  
  response.end('hello HTTP 你好')  //设置响应体并结束
})

// 监听端口，启动服务
// 给127.0.0.1:9000发请求
server.listen(9000, () => {
  console.log('服务已经启动');
})