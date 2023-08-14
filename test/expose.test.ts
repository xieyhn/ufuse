import { describe, expect, it } from 'vitest'

import LottieView from 'ufuse/components/LottieView/index.vue'
import FadeTransition from 'ufuse/components/FadeTransition/index.vue'
import AnimateDigits from 'ufuse/components/AnimateDigits/index.vue'
import SplineView from 'ufuse/components/SplineView/index.vue'
import EyeCryptButton from 'ufuse/components/EyeCryptButton/index.vue'

import vPull from 'ufuse/directives/vPull'
import vCompactFit from 'ufuse/directives/vCompactFit'

import useAbortController from 'ufuse/hooks/useAbortController'
import useContain from 'ufuse/hooks/useContain'

import combine from 'ufuse/utils/combine'
import toNumber from 'ufuse/utils/toNumber'
import formatNumber from 'ufuse/utils/formatNumber'
import ensureArray from 'ufuse/utils/ensureArray'
import preloadAssets from 'ufuse/utils/preloadAssets'
import createPromise from 'ufuse/utils/createPromise'

describe('ufuse', () => {
  it('expose', () => {
    // components
    expect(LottieView).toBeDefined()
    expect(FadeTransition).toBeDefined()
    expect(AnimateDigits).toBeDefined()
    expect(SplineView).toBeDefined()
    expect(EyeCryptButton).toBeDefined()

    // directives
    expect(vPull).toBeDefined()
    expect(vCompactFit).toBeDefined()

    // hooks
    expect(useAbortController).toBeDefined()
    expect(useContain).toBeDefined()

    // utils
    expect(combine).toBeDefined()
    expect(toNumber).toBeDefined()
    expect(formatNumber).toBeDefined()
    expect(ensureArray).toBeDefined()
    expect(preloadAssets).toBeDefined()
    expect(createPromise).toBeDefined()
  })
})
