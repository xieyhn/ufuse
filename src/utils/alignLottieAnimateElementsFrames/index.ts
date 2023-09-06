/**
 * 计算两个元素最小公约数
 * @returns
 */
function gcd(a: number, b: number) {
  if (b === 0)
    return a

  else
    return gcd(b, a % b)
}

/**
 *计算两个数的最小公倍数
 */
function lcm(a: number, b: number) {
  return (a * b) / gcd(a, b)
}

function calculateLCM(...numbers: number[]) {
  if (numbers.length === 0)
    return 0
  if (numbers.length === 1)
    return numbers[0]
  let result = 1
  numbers.forEach((number) => {
    result = lcm(result, number)
  })
  return result
}

export function alignLottieAnimateElementsFrames(json: any) {
  const { layers = [] } = json
  const ks: Array<{ k: any[]; maxFrames: number }> = []

  const handleAnimation = (v: any) => {
    if (!v || typeof v !== 'object')
      return
    const { a, k } = v
    if (a === 0)
    // 非帧动画
      return
    ks.push({ k, maxFrames: Math.max(...k.map((item: any) => item.t)) })
  }

  ;(layers as any[]).forEach((layer) => {
    const { ks: _ks = {}, shapes = [] } = layer

    Object.values(_ks).forEach((v) => {
      handleAnimation(v)
    })

    ;(shapes as any[]).forEach((shape) => {
      const _ks: any[] = []

      if (shape.ty === 'gr')
        _ks.push(...shape.it)

      // TODO: 非 gr 类型

      _ks.forEach((item) => {
        Object.values(item).forEach((v) => {
          handleAnimation(v)
        })
      })
    })
  })

  const totalFrames = calculateLCM(...ks.map(i => i.maxFrames))

  // 修正帧动画的最大帧数
  json.op = totalFrames
  // https://lottiefiles.github.io/lottie-docs/layers/#layer
  ;(layers as any[]).forEach(layer => layer.op = totalFrames)

  ks.forEach(({ k, maxFrames }) => {
    const m = totalFrames / maxFrames
    const originK = JSON.parse(JSON.stringify(k))
    for (let i = 0; i < m - 1; i++) {
      const _k = JSON.parse(JSON.stringify(originK)) as any[]
      _k.forEach((c) => {
        c.t += (i + 1) * maxFrames
      })
      k.push(..._k)
    }
  })

  return json
}

export default alignLottieAnimateElementsFrames
