import gsap from 'gsap'
import type { Directive } from 'vue'
import type { VPullOptions } from './types'

const TweenKey = Symbol('v-pull.tween-key')

export const vPull: Directive<HTMLElement, VPullOptions> = {
  mounted(el, binding) {
    const { delay, direction = 'l2r', duration = 1000 } = binding.value ?? {}

    gsap.set(el, {
      maskImage: 'linear-gradient(90deg, #000, #000)',
      maskSize: '100% 100%',
      maskRepeat: 'no-repeat',
      maskPosition: '0 0',
    })

    let maskPositionX = 0
    let maskPositionY = 0

    if (direction === 'l2r')
      maskPositionX = -el.offsetWidth
    else if (direction === 'r2l')
      maskPositionX = el.offsetWidth
    else if (direction === 't2b')
      maskPositionY = -el.offsetHeight
    else
      // b2t
      maskPositionY = el.offsetHeight

    Object.defineProperty(el, TweenKey, {
      value: gsap.fromTo(
        el,
        {
          maskPosition: `${maskPositionX}px ${maskPositionY}px`,
        },
        {
          maskPosition: '0px 0px',
          duration: duration / 1000,
          delay: delay && delay / 1000,
        },
      ),
    })
  },
  beforeUnmount(el) {
    const tween = (el as any)[TweenKey]

    if (tween)
      tween.kill()
  },
}

export default vPull
