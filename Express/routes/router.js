const expess = require('express')

const router = expess.Router()

router.get('home', (req, res) => {
  res.send('前台首页')
})

module.exports = router