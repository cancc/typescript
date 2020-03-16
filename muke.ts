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








