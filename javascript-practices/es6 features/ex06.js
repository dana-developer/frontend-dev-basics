/*
    class Rect

*/

console.log("---[class 정의 지원]");
class Rect {
	constructor(w, h) {
		this.w = w;
		this.h = h;
	}
	draw() {
		console.log(`Rect(w=${this.w}, h=${this.h}를 그렸습니다.)`);
	}
}

const rect1 = new Rect(10, 20);
const rect2 = new Rect(100, 200);

rect1.draw();
rect2.draw();

console.log("---[cf: 생성자 함수(protype 기반)]");
const Circle = function (x, y, r) {
	this.x = x;
	this.y = y;
	this.r = r;
};

Circle.prototype.draw = function () {
	console.log(
		`Circle(x=${this.x}, y=${this.y}, r=${this.r}를 그렸습니다.)`
	);
};

const circle1 = new Circle(10, 20, 5);
circle1.draw(10, 20, 30);

console.log("---[클래스 상속(extends) 지원]");
class Shape {
	constructor(fillColor, lineColor) {
		this.fillColor = fillColor;
		this.lineColor = lineColor;
	}

	draw() {
		console.log("구현할 수 없습니다.");
	}
}

class RectTriangle extends Shape {
	constructor(w, h, fillColor, lineColor) {
		super(fillColor, lineColor);
		this.w = w;
		this.h = h;
	}

	draw() {
		console.log(
			`RectTrianlge(w=${this.w},h=${this.h},fillColor=${this.fillColor},lineColor=${this.lineColor})을 그렸습니다.`
		);
	}
}

const shape1 = new RectTriangle(10, 20, "red", "black");
shape1.draw();
