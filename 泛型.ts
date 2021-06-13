/**
 * 泛型：就是函数不知道入参或者出参是什么类型的时候，可以使用泛型定义
 */
function fn<T>(a: T): T {
  return a
}

let result1 = fn('name') // 类型推断
let result2 = fn<number>(10) // 明确定义泛型的类型

//  泛型可以同时定义多个
function fn2<T, K>(a: T, b: K): T {
  console.log(b)
  return a
}

let result3 = fn2(10, 'age')
let result4 = fn2<boolean, number>(true, 10)

// 泛型可以继承于接口
interface FN3 {
  length: number
}
function fn3<T extends FN3>(a: T): number {
  return a.length
}
let result5 = fn3<FN3>({ length: 1000 })
