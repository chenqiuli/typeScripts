// /**
//  * 类的访问类型：
//  * public：类的内部和类的外部都能使用，默认是public
//  * protected：类的内部及类的子类可以使用，外部不可以使用
//  * private：类的内部可以使用，类的外部不可以使用
//  *
//  * 类的概念：类的内部和类的外部
//  */

// class Person {
//   name: string
//   say() {
//     console.log(`${this.name}哈哈哈哈`)
//   }
// }

// class Xiaohong extends Person {
//   sayHello() {
//     console.log(`${this.name} say hello`)
//   }
// }

// const p1 = new Person()
// p1.name = '张三'
// // console.log(p1.name)
// p1.say()

// const x1 = new Xiaohong()
// x1.sayHello()
