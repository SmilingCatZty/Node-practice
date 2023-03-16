const fs = require('fs')

const files = fs.writeFileSync('./Fs')

files.foreach(item => {
  const data = item.split('-')
  const [num, name] = data
  if (Number(num) < 10) {
    num = '0' + num
  }
  let newName = num + '-' + name
  fs.renameSync(`./Fs/${item}`, `./Fs/${newNAme}`)
})
