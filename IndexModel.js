var border = new Array();
var num = 0;
jQuery(document).ready(function ($) {
	newgame();
});
function newgame() {
	// 初始格式
	init();
	// 生成数字
	createNum();
	createNum();
}

function init() {
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {
			$('#box-cell-' + i + '-' + j + '').css({
				top: gettop(i, j),
				left: getleft(i, j)
			});
		}
	}
	for (var i = 0; i < 3; i++) {
		border[i] = new Array();
		for (var j = 0; j < 3; j++) {
			border[i][j] = 0;
		}
	}
	update();
}
function gettop(i, j) {
	return 20 + i * 120;
}
function getleft(i, j) {
	return 20 + j * 120;
}
function update() {
	$('.num-cell').remove();
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {
			$('#container').append('<div class ="num-cell" id = "num-cell-' + i + '-' + j + '"></div>');
			var numCell = $('#num-cell-' + i + '-' + j);

			numCell.css({
				width: '0px',
				height: '0px',
				top: gettop(i, j) + 50,
				left: getleft(i, j) + 50
				// console.log("x");

			});
		}
	}
}
function getNumBackColor(number) {
	switch (number) {
		case 2:
			return '#96cccc';
			break;
		case 4:
			return '#60cccc';
			break;
		case 8:
			return '#60fccc';
			break;
		case 16:
			return '#60fc00';
			break;
		case 32:
			return '#fff300';
			break;
		case 64:
			return '#ffab00';
			break;
		case 128:
			return '#ff8100';
			break;
		case 256:
			return '#ff4b00';
			break;
		case 512:
			return '#d51b00';
			break;
		case 1024:
			return '#451b00';
			break;
		case 2048:
			return '#151b00';
			break;
	}
	return "black";
}
function getNumColor(number) {
	if (number < 8) {
		return "#272727";
	} else {
		return "#ccc";
	}

}
function createNum() {
	if (nospace(border)) {
		return false;
	}
	// 随机位置
	var randX = parseInt(Math.floor(Math.random() * 3));
	var randY = parseInt(Math.floor(Math.random() * 3));
	while (true) {
		if (border[randX][randY] == 0) {
			break;
		}
		var randX = parseInt(Math.floor(Math.random() * 3));
		var randY = parseInt(Math.floor(Math.random() * 3));
	}
	// 随机数字
	var randNum = Math.random() < .5 ? 2 : 4;
	border[randX][randY] = randNum;
	showNum(randX, randY, randNum);
	return true;
}
function nospace(border) {
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {
			if (border[i][j] == 0) {
				return false;
			}
		}
	}
	return true;
}
function showNum(X, Y, Num) {
	var numCell = $("#num-cell-" + X + '-' + Y);
	numCell.css({
		background: getNumBackColor(Num),
		color: getNumColor(Num)
	}).text(Num).animate({ width: '100px', height: "100px", top: gettop(X, Y), left: getleft(X, Y) }, 300);
}
$(document).keydown(function (event) 
{
	switch (event.keyCode) {
		case 37://方向左
			if (moveLeft()) {
				createNum();
				gameover();
			}
			break;
		case 38://方向上
			if (moveTop()) {
				createNum();
				gameover();
			}
		case 39://方向右
			if (moveRight()) {
				createNum();
				gameover();
			}
		case 40://方向下
			if (moveDown()) {
				createNum();
				gameover();
			}
		case 65://A左
			if (moveLeft()) {
				createNum();
				gameover();
			}
		case 68://D右
			if (moveRight()) {
				createNum();
				gameover();
			}
		case 83://S下
			if (moveDown()) {
				createNum();
				gameover();
			}
		case 87://W上
			if (moveTop()) {
				createNum();
				gameover();
			}
	};
	// console.log(event.keyCode);
});
function moveLeft() {
	if (!canLf) {
		return false;
	}
	for (var i = 0; i < 3; i++) {
		for (var j = 1; j < 3; j++) {
			if (border[i][j] != 0) {
				for (var k = 0; k < j; k++) {
					if (border[i][k] == 0 && noBlock(i, k, j)) {
						// 进行移动
						continue;

					} else if (border[i][k] == border[i][j] && noBlock(i, k, j)) {
						// 进行移动
						// 同数相加
						continue;
					}

				}
			}
		}
	}
}
function canLf() {
	for (var i = 0; i < 3; i++) {
		for (var j = 1; j < 3; j++) {
			if (border[i][j] != 0) {
				if (border[i][j - 1] == 0 || border[i][j - 1] == border[i][j]) {
					return true;
				}
			}
		}

	}
	return false;
}
function noBlock(row, col1, col2) {
	for (var i = col1 + 1; i < col2; i++) {
		for (var j = col1 + 1; j < col2; j++) 
		{
			if (border[i][j] != 0) {
				return false;
			}
		}
		
	}
	return true;
}