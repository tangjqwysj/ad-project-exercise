**.eslintrc.json: 出现import/no-unresolved错误**, plugins中添加"plugin:import/typescript"错误提示消失,

可参考https://stackoverflow.com/questions/55198502/using-eslint-with-typescript-unable-to-resolve-path-to-module

<hr/>

**当路由用的是BrowserRouter时, devserve可配置属性historyApiFallback, 默认为false**.

单入口如果配置为true或者{index:'/index2.html'}, 当网页出现404错误时, 可设置网页回退方案, 其实就是服务器配置. 可参考https://router.vuejs.org/zh/guide/essentials/history-mode.html#html5-%E6%A8%A1%E5%BC%8F

devserve其实就是webpack内置了一个express框架的nodejs服务器, 如果不用historyApiFallback选项, 也可以在before选项中配置node中间件, 可达到同样的目的. 这插件跟这个选项长得很像, 估计webpack内置了这货

```javascript
var history = require('connect-history-api-fallback')
// webpack.dev.config.js
module.exports={
  // 省略其他配置
  devServer:{
    before(app){
      app.use(history({
        index:'/index2.html'
      }))
    }
  }
}
```

暂时我测试的区别点就是配置historyApiFallback为index:'/index2.html', 第一次打开会显示index.html, 刷新页面后才显示index2.html, 而导入的这个插件 一开始就显示index2.html

设置为HashRouter时, 它在内部传递的实际 URL 之前使用了一个哈希字符（`#`）。由于这部分 URL 从未被发送到服务器，所以它不需要在服务器层面上进行任何特殊处理

附个多入口的配置:

```javascript
module.exports = {
  entry: {
    "app": "./src/app/index.jsx",
    "admin": "./src/admin/index.jsx"
  },
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "[name].[fullhash:4].js"
  },
  devServer: {
    historyApiFallback:{
      index:'/index.html',
      rewrites: [
        { from: /^\/admin/, to: '/index2.html' }
      ],
    },
  },
 };
```

<hr/>

**加了speed-measure-webpack-plugin**, 产生Error: You forgot to add 'mini-css-extract-plugin' plugin错误提示

一是 直接弃用spm, 使用webpack自带的；

webpack 已经不用这个插件了，尝试使用 `webpack --profile`或 `Profile`插件，在 v5 中我们改进了插件，现在计算 loaders/plugins/etc，所以你不再需要这个插件了

二是 对minicssextractplugin进行版本回退，卸载重装@1.3.6版本也可以正常使用
