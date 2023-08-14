import { describe, expect, it } from 'vitest'

import LottieView from 'ufuse/src/components/LottieView/index.vue'
import FadeTransition from 'ufuse/src/components/FadeTransition/index.vue'
import AnimateDigits from 'ufuse/src/components/AnimateDigits/index.vue'
import SplineView from 'ufuse/src/components/SplineView/index.vue'
import EyeCryptButton from 'ufuse/src/components/EyeCryptButton/index.vue'

import vPull from 'ufuse/src/directives/vPull'
import vCompactFit from 'ufuse/src/directives/vCompactFit'

import useAbortController from 'ufuse/src/hooks/useAbortController'
import useContain from 'ufuse/src/hooks/useContain'

import combine from 'ufuse/src/utils/combine'
import toNumber from 'ufuse/src/utils/toNumber'
import formatNumber from 'ufuse/src/utils/formatNumber'
import ensureArray from 'ufuse/src/utils/ensureArray'
import preloadAssets from 'ufuse/src/utils/preloadAssets'
import createPromise from 'ufuse/src/utils/createPromise'

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
