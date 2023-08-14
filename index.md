# 开始

UFUse 是一个代码仓库，而不是托管在 npmjs.com 上的一个包（同时也没有任何构建流程），这样做的好处是可以很轻松的迭代更新代码。

因为 UFUse 只是一个代码仓库，因此在使用 Vite 等构建工具时可以有效的实现按需导入以及 TreeShaking，不必担心引入了很多无用的功能。

## 安装

以 pnpm 为例，可以通过以下命令安装标签为 `1.0.0` 的 UFUse：

```bash
pnpm install 'git+http://192.168.0.41/xieyuhang/ufuse.git#1.0.0'
```

或是在后面的使用中 UFUse 发生了更新，重新修改标签再运行 `pnpm install` 即可。

## 使用

```ts
import vPull from 'ufuse/src/directives/vPull'

// 其它代码
```
