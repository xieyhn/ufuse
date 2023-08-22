<script setup lang="ts">
import InfiniteSwipe from 'ufuse/src/components/InfiniteSwipe/index.vue'
import { ref } from 'vue'
import { Random } from 'mockjs'

const list = ref(Array.from({ length: 10 }, () => createRowData()))

function handleNext() {
  return [createRowData()]
}

function createRowData() {
  return {
    id: Random.id(),
    label: Random.name(),
  }
}
</script>

<template>
  <div class="demo">
    <InfiniteSwipe
      v-model="list"
      class="h-[300px]"
      :on-more="handleNext"
    >
      <div v-for="item in list" :key="item.id" class="h-[30px]">
        {{ item.label }}
      </div>
    </InfiniteSwipe>
  </div>
</template>
