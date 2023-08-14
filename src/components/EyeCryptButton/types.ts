export interface EyeCryptButtonProps {
  /**
   * 是否是加密状态
   */
  crypt: boolean
  /**
   * 动画持续时长，单位：毫秒
   * @default 300
   */
  duration?: number
}

export interface EyeCryptButtonEvents {
  (event: 'update:crypt', crypt: boolean): void
}
