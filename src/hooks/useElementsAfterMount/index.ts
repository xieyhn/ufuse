import { onMounted } from 'vue'

function useElementsAfterMount<T = HTMLElement>(callback: (elements: T[]) => void) {
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
