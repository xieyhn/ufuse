import '@total-typescript/ts-reset'
import fs from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'vitepress'

const pkgsPath = path.resolve(__dirname, '../packages')
const hooksPath = path.resolve(pkgsPath, 'hooks')
const componentsPath = path.resolve(pkgsPath, 'components')

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'UFUse',
  description: 'Vue Hooks and Components for UFrontend',
  srcDir: 'packages/',
  themeConfig: {
    sidebar: [
      {
        text: 'Hooks',
        items: fs.readdirSync(hooksPath)
          .map((name) => {
            if (fs.statSync(path.resolve(hooksPath, name)).isDirectory()) {
              return {
                text: name,
                link: `/hooks/${name}/`,
              }
            }
            return null
          })
          .filter(Boolean),
      },
      {
        text: 'Components',
        items: fs.readdirSync(componentsPath)
          .map((name) => {
            if (fs.statSync(path.resolve(componentsPath, name)).isDirectory()) {
              return {
                text: name,
                link: `/components/${name}/`,
              }
            }
            return null
          })
          .filter(Boolean),
      },
    ],
  },
})
