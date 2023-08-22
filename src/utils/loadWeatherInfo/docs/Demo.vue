<script setup lang="ts">
import { ref } from 'vue'
import loadWeatherInfo from 'ufuse/src/utils/loadWeatherInfo'
import type { WeatherInfo } from 'ufuse/src/utils/loadWeatherInfo/types'

const loading = ref(true)
const error = ref(false)
const weatherInfo = ref<WeatherInfo | null>(null)

loadWeatherInfo({
  amapKey: 'b65e501546fdd93bbda4581b3fc5fd13',
}).then((info) => {
  loading.value = false
  weatherInfo.value = info
}).catch(() => {
  loading.value = false
  error.value = true
})
</script>

<template>
  <div class="demo">
    <div v-if="!loading && !error" class="flex items-center">
      <div class="w-6 h-6 mr-2">
        <component :is="weatherInfo!.iconComponent" />
      </div>
      <p>
        {{ weatherInfo!.region.city }}
      </p>
      <span>&nbsp;</span>
      <p>{{ weatherInfo!.description }}</p>
      <span>&nbsp;</span>
      <p>{{ weatherInfo!.tempMin }} ~ {{ weatherInfo!.tempMax }}</p>
    </div>
    <span v-else-if="loading">Loading...</span>
    <span v-else-if="error">Error!</span>
  </div>
</template>
