/*
    자바스크립트 함수
*/

console.log("============[01.01] 함수를 생성(정의) 방법: literal1");
function f1(a, b) {
	return a + b;
}
console.log(typeof f1, f1(10, 20));

console.log("============[01.02] 함수를 생성(정의) 방법: literal2");
var f2 = function (a, b) {
	return a + b;
};
console.log(typeof f2, f2(10, 20));

console.log(
	"============[01.03] 함수를 생성(정의) 방법: Function() 생성자 함수"
);
var f3 = new Function("a", "b", "return a+b");
console.log(typeof f3, f3(10, 20));

console.log("============[01.04] 함수를 생성(정의) 방법: 익명(Anonymous) 함수");

setTimeout(function () {
	// callback 함수로 처리(비동기)
	console.log("time out");
}, 1000);

console.log("============[01.05] 함수를 생성(정의) 방법: 즉시 실행 함수");
var s = (function (a, b) {
	return a + b;
})(10, 20);
console.log(s);

console.log("============[02] 가변 파라미터");
// Array.prototype.forEach = function (callback) {
// 	// callback은 function (e) { sum += e; }
// 	// this는 arguments
// 	for (var i = 0; i < this.length; i++) {
// 		callback(this[i], i);
// 	}
// };

var sum = function () {
	// 가변 파라미터인 arguments가 내장되어 있음

	var sum = 0;
	// 구현 1
	// for (var i = 0; i < arguments.length; i++) {
	// 	sum += arguments[i];
	// }

	// 구현 2 : error
	// arguments는 Array가 아니다 : 유사배열
	// arguments.forEach(function (e) {
	// 	sum += e;
	// });

	// Array.prototype.forEach 직접 호출 + caller
	Array.prototype.forEach.call(arguments, function (e) {
		// call 메서드를 사용해 forEach의 this를 arguments로 설정
		// forEach는 arguments를 순회하며, 각 요소를 callback에 전달
		sum += e;
	});

	return sum;
};
console.log(sum(1));
console.log(sum(1, 2));
console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5, 6));

console.log("============[03] caller(this) 바꾸기");

var myObject = {
	v: "me",
	f1: function () {
		console.log(this.v);
	},
	f2: function (param) {
		console.log(param + " " + this.v);
	},
};

//일반적인 객체의 함수 호출
myObject.f1();

// apply : 호출되는 함수의 this를 파라미터로 전달되는 객체로 바꿔서 즉시 그 함수를 호출한다.
var yourObject = {
	v: "you",
};

myObject.f1.apply(yourObject);

// call :호출되는 함수의 this를 첫번째 파라미터로 전달되는 객체로 바꿔서 즉시 그 함수를 호출한다.
myObject.f2.call(yourObject, "Hello");

// bind : 호출되기 전의 함수의 this를 파라미터로 전달되는 객체로 바인딩한다.
var f3 = function () {
	console.log(this.v);
};

f3.bind(myObject);

f3();
