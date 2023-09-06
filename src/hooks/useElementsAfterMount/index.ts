import { onMounted } from 'vue'

export function useElementsAfterMount<T = unknown>(callback: (elements: T[]) => void) {
  let elements: T[] | null = []

  const collect = (el: T | null) => {
    if (elements && el)
      elements.push(el)
  }

  onMounted(() => {
    callback(elements!)
    elements = null
  })

  return {
    collect,
  }
}

export default useElementsAfterMount
