import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'UFUse',
  description: 'Vue Hooks and Components for UFrontend',
  srcDir: 'packages/',
  themeConfig: {
    sidebar: [
      {
        text: 'Hooks',
        items: [
          { text: 'useExample', link: '/hooks/useExample/' },
        ],
      },
      {
        text: 'Components',
        items: [
          { text: 'Example', link: '/components/Example/' },
        ],
      },
    ],
  },
})
