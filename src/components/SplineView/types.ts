import type { Application, SplineEvent } from '@splinetool/runtime'

export interface SplineViewProps {
  /**
   * splinecode 文件地址
   */
  scene: string
  onMouseDown?: (event: SplineEvent) => void
  onMouseHover?: (event: SplineEvent) => void
  onMouseUp?: (event: SplineEvent) => void
  onKeyDown?: (event: SplineEvent) => void
  onKeyUp?: (event: SplineEvent) => void
  onStart?: (event: SplineEvent) => void
  onLookAt?: (event: SplineEvent) => void
  onFollow?: (event: SplineEvent) => void
  onScroll?: (event: SplineEvent) => void
}

export interface SplineViewInstance {
  /**
   * 获取已成功加载 scene 的 spline 实例
   * 若加载 scene 发生错误，promise 会被 reject
   */
  getSpline(): Promise<Application>
}
