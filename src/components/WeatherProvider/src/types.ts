export interface WeatherProviderProps {
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

/**
 * @internal
 */
export type WeatherMain = 'sunny' | 'cloudy' | 'thunderstorm' | 'snow' | 'rain'