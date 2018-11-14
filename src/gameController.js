class gameController
{
    /**
     * 构造函数
     * @param {int} num 大小
     */
    constructor(num)
    {
        this.num    = num;
        this.border = this.init(num);
        // this.border = border;
        // this.width  = width;
    }
    /**
     * 初始化数据矩阵(二维数组)
     * @param {int} num 初始化
     */
    init(num)
    {
        let border = [];
        for (let i = 0; i < num; i++)
        {
            border[i]  = [];
            for(let j = 0 ; j <num ; j++)
            {
                border[i][j]  = 0;
            }
        }
        return border;
    }

    /**
     * 随机生成times个数字
     * @param inst times 生成个数
     */
    createNum(times)
    {
        // 检查是否还有空余的格子
        for (let i = 0; i < times; i++) 
        {
            if (!this.checkSpace()) 
            {
                // let randY = 0;
                while (true) {
                    // 随机x位置
                    let randX = parseInt(Math.floor(Math.random() * this.num));
                    // let randX = 0;
                    // 随机y位置
                    let randY = parseInt(Math.floor(Math.random() * this.num));
                    // 设置随机值
                    if (this.border[randX][randY] == 0) {
                        this.border[randX][randY] = Math.random() < .5 ? 2 : 4;
                        break;
                    }
                    // randY = 2;
                }
            } else {
                alert("game over");
            }
        }
    }
    /**
     * 检查是否还有空余空间
     */
    checkSpace()
    {
        return this.border.every(function (iarr, i) {
            return iarr.every(function (num, j) {
                if (num == 0) {
                    return false;
                } else {
                    return true;
                }
            });
        });
    }

    
    Down()
    {
        let Matrix = this.border;
        for (let i = 0; i < Matrix.length; i++) {
            // 从上向下遍历(排除第一位)
            for (let j = Matrix[i].length - 1; j >= 0; j--) {
                for (let k = j - 1; k >= 0; k--) {
                    if (Matrix[i][k] == 0) {
                        continue;
                    }
                    if (Matrix[i][k] != Matrix[i][j]) {
                        if (Matrix[i][j] == 0) {
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
                    if (Matrix[i][k] == Matrix[i][j]) {
                        Matrix[i][j] += Matrix[i][k];
                        Matrix[i][k] = 0;
                        break;
                    }
                }
            }
        }
        this.border = Matrix;
    }


    Up()
    {
        let Matrix = this.border;
        for (let i = 0; i < Matrix.length; i++) 
        {
            // 从上向下遍历
            for (let j = 0; j < Matrix[i].length; j++) {
                for (let k = j + 1; k < Matrix[i].length; k++) {

                    if (Matrix[i][k] == 0) {
                        continue;
                    }
                    if (Matrix[i][k] != Matrix[i][j]) {

                        if (Matrix[i][j] == 0) {
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
                    if (Matrix[i][j] == Matrix[i][k]) {
                        Matrix[i][j] += Matrix[i][k];
                        Matrix[i][k] = 0;
                        break;
                    }

                }
            }
        }
        this.border = Matrix;
    }

    Left()
    {
        let Matrix = this.border;
        for (let i = 0; i < Matrix.length; i++) {
            // 从上向下遍历
            for (let j = 0; j < Matrix[i].length; j++) {
                for (let k = i + 1; k < Matrix.length; k++) {
                    if (Matrix[k][j] == 0) {
                        continue;
                    }
                    if (Matrix[k][j] != Matrix[i][j]) {
                        if (Matrix[i][j] == 0) {
                            for (let n = k + 1; n <= Matrix.length; n++) {
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
        this.border = Matrix;
    }

    Right()
    {
        let Matrix = this.border;
        for (let i = Matrix.length - 1; i >= 0; i--) {
            // 从上向下遍历
            for (let j = 0; j < Matrix[i].length; j++) {
                for (let k = i - 1; k >= 0; k--) {
                    if (Matrix[k][j] == 0) {
                        continue;
                    }
                    if (Matrix[k][j] != Matrix[i][j]) {
                        if (Matrix[i][j] == 0) {
                            for (let n = k - 1; n >= -1; n--) {
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
        this.border = Matrix;
    }

    Win()
    {
        Array.prototype.max = function () 
        {
            return Math.max.apply({}, this)
        } 
        
        let max = 0;
        this.border.forEach(function (arr, i) {
            if (arr.max() > max) 
            {
                max = arr.max();
            }
        });
        if (max >= 2048) 
        {
            alert('you wind');
            return;
        }
    }
}
export default gameController