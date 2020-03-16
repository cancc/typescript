"use strict";
function func1(params) {
    console.log(params);
}
var params1 = "hello world";
var par2 = ["1"];
func1(params1);
// func1(par2);
// 
// 布尔类型
var isDone = true;
var createByBooble = new Boolean(1); // 返回的是Boolean
var createBybooble = Boolean(1);
var decLiteral = 6;
var hexLiteral = 0xf00d;
// ES6 中的二进制表示法
var binaryLiteral = 10;
// ES6 中的八进制表示法
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
// func2 TomInfo(info: Person) {
//   console.log(info.name)
// }
var Tom = {
    id: 123,
    name: "jay",
    age: 20,
    gender: "male",
};
Tom.name = "lucy";
// Tom.id = 321
function reverse(x) {
    if (typeof x === "number") {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === "string") {
        return x.split('').reverse().join('');
    }
}
function toBoolean(something) {
    if (something) {
        return something;
    }
}
