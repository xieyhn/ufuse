import path from 'node:path'
import type { Plugin } from 'vite'
import { simpleGit } from 'simple-git'
import md5 from 'md5'

const git = simpleGit()
const root = path.resolve(__dirname, '../../')

export function MarkdownTransform(): Plugin {
  return {
    name: 'ufuse:markdown-transform',
    enforce: 'pre',
    async transform(raw, id) {
      if (!/\.md$/.test(id))
        return null

      let file = id

      const dirname = path.dirname(id)

      if (path.resolve(root) !== path.resolve(dirname))
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
