# 开始

UFUse 是一个代码仓库，而不是托管在 npmjs.com 上的一个包（同时也没有任何构建流程），这样做的好处是可以很轻松的迭代更新代码。

因为 UFUse 只是一个代码仓库，因此在使用 Vite 等构建工具时可以有效的实现按需导入以及 TreeShaking，不必担心引入了很多无用的功能。

## 安装

在 package.json 中添加依赖：

```json
{
  "dependencies": {
    "ufuse": "git+http://192.168.0.41/xieyuhang/ufuse.git"
  }
}
```

通过使用的包管理器按照项目依赖，如使用 pnpm：

```bash
pnpm install
```

或是在后面的时间中，UFUse 发生了更新，以 pnpm 为例可以通过以下命令更新依赖：

```bash
pnpm update ufuse
```

## 使用

```ts
import { vPull } from 'ufuse'

// 其它代码
```
