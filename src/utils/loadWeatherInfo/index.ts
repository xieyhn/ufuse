import { h } from 'vue'
import LottieView from 'ufuse/src/components/LottieView/index.vue'
import { getScale, getSegmentsByWeatherMain, loadIconAnimationData } from './resources'
import type { LoadWeatherInfoOptions, WeatherInfo, WeatherMain } from './types'

async function fetchWeatherInfo(key: string, adcode?: string, feedbackAdcode?: string): Promise<any> {
  if (typeof adcode === 'undefined') {
    adcode = await fetch(`https://restapi.amap.com/v3/ip?key=${key}`)
      .then<any>(res => res.json())
      .then((res) => {
        if (!res || !res.adcode)
          throw new Error('Failed to fetch adcode')
        return res.adcode
      })
      .catch(() => feedbackAdcode)
  }

  return await fetch(`https://restapi.amap.com/v3/weather/weatherInfo?key=${key}&city=${adcode}&extensions=all`)
    .then(res => res.json())
}

async function loadWeatherInfo(options: LoadWeatherInfoOptions): Promise<WeatherInfo> {
  const result = await fetchWeatherInfo(options.amapKey, options.adcode, options.feedbackAdcode)

  if (result?.info !== 'OK')
    throw new Error('Failed to fetch weather info')

  const { casts = [], adcode, city, province } = result?.forecasts?.[0] ?? {}
  let main: WeatherMain
  const cast = casts[0]
  if (!cast)
    throw new Error('Failed to fetch weather info')

  switch (cast.dayweather) {
    case '晴':
      main = 'sunny'
      break
    case '少云':
    case '晴间多云':
    case '多云':
      main = 'cloudy'
      break
    case '阵雨':
    case '雷阵雨':
    case '雷阵雨并伴有冰雹':
    case '小雨':
    case '中雨':
    case '大雨':
    case '暴雨':
    case '大暴雨':
    case '特大暴雨':
    case '强阵雨':
    case '极端降雨':
    case '毛毛雨/细雨':
    case '雨':
    case '小雨-中雨':
    case '中雨-大雨':
    case '大雨-暴雨':
    case '暴雨-大暴雨':
    case '大暴雨-特大暴雨':
    case '冻雨':
      main = 'rain'
      break
    case '强雷阵雨':
      main = 'thunderstorm'
      break
    case '雪':
    case '阵雪':
    case '小雪':
    case '中雪':
    case '大雪':
    case '暴雪':
    case '小雪-中雪':
    case '中雪-大雪':
    case '大雪-暴雪':
    case '雨雪天气':
    case '雨夹雪':
    case '阵雨夹雪':
    case '':
      main = 'snow'
      break
    default:
      main = 'cloudy'
      break
  }

  const iconAnimationData = await loadIconAnimationData(main)
  const iconAnimationSegments = getSegmentsByWeatherMain(main)
  const iconScale = getScale(main)

  return {
    region: {
      adcode,
      city,
      province,
    },
    main,
    tempMin: Number(cast.nighttemp),
    tempMax: Number(cast.daytemp),
    description: cast.dayweather,
    iconComponent: h(LottieView, {
      data: iconAnimationData!,
      loop: true,
      style: {
        width: '100%',
        height: '100%',
        transform: `scale(${iconScale})`,
      },
      segments: iconAnimationSegments!,
    }),
  }
}

export default loadWeatherInfo
