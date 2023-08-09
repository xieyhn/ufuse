import * as ufuse from 'ufuse'
import { describe, expect, it } from 'vitest'

describe('ufuse', () => {
  it('expose', () => {
    // components
    expect(ufuse.LottieView).toBeDefined()
    expect(ufuse.FadeTransition).toBeDefined()
    expect(ufuse.DNumber).toBeDefined()
    expect(ufuse.SplineView).toBeDefined()
    expect(ufuse.EyeCryptButton).toBeDefined()

    // directives
    expect(ufuse.vPull).toBeDefined()

    // hooks
    expect(ufuse.useAbortController).toBeDefined()

    // utils
    expect(ufuse.combine).toBeDefined()
    expect(ufuse.toNumber).toBeDefined()
    expect(ufuse.formatNumber).toBeDefined()
    expect(ufuse.ensureArray).toBeDefined()
    expect(ufuse.preloadAssets).toBeDefined()
    expect(ufuse.createPromise).toBeDefined()
  })
})
