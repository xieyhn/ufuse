---
outline: deep
---

# 参与开发

本文档通过 [vitepress](https://vitepress.dev/) 搭建，官方文档描述了支持的 Markdown 语法。

## 开发环境

### ESLint

项目使用 [ESLint](https://eslint.org/) 作为代码规范检查工具，配置文件为 `.eslintrc`，建议在开发时使用 VSCode 并安装 [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) 插件，该插件可以实时检查代码规范并给出提示。

:wave: 通过添加以下配置到 VSCode 的 `settings.json` 中，可以在文件编辑后保存时自动修复一些简单的规范问题：

```json
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

### tailwindcss

项目使用 [tailwindcss](https://tailwindcss.com/) 作为 CSS 框架，配置文件为 `tailwind.config.js`，建议在开发时使用 VSCode 并安装 [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) 插件，该插件可以实时提示 tailwindcss 的类名。

::: warning
注意这只应该使用在跟文档编写工作相关的 css 上，如 Demo 组件中的 css

而不应该在实际对外暴露的组件的 css 中使用，因为在你的宿主项目中不一定安装了 tailwindcss，这样会导致你的组件在宿主项目中无法正常使用。
:::

### Scss

在 Vue 组件（无论是对外暴露的组件还是文档编写工作的 Demo 组件）中可以直接使用 Scss 语法。

### Test

项目使用 [vitest](https://vitest.dev/) 作为测试框架，配置文件为 `vite.config.ts`，通过 `pnpm run test` 命令来运行测试。

## 参与贡献

<!-- TODO: 增加仓库 fork 流程 -->

为了相对保证仓库的主分支 main 分支稳定，main 分支不允许直接推送，在新增功能或 fix bug 时应新建自己对应处理的分支，例如 `feat/your-feature` 或 `fix/your-bug`，在完成开发后，通过 Pull Request 的方式（下有介绍）提交到 main 分支，在经过确认后合并到 main 分支。

### 新增一个功能

在 `src` 目录中，根据新增功能的类型选择在适合的文件夹下操作，新增一个功能逻辑代码的同时，需要增加对应的说明文档以及简单的测试用例。

**关于说明文档**

一个功能的说明文档应该包含以下内容：

+ 使用功能需要安装的依赖
+ 功能的简单介绍
+ 功能的使用示例、效果的预览（如是可以在 UI 上体现的功能）、代码示例（如是一些工具函数），示例尽可能的包含功能的**所有入参**情况，以便在后续维护迭代时可进行一些简单的自测
+ 功能的参数说明

**关于测试用例**

如新增的功能是一个工具函数等，应该在目录下新增 `tests/index.test.ts` 文件，并在该文件中编写测试用例。

### 试用你的改动

1. 将改动的分支推送到远程仓库。
2. 在将要适用的宿主项目 package.json 中新增依赖 `ufuse-my`（名称是任意的），地址拼接上你的分支名，如：
```json
{
  "dependencies": {
    "ufuse-my": "git+http://192.168.0.41/xieyuhang/ufuse.git#my-feature-branch"
  }
}
```
3. 运行 `pnpm install` 安装依赖。
4. （测试完成之后记得移除这个依赖以及移除你的测试代码。）

### 发起一个 Pull Request

1. 将改动的分支推送到远程仓库。
2. 在 UFUse 的 Gitlab 仓库点击 `Merge Request` - `New merge request` 按钮。
3. 左边选择你的分支，右边选择 main 分支。
4. 点击 `Compare branches and continue` 按钮，并在这一步可以自测一下修改的文件内容是否正确，如是否有还未删除的测试代码等。
5. 点击 `Submit merge request` 按钮。
6. 等待你的分支被确认并被合并进 main 分支。

## 开发约定

+ 尽量保证不出现单词拼写错误（可以使用 VSCode Code [Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) 插件）。
+ 尽量符合项目的代码编写规范（通过 ESLint）。
+ 尽量保证代码可复用性及可扩展性。
+ 在 API 设计时，尽可能保证参数名称的语义化，可参考 Vue、Element UI、VueUse 等的 API 设计。
+ 在涉及到时间相关参数时，使用**毫秒**作为单位，并在文档描述中说明。
+ 文件命名规范参考现存的文件命名。
