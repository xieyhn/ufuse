import path from 'node:path'
import type { Plugin } from 'vite'
import { simpleGit } from 'simple-git'

const git = simpleGit()

export function MarkdownTransform(): Plugin {
  return {
    name: 'ufuse:markdown-transform',
    enforce: 'pre',
    async transform(raw, id) {
      if (!id.match(/\.md\b/))
        return null

      let file = id

      const dirname = path.dirname(id)
      // http://www.gravatar.com/avatar/95940335a255c71937656e46a31a8df4?s=72&d=identicon
      if (!dirname.endsWith('packages'))
        file = dirname

      const { all } = await git.log({
        file,
      })

      const contributors: Array<{ name: string }> = []

      all.forEach((item) => {
        if (!contributors.find(contributor => contributor.name === item.author_name)) {
          contributors.push({
            name: item.author_name,
          })
        }
      })

      raw += `

## 贡献者

<Contributors contributors="${contributors.map(item => `${item.name}`).join(';')}" />`

      return raw
    },
  }
}
