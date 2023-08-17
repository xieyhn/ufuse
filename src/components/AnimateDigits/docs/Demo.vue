<script setup lang="ts">
import AnimateDigits from 'ufuse/src/components/AnimateDigits/index.vue'
import formatNumber from 'ufuse/src/utils/formatNumber'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const value = ref(23810)
let timer: number

function update() {
  value.value = Math.random() * 10000 / 3
}

onMounted(() => {
  timer = window.setInterval(update, 2000)
})

onBeforeUnmount(() => {
  if (timer)
    window.clearInterval(timer)
})
</script>

<template>
  <div class="demo">
    <p>
      <AnimateDigits :value="value" />
    </p>
    <p>
      <AnimateDigits :value="value" once />
    </p>
    <p>
      <AnimateDigits :value="value" :formatter="(v: number) => formatNumber(v, 2)" />
    </p>
    <p>
      <AnimateDigits :value="value" :formatter="(v: number) => `${formatNumber(v, 2)}%`" />
    </p>
    <p>
      <AnimateDigits :value="value" disabled />
    </p>
  </div>
</template>
