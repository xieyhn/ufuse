export type UseElementsAfterMountFn<T = HTMLElement> = (
  callback: (elements: T[]) => void
) => {
  collect: (el: HTMLElement | null) => void
}
