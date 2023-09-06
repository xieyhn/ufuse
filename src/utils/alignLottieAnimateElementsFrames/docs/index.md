<script setup lang="ts">
import Demo1 from './Demo1.vue'
</script>

# alignLottieAnimateElementsFrames <Badge type="danger">实验中</Badge>

通常，一个 Lottie 动画会包含很多动画元素，每个元素动画需要的帧数可能不同，又若实际应用中元素动画需要循环播放，就会使得一个 Lottie 动画的总帧数需要是所有循环动画元素帧数的最小公倍数，这样增加了设计师的调试工作量，也增加了 Lottie 动画文件的体积。

此方法通过在代码中进一步调整导出的 Lottie JSON 内容来将这项帧数对齐的工作程序化，也保证了 Lottie 动画的体积。

## Demo1

这个例子演示了对齐循环帧数是 30/40/60 的三个动画元素的帧数，最终将动画的帧数修改为 120。

::: details 点击展开源 JSON 数据
<<< ./demo1.json
:::

<<< ./Demo1.vue

<Demo1 />

## 实验

目前此功能还在实验中，**不能应用在生产环境中**。
