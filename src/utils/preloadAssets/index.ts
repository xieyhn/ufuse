import type { preloadAssetsOptions } from './types'

export default function preloadAssets(options: preloadAssetsOptions) {
  const task: Promise<void>[] = []

  if (options.images) {
    options.images.forEach((i) => {
      task.push(new Promise<void>((resolve) => {
        const img = new Image()
        img.src = i
        img.onload = () => resolve()
        img.onerror = () => resolve()
      }))
    })
  }

  if (options.fonts) {
    options.fonts.forEach((i) => {
      const [name, url] = i
      const font = new FontFace(name, `url(${url})`)
      task.push(font.load().then((loadedFont) => {
        window.document.fonts.add(loadedFont)
      }))
    })
  }

  return Promise.all(task)
}
