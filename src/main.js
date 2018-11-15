import gameController from "./gameController";
import viewController from "./viewController";
let game = new gameController(4);
game.createNum(2);
let tag          = document.getElementById('canvas');
let parent       = tag.parentNode;
let width        = parent.clientWidth;
let height       = parent.clientHeight;
tag.width        = width;
tag.height       = height;
let view  = new viewController(tag,width,game.num);
view.background(game.border);

// 键盘监听
document.onkeydown = function (event) 
{
    var e   = event || window.event || arguments.callee.caller.arguments[0];
    var key = e.keyCode;
    switch (key)
    {
        // 左
        case 37:
            game.Left();
            reDraw();
            break;
        // 上
        case 38:
            game.Up();
            reDraw();
            break;
        // 右
        case 39:
            game.Right();
            reDraw();
            break;
        // 下
        case 40:
            game.Down();
            reDraw();
            break;
    }
}; 
// 监听陀螺仪
if (window.DeviceMotionEvent) {
    window.addEventListener('deviceorientation', deviceMotionHandler, false);
}else{
    alert('当前浏览器不支持 重力感应,抱歉');
}
var Direction = {
    up:0,
    down:0,
    left:0,
    right:0
};
var limit = 15;
var start = {
    x: null,
    y: null,
}
var lasttime = 0;
function deviceMotionHandler(event)
{
    var beta = Math.ceil(event.beta);
    var gamma = Math.ceil(event.gamma);
    // 设置其实位置
    if (start.x == 'null') {
        start.x = beta;
    }
    if (start.y == 'null') 
    {
        start.y = gamma;
    }
    if (new Date().getTime() < lasttime) 
    {
        return;
    }
    if (Math.abs(beta)-start.x > Math.abs(gamma)-start.y) 
    {
        // 误差数量
        if (beta < start.x - limit) {

            if (Math.abs(Direction.up) - limit < Math.abs(beta) && Math.abs(beta) < Math.abs(Direction.up) + limit) {
                return;
            }
            lasttime = new Date().getTime() + 1000;
            Direction.up = beta;
            game.Up();
            reDraw();

        } else if (beta > start.x + limit) {
            if (Math.abs(Direction.down) - limit < Math.abs(beta) && Math.abs(beta) < Math.abs(Direction.down) + limit) {
                return;
            }
            lasttime = new Date().getTime() + 1000;
            Direction.down = beta;
            game.Down();
            reDraw();
        }
        
    }else{
        // 误差数量
        if (gamma < start.y - limit) {

            if (Math.abs(Direction.left) - limit < Math.abs(gamma) && Math.abs(gamma) < Math.abs(Direction.left) + limit) {
                return;
            }

            lasttime = new Date().getTime() + 1000;
            Direction.left = gamma;
            game.Left();
            reDraw();

        } else if (gamma > start.y + limit) {
            if (Math.abs(Direction.right) - limit < Math.abs(gamma) && Math.abs(gamma) < Math.abs(Direction.right) + limit) {
                return;
            }
            lasttime = new Date().getTime() + 1000;
            Direction.right = gamma;
            game.Right();
            reDraw();
        }
    }
    


    // if (beta < 0 && Math.abs(beta) - Math.abs(Direction.up) >= limit ) 
    // {
    //     game.Up();
    //     reDraw();
    //     Direction.up   = beta;
    //     Direction.down = 0;
    // } else if (beta > 0 && beta - Direction.down >=limit)
    // {
    //     game.Down();
    //     reDraw();
    //     Direction.down = beta;
    //     Direction.up = 0;
    // }
    // if (gamma < 0 && Math.abs(gamma) - Math.abs(Direction.left) >= limit) {
    //     game.Left();
    //     reDraw();
    //     Direction.left = gamma;
    //     Direction.right = 0;
    // } else if (gamma > 0 && gamma - Direction.right >= limit) {
    //     game.Right();
    //     reDraw();
    //     Direction.right = gamma;
    //     Direction.letf = 0;
    // }
}

function reDraw()
{
    game.createNum(1);
    view.background(game.border);
}

function sleep(numberMillis) 
{
    var now = new Date();
    var exitTime = now.getTime() + numberMillis;
    while (true) {
        now = new Date();
        if (now.getTime() > exitTime)
            return;
    } 
}