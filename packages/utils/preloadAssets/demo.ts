import { preloadAssets } from 'ufuse'

const images = [
  '/a.png',
  '/b.png',
]

const fonts: [string, string][] = [
  // 加载的字体通过 Roboto 来引用，第二个参数是字体的路径
  ['Roboto', '/Roboto.ttf'],
]

preloadAssets({
  images,
  fonts,
}).then(() => {
  // ready
})
