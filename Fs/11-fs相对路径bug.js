相对路径参考系不是js文件的所在目录, 而是命令行的工作目录

解决方式: 换绝对路径

/**
 * @__dirname
 * 可以理解成一个全局变量，所在文件目录的绝对路径
 */

const fs = require('fs')
fs.writeFileSync(__dirname+'/9-文件夹创建.js','a')