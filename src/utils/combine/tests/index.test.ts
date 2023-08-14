import { describe, expect, it } from 'vitest'
import combine from 'ufuse/utils/combine'

describe('combine', () => {
  it('基本使用', () => {
    expect(
      combine([2022, 2023], ['湖北省', '四川省'])).toEqual(
      [
        [2022, '湖北省'],
        [2022, '四川省'],
        [2023, '湖北省'],
        [2023, '四川省'],
      ],
    )
  })
})
