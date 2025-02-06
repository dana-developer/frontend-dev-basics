/*
    let & const I

*/

// let의 블록 범위
try {
	if (true) {
		var i = 0;
		let j = 0;
	}

	console.log(i);
	console.log(j); // 에러 발생
} catch (e) {
	console.error("error : " + e);
}
