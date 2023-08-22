import type { VNode } from 'vue'

export interface LoadWeatherInfoOptions {
  /**
   * 高德地图的key
   */
  amapKey: string
  /**
   * 高德地图识别的 adcode
   * @default '页面打开时 IP 对应的城市'
   */
  adcode?: string
}

export type WeatherMain = 'sunny' | 'cloudy' | 'thunderstorm' | 'snow' | 'rain'

export interface WeatherInfo {
  region: {
    adcode: string
    /**
     * 城市名，如：'武汉市'
     */
    city: string
    /**
     * 省份名，如：'湖北省'
     */
    province: string
  }
  main: WeatherMain
  /**
   * 最低温度，单位：摄氏度
   */
  tempMin: number
  /**
   * 最高温度，单位：摄氏度
   */
  tempMax: number
  /**
   * 天气描述，如：'晴'
   */
  description: string
  /**
   * 天气图标组件
   */
  iconComponent: VNode
}
