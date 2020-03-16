"use strict";
// 数组
var x = [1, 2, 3];
var y = [1, 2, 3];
var z = ['1', '2', '3'];
// 元祖
var temp;
temp = ["1", 1];
console.log(temp[0]);
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Blue"] = 5] = "Blue";
})(Color || (Color = {}));
var g = Color.Green;
console.log(g); // 3
var colorName = Color[3];
console.log(colorName);
// 断言
var someValue = 'this is value';
// let valueLength: number = (<string>someValue).length
var valueLength = someValue.length;
console.log(valueLength);
