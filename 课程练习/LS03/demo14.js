/**
 * Created by qile on 2017/8/14.
 */

//Part 000000000
//字符串比较
console.log("A" > "a");  //false
console.log("B".localeCompare("A")); //考虑本地化的字符排序，返回0或非0  1
console.log("A".localeCompare("A")); //考虑本地化的字符排序，返回0或非0  0
console.log("A".localeCompare("B")); // -1

//字符串链接
var a = "abc";
var b = "def";
var c = a+b;

//Part 111111111 字符串提取
//String.prototype.charAt(pos);
//String.prototype.charCodeAt(pos);  返回特定索引位置的字符的unicode码
//String.prototype.slice(start,end?);  slice(截取的起始位置，截取的结束位置)
//String.prototype.substr(start,length?)  substr(截取的起始位置，截取的长度)
//String.prototype.substring(start,end?);  方法返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集。（若起始大于结束就互换位置，起始位置小于0，自动从0开始，超出索引0-str.length-1，自动截断）
//String.prototype.split(separator?,limit?);  以特定的字符分隔,将字符串元素生成数组

//字符串常用方法，字符串的方法源于String.prototype

var str2 = "abcdef".slice(2);  //cdef
var str3 = "abcdef".slice(2,5);  //cde
var str4 = "abcdef".slice(-2);  //ef
var str5 = "abcdef".slice(2,-2);  //cd

var arr6 = "abcdef".split("c");//返回数组 ["ab", "def"]
var arr7 = "abcdef".split("c",1);  //["ab"]
var arr8 = "abcdef".split("c",2);  //["ab", "def"]

var str9 = "abcdef".charAt(2);  //c
var str10 = "abcdef".charCodeAt(3);  //100
var str11 = "abcdefabcdef".indexOf("d",1);  //方法返回调用  String 对象中第一次出现的指定值的索引，开始在 fromIndex进行搜索。 3
var str12 = "abcdefabcdef".indexOf("d",4);//从第4个开始找  9

//substr 与 substring的区别
var str13 = "abcdefghijklmn";
var str14 = str13.substr(2,5);//后一个参数代表长度
console.log(str13,str14);//str13 未受到破坏

var str15 = str13.substring(2,5);//后一个参数代表第几个end
console.log(str13,str15);//str13 未受到破坏



//Part 222222222 字符串变换
//String.prototype.trim( );  去掉字符串两段的空格，字符串内部的不去除
//String.prototype.concat(str1?,str2?);  字符串拼接
//String.prototype.toLowerCase( ); 大写转小写
//String.prototype.toLocaleLowerCase( );  其他语言的，先不管
//String.prototype.toUpperCase( ); 小写转大写
//String.prototype.toLocaleUpperCase( );  其他语言的，先不管
var str16 = "aaa".concat("bbb");//返回字符串 "aaabbb"
var str17 = "    abc def     \r\n  ".trim();//返回已移除前导空格、尾随空格和行终止符的原始字符串  "abc  def"
var str18 = "abcDEF".toLowerCase();  //"abcdef"
var str19 = "abcDEF".toUpperCase();  //"ABCDEF"

//Part 333333333 检索和比较
//String.prototype.indexOf(searchingString,position?);  indexOf(查找的字符，查找的起始位置)
//String.prototype.lastIndexOf(searchingString,position?);  倒着查
//String.prototype.localeCompare(other);  法返回一个数字来指示一个参考字符串是否在排序顺序前面或之后或与给定字符串相同。
var indexOf = "abcDEFabcDEFabcDEF".indexOf("D",6); //9
var lastIndexOf = "abcDEFabcDEFabcDEF".lastIndexOf("D"); //15

//Part 444444444 与正则相关的方法 详细内容参见正则表达式章节
//String.prototype.search(regexp);  方法执行正则表达式和 String对象之间的一个搜索匹配。
//String.prototype.match(regexp);  方法检索返回一个字符串匹配正则表达式的的结果。
//String.prototype.replace(regexp);   方法返回一个由替换值（replacement）替换一些或所有匹配的模式（pattern）后的新字符串。

//其余部分参见《深入理解JS》第12章