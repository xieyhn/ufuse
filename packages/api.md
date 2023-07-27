# 开始

UFUse 是一个代码仓库，而不是托管在 npmjs.com 上的一个包，这样做的好处是可以很轻松的迭代更新代码而不用走 npm 包发布等流程。

因为 UFUse 只是一个代码仓库，因此在使用 Vite 等构建工具时可以有效的实现按需导入以及 TreeShaking，不必担心引入了很多无用的功能。

## 安装

在 package.json 中添加依赖：

```json
{
  "dependencies": {
    "ufuse": "http://192.168.0.41/xieyuhang/ufuse.git"
  }
}
```

通过使用的包管理器按照项目依赖，如使用 pnpm：

```bash
pnpm install
```

## 使用

```ts
import { vPull } from 'ufuse'

// 其它代码
```
