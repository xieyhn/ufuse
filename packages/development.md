# 开发说明

本文档通过 [vitepress](https://vitepress.dev/) 搭建，官方文档描述了支持的 Markdown 语法。

## 如何贡献

### 如何新增一个组件？

1. 在 packages/components 目录中新增一个组件目录，例如 `packages/components/MyComponent`。
2. 在组件目录中新增一个 `index.vue` 文件，作为组件的入口文件。
3. 在组件目录中新增一个 `index.md` 文件，作为组件的说明文档。
4. 通常在组件目录中还会新增一个 `Demo.vue` 文件，作为组件的示例文件，并在 `index.md` 中引入。
5. 通常在组件目录中还会新增一个 `types.ts` 文件来存放各种类型定义，可以给业务逻辑使用的同时，也可在 `index.md` 中引入，以便使用者在文档中可直接查看类型定义而省去了编写 API 文档的工作。

### 如何提交你的改动？

为了相对保证仓库的主分支 main 分支稳定，main 分支不允许直接推送，在新增功能或 fix bug 时应新建自己对应处理的分支，例如 `feat/your-feature` 或 `fix/your-bug`，在完成开发后，通过 Pull Request 的方式提交到 main 分支，在经过确认后合并到 main 分支。

#### 怎么样发起一个 Pull Request？

1. 将你的新建分支推送到远程仓库。
2. 在 Gitlab 仓库点击 `Merge Request` - `New merge request` 按钮。
3. 左边选择你的分支，右边选择 main 分支。
4. 点击 `Compare branches and continue` 按钮，并在这一步可以自测一下修改的文件内容是否正确，如是否有没有删除的测试代码等。
5. 点击 `Submit merge request` 按钮。
6. 等待你的分支被确认并被合并进 main 分支。

## 开发约定

+ 尽量符合项目的代码编写规范（通过 eslint）。
+ 尽量保证组件、指令、Hooks 等的可复用性及可扩展性。
+ 在 API 设计时，尽可能保证参数名称的语义化，可参考 Vue、Element UI、VueUse 等的 API 设计。
+ 在涉及到时间相关参数时，使用**毫秒**作为单位，并在文档描述中说明。
+ 组件的目录名、文件名、组件名均使用大驼峰命名法（除目录下的 index.vue 外）。
+ Vue 指令目录使用小驼峰命名法。
+ Vue Hooks 目录使用小驼峰命名法。
