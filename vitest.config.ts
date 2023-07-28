import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import vitepressConfig from './.vitepress/config'

export default defineConfig({
  resolve: vitepressConfig.vite?.resolve,
  plugins: [
    vue(),
  ],
})
