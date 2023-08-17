# 开始

UFUse 是一个代码仓库，而不是托管在 npmjs.com 上的一个包（同时也没有任何构建流程），这样做的好处是可以很轻松的迭代更新代码。

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
