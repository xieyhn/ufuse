import formatNumber from 'ufuse/src/utils/formatNumber'
import { describe, expect, it } from 'vitest'

describe('formatNumber', () => {
  it('基本使用', () => {
    expect(formatNumber(1)).toBe('1.00')
    expect(formatNumber(1000)).toBe('1,000.00')
    expect(formatNumber('200')).toBe('200.00')
    expect(formatNumber('1,000')).toBe('1,000.00')
  })
})
