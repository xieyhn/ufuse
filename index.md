# 开始

UFUse 是一个基于 Vue 的代码仓库，它包含了一些常用的组件、指令、hooks、工具函数等。

在编写 UFUse 时，默认也是基于 Vite 构建工具的，因此在使用其它构建工具时，可能会出现不适配的情况。

使用 UFUse 需要的依赖项：<Dependencies :show-label="false" deps="vue,sass,@vueuse/core" />，除此之外每个组件、指令、hooks、工具函数等都有自己的依赖项，会在对应的文档中说明。

## 安装

以 pnpm 为例，可以通过以下命令安装 `tag` 为 `1.0.0` 的 UFUse：

```bash
pnpm install 'git+http://192.168.0.41/xieyuhang/ufuse.git#1.0.0'
```

或是在后面的使用中 UFUse 发生了更新，在 package.json 中重新修改 `tag` 再运行 `pnpm install` 即可，如从 `1.0.0` 更新到 `1.0.1`：

```diff
{
  "dependencies": {
-    "ufuse": "git+http://192.168.0.41/xieyuhang/ufuse.git#1.0.0"
+    "ufuse": "git+http://192.168.0.41/xieyuhang/ufuse.git#1.0.1"
  }
}
```

## 使用

```ts
// component
import LottieView from 'ufuse/src/components/LottieView/index.vue'

// directive
import vPull from 'ufuse/src/directives/vPull'

// hook
import useAbortController from 'ufuse/src/hooks/useAbortController'

// util
import combine from 'ufuse/src/utils/combine'
```
