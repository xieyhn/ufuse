export interface VPullOptions {
  /**
   * 延迟时间，单位：秒
   * @default undefined
   */
  delay?: number
  /**
   * 动画方向
   * @default 'l2r'
   */
  direction?: 'l2r' | 'r2l' | 't2b' | 'b2t'
  /**
   * 动画时长，单位：秒
   * @default 1
   */
  duration?: number
}
