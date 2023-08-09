export interface vCompactFitOptions {
  /**
   * 展示的最大宽度，若实际内容超过这个宽度就会被缩小
   *
   * @example 150 具体的 px 值
   * @example '150px' 具体的 px 值
   * @example '80%' 相对于父元素宽度的百分比
   * @default '100%'
   */
  compactWidth?: number | string
}
