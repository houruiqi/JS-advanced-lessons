/**
 * Created by qile on 2017/8/14.
 */
//JavaScript字符串的编码方式，Unicode字符集和UTF-16编码方式，参考链接：
//http://www.ruanyifeng.com/blog/2014/12/unicode.html

//字面量
var str = "abc_def_ghi_jkl_mn";

//转义字符 \n(换行) \"(双引号) \'(单引号) \\(反斜杠号)
console.log("abc\ndefghi\\\n\'mn\'");
	//abc
	//defghi\
	//'mn'

//字符串常用操作
var str = "abc_def_ghi_jkl_mn";
// str.split("_");  ["abc", "def", "ghi", "jkl", "mn"]
// str.split("_",2);  ["abc", "def"]
// str.concat("_opq"); "abc_def_ghi_jkl_mn_opq"
// str.substr(4,7);  "def_ghi"
// str.substring(4,7);  "def"
// str.slice(2);  "c_def_ghi_jkl_mn"
// str.slice(2,5);  "c_d"
// str.slice(-2);  "mn"
// str.slice(2,-2);  "c_def_ghi_jkl_"
// 更多内容参见下一章节

// str.bold();  包含HTML元素 <b> 的字符串。 "<b>abc_def_ghi_jkl_mn</b>"
// str.link();  方法创建一个 <a> HTML 元素，用该字符串作为超链接的显示文本，参数作为指向另一个 URL 的超链接。"<a href="undefined">abc_def_ghi_jkl_mn</a>"
// str.fontcolor("red");  "<font color="red">abc_def_ghi_jkl_mn</font>"
// str.fontsize(50);  "<font size="50">abc_def_ghi_jkl_mn</font>"


//模式匹配，参加后续正则表达式章节
