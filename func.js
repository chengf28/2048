function background(border,margin,width) 
{
    let positionX = 0;
    let positionY = 0;

    border.forEach(function(arr,i)
    {
        arr.forEach(function(num,j)
        {
            positionX = (i + 1) * margin + i * width;
            positionY = (j + 1) * margin + j * width;
            drawBox(positionX, positionY, width, setColor(num), num);
        })
    });
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
            // let randY = 0;
            while( true )
            {
                // 随机x位置
                // let randX = parseInt(Math.floor(Math.random() * num));
                let randX = 0;
                // 随机y位置
                let randY = parseInt(Math.floor(Math.random() * num));
                // 设置随机值
                if(border[randX][randY] == 0)
                {
                    border[randX][randY] = Math.random() < .5 ? 2 : 4;
                    break;
                }
                // randY = 2;
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
            }else{
                return true;
            }
        });
    });
    
}

function Down(border,length)
{
    for (let i = 0; i < length; i++) 
    {
        // 从下往上一次增加
        for (let j = length-1 ; j > -1; j--) 
        {
            // 如果是0 则跳过判断
            if (border[i][j] != 0) 
            {
                // 以当前最底下位开始,直到j位之间遍历判断
                for(let k = length-1; k > j; k--)
                {
                    // 如果 K 位 为0时,判断J与K之间是否有非零位阻挡,则K位(0位)替换为J值,j位清空
                    if(border[i][k] == 0 && noBlock(i,j,k,1)) 
                    {
                        border[i][k] = border[i][j];
                        border[i][j] = 0;
                        continue;
                    }
                    // 如果k位于当前j位的值相同,且2者之间没有非零位阻挡,则K位相加,j位清空
                    if (border[i][k] == border[i][j] && noBlock(i, j, k,1)) {
                        border[i][k] += border[i][j];
                        border[i][j] = 0;
                        continue;
                    }
                }
            }
        }
    }
}


function Up(border,length)
{
    for( let i = 0 ; i < length ; i++)
    {
        // 从上向下遍历
        for( let j = 0 ; j < length ; j++)
        {
            if (border[i][j] != 0)
            {
               
            }
        }
    }
}

function noBlock(i, nowCol, endCol, direction)
{
    if (direction = 1) 
    {
        for (let j = nowCol + 1; j < endCol; j++) {
            if (border[i][j] != 0) {
                return false;
            }
        }
        return true;    
    }else{
        for (let i = nowCol + 1; i < endCol; i++) 
        {
            if (border[i][j] != 0) {
                return false;
            }
        }
        return true;    
    }
}