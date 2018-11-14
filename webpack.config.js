module.exports = {
    entry: __dirname + "/src/main.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/dist",//打包后的文件存放的地方
        filename: "game.js"//打包后输出文件的文件名
    },
    devtool: 'eval-source-map',
    module:
    {
        rules:[
            {
                test:/(\.js)/,
                exclude: __dirname+'/node_modules',
                include:__dirname+'/src',
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:["env"]
                    }
                }
            }
        ]
    }
}