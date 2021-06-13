// /**
//  * const 用于定于静态类型，定义后该值无法改变
//  * let 定义的变量可以改变值
//  * const 和 let 定义出来的变量都可以使用定义的类型的方法
//  */

// const age: number = 18.0
// console.log(age.toFixed()) // 使用number的方法
// // age = 20; // 错误：const 定义静态类型，定义后该值无法改变，若想改变可以使用let

// let company: string = 'haojing'
// company = '云智能'
// // console.log(company.indexOf('云'));  // 使用string的方法

// /**
//  * 自定义静态类型
//  */
// interface item {
//   name: string
//   age: number
// }

// const res: item = {
//   name: 'cql',
//   age: 24,
// }

// console.log(res.name)

// res.age = 22

// console.log(res.age)
