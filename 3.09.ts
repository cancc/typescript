function func1(params: string) {
  console.log(params)
}
let params1 = "hello world";
let par2 = ["1"];
func1(params1);
// func1(par2);
// 
// 布尔类型
let isDone: boolean = true;
let createByBooble: Boolean = new Boolean(1) // 返回的是Boolean
let createBybooble: boolean = Boolean(1);

let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;


// let anyThing: any = 'hello';
// console.log(anyThing.myName);
// console.log(anyThing.myName.firstName);

// let anyThing: any = 'Tom';
// anyThing.setName('Jerry');
// anyThing.setName('Jerry').sayHello();
// anyThing.myName.setFirstName('Cat');

interface Info1 {
  readonly id: number,
  name: string,
  age?: number,
  [propName:string]: any
}
// func2 TomInfo(info: Person) {
//   console.log(info.name)
// }
let Tom: Info1 = {
  id: 123,
  name: "jay",
  age:20,
  gender: "male",
}
Tom.name = "lucy"
// Tom.id = 321


function reverse(x: number | string): any {
  if(typeof x ==="number") {
    return Number(x.toString().split('').reverse().join(''));
  }else if(typeof x==="string") {
    return x.split('').reverse().join('');
  }
}
function toBoolean(something: string | number): any {
  if(<string> something) {
    return something;
  }
  
}



