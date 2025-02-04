console.log("============[01] 기본타입, primitive type");
var u; // undefined
var i = 10; // number
var s = "Hello World"; // string
var b = true; // boolean

console.log("u:" + typeof u);
console.log("i:" + typeof i);
console.log("s:" + typeof s);
console.log("b:" + typeof b);

console.log("============[02.01] 객체타입: object");
var i = new Number(10);
var s = new String("c");
var b = new Boolean(true);
var o = {}; // 객체 생성
var a = []; // 배열 생성
var n = null;

console.log("i:" + typeof i + " " + (i instanceof Number));
console.log("s:" + typeof s + " " + (s instanceof String));
console.log("b:" + typeof b + " " + (b instanceof Boolean));
console.log("o:" + typeof o + " " + (o instanceof Object));
console.log("a:" + typeof a + " " + (a instanceof Array));
console.log("n:" + typeof n);

console.log("============[02.02] 객체타입: function");
function f1() {}

var f2 = function () {};

var f3 = new Function();

console.log("f1:" + typeof f1 + " " + (f1 instanceof Function));
console.log("f2:" + typeof f2 + " " + (f2 instanceof Function));
console.log("f3:" + typeof f3 + " " + (f3 instanceof Function));

console.log("============[06] 기본타입과 유사객체");
var b1 = true;
var b2 = new Boolean(false);

console.log(b1.valueOf()); // 기본 타입에서도 함수 호출 가능 (유사객체) console.log(new Boolean(b1).valueOf())를 호출
console.log(b2.valueOf());
