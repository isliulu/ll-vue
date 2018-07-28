# ll-my-vue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
#### 项目结构如下

```javascript
|--build				// webpack配置
|--config				// 项目配置
|--dist					// 打包路径 - build命令生成
|--src					// 源码
	|--common			// 共用组件
	|--directives		// 指令，dom操作
    |--pages			// 页面组件
    |--plugins			// 第三方库，插件
	|--router			// 路由 vue-router
	|--services			// 封装service，如http，emit/broadcast, storage 等
	App.vue
	main.js
|--static				// 静态资源文件
	|--css
    	main.scss		// 全局css管理
	|--font
	|--img
|--test					// 测试代码
index.html
package.json
readme.md
```
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
