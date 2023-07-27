export interface LottieViewProps {
  /**
   * 动画数据
   */
  data: any
  /**
   * @default 'svg'
   */
  renderer?: 'svg' | 'canvas'
  /**
   * @default false
   */
  loop?: boolean
  /**
   * 延迟开始播放，单位：毫秒
   * @default undefined
   */
  delay?: number
  /**
   * 延迟销毁，单位：毫秒
   * @default undefined
   */
  delayDestroy?: number
  /**
   * 在开启 loop 开启时生效，当播放完第一个循环后，后面循环播放提供的 segments 区间
   * @default undefined
   */
  segments?: [number, number]
}
