import type { FunctionDirective } from 'vue'
import type { vCompactFitOptions } from './types'

function getCompactWidthPX(el: HTMLElement, compactWidth: number | string) {
  if (typeof compactWidth === 'number')
    return compactWidth

  if (typeof compactWidth === 'string') {
    if (compactWidth.endsWith('%')) {
      if (!el.parentNode)
        throw new Error('v-compact-fit: el.parentNode is undefined, can not calculate percent(%)')
      const percent = Number(compactWidth.slice(0, -1))
      return (el.parentNode as HTMLElement).clientWidth * percent / 100
    }
    else if (compactWidth.endsWith('px')) {
      return Number(compactWidth.slice(0, -2))
    }
  }

  throw new Error('v-compact-fit: compactWidth is invalid')
}

function applyCompactFit(el: HTMLElement, compactWidthPX: number) {
  const scale = compactWidthPX / el.offsetWidth
  if (scale < 1)
    el.style.transform = `scale(${scale})`
}

const vCompactFit: FunctionDirective<HTMLElement, vCompactFitOptions> = (el, binding) => {
  const { compactWidth = '100%' } = binding.value ?? {}

  applyCompactFit(el, getCompactWidthPX(el, compactWidth))
}

export default vCompactFit
