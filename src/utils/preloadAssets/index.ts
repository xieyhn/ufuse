import type { preloadAssetsOptions } from './types'

interface ImageModule {
  default: string
}

export default function preloadAssets(options: preloadAssetsOptions) {
  const task: Promise<void>[] = []
  const images: string[] = options.images ?? []

  if (options.globImages) {
    images.push(
      ...Object
        .entries(import.meta.glob(options.globImages, { eager: true }))
        .map(([, module]) => (module as ImageModule).default),
    )
  }

  if (images.length) {
    images.forEach((i) => {
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

  return Promise.all(task)
}
