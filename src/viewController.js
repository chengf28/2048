class viewController
{
    constructor(tag,width,num)
    {
        this.context  = tag.getContext('2d');
        this.margin   = 10;
        this.width    = width;
        this.height   = width;
        this.boxWidth = (width - this.margin * (num + 1)) / num;
    }
    
    background(Matrix)
    {
        let positionX = 0;
        let positionY = 0;
        this.context.clearRect(0, 0, this.width, this.width);
        
        for (let i = 0; i < Matrix.length ; i++)
        {
            for (let j = 0; j < Matrix.length; j++) 
            {
                positionX = (i + 1) * this.margin + i * this.boxWidth;
                positionY = (j + 1) * this.margin + j * this.boxWidth;
                this.drawBox(positionX, positionY, this.setColor(Matrix[i][j]), Matrix[i][j]);
            }
        }    
    }

    drawBox(x,y,color="#fff",num)
    {
        let radius = this.boxWidth * 0.07;
        this.context.beginPath();
        this.context.fillStyle = color;
        this.context.moveTo(x, y);
        this.context.arcTo(x + this.boxWidth, y, x + this.boxWidth, y + this.boxWidth, radius);
        this.context.arcTo(x + this.boxWidth, y + this.boxWidth, x, y + this.boxWidth, radius);
        this.context.arcTo(x, y + this.boxWidth, x, y, radius);
        this.context.arcTo(x, y, x + this.boxWidth, y, radius);
        this.context.fill();
        if (num > 0) {
            this.context.fillStyle = "#fff";
            this.context.font = "20px Georgia";
            this.context.fillText(num, x + this.boxWidth / 2 - 5, y + this.boxWidth / 2 + 5);
        }
        this.context.closePath();
    }

    setColor(number)
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
}
export default viewController