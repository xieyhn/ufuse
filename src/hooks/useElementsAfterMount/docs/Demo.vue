<script setup lang="ts">
import useElementsAfterMount from 'ufuse/src/hooks/useElementsAfterMount'
import gsap from 'gsap'

const { collect } = useElementsAfterMount<HTMLElement>((elements) => {
  gsap.fromTo(
    elements,
    { opacity: 0, x: 30 },
    { opacity: 1, x: 0, stagger: 0.2, duration: 1 },
  )
})
</script>

<template>
  <div class="demo">
    <div class="flex items-center">
      <span :ref="collect">2023</span>
      <span :ref="collect">&nbsp;|&nbsp;</span>
      <span :ref="collect">08</span>
      <span :ref="collect">&nbsp;|&nbsp;</span>
      <span :ref="collect">18</span>
    </div>
  </div>
</template>
