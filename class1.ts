/**
 * this指自己，super指父类
 * 类的定义
 * 类的继承：extends继承
 * 类的重写：可以重写父类的属性和方法
 * 类的super关键字：只能调用父类的方法，不能调用父类的属性
 */

class Dog {
  color = '白色'
  name = 'dog'
  say() {
    return 'Hello'
  }
}

class Wangwang extends Dog {
  name = '旺旺'
  dance() {
    return '我是' + this.name
  }
  say() {
    return super.say()
  }
}

const w1 = new Wangwang()
console.log(w1.say())

// class Dog {
//   color = '白色'
//   skill = '唱歌'
//   say() {
//     return 'Hello'
//   }
// }

// class Wangwang extends Dog {
//   name = '旺旺'
//   color = 'Lanse'
//   // 也可以用父类的属性
//   dance() {
//     return '我是' + this.name + '我会唱歌,我是' + this.color
//   }
//   // 类的重写

//   // say() {
//   //   return 'Hi'
//   // }
//   // super关键字只能调用方法，实现重写
//   say() {
//     return super.say() + '我是' + this.name
//   }
// }

// const w1 = new Wangwang()
// // console.log(w1.name)
// // console.log(w1.color)
// console.log(w1.say())
// console.log(w1.dance())
