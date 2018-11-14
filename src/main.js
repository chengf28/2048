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

function reDraw()
{
    game.createNum(1);
    view.background(game.border);
}