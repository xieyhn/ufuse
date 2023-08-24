import preloadAssets from 'ufuse/src/utils/preloadAssets'

const ready = preloadAssets({
  images: [
    '/images/a.png',
  ],
  globImages: [
    '@/assets/images/*.png',
  ],
  fonts: [
    ['FontA', '/FontA.ttf'],
  ],
})

ready.then(() => {
  // do something
})
