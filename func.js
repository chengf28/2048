function background(num,margin,width) 
{
    let positionX = 0;
    let positionY = 0;
    for(let i = 0;i < num ; i++)
    {
        for (let j = 0; j < num; j++)
        {
            positionX = (i+1)*margin+i*width;
            positionY = (j+1)*margin+j*width;
            drawBox(positionX, positionY, width,setColor(border[i][j]),border[i][j] );
            positionY += width;
        }
        
    }
}

function drawBox(x,y,width,color="#fff",num)
{
    let radius = width * 0.07;
    context.beginPath();
    context.clearRect(x,y,width, width);
    context.fillStyle = color;
    context.moveTo(x, y);
    context.arcTo(x + width, y, x + width, y + width, radius);
    context.arcTo(x + width, y + width, x, y + width, radius);
    context.arcTo(x, y + width, x, y, radius);
    context.arcTo(x, y, x + width, y, radius);
    context.fill();
    if (num>0) 
    {
        context.fillStyle = "#fff";
        context.font      = "20px Georgia";
        context.fillText(num, x+width/2-5, y+width/2+5);
    }
    context.closePath();

}

function setColor(num)
{
    let tmp = Math.exp(num);
    if (num > 0) 
    {
        tmp = tmp.toString().slice(-6);    
    }else{
        tmp  = 'fff';
    }
    return "#"+tmp;
    
}
/**
 * 创建数字
 */
function createNum(border,num,times=1,margin,width)
{
    // 检查是否还有空余的格子
    for(let i = 0 ; i < times;i++ )
    {
        if(!checkSpace(border))
        {
            while( true )
            {
                // 随机x位置
                var randX = parseInt(Math.floor(Math.random() * num));
                // 随机y位置
                var randY = parseInt(Math.floor(Math.random() * num));
                // 设置随机值
                if(border[randX][randY] == 0)
                {
                    border[randX][randY] = Math.random() < .5 ? 2 : 4;
                    setBox(border,randX,randY,margin,width);
                    break;
                }
            }
        } 
    }
    
}

function checkSpace(border)
{
    return border.every(function(iarr,i)
    {
        return iarr.every(function(num,j)
        {
            if ( num == 0 )
            {
                return false;
            }
        });
    });
    return true;
}

function setBox(border,x,y,margin,width)
{
    // context.beginPath();
    // context.clearRect((x + 1) * margin + x * width, (y + 1) * margin + y * width, width, width);
    // context.closePath();
    // drawBox((x+1)*margin+x*width,(y+1)*margin+y*width,width,setColor(border[x][y]));
}