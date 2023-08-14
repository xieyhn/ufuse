function combine<T1, T2>(array1: T1[], array2: T2[]): Array<[T1, T2]>
function combine<T1, T2, T3>(array1: T1[], array2: T2[], array3: T3[]): Array<[T1, T2, T3]>
function combine<T1, T2, T3, T4>(array1: T1[], array2: T2[], array3: T3[], array4: T4[]): Array<[T1, T2, T3, T4]>
function combine<T1, T2, T3, T4, T5>(array1: T1[], array2: T2[], array3: T3[], array4: T4[], array5: T5): Array<[T1, T2, T3, T4, T5]>
function combine<T extends any[]>(...arrays: T[]): T[] {
  const result: T[] = []
  const [first, ...others] = arrays

  for (const item of first) {
    if (others.length) {
      // @ts-expect-error todo: why?
      for (const other of combine(...others))
        result.push([item, ...other] as T)
    }
    else {
      result.push([item] as T)
    }
  }

  return result
}

export default combine
