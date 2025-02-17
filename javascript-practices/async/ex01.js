/*
    callback 지원 비동기 함수 사용
*/

const { fn01 } = require("./fns");

fn01("param~~", function (error, result) {
	if (error) {
		console.log(error);
		return;
	}

	console.log(`result:${result}`);
});

fn01(null, function (error, result) {
	if (error) {
		console.log(error);
		return;
	}

	console.log(`result:${result}`);
});

console.log("wait...");
