// /***
//  * 联合类型和类型保护：
//  * 所谓联合类型，可以认为一个变量可能有两种或两种以上的类型。所以需要类型保护。
//  * 1、断言as方式
//  * 2、in方式
//  * 3、typeof方式
//  * 4、instanceof方式：只能用在类上
//  */
// interface Waiter {
//   anjiao: boolean
//   say: () => {}
// }
// interface Teacher {
//   anjiao: boolean
//   skill: () => {}
// }

// function judgeWho(animal: Waiter | Teacher) {
//   // animal.say()
//   if (animal.anjiao) {
//     ;(animal as Waiter).say()
//   } else {
//     ;(animal as Teacher).skill()
//   }
// }

// function judgeWho2(animal: Waiter | Teacher) {
//   if ('skill' in animal) {
//     animal.skill()
//   } else {
//     animal.say()
//   }
// }

// function add(first: string | number, second: string | number) {
//   // return first + second
//   if (typeof first === 'string' || typeof second === 'string') {
//     return `${first}${second}`
//   }
//   return first + second
// }

// const res = add(1, 1)
// console.log(res)

// interface NumberObj {
//   count: number
// }

// function addObj(first: object | NumberObj, second: object | NumberObj) {
//   // return first.count + second.count
//   if (first instanceof NumberObj && second instanceof NumberObj) {
//     return first.count + second.count
//   }
//   return 0
// }

// //
// // const first: NumberObj = new NumberObj()
// const first: NumberObj = { count: 1 }
// const second: NumberObj = { count: 2 }
// // console.log(first instanceof NumberObj, 'first instanceof NumberObj')

// const res2 = addObj(first, second)
// console.log(res2)

interface NumberObj {
  count: number
}
const first: NumberObj = { count: 1 }
const second: NumberObj = { count: 2 }

function instanceOf(object: any): object is NumberObj {
  return true
}

function addObj(first: object | NumberObj, second: object | NumberObj) {
  if (instanceOf(first) && instanceOf(second)) {
    return first.count + second.count
  }
  return 0
}
console.log(instanceOf(first))
const reskkk = addObj(first, second)
console.log(reskkk)
