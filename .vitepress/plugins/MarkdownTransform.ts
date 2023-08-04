import path from 'node:path'
import type { Plugin } from 'vite'
import { simpleGit } from 'simple-git'
import md5 from 'md5'

const git = simpleGit()

export function MarkdownTransform(): Plugin {
  return {
    name: 'ufuse:markdown-transform',
    enforce: 'pre',
    async transform(raw, id) {
      if (!/\.md$/.test(id) || id.endsWith('src/index.md'))
        return null

      let file = id

      const dirname = path.dirname(id)
      // http://www.gravatar.com/avatar/95940335a255c71937656e46a31a8df4?s=72&d=identicon
      if (!dirname.endsWith('src'))
        file = dirname

      const { all } = await git.log({
        file,
      })

      const contributors: Array<{ name: string; hash: string }> = []

      all.forEach((item) => {
        if (!contributors.find(contributor => contributor.name === item.author_name)) {
          contributors.push({
            name: item.author_name,
            hash: md5(item.author_email),
          })
        }
      })

      raw += `

## 贡献者

<Contributors contributors="${contributors.map(item => `${item.name},${item.hash}`).join(';')}" />`

      return raw
    },
  }
}
