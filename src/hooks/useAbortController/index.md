<script setup lang="ts">
import Demo from './Demo.vue'
import AxiosDemo from './AxiosDemo.vue'
</script>

# useAbortController

useAbortController 可以用在需要取消之前的请求或放弃之前的操作的场景。

## 使用

### Demo - 丢弃之前的结果

<<< ./Demo.vue

<ClientOnly>
  <Demo />
</ClientOnly>

### Demo - 取消之前的请求

<<< ./AxiosDemo.vue

<ClientOnly>
  <AxiosDemo />
</ClientOnly>