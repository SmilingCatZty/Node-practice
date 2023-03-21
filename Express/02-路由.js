const expess = require('express')

const app = expess()

// 创建路由
app.get('/home', (req, res) => {
  res.end('welcom home')
})

app.get('/', (req,res) => {
  res.end('home')
})

// post
app.post('/login', (req, res) => {
  res.end('login')
})

// 匹配所有方法
app.all('/test', (req, res) => {
  res.end('test')
})

// ‘*’ 匹配404响应
app.all('*', (req, res) => {
  res.end('404 not fond')
})

app.listen(3000, () => {
  console.log('3000端口已经启用');
})