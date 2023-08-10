<script setup lang="ts">
import Demo from './Demo.vue'
</script>

# WeatherProvider

WeatherProvider 是一个提供指定地区天气信息的组件。

::: tip
需要安装以下依赖：

+ lottie-web
:::

## 使用

<<< ./Demo.vue

## 预览

<ClientOnly>
  <Demo />
</ClientOnly>

## API

<<< ./src/types.ts

## 默认插槽参数

| 名称          | 类型    | 描述                         |
| ------------- | ------- | ---------------------------- |
| loading       | boolean | 加载中，未加载完毕也未出错时 |
| error         | boolean | 已发生错误                   |
| tempMin       | number  | 最低温，如 20                |
| tempMax       | number  | 最高温，如 30                |
| description   | string  | 天气描述，如 晴、多云...     |
| iconComponent | VNode   | 天气图标组件                 |

