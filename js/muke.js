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
function lab(lableObj) {
    console.log(lableObj.lable);
}
var myLable = {
    size: 10,
    lable: 'myLable Object '
};
lab(myLable); //myLable Object 声明变量传入不会报错，即使多了size； 当直接传入对象，会报错：
function buy(config) {
    var computer = { size: 13, price: 10000 };
    if (config.size) {
        computer.size = config.size;
    }
    if (config.price) {
        computer.price = config.price;
    }
    return computer;
}
console.log(buy({ size: 15, price: 16000 })); // {size: 15, price: 16000}
var num1 = { x: 10, y: 20 }; // 赋值后readonly 的属性就不能更改了
// num1.x = 20 // error TS2540: Cannot assign to 'x' because it is a read-only property.
num1.y = 10;
var mySearch;
mySearch = function (src, sub) {
    var res = src.search(sub);
    return res > -1;
};
console.log(mySearch("123", "1")); // true
console.log(mySearch("123", "0")); // false
var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
console.log(myStr);
var Clock = /** @class */ (function () {
    function Clock(h, m, currentTime) {
        this.currentTime = currentTime;
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
var square = {}; // 等价与 let square = {} as Square
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
