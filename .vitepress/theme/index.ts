import DefaultTheme from 'vitepress/theme'
import type { EnhanceAppContext } from 'vitepress'
import Contributors from './components/Contributors.vue'
import Dependencies from './components/Dependencies.vue'

import './main.css'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    ctx.app.component('Contributors', Contributors)
    ctx.app.component('Dependencies', Dependencies)
  },
}
