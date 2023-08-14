<script setup lang="ts">
import WeatherProvider from 'ufuse/src/components/WeatherProvider/index.vue'
</script>

<template>
  <div class="demo">
    <WeatherProvider
      v-slot="{ loading, error, tempMax, tempMin, description, iconComponent }"
      amap-key="b65e501546fdd93bbda4581b3fc5fd13"
    >
      <div v-if="!loading && !error" class="flex items-center">
        <div class="w-14 h-14">
          <component :is="iconComponent!" />
        </div>
        <p>{{ description }}</p>
        <span>&nbsp;</span>
        <p>{{ tempMin }} ~ {{ tempMax }}</p>
      </div>
      <span v-else-if="loading">Loading...</span>
      <span v-else-if="error">Error!</span>
    </WeatherProvider>
  </div>
</template>
