# farm-vite-vue

测试[farm](https://github.com/farm-fe/farm)打包和vite的对比  
使用Mac Pro 的 M2 Max CPU + 64G 内存  
使用node 18.18.0

```
/.nvm/versions/node/v18.18.0/bin/npm run build

> @farmfe-examples/vue@1.0.0 build
> npm run farm-build && npm run vite-build && npm run farm-vite && npm run vite-legacy-build


> @farmfe-examples/vue@1.0.0 farm-build
> farm build

[ Farm ] Using config file at /farm-vue/farm.config.ts
[ Farm ] ⚡️ Build completed in 88ms! Resources emitted to dist/farm.

> @farmfe-examples/vue@1.0.0 vite-build
> vite build

vite v4.5.0 building for production...
✓ 18 modules transformed.
dist/vite/index.html                  0.45 kB │ gzip:  0.30 kB
dist/vite/assets/vue-5532db34.svg     0.50 kB │ gzip:  0.31 kB
dist/vite/assets/logo-e052fe17.png   16.86 kB
dist/vite/assets/index-b5deb6ff.css   1.30 kB │ gzip:  0.67 kB
dist/vite/assets/index-003b4106.js   51.46 kB │ gzip: 20.88 kB
✓ built in 312ms

> @farmfe-examples/vue@1.0.0 farm-vite
> farm build -c farm-vite.config.ts

[ Farm ] Using config file at /farm-vue/farm-vite.config.ts
[ Farm ] ⚡️ Build completed in 151ms! Resources emitted to dist/farm-vite.

> @farmfe-examples/vue@1.0.0 vite-legacy-build
> vite build -c vite-legacy.config.ts

vite v4.5.0 building for production...
✓ 18 modules transformed.
dist/vite-legacy/assets/vue-5532db34.svg               0.50 kB │ gzip:  0.31 kB
dist/vite-legacy/index.html                            0.60 kB │ gzip:  0.35 kB
dist/vite-legacy/assets/logo-e052fe17.png             16.86 kB
dist/vite-legacy/assets/index-legacy-f6cde0fe.js      61.95 kB │ gzip: 22.62 kB
dist/vite-legacy/assets/polyfills-legacy-097a9cf1.js  79.01 kB │ gzip: 32.09 kB
✓ built in 2.21s

Process finished with exit code 0



```

## 一些总结

- 由于`vite`使用浏览器的esm加载代码所以不需要模块加载器的代码也不需要模块注册表所以体积最小
- `@vitejs/plugin-legacy`插件内部使用babel所以打包最慢，附带了`systemjs`作为模块加载器打包后体积也比farm要小
- `farm`会把模块加载起和注册表直接写入index.html这是否不利于首屏加载？  
- `farm`+`@vitejs/plugin-vue`的体积更大一些
- 观察打包后的产物，`farm`对于`process.env.NODE_ENV`的处理方式是运行时判断，而不是直接删除代码（`farm`的`tree-shaking`和`rollup`不一致），
  所以代码体积比较大，`vue`和`react`的代码一般会带很多devtools的代码最好还是能够删除