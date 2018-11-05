function background(border,margin,width) 
{
    let positionX = 0;
    let positionY = 0;
    context.clearRect(0, 0, width, width);
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
                    border[randX][randY] = Math.random() < .5 ? 2 : 2;
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

function Down(Matrix) {
    for (let i = 0; i < Matrix.length; i++) {
        // 从上向下遍历(排除第一位)
        for (let j = Matrix[i].length-1; j >= 0; j--) 
        {
            // 当前位置为0时处理
            if (Matrix[i][j] == 0) {
                breakZero(Matrix, i, j, 'down');
            }
            // 上一位为0,直接上移
            if (Matrix[i][j + 1] == 0) {
                Matrix[i][j + 1] = Matrix[i][j];
                into(Matrix, i, j, 'down');
                continue;
            }
            // 上一位与当前位相等且不为0 ,上一位x2,其他上移
            if (Matrix[i][j + 1] == Matrix[i][j] && Matrix[i][j] != 0) {
                Matrix[i][j + 1] += Matrix[i][j];
                into(Matrix, i, j, 'down');
                continue;
            }
        }
    }
}


function Up(Matrix)
{
    for( let i = 0 ; i < Matrix.length ; i++)
    {
        // 从上向下遍历(排除第一位)
        for( let j = 0 ; j < Matrix[i].length ; j++)
        {
            // 当前位置为0时处理
            if (Matrix[i][j] == 0) 
            {
                breakZero(Matrix, i, j, 'up');
            }
            // 上一位为0,直接上移
            if (Matrix[i][j - 1] == 0) 
            {
                Matrix[i][j - 1] = Matrix[i][j];
                into(Matrix, i, j, 'up');
                continue;
            }
            // 上一位与当前位相等且不为0 ,上一位x2,其他上移
            if(Matrix[i][j-1] == Matrix[i][j] && Matrix[i][j] != 0)
            {
                Matrix[i][j-1] += Matrix[i][j];
                into(Matrix, i, j, 'up');
                continue;
            }
        }
    }
}

function into(arr, i, j, direction)
{
    if (direction == 'up') 
    {
        for (let k = j; k < arr[i].length; k++) 
        {
            if (!arr[i].hasOwnProperty(k + 1)) 
            {
                arr[i][k] = 0;
            } else {
                arr[i][k] = arr[i][k + 1];
            }
        }
    }
    if (direction == 'down') 
    {
        for (let k = j; k >=0 ; k--)
        {
            if (!arr[i].hasOwnProperty(k - 1)) 
            {
                arr[i][k] = 0;
            } else {
                arr[i][k] = arr[i][k - 1];
            }
        }
    }
}

function breakZero(arr, i, j, direction)
{
    if (direction == 'up') 
    {
        for (let k = j+1; k < arr[i].length; k++) 
        {
            if(arr[i][k] != 0)
            {
                if(arr[i][j-1] == arr[i][k])
                {
                    arr[i][j-1] += arr[i][k];
                    arr[i][k]   =  0;
                    break;
                }else if(arr[i][j-1] != 0)
                {
                    arr[i][j] = arr[i][k];
                    arr[i][k] = 0;
                    break;
                }else{
                    arr[i][j-1] = arr[i][k];
                    arr[i][k] = 0;
                }
            }
        }
    }
    if (direction == 'down') 
    {
        for (let k = j - 1; k >= 0 ; k--) 
        {
            if (arr[i][k] != 0) {
                if (arr[i][j + 1] == arr[i][k]) {
                    arr[i][j + 1] += arr[i][k];
                    arr[i][k] = 0;
                    break;
                } else if (arr[i][j + 1] != 0) {
                    arr[i][j] = arr[i][k];
                    arr[i][k] = 0;
                    break;
                } else 
                {
                    arr[i][j + 1] = arr[i][k];
                    arr[i][k]     = 0;
                    // break;
                }
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