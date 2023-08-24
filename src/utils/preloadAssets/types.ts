export interface preloadAssetsOptions {
  /**
   * 需要预加载的图片资源路径，应该提供一个没有别名（如 '@'）的路径
   * @example ['/images/1.png']
   */
  images?: string[]
  /**
   * 需要预加载的字体资源，且会添加进 document.fonts
   * @example [['FontName', '/myFont.ttf']]
   */
  fonts?: [family: string, path: string, descriptors?: FontFaceDescriptors][]
}
