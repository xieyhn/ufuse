export function toNumber(value: string | number) {
  if (typeof value === 'number')
    return value
  return Number(value.replace(/,/g, ''))
}

export default toNumber
