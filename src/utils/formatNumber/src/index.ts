import { toNumber } from '../..'

export function formatNumber(val: number | string | undefined, fractionDigits = 2) {
  if (typeof val === 'undefined')
    return ''
  if (typeof val === 'string')
    val = toNumber(val)
  // 避免使用 Number.prototype.toFixed 四舍五入
  let [integer, decimal = ''] = String(val).split('.')
  decimal = decimal.slice(0, fractionDigits).padEnd(fractionDigits, '0')
  return `${Number(integer).toLocaleString('zh')}${decimal ? `.${decimal}` : ''}`
}
