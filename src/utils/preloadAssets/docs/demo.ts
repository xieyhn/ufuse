import preloadAssets from 'ufuse/src/utils/preloadAssets'

interface ImageModule {
  default: string
}

const ready = preloadAssets({
  images: [
    ...Object.entries(
      import.meta.glob(
        [
          '@/assets/images/menus/**/*',
          '@/assets/images/modules/**/*',
        ],
        { eager: true },
      ),
    )
      .map(([, module]) => (module as ImageModule).default),
  ],
  fonts: [
    ['FontA', '/FontA.ttf'],
  ],
})

ready.then(() => {
  // do something
})
