var express = require('express');
var router = express.Router();

// 导入文件处理
const formidable = require('formidable')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 显示网页的表单
router.get('/portrait', (req,res) => {
  res.render('portrait')
})

// 处理文件上传
router.post('/portrait', (req, res) => {
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + '../public/images', // 设置存储位置
    keepExtensions:true  // 保持文件后缀
  })
  // 解析请求报文
  form.parse(req,(err,fileds,files) => {
    if (err) {
      next(err)
      return
    }
    console.log('fileds', fileds);
    console.log('files', files);
    
    // 保存图片地址
    let url = '/public/images' + files.portrait.newFilename // 将此数据保存至数据库中
    res.send(url)
  })
})

module.exports = router;
