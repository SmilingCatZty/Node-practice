const fs = require('fs')

/**
 * @stat status
 * 
 */
fs.stat('./论语.txt', (err,data) => {
  console.log(err);
  console.log(data);
})

  // dev: 16777230,
  // mode: 33188,
  // nlink: 1,
  // uid: 501,
  // gid: 80,
  // rdev: 0,
  // blksize: 4096,
  // ino: 2118778,
  // size: 136,
  // blocks: 8,
  // atimeMs: 1678945262132.143,
  // mtimeMs: 1678871631870.6921,
  // ctimeMs: 1678945260904.313,
  // birthtimeMs: 1678871566868.1152,
  // atime: 2023-03-16T05:41:02.132Z,
  // mtime: 2023-03-15T09:13:51.871Z,
  // ctime: 2023-03-16T05:41:00.904Z,
  // birthtime: 2023-03-15T09:12:46.868Z