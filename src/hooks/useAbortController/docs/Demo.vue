<script setup lang="ts">
import { ref, watch } from 'vue'
import useAbortController from 'ufuse/hooks/useAbortController'

const keyword = ref('')
const ac = useAbortController()

function doSomething(keyword: string) {
  return new Promise<string>((resolve) => {
    window.setTimeout(
      () => resolve(`${keyword} responded.`),
      // 模拟一个异步任务
      Math.random() * 1000,
    )
  })
}

watch(keyword, () => {
  // 在每次调用 consume 方法时，都会创建一个新的 signal
  // 且会取消（abort）上一次的 signal
  const { signal } = ac.consume()

  doSomething(keyword.value)
    .then((result) => {
      // 当异步逻辑完成时，检查 signal 是否已经被取消
      if (signal.aborted) {
        // eslint-disable-next-line no-console
        console.log('aborted')
        return
      }
      // eslint-disable-next-line no-console
      console.log(result)
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
