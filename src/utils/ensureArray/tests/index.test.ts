import { describe, expect, it } from 'vitest'
import ensureArray from 'ufuse/src/utils/ensureArray'

describe('ensureArray', () => {
  it('基本使用', () => {
    expect(ensureArray(1)).toEqual([1])
    expect(ensureArray([1])).toEqual([1])
  })
})
