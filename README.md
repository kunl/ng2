迁移到 https://kunl-angular-demos.stackblitz.io/
本项目不再更新，可以继续在 issues 讨论
# Angular Webpack demo

1. Dynamic create NgModule(动态创建模块)
2. BaiduMap(百度地图)
3. Lazyload router(懒加载路由)
4. children router(多级路由)
5. http demo(http 请求)


## Create a new project

Clone this repo into new project folder (e.g., `my-proj`).
```bash
git clone  https://github.com/kunl/ng2.git  my-proj
cd my-proj
```

## Install npm packages

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

```bash
npm install
npm run dev
```

The `npm run dev` command first compiles the application and run webpack-dev-server, 
Both the compiler and the server watch for file changes.

Shut it down manually with `Ctrl-C`.

You're ready to write your application.


### npm scripts

npm scripts defined in the `package.json`:

* `npm build` - runs the ngc and webpack compiler to build the program.
* `npm run dev` - runs the webpack-dev-server and watch all files
