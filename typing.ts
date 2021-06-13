// /**
//  * 基础静态类型 :number string  undefined null boolean void
//  * void ： 空类型，只能为其赋值undefined 或 null
//  */
// const res1 : number = 18;
// const res2 : string = 'cql';
// const res3 : undefined = undefined;
// const res4 : null = null;
// const res5 : boolean = false;
// const res6 : void = undefined;
// const res7 : void = null;

// /**
//  * 对象静态类型 :对象类型  数组类型  类类型  函数类型
//  */

//  const res8 : {
//    name : string,
//    age: number,
//  } = {
//    name :'cql',
//    age:24,
//  }

//  const res9 : string[] = ['a','b','c'];
//  const res10 : any[] = [1,'k',null];

//  class Person{}
//  const res11 : Person = new Person();

//  const res12 : () => string = () => 'hooo';

let a: number
a = 1

let b: unknown
b = 'kkk'
b = true
b = 123

let c: number
c = b // Error:不能将unknown赋值给number

let d: any
d = 1
d = false
d = 'lll'

c = d // any类型的可以

let f: object
f = {}
f = function ff() {}

let fun: (a: number, b: number) => number
fun = function (a: number, b: number): number {
  return a + b
}

let arr1: number[] = [1, 2]
let arr2: Array<number> = [1, 2]

let tuple11: [number, string] = [1, '2']

// let aaa: 1 | 2 | 3
// let bbb: 1 | 2 | 3
// let ccc: 1 | 2 | 3

type myType = 1 | 2 | 3
let aaa: myType
let bbb: myType
let ccc: myType

//
