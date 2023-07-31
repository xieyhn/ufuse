import * as ufuse from 'ufuse'
import { describe, expect, it } from 'vitest'

describe('ufuse', () => {
  it('正确的导出', () => {
    // components
    expect(ufuse.LottieView).toBeDefined()
    expect(ufuse.FadeTransition).toBeDefined()

    // directives
    expect(ufuse.vPull).toBeDefined()

    // hooks
    expect(ufuse.useAbortController).toBeDefined()

    // utils
    expect(ufuse.combine).toBeDefined()
    expect(ufuse.toNumber).toBeDefined()
    expect(ufuse.formatNumber).toBeDefined()
  })
})
