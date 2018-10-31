var tag          = document.getElementById('canvas');
var parent       = tag.parentNode;
var width        = parent.clientWidth;
var height       = parent.clientHeight;
tag.width        = width;
tag.height       = height;
var marginWidth  = 10;
var num          = 4;
var boxWidth     = (width-marginWidth*(num+1))/num;
var context      = tag.getContext("2d");
// 创建空数组
let border  = [];
for(let i = 0;i<num;i++)
{
    border[i]  = [];
    for(let j = 0 ; j <num ; j++)
    {
        border[i][j]  = 0;
    }
}
createNum(border, num, 4, marginWidth, boxWidth);
console.table(border);
background(border,marginWidth, boxWidth);
Up(border, num);
console.table(border);

// 绘制背景
function load()
{
    document.onkeydown = function (event) 
    {
        var e   = event || window.event || arguments.callee.caller.arguments[0];
        var key = e.keyCode;
        
        switch (key) 
        {
            // 左
            case 37:
                break;
            // 上
            case 38:
                break;
            // 右
            case 39:
                break;
            // 下
            case 40:
                Down(border,num);
                break;
        }
    }; 
}