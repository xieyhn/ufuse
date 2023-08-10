<script setup lang="ts">
import { h, ref } from 'vue'
import { LottieView } from 'ufuse'
import type { WeatherMain, WeatherProviderProps } from './types'
import { getSegmentsByWeatherMain, loadIconAnimationData } from './resources'

const props = defineProps<WeatherProviderProps>()

async function fetchWeatherInfo(key: string, adcode?: string): Promise<any> {
  if (typeof adcode === 'undefined')
    adcode = await fetch(`https://restapi.amap.com/v3/ip?key=${key}`).then<any>(res => res.json()).then(res => res.adcode)

  return await fetch(`https://restapi.amap.com/v3/weather/weatherInfo?key=${key}&city=${adcode}&extensions=all`)
    .then(res => res.json())
}

const loaded = ref(false)
const error = ref(false)
const main = ref<WeatherMain | null>(null)
const tempMin = ref(0)
const tempMax = ref(0)
const description = ref('')
const iconAnimationData = ref<any>()
const iconAnimationSegments = ref<[number, number] | null>(null)

fetchWeatherInfo(props.amapKey, props.adcode)
  .then(async (result) => {
    if (result?.info !== 'OK')
      throw new Error('Failed to fetch weather info')
    const cast = result?.forecasts?.[0]?.casts?.[0]

    if (!cast)
      throw new Error('Failed to fetch weather info')

    switch (cast.dayweather) {
      case '晴':
        main.value = 'sunny'
        break
      case '少云':
      case '晴间多云':
      case '多云':
        main.value = 'cloudy'
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
        main.value = 'rain'
        break
      case '强雷阵雨':
        main.value = 'thunderstorm'
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
        main.value = 'snow'
        break
      default:
        main.value = 'cloudy'
        break
    }

    tempMin.value = Number(cast.nighttemp)
    tempMax.value = Number(cast.daytemp)
    description.value = cast.dayweather
    iconAnimationData.value = await loadIconAnimationData(main.value)
    iconAnimationSegments.value = getSegmentsByWeatherMain(main.value)

    loaded.value = true
  })
  .catch((err) => {
    console.warn(`[WeatherProvider] ${err}`)
    error.value = true
  })
</script>

<template>
  <slot
    :loading="!loaded && !error"
    :error="error"
    :temp-min="tempMin"
    :temp-max="tempMax"
    :description="description"
    :icon-component="
      loaded
        ? h(LottieView, {
          data: iconAnimationData!,
          loop: true,
          style: { width: '100%', height: '100%' },
          segments: iconAnimationSegments!,
        })
        : null
    "
  />
</template>
