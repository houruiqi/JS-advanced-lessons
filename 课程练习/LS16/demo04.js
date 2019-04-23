/**
 * Created by qile on 2017/8/14.
 */
function Point(x,y) {
    this.x = x;
    this.y = y;
}
var p = new Point(2,3);
console.log(p);
//Point {x: 2, y: 3}

//思考：直接调用Point方法会是什么样的情况
Point(5,6);//结果是什么情况
console.log(window.x,window.y);//5 6