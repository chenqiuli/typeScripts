function join(first: string | number, second: string | number) {
  console.log(`${first}${second}`)
}
join('111', '222')

function join2<T, P>(first: T, second: P) {
  console.log(`${first}${second}`)
}
join2<string, number>('1', 2)

/**
 * 目标一：学会ts
 * 目标二：看完redux，看完react-router
 * 目标三：每天看看面试题
 */
function myFun<T>(params: Array<T>) {
  console.log(params)
}
myFun<string>(['1', '2'])

function a<T>(first: T, second: T) {
  return `${first}${second}`
}
const res = a<string>('1', '2')
console.log(res, 'res')

function myFun2<T>(params: Array<T>) {
  console.log(params)
}

myFun2([1, '2'])

/***
 * 当我们定义函数或类时，如果遇到类型不明确的时候就可以使用泛型。
 * 泛型就是不知道是什么类型，只有调用这个函数的时候才会知道，只有声明类实例或对象的时候才会知道
 */

function sum<T>(num1: number, num2: number): number {
  return num1 + num2
}

sum<number>(1, 2)
