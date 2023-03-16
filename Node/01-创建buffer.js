/**
 * @alloc
 * 1、创建时会对每一个二进制数据进行清零
 */
let buf = Buffer.alloc(10) // 创建一个10字节的buffer
console.log('buf', buf)

/**
 * @allocUnsafe
 * 1、创建速度比 alloc 快，不会对数据进行清零
 * 2、可能会存在旧数据，影响数据
 */
let buf_02 = Buffer.allocUnsafe(100)
console.log('buf_02', buf_02)

/**
 * @from
 * 1、不能直接转数字
 */
let buf_03 = Buffer.from('hello')
console.log('buf_03', buf_03)

// buffer可以理解为一个全局变量