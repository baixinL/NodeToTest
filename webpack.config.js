const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry:{
        index:'./test/index.js',
        chai:['chai']
    },
    output:{
        path:path.resolve(__dirname,'build/script'),
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                include:[
                    path.resolve(__dirname,'src/script')
                ],
                loader:'babel-loader'
            },
            {
                test:/\.less$/,
                //外联样式
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                        },
                        {
                            loader: 'less-loader',
                        }
                    ]
                })
            }
        ]
    },
    mode:'production',
    plugins: [
        new ExtractTextPlugin({
            filename:"../style/style.css",
            disable:process.env.NODE_ENV=='development'
        }),
        new webpack.optimize.ModuleConcatenationPlugin()
    ],
    optimization:{
        usedExports: true,
        splitChunks:{
            cacheGroups: {
                vendor: {
                    name: "chai",
                    chunks: "initial",
                    minChunks: 2
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    },

}
