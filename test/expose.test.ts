import { describe, expect, it } from 'vitest'

import LottieView from 'ufuse/src/components/LottieView/index.vue'
import FadeTransition from 'ufuse/src/components/FadeTransition/index.vue'
import AnimateDigits from 'ufuse/src/components/AnimateDigits/index.vue'
import SplineView from 'ufuse/src/components/SplineView/index.vue'
import EyeCryptButton from 'ufuse/src/components/EyeCryptButton/index.vue'

import * as vPull from 'ufuse/src/directives/vPull'
import * as vCompactFit from 'ufuse/src/directives/vCompactFit'

import * as useAbortController from 'ufuse/src/hooks/useAbortController'
import * as useContain from 'ufuse/src/hooks/useContain'

import * as combine from 'ufuse/src/utils/combine'
import * as toNumber from 'ufuse/src/utils/toNumber'
import * as formatNumber from 'ufuse/src/utils/formatNumber'
import * as ensureArray from 'ufuse/src/utils/ensureArray'
import * as preloadAssets from 'ufuse/src/utils/preloadAssets'
import * as createPromise from 'ufuse/src/utils/createPromise'

describe('ufuse', () => {
  it('expose', () => {
    // components
    expect(LottieView).toBeDefined()
    expect(FadeTransition).toBeDefined()
    expect(AnimateDigits).toBeDefined()
    expect(SplineView).toBeDefined()
    expect(EyeCryptButton).toBeDefined()

    // directives
    expect(vPull.default).toBeDefined()
    expect(vPull.vPull).toBeDefined()
    expect(vCompactFit.default).toBeDefined()
    expect(vCompactFit.vCompactFit).toBeDefined()

    // hooks
    expect(useAbortController.default).toBeDefined()
    expect(useAbortController.useAbortController).toBeDefined()
    expect(useContain.default).toBeDefined()
    expect(useContain.useContain).toBeDefined()

    // utils
    expect(combine.default).toBeDefined()
    expect(combine.combine).toBeDefined()
    expect(toNumber.default).toBeDefined()
    expect(toNumber.toNumber).toBeDefined()
    expect(formatNumber.default).toBeDefined()
    expect(formatNumber.formatNumber).toBeDefined()
    expect(ensureArray.default).toBeDefined()
    expect(ensureArray.ensureArray).toBeDefined()
    expect(preloadAssets.default).toBeDefined()
    expect(preloadAssets.preloadAssets).toBeDefined()
    expect(createPromise.default).toBeDefined()
    expect(createPromise.createPromise).toBeDefined()
  })
})
