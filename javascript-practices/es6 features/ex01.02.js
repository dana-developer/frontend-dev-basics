/*
    let & const II

*/

// const의 블록 단위
try {
	if (true) {
		const NUM = 10;
	}

	console.log(NUM);
} catch (e) {
	console.error("error : " + e);
}

//2. 대입(Assignment) 범위
try {
	const NUM = 20;
	NUM = 30;
} catch (e) {
	console.error("error : " + e);
}
