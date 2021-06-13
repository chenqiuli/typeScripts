// /**
//  * 有两个函数，形参和实参都是一样的，用interface抽象出来
//  * interface接口可以定义属性和方法
//  * 属性分为：必选属性，可选属性，额外添加的属性
//  * 可选属性 ： ?:
//  * 额外添加的属性 ： [propName:string]:any  属性值是string类型，属性值是any任意类型
//  *
//  * 一个interface接口可以继承于另一个interface接口，或者多个，然后在自己的接口上再定义属性和方法
//  *
//  * 类也可以约束与接口
//  *
//  */

// //  姓名，年龄，身高，学校,技能
// interface Girl {
//   name: string
//   age: number
//   height: number
//   school?: string
//   [propName: string]: any
//   say(): string
// }

// const params = {
//   name: '杨幂',
//   age: 24,
//   height: 168,
//   school: '北京电影学院',
//   skill: '演戏唱歌跳舞',
//   say() {
//     return '我是杨幂，我会演戏'
//   },
// }

// interface Actor extends Girl {
//   action: () => string
// }

// const actors = {
//   name: 'baby',
//   age: 18,
//   height: 168,
//   say() {
//     return '我是baby'
//   },
//   action: () => {
//     return '我会参与综艺'
//   },
// }

// function okResume(girl: Girl) {
//   if (girl.age <= 25 && girl.height >= 165) {
//     console.log(`${girl.name}符合要求`)
//   } else {
//     console.log(`${girl.name}不符合要求`)
//   }
// }

// // okResume('杨幂', 24, 168)
// // okResume(params)
// getResume(actors)

// function getResume(girl: Girl) {
//   console.log(`${girl.name}的年龄是${girl.age},身高是${girl.height}`)
//   girl.school && console.log(`${girl.name}的学校是${girl.school}`)
//   girl.skill && console.log(`${girl.name}的技能是${girl.skill}`)
//   girl.say && console.log(`${girl.name}会说${girl.say()}`)
//   console.log(girl.action())
// }

// // getResume('杨幂', 24, 168)
// // getResume(params)
// getResume(actors)

// class Beauty implements Girl {
//   name: '杨紫'
//   age: 19
//   height: 160
//   say() {
//     return '我是杨紫'
//   }
// }

// const beauty = new Beauty()
// console.log(beauty.age, beauty.say())  

// interface类型

function loggingIdentity<T extends string>(arg: T): T {
  // console.log(arg.length)
  return arg
}

const res = loggingIdentity('hello') // 5
console.log(res)
