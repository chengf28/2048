import gameController from "./gameController";
let t = new gameController(1,2);
t.test('asdasd');
// var tag          = document.getElementById('canvas');
// var parent       = tag.parentNode;
// var width        = parent.clientWidth;
// var height       = parent.clientHeight;
// tag.width        = width;
// tag.height       = height;
// var marginWidth  = 10;
// var num          = 4;
// var boxWidth     = (width-marginWidth*(num+1))/num;
// var context      = tag.getContext("2d");
// // 创建空数组
// let border  = [];
// for(let i = 0;i<num;i++)
// {
//     border[i]  = [];
//     for(let j = 0 ; j <num ; j++)
//     {
//         border[i][j]  = 0;
//     }
// }
// createNum(border, num, 2);
// background(border,marginWidth, boxWidth);

// // 绘制背景
// function load()
// {
//     document.onkeydown = function (event) 
//     {
//         var e   = event || window.event || arguments.callee.caller.arguments[0];
//         var key = e.keyCode;
//         switch (key)
//         {
//             // 左
//             case 37:
//                 Left(border);
//                 reDraw();
//                 break;
//             // 上
//             case 38:
//                 Up(border);
//                 reDraw();
//                 break;
//             // 右
//             case 39:
//                 Right(border);
//                 reDraw();
//                 break;
//             // 下
//             case 40:
//                 Down(border);
//                 reDraw();
//                 break;
//         }
//     }; 
// }


// function reDraw()
// {
//     createNum(border, num, 1);
//     background(border, marginWidth, boxWidth);    
// }