"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('hello ts1');
// number
var num = 123;
console.log(num);
// boolean
var flag = true;
console.log(flag);
// string
var str = "this is ts";
console.log(str);
// arrary
var arr = [1, 2, 3];
console.log(arr);
var arr1 = [1, 1, 1];
console.log(arr1);
var arr2 = [1, 'this is ts arr',]; // 元祖类型<tuple>
console.log(arr2);
// enum 枚举
var Status;
(function (Status) {
    Status[Status["success"] = 1] = "success";
    Status[Status["error"] = 2] = "error";
})(Status || (Status = {}));
var s1 = Status.success;
console.log(s1);
function getInfo(name, age) {
    if (age) {
        return name + "--" + age;
    }
    else {
        return "" + name;
    }
}
console.log(getInfo('jay'));
// ts继承
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.run = function () {
        return this.name + "\u5728\u8FD0\u52A8--\u7236\u7C7B";
    };
    return Person;
}());
var person1 = new Person("zhangsan");
console.log(person1.run());
var Son = /** @class */ (function (_super) {
    __extends(Son, _super);
    function Son(name) {
        return _super.call(this, name) || this;
    }
    Son.prototype.work = function () {
        return this.name + "\u5728\u5DE5\u4F5C--\u5B50\u7C7B";
    };
    return Son;
}(Person));
var son = new Son("zhangliu");
console.log(son.run());
console.log(son.work());
function printInfo(info) {
    console.log(info.name, info.gender || "a", info.age);
}
var info = {
    name: "jay",
    // gender: "男",
    age: 20
};
printInfo(info);
function ajax(config) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log("成功");
            if (config.dataType == "json") {
                console.log(JSON.parse(xhr.responseText));
            }
            else {
                console.log(xhr.responseText);
            }
        }
    };
}
ajax({
    type: "get",
    url: "http://a.itying.com/api/productlist",
    dataType: "json"
});
