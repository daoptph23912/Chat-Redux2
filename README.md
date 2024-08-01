React-Redux-Client
Hello

"scripts": {
"start": "react-scripts start",
"build": "react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject"
}

sử dụng webpack để chuyển đổi các tệp SVG thành các component React, cần thực hiện như sau
-cài đặt webpack , webpack-cli và @svg/webpack
-cấu hình webpack để sử dụng @svg/webpack cho các tệp SVG

b1:npm install --save-dev webpack webpack-cli @svgr/webpack
b2:Cấu hình Webpack
const path = require('path');

module.exports = {
entry: './src/index.js',
output: {
path: path.resolve(\_\_dirname, 'dist'),
filename: 'bundle.js',
},
module: {
rules: [
{
test: /\.svg$/,
use: ['@svgr/webpack'],
},
// Các quy tắc khác
],
},
resolve: {
extensions: ['.js', '.jsx', '.json', '.svg'],
},
// Các cấu hình khác của Webpack
};
b3:Thêm Scripts vào package.json
"scripts": {
"start": "webpack serve --mode development --open",
"build": "webpack --mode production"
}
b4:import { ReactComponent as SendIcon } from "../../../assets/svg/send.svg";
