// // 筛选符合要求的简历

// // const okResume = (name: string, age: number, height: number) => {
// //   age <= 24 && height >= 165 && console.log(`${name}符合要求`)
// //   age > 24 && height < 165 && console.log(`${name}不符合要求`)
// // }

// // okResume('杨幂', 18, 168)

// // // 想要看到应聘者的简历
// // const getResume = (name: string, age: number, height: number) => {
// //   console.log(`${name}年龄是:${age},身高是${height}`)
// // }

// // getResume('杨幂', 18, 168)

// /**
//  * 可以看到上面两个方法的形参和实参都是一样的,所以用interface复用类型检查
//  * interface不仅可以定义属性，也可以定义方法
//  * 1.可选属性：?:
//  * 2.额外的属性检查：[propName:string]:any
//  * 3.函数
//  *
//  * 一个interface接口可以继承另一个interface接口，也可以继承多个接口
//  * 一个class类也可以继承于interface接口
//  */

// interface Girl {
//   name: string
//   age: number
//   height: number
//   school?: string // 可选属性，调用如果不传也不会报错
//   [propName: string]: any // 额外的属性检查，用于这个对象可能有额外用途使用的额外属性
//   say(): string
// }

// // 继承于另一个接口
// interface Teacher extends Girl {
//   teach(): string
// }

// const girl = {
//   name: '杨幂',
//   age: 18,
//   height: 168,
//   school: '北京电影学院',
//   sex: '女',
//   say() {
//     return '我会演戏'
//   },
//   teach() {
//     return '我来教你演戏'
//   },
// }

// // const okResume = (girls: Girl) => {
// //   const { age, height, name } = girls
// //   age <= 24 && height >= 165 && console.log(`${name}符合要求`)
// //   age > 24 && height < 165 && console.log(`${name}不符合要求`)
// // }

// const getResume = (girls: Teacher) => {
//   const { age, height, name, school, sex, say, teach } = girls
//   console.log(`${name}年龄是:${age},身高是${height},${say()}`)
//   school && console.log(`${name}学校是:${girls.school}`)
//   sex && console.log(`${name}性别是:${sex}`)
//   console.log(teach())
// }

// // okResume(girl)
// // getResume(girl)

// // 实现一个类被某个接口约束
// class Person implements Girl {
//   name: 'cql'
//   age: 23
//   height: 163
//   say() {
//     return '我会coding'
//   }
// }

// let cql = new Person()
// console.log(cql.say())
