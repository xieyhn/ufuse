import '@total-typescript/ts-reset'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { defineConfig } from 'vitepress'
import { MarkdownTransform } from './plugins/MarkdownTransform'

const cwd = process.cwd()
const pkgsPath = path.resolve(cwd, 'src')
const pkgJSON = JSON.parse(fs.readFileSync(path.resolve(cwd, 'package.json'), 'utf-8')) as Record<string, any>

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: `UFUse（${pkgJSON.version}）`,
  description: '前端开发工具集',
  head: [
    ['link', { rel: 'icon', type: 'image/ico', href: '/favicon.ico' }],
  ],
  vite: {
    resolve: {
      alias: {
        ufuse: path.resolve(cwd, './'),
      },
    },
    plugins: [
      MarkdownTransform() as any,
    ],
  },
  themeConfig: {
    logo: '/logo.png',
    lastUpdated: {
      text: '最后一次文档更新',
    },
    search: {
      provider: 'local',
    },
    socialLinks: [
      {
        icon: { svg: '<svg t="1692954353888" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4900" width="200" height="200"><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#C71D23" p-id="4901"></path></svg>' },
        link: 'https://gitee.com/ufrontend/ufuse',
      },
    ],
    nav: [
      { text: '开始使用', link: '/index.md' },
      { text: '参与开发', link: '/development.md' },
    ],
    sidebar: [
      ...fs.readdirSync(pkgsPath)
        .map((pkgName) => {
          const pkgPath = path.resolve(pkgsPath, pkgName)

          if (!fs.statSync(pkgPath).isDirectory())
            return null

          return {
            text: pkgName.slice(0, 1).toUpperCase() + pkgName.slice(1),
            items: fs.readdirSync(pkgPath)
              .map((name) => {
                if (fs.statSync(path.resolve(pkgPath, name)).isDirectory()) {
                  return {
                    text: name,
                    link: `/src/${pkgName}/${name}/docs/`,
                  }
                }
                return null
              })
              .filter(Boolean),
          }
        })
        .filter(Boolean),
    ],
  },
})
