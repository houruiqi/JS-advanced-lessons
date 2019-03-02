/**
 * Created by qile on 2017/8/14.
 */
//类型检测 typeof 一般用于值类型检测
console.log(typeof 123);  //Number
console.log(typeof true);  //Boolean
console.log(typeof "abc");  //String
console.log(typeof null);  //Null 实际上是Object?
console.log(typeof undefined);  //Undefined
console.log(typeof {name:"Mike",age:20});  //Object

console.log(typeof function foo(){});  //Function

/*
//课外思考
console.log(typeof Array);  //Function
console.log(typeof Function);  //Function
console.log(typeof Date);  //Function
console.log(typeof Number);//String、Boolean  前面是课件上自带的，控制台上是Function

console.log(typeof Math);  //Object
console.log(typeof JSON);  //Object
*/

//类型检测 instanceof （左侧操作数为对象，右侧操作数为原型链中的一个类型时，返回为true）
var a = {name:"Mike",age:20};
console.log(a instanceof Object);  //true

var b = [12,34,{},""];  //true
console.log(b instanceof Array);//思考console.log(b instanceof Object);  true

var Person = function(){
    //...
};
var p1 = new Person();
console.log(p1 instanceof Person);//思考console.log(p1 instanceof Object);
//true
