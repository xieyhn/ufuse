<script setup lang="ts">
/* eslint-disable no-console */
import type { SplineEvent } from '@splinetool/runtime'
import type { SplineViewInstance } from 'ufuse/src/components/SplineView/types'
import SplineView from 'ufuse/src/components/SplineView/index.vue'
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
  try {
    const spline = await splineView.value!.getSpline()
    console.log(spline)
  }
  catch (err) { }
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
