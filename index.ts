console.log('hello ts1');

// number
let num:number = 123;
console.log(num)
// boolean
let flag:boolean = true;
console.log(flag)
// string
let str:string = "this is ts";
console.log(str)
// arrary
let arr:number[] = [1,2,3];
console.log(arr)
let arr1:Array<number> = [1,1,1];
console.log(arr1)
let arr2:[number,string] = [1,'this is ts arr',]; // 元祖类型<tuple>
console.log(arr2)
// enum 枚举
enum Status {
  success=1,
  error=2,
  
}
let s1:Status = Status.success;
console.log(s1)

function getInfo(name:string,age?:number):string {
  if(age) {
    return `${name}--${age}`
  }else {
    return `${name}`
    
  }
}
console.log(getInfo('jay'))

// ts继承
class Person {
  name: string;
  constructor(name:string) {
    this.name = name;
  }
  run():string {
    return `${this.name}在运动--父类`
  }
}
let person1 = new Person("zhangsan");
console.log(person1.run())

class Son extends Person {
  constructor(name:string) {

    super(name)
  }
  work():string {
    return `${this.name}在工作--子类`
  }
}
let son = new Son("zhangliu");
console.log(son.run());
console.log(son.work());

// 接口
interface Info {
  name: string;
  gender?: string;
  age: number;
}

function printInfo(info:Info) {
  console.log(info.name, info.gender||"a", info.age)
}
let info = {
  name: "jay",
  // gender: "男",
  age: 20
}
printInfo(info)

// ajax 接口请求

interface Config {
  type: string,
  url: string,
  data?: string,
  dataType: string,
}

function ajax(config: Config) {
  let xhr = new XMLHttpRequest();
  xhr.open(config.type, config.url, true);
  xhr.send(config.data);
  xhr.onreadystatechange = function() {
    if(xhr.readyState==4 && xhr.status ==200) {
      console.log("成功")
      if(config.dataType=="json") {
        console.log(JSON.parse(xhr.responseText))
      }else {
        console.log(xhr.responseText)
      }
    }
  }
}

ajax({
  type: "get",
  url: "http://a.itying.com/api/productlist",
  dataType: "json"
})


