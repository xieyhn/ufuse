<script setup lang="ts">
import { ref, watch } from 'vue'
import useAbortController from 'ufuse/hooks/useAbortController'
import axios, { isCancel } from 'axios'

const keyword = ref('')
const ac = useAbortController()

watch(keyword, () => {
  axios.get('https://cdn.bootcdn.net/ajax/libs/vue/3.2.47/vue.global.min.js', {
    params: {
      keyword: keyword.value,
    },
    // 当调用 consume 方法时，会取消上一次请求
    signal: ac.consume().signal,
  })
    .then((result) => {
      // eslint-disable-next-line no-console
      console.log({ result })
    })
    .catch((err) => {
      if (isCancel(err))
        // eslint-disable-next-line no-console
        console.log('aborted')
    })
})
</script>

<template>
  <div class="demo">
    <input
      v-model="keyword"
      class="w-full"
      type="text"
      placeholder="这里输入内容"
    >
  </div>
</template>
