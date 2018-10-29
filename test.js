var tag = document.getElementById('canvas');
var context = tag.getContext('2d');
function drawBox(x, y, width, color = "#000") 
{
    context.clearRect(0, 0, 500, 500);
    
    let radius = width * 0.07;
    context.beginPath();
    context.fillStyle = color;
    context.moveTo(x, y);
    context.arcTo(x + width, y, x + width, y + width, radius);
    context.arcTo(x + width, y + width, x, y + width, radius);
    context.arcTo(x, y + width, x, y, radius);
    context.arcTo(x, y, x + width, y, radius);
    context.closePath();
    context.fill();
}
drawBox(10,10,100);

var i = 0;
function init()
{
    drawBox((i + 1) * 1, (i + 1) * 1, 100);
    i++;
    window.requestAnimationFrame(init);
}
init();
    
