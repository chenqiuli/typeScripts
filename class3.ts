/**
 * 类的构造函数：类被初始化的时候，自动执行的方法
 * 1、如果一个类有constructor关键字，并且constructor有参数，那它实例化出来的对象或实例要传值过去
 * 2、如果一个类继承于另一个类，被继承的类有constructor关键字，此时继承于它的类就必须写super关键字
 */

// class Person {
//   // name: string
//   // constructor(name: string) {
//   //   this.name = name
//   // }

//   constructor(public name: string) {}
// }

// let p1 = new Person('cql')
// react redux ts react-router umi dva hooks
// console.log(p1.name)

class Person {
  constructor(name: string) {}
}

class Teacher extends Person {
  constructor() {
    super('cql')
  }
}

const t1 = new Teacher()
console.log(t1)
