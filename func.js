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

    // for(let i = 0;i < 4 ; i++)
    // {
    //     for (let j = 0; j < 4; j++)
    //     {
           
           
    //         positionY += width;
    //     }
        
    // }
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
                let randX = 1;
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
        // for(let j = 0 ; j<length ; j++)
        for (let j = length-1 ; j > -1; j--) 
        {
            if (border[i][j] != 0) 
            {
                for(let k = j+1; k < length;k++)
                // for(let k = 0; k < j  ; k++)
                {
                    if (border[i][k] == border[i][j] && noBlock(i, k, j)) 
                    {
                        border[i][k] += border[i][j];
                        border[i][j] = 0;
                        continue;
                    }else if(border[i][k] == 0 && noBlock(i,k,j))
                    {
                        border[i][k] = border[i][j];
                        border[i][j] = 0;
                            continue;
                    }
                }
            }
        }
    }
    console.table(border);
}


function noBlock(i,col,nowCol)
{
    for(let j = col+1;j<nowCol;j++)
    {
        console.log(i,j,nowCol,col);
        if(border[i][j] != 0)
        {
            return false;
        }
    }
    return true;
}