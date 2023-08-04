# 开发说明

本文档通过 [vitepress](https://vitepress.dev/) 搭建，官方文档描述了支持的 Markdown 语法。

[[toc]]

## 如何参与贡献

### 如何新增一个组件

1. 在 src/components 目录中新增一个组件目录，例如 `src/components/MyComponent`。
2. 在组件目录中新增一个 `index.vue` 文件，作为组件的入口文件。
3. 在组件目录中新增一个 `index.md` 文件，作为组件的说明文档，在该文件中来介绍组件的使用方法、参数说明、示例代码等。
4. 通常在组件目录中还会新增一个 `Demo.vue` 文件，作为组件的示例文件，并在 `index.md` 中引入。
5. 通常在组件目录中还会新增一个 `types.ts` 文件来存放各种类型定义，在给业务逻辑使用的同时，也可在 `index.md` 中引入，以便使用者在文档中可直接查看类型定义而省去了编写 API 文档的工作。
6. 在 `src/components/index.ts` 中新增组件的导出。
7. 在 `test/index.test.ts` 中新增确保可以访问到组件的测试用例。

### 如何提交你的改动

为了相对保证仓库的主分支 main 分支稳定，main 分支不允许直接推送，在新增功能或 fix bug 时应新建自己对应处理的分支，例如 `feat/your-feature` 或 `fix/your-bug`，在完成开发后，通过 Pull Request 的方式提交到 main 分支，在经过确认后合并到 main 分支。

### 如何试用你的改动

1. 在你的分支上完成开发后，将该分支推送到远程仓库。
2. 在你的项目 package.json 中新增依赖 `ufuse-my`（推荐，名称是任意的），地址拼接上你的分支名，如：
```json
{
  "dependencies": {
    "ufuse-my": "git+http://192.168.0.41/xieyuhang/ufuse.git#my-feature-branch"
  }
}
```
3. 运行 `pnpm install` 安装依赖。
4. （测试完成之后记得移除这个依赖以及移除你的测试代码。）

### 如何发起一个 Pull Request

1. 在你的分支上完成开发后，将该分支推送到远程仓库。
2. 在 UFUse 的 Gitlab 仓库点击 `Merge Request` - `New merge request` 按钮。
3. 左边选择你的分支，右边选择 main 分支。
4. 点击 `Compare branches and continue` 按钮，并在这一步可以自测一下修改的文件内容是否正确，如是否有还未删除的测试代码等。
5. 点击 `Submit merge request` 按钮。
6. 等待你的分支被确认并被合并进 main 分支。

## 开发约定

### 杂项

+ 尽量保证不出现单词拼写错误（可以使用 VSCode Code Spell Checker 插件）。
+ 尽量符合项目的代码编写规范（通过 ESLint）。
+ 尽量保证代码可复用性及可扩展性。
+ 在 API 设计时，尽可能保证参数名称的语义化，可参考 Vue、Element UI、VueUse 等的 API 设计。
+ 在涉及到时间相关参数时，使用**毫秒**作为单位，并在文档描述中说明。
+ Vue 组件的目录名、文件名、组件名均使用大驼峰命名法（除目录下的 index.vue 外）。
+ Vue 指令目录使用小驼峰命名法。
+ Vue Hooks 目录使用小驼峰命名法。

### ESLint

项目使用 [ESLint](https://eslint.org/) 作为代码规范检查工具，配置文件为 `.eslintrc`，建议在开发时使用 VSCode 并安装 ESLint 插件，该插件可以实时检查代码规范并给出提示。

也可以添加以下配置到 VSCode 的 `settings.json` 中，以便在文件保存时自动修复一些简单的规范问题：

```json
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

### tailwindcss

项目使用 [tailwindcss](https://tailwindcss.com/) 作为 CSS 框架，配置文件为 `tailwind.config.js`，建议在开发时使用 VSCode 并安装 Tailwind CSS IntelliSense 插件，该插件可以实时提示 tailwindcss 的类名。

::: warning
注意这只应该使用在跟文档编写工作相关的 css 上，如 Demo 组件中的 css

而不应该在实际对外暴露的组件的 css 中使用，因为在你的宿主项目中不一定安装了 tailwindcss，这样会导致你的组件在宿主项目中无法正常使用。
:::

### Scss

Vue 组件中可以直接使用 scss 语法。

### Test

项目使用 [vitest](https://vitest.dev/) 作为测试框架，配置文件为 `vite.config.ts`，通过 `pnpm run test` 命令来运行测试。

+ `test/index.test.ts` 中编写最简单的测试用例，以保证你的功能可以被正确引入。
+ `src/utils` 中的方法应该编写对应的测试用例，以保证方法的正确性，这样也可以直接将测试用例放在对应的文档上省去了写示例的工作。
