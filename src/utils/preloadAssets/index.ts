import type { preloadAssetsOptions } from './types'

export function preloadAssets(options: preloadAssetsOptions) {
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
      const [name, path, descriptors] = i
      const font = new FontFace(name, `url(${path})`, descriptors)
      task.push(font.load().then((loadedFont) => {
        window.document.fonts.add(loadedFont)
      }))
    })
  }

  return Promise.allSettled(task)
}

export default preloadAssets
