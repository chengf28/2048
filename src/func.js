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

function setColor(number)
{
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
    return "#fff";
    
}
/**
 * 创建数字
 */
function createNum(border,num,times=1)
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
                let randX = parseInt(Math.floor(Math.random() * num));
                // let randX = 0;
                // 随机y位置
                let randY = parseInt(Math.floor(Math.random() * num));
                // 设置随机值
                if(border[randX][randY] == 0)
                {
                    border[randX][randY] = Math.random() < .5 ? 2: 4;
                    break;
                }
                // randY = 2;
            }
        }else{
            alert("game over");
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

function Down(Matrix) 
{
    for (let i = 0; i < Matrix.length; i++) 
    {
        // 从上向下遍历(排除第一位)
        for (let j = Matrix[i].length-1; j >= 0; j--) 
        {
            for(let k = j-1 ; k >= 0 ; k--)
            {
                if (Matrix[i][k] == 0) 
                {
                    continue;
                }
                if (Matrix[i][k] != Matrix[i][j]  ) 
                {
                    if (Matrix[i][j] == 0) 
                    {
                        for (let n = k - 1; n >= -1; n--) {
                            // 到达边界
                            if (!Matrix[i].hasOwnProperty(n)) {
                                Matrix[i][j] = Matrix[i][k];
                                Matrix[i][k] = 0;
                                break;
                            }
                            if (Matrix[i][n] == 0) {
                                continue;
                            }
                            if (Matrix[i][n] == Matrix[i][k]) {
                                Matrix[i][j] = Matrix[i][n] * 2;
                                Matrix[i][k] = 0;
                                Matrix[i][n] = 0;
                                break;
                            }
                            if (Matrix[i].hasOwnProperty(n) && Matrix[i][n] != Matrix[i][k] && Matrix[i][j] == 0) {
                                Matrix[i][j] = Matrix[i][k];
                                Matrix[i][k] = 0;
                                break;
                            }
                        }
                    }
                    
                    break;
                }
                if (Matrix[i][k] == Matrix[i][j] ) 
                {
                    Matrix[i][j] += Matrix[i][k];
                    Matrix[i][k] = 0;
                    break;
                }
           }
        }
    }
}


function Up(Matrix)
{
    for( let i = 0 ; i < Matrix.length ; i++)
    {
        // 从上向下遍历
        for( let j = 0 ; j < Matrix[i].length ; j++)
        {
            for (let k = j+1; k < Matrix[i].length; k++) 
            {
                
                if (Matrix[i][k] == 0) 
                {
                    continue;
                }
                if (Matrix[i][k] != Matrix[i][j] ) 
                {

                    if (Matrix[i][j] == 0 ) 
                    {
                        for (let n = k + 1; n <= Matrix[i].length; n++) {
                            // 到达边界
                            if (!Matrix[i].hasOwnProperty(n)) {
                                Matrix[i][j] = Matrix[i][k];
                                Matrix[i][k] = 0;
                                break;
                            }
                            if (Matrix[i][n] == 0) {
                                continue;
                            }
                            if (Matrix[i][n] == Matrix[i][k]) {
                                Matrix[i][j] = Matrix[i][n] * 2;
                                Matrix[i][k] = 0;
                                Matrix[i][n] = 0;
                                break;
                            }
                            if (Matrix[i].hasOwnProperty(n) && Matrix[i][n] != Matrix[i][k]) {
                                Matrix[i][j] = Matrix[i][k];
                                Matrix[i][k] = 0;
                                break;
                            }
                        }
                    }
                    break;
                }
                if (Matrix[i][j] == Matrix[i][k]) 
                {
                    Matrix[i][j] += Matrix[i][k];
                    Matrix[i][k] = 0;
                    break;
                }
                
            }
        }
    }
}



function Left(Matrix) 
{
    for (let i = 0; i < Matrix.length; i++) {
        // 从上向下遍历
        for (let j = 0; j < Matrix[i].length; j++) 
        {
            for (let k = i + 1; k < Matrix.length; k++) 
            {
                if (Matrix[k][j] == 0)
                {
                    continue;
                }
                if (Matrix[k][j] != Matrix[i][j]) 
                {
                    if (Matrix[i][j] == 0) 
                    {
                        for (let n = k + 1; n <= Matrix.length; n++) 
                        {
                            // 到达边界
                            if (!Matrix.hasOwnProperty(n)) 
                            {
                                Matrix[i][j] = Matrix[k][j];
                                Matrix[k][j] = 0;
                                break;
                            }
                            if (Matrix[n][i] == 0) 
                            {
                                continue;
                            }
                            if (Matrix[n][j] == Matrix[k][j]) {
                                Matrix[i][j] = Matrix[n][j] * 2;
                                Matrix[k][j] = 0;
                                Matrix[n][j] = 0;
                                break;
                            }
                            if (Matrix.hasOwnProperty(n) && Matrix[n][j] != Matrix[k][j]) 
                            {
                                Matrix[i][j] = Matrix[k][j];
                                Matrix[k][j] = 0;
                                break;
                            }
                        }
                    }
                    break;
                }
                if (Matrix[i][j] == Matrix[k][j]) {
                    Matrix[i][j] += Matrix[k][j];
                    Matrix[k][j] = 0;
                    break;
                }

            }
        }
    }
}

function Right(Matrix) {
    for (let i = Matrix.length-1; i >= 0; i--) {
        // 从上向下遍历
        for (let j = 0; j < Matrix[i].length; j++) {
            for (let k = i - 1; k >= 0; k--) {
                if (Matrix[k][j] == 0) {
                    continue;
                }
                if (Matrix[k][j] != Matrix[i][j]) {
                    if (Matrix[i][j] == 0) {
                        for (let n = k - 1; n >= -1; n--) 
                        {
                            // 到达边界
                            if (!Matrix.hasOwnProperty(n)) {
                                Matrix[i][j] = Matrix[k][j];
                                Matrix[k][j] = 0;
                                break;
                            }
                            if (Matrix[n][i] == 0) {
                                continue;
                            }
                            if (Matrix[n][j] == Matrix[k][j]) {
                                Matrix[i][j] = Matrix[n][j] * 2;
                                Matrix[k][j] = 0;
                                Matrix[n][j] = 0;
                                break;
                            }
                            if (Matrix.hasOwnProperty(n) && Matrix[n][j] != Matrix[k][j]) {
                                Matrix[i][j] = Matrix[k][j];
                                Matrix[k][j] = 0;
                                break;
                            }
                        }
                    }
                    break;
                }
                if (Matrix[i][j] == Matrix[k][j]) {
                    Matrix[i][j] += Matrix[k][j];
                    Matrix[k][j] = 0;
                    break;
                }

            }
        }
    }
}