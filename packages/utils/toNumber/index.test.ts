import { toNumber } from 'ufuse'
import { describe, expect, it } from 'vitest'

describe('toNumber', () => {
  it('基本使用', () => {
    expect(toNumber(1)).toBe(1)
    expect(toNumber('200')).toBe(200)
    expect(toNumber('1,000')).toBe(1000)
  })
})
