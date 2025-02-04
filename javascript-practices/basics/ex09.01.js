/*
    string primitive 타입과 String 객체 함수(String.prototype.*) 
*/

// 배열처럼 접근이 가능하다.
var str1 = "Hello World";
for (var i = 0; i < str1.length; i++) {
	console.log(str1[i]);
}

// 문자열 합치기
var str2 = "Hello";
var str3 = "World";
var str4 = str2 + str3;
console.log(str4);

// casting
var str5 = 4 + "4";
console.log(str5);

var str6 = "boolean : " + true;
console.log(str6);

// 객체 함수
var str7 = "string1 string2 string3";
var index = str7.indexOf("string2");
console.log(index); // 해당 문자열을 찾은 경우, 해당 문자열의 첫번째 인덱스 출력

var index = str7.indexOf("string4");
console.log(index); // 해당 문자열을 찾지 못한 경우, -1 출력

var str8 = str7.substring(10, 13); // first index, last index-1
console.log(str8);

var a = str7.split(" ");
console.log(a);

a = str7.split(":");
console.log(a);
