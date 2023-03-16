/**
 * @toString方法
 * 可以用tostring方法将buffer转换为字符串
 * 默认使用 utf-8的转换
 */
let buf = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]); 
console.log('buf', buf.toString())
