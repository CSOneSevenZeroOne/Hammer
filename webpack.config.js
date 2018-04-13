//全局安装webpack webpack-cli
// var webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path');
module.exports = {
	//入口
	entry: './entry/hammer.js',
	//出口
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js'
	},
	//开发版本
	mode: "development",
	//引入完整版本的vue
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js'
		}
	},
	//配置loader 处理非js类型的文件
	module: {
		rules: [{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}, {
			test: /\.(png|jpg|gif|woff|ttf|svg|woff2|eot)$/,
			use: [{
				loader: 'file-loader',
			}]
		}, {
			test: /\.txt$/,
			use: 'raw-loader'
		}, {
			test: /\.(html)$/,
			use: {
				loader: 'html-loader',
				options: {
					attrs: [':data-src']
				}
			}
		}, {
			test: /\.(vue)$/,
			use: {
				loader: 'vue-loader',
			}
		}, {
			//把高版本的js代码转为ES5代码
			test: /\.js$/,
			//不处理node_modules
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			}
		}]
	},
	watch: true
}
