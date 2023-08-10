<script setup lang="ts">
import { AnimateDigits } from 'ufuse'
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
      <AnimateDigits :n="value" />
    </p>
    <p>
      <AnimateDigits :n="value" :fraction-digits="2" />
    </p>
    <p>
      <AnimateDigits :n="value" :fraction-digits="2" suffix="%" />
    </p>
    <p>
      <AnimateDigits :n="value" :fraction-digits="1" disabled />
    </p>
  </div>
</template>
