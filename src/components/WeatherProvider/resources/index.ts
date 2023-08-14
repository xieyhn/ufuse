import loadLottieJSON from 'ufuse/src/utils/loadLottieJSON'
import type { WeatherMain } from '../types'

export function loadIconAnimationData(main: WeatherMain) {
  switch (main) {
    case 'cloudy':
      return loadLottieJSON(import.meta.glob('./cloudy/**/*', { eager: true }))
    case 'rain':
      return loadLottieJSON(import.meta.glob('./rain/**/*', { eager: true }))
    case 'snow':
      return loadLottieJSON(import.meta.glob('./snow/**/*', { eager: true }))
    case 'sunny':
      return loadLottieJSON(import.meta.glob('./sunny/**/*', { eager: true }))
    case 'thunderstorm':
      return loadLottieJSON(import.meta.glob('./thunderstorm/**/*', { eager: true }))
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
