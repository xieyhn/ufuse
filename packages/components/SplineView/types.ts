import type { Application, SplineEvent } from '@splinetool/runtime'

export interface SplineViewProps {
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
  getSpline(): Promise<Application>
}
