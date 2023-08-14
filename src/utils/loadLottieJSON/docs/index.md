# loadLottieJSON

loadLottieJSON 会加载一个 Lottie JSON 文件，并将 JSON 文件使用到的静态资源相对路径转换为绝对路径，返回一个**深克隆**后的对象。

## 使用示例

设计师提供 Lottie 动画资源时，会将动画资源和 JSON 文件放在同一个目录下，如：

+ path
  + data.json，动画 JSON 文件，名称可自定义，需保证是当前目录唯一的 json 后缀文件
  + images/*.{png,jpg} 如果动画有图片资源，会存在该目录
  + 其它资源

```ts
import loadLottieJSON from 'ufuse/src/utils/loadLottieJSON'

const json = loadLottieJSON(
  // vite 提供的 import.meta.glob 方法，用于获取当前目录下的所有文件
  // 详见 https://cn.vitejs.dev/guide/features.html#glob-import
  import.meta.glob('path/**/*', { eager: true })
)

// 修改 json 中的属性不会影响原始数据
json.a.b = 'c'
```