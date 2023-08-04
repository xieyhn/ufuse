<script setup lang="ts">
/* eslint-disable no-console */
import type { SplineEvent } from '@splinetool/runtime'
import type { SplineViewInstance } from 'ufuse'
import { SplineView } from 'ufuse'
import { onMounted, ref } from 'vue'
import scene from './scene.splinecode?url'

const splineView = ref<SplineViewInstance>()

function handleMouseDown(event: SplineEvent) {
  if (event.target.name === 'Little')
    console.log('Little clicked!')
  if (event.target.name === 'Big')
    console.log('Big clicked!')
}

onMounted(async () => {
  const spline = await splineView.value!.getSpline()

  console.log(spline)
})
</script>

<template>
  <div
    class="demo"
    @wheel.prevent
    @touchmove.prevent
  >
    <div class="w-full h-[300px]">
      <SplineView
        ref="splineView"
        :scene="scene"
        @mouse-down="handleMouseDown"
      />
    </div>
  </div>
</template>
