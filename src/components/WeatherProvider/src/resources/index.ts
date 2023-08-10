import type { WeatherMain } from '../types'

async function loadLottieJSON(records: Record<string, () => Promise<any>>) {
  const files = Object.keys(records)
  const modules = await Promise.all(Object.values(files).map(key => records[key]()))
  const jsonIndex = files.findIndex(key => key.endsWith('index.json'))
  const json = modules[jsonIndex]

  json.assets?.forEach((asset: any) => {
    // 移除 assets 基础路径
    Reflect.deleteProperty(asset, 'u')
    // 修改资源路径变为绝对路径
    const idx = files.findIndex(key => key.endsWith(asset.p))
    asset.p = modules[idx].default
  })

  return JSON.parse(JSON.stringify(json))
}

export function loadIconAnimationData(main: WeatherMain) {
  switch (main) {
    case 'cloudy':
      return loadLottieJSON(import.meta.glob('./cloudy/*'))
    case 'rain':
      return loadLottieJSON(import.meta.glob('./rain/*'))
    case 'snow':
      return loadLottieJSON(import.meta.glob('./snow/*'))
    case 'sunny':
      return loadLottieJSON(import.meta.glob('./sunny/*'))
    case 'thunderstorm':
      return loadLottieJSON(import.meta.glob('./thunderstorm/*'))
  }
}

export function getSegmentsByWeatherMain(main: WeatherMain): [number, number] {
  switch (main) {
    case 'cloudy':
      return [60, 180]
    case 'rain':
      return [40, 83]
    case 'snow':
      return [40, 116]
    case 'sunny':
      return [30, 60]
    case 'thunderstorm':
      return [40, 87]
  }
}
