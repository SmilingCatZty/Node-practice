// 导入http模块
const http = require('http')
// 导入url模块
const url = require('url')

// 创建服务对象
const server = http.createServer((request, response) => {
  // 解析request.url内容
  let res = url.parse(request.url)
  response.end('res', res)
  // 查询路径
  res.pathname
  // 查询字符串
  res.url.parse(request.url, true) || res.query.keyword
  // 路径补足
  let url = new URL(res.url,'http://127.0.0.1')
})

// 监听端口，启动服务
// 给127.0.0.1:9000发请求
server.listen(9000, () => {
  console.log('服务已经启动');
})