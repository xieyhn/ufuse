# 开发说明

本文档通过 [vitepress](https://vitepress.dev/) 搭建，它的官方文档指出了它支持的 Markdown 语法。

## 如何新增

以新增一个组件为例：

1. 在 packages/components 目录中新增一个组件目录，例如 `packages/components/MyComponent`。
2. 在组件目录中新增一个 `index.vue` 文件，作为组件的入口文件。
3. 在组件目录中新增一个 `index.md` 文件，作为组件的说明文档。

## 开发约定

+ 尽量符合项目的代码编写规范（通过 eslint）。
+ 在涉及到时间相关参数时，使用毫秒作为单位。
+ 组件的目录名、文件名、组件名均使用大驼峰命名法（除目录下的 index.vue 外）。
+ Vue 指令、Vue Hooks 使用小驼峰命名法。
