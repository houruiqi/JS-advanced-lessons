/**
 * Created by qile on 2017/8/14.
 */
//Number构造器属性（静态属性）
Number.MAX_VALUE  //1.7976931348623157e+308
Number.MIN_VALUE  //5e-324
Number.NaN  //NaN
Number.NEGATIVE_INFINITY  //-Infinity
Number.POSITIVE_INFINITY  //Infinity

//Number原型方法(Number对象继承的方法）
// Number.prototype.toFixed();  方法使用定点表示法来格式化一个数。
// Number.prototype.toPrecision();  方法以指定的精度返回该数值对象的字符串表示。
// Number.prototype.toString();  方法返回指定 Number 对象的字符串表示形式。
// Number.prototype.toExponential(); 方法以指数表示法返回该数值字符串表示形式。

var n1 = 12345.6789;
console.log(n1.toFixed(2));  //12345.6789
console.log(n1.toPrecision(2));  //1.2e+4  1.2*10^4
console.log(n1.toString());  //12345.6789
console.log(n1.toExponential(2));  //1.23e+4

//
console.log(NaN === NaN);  //false
console.log(isNaN("12,3"));  //true   函数用来确定一个值是否为NaN 
console.log(Math.floor(3.8));  //3  返回小于或等于一个给定数字的最大整数。
console.log(Math.floor(-3.8));  //-4
console.log(Math.ceil(3.2));  //4  函数返回大于或等于一个给定数字的最小整数。
console.log(Math.ceil(-3.2));  //-3
console.log(Math.round(-3.2));  //-3   函数返回一个数字四舍五入后最接近的整数
console.log(Math.round(-3.5));  //-3
console.log(Math.round(-3.8));  //-4

//其余部分参见《深入理解JS》第11章

