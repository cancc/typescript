// 数组
let x: number[] = [1, 2, 3]
let y: Array<number> = [1, 2, 3]
let z: Array<string> = ['1', '2', '3']

// 元祖
let temp: [string, number]
temp = ["1", 1]
console.log(temp[0])

// 枚举
enum Color {
  Red = 1,
  Green = 3,
  Blue = 5,
}

let g: Color = Color.Green
console.log(g) // 3
let colorName: string = Color[3]
console.log(colorName)

// 断言
let someValue: any = 'this is value'
// let valueLength: number = (<string>someValue).length
let valueLength: number = (someValue as string).length
console.log(valueLength)

// 接口
interface Lable {
  lable: string
}
function lab (lableObj: Lable) {
  console.log(lableObj.lable)
}
let myLable = {
  size: 10,
  lable: 'myLable Object '
}
lab(myLable) //myLable Object 声明变量传入不会报错，即使多了size； 当直接传入对象，会报错：

/* 42:3 - error TS2345: Argument of type '{ size: number; lable: string; }' is not assignable to parameter of type 'Lable'.
  Object literal may only specify known properties, and 'size' does not exist in type 'Lable'.

  42   size: 10,
*/    
// lab({
//   size: 10,
//   lable: 'myLable Object '
// })

// 接口-可选属性
interface Computer {
  size: number,
  price: number,
}
interface ComputerConfig {
  size?: number,  // '?'可选属性
  price?: number,
}
function buy (config: ComputerConfig): Computer{
  let computer = {size: 13, price: 10000}
  if(config.size) {
    computer.size = config.size
  }
  if(config.price) {
    computer.price = config.price
  }
  return computer
}
console.log(buy({size:15, price: 16000})) // {size: 15, price: 16000}

//接口 -- 只读s属性
interface Num {
  readonly x: number,
  y: number,
}
let num1: Num = {x: 10,y: 20} // 赋值后readonly 的属性就不能更改了
// num1.x = 20 // error TS2540: Cannot assign to 'x' because it is a read-only property.
num1.y = 10

// 接口 -- 函数类型
interface SeachFunc {
  (source: string, subString: string): boolean
}
let mySearch: SeachFunc
mySearch = function(src, sub) {
  let res = src.search(sub)
  return res > -1
}
console.log(mySearch("123","1")) // true
console.log(mySearch("123","0")) // false

// 
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
console.log(myStr)

// 接口 -- 类类型
interface ClockInterface {
  currentTime: number;
  setTime(d: number):any;
}

class Clock implements ClockInterface {
  currentTime: number;
  setTime(d: number) {
      this.currentTime = d;
  }
  constructor(h: number, m: number,currentTime: number) {
    this.currentTime = currentTime
   }
}
// 接口 继承接口
interface Shape {
  color: string;
}
interface PenStroke {
  penWidth: number;
}
interface Square extends Shape, PenStroke {
  sideLength: number;
}
let square = <Square>{}; // 等价与 let square = {} as Square
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;







