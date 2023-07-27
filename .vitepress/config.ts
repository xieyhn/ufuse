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
    lastUpdated: {
      text: '最后一次文档更新',
    },
    socialLinks: [
      {
        icon: { svg: '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1690453236004" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2292" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M932.317184 567.76704L885.10464 422.46144l-93.57312-287.997952c-4.8128-14.81728-25.776128-14.81728-30.590976 0L667.36128 422.459392H356.62848L263.051264 134.46144c-4.8128-14.81728-25.776128-14.81728-30.593024 0l-93.57312 287.997952-47.210496 145.309696a32.165888 32.165888 0 0 0 11.68384 35.96288l408.6272 296.890368L920.61696 603.734016c11.272192-8.192 15.990784-22.71232 11.68384-35.964928" fill="#FC6D26" p-id="2293"></path><path d="M512.002048 900.62848l155.365376-478.171136H356.634624z" fill="#E24329" p-id="2294"></path><path d="M512.004096 900.62848L356.63872 422.47168H138.901504z" fill="#FC6D26" p-id="2295"></path><path d="M138.891264 422.465536l-47.214592 145.309696a32.16384 32.16384 0 0 0 11.685888 35.96288L511.991808 900.62848z" fill="#FCA326" p-id="2296"></path><path d="M138.893312 422.459392h217.737216L263.053312 134.46144c-4.8128-14.819328-25.778176-14.819328-30.590976 0z" fill="#E24329" p-id="2297"></path><path d="M512.002048 900.62848l155.365376-478.154752H885.10464z" fill="#FC6D26" p-id="2298"></path><path d="M885.11488 422.465536l47.214592 145.309696a32.16384 32.16384 0 0 1-11.685888 35.96288L512.014336 900.62848z" fill="#FCA326" p-id="2299"></path><path d="M885.096448 422.459392H667.36128l93.577216-287.997952c4.814848-14.819328 25.778176-14.819328 30.590976 0z" fill="#E24329" p-id="2300"></path></svg>' },
        link: 'http://192.168.0.41/xieyuhang/ufuse',
      },
    ],
    nav: [
      { text: '开始使用', link: '/get-started.md' },
      { text: '开发说明', link: '/development.md' },
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
