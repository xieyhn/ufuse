import '@total-typescript/ts-reset'
import fs from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'vitepress'

const pkgsPath = path.resolve(__dirname, '../packages')

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'UFUse',
  description: '前端开发工具集',
  srcDir: 'packages/',
  vite: {
    resolve: {
      alias: {
        ufuse: path.resolve(__dirname, '../packages/index'),
      },
    },
  },
  themeConfig: {
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
                    link: `/${pkgName}/${name}/`,
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
