<script setup lang="ts">
import InfiniteSwipe from 'ufuse/src/components/InfiniteSwipe/index.vue'
import { ref } from 'vue'
import Chance from 'chance'

const chance = new Chance()
const list = ref(Array.from({ length: 10 }, () => createRowData()))
const list2 = ref(Array.from({ length: 10 }, () => createRowData()))

function handleNext() {
  return [createRowData()]
}

function createRowData() {
  return {
    id: chance.string({ length: 5 }),
    label: chance.name(),
  }
}
</script>

<template>
  <div class="demo flex">
    <InfiniteSwipe
      v-model="list"
      class="flex-1 h-[300px]"
      :on-more="handleNext"
    >
      <div v-for="item in list" :key="item.id" class="h-[30px] leading-[30px]">
        {{ item.label }}
      </div>
    </InfiniteSwipe>
    <InfiniteSwipe
      v-model="list2"
      :interval="1000"
      class="flex-1 h-[300px]"
      :on-more="handleNext"
    >
      <div v-for="item in list2" :key="item.id" class="h-[30px] leading-[30px]">
        {{ item.label }}
      </div>
    </InfiniteSwipe>
  </div>
</template>
