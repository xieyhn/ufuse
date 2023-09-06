export function useAbortController() {
  let oldAbortController: AbortController | null = null

  const ac = {
    consume() {
      if (oldAbortController)
        oldAbortController.abort()

      return (oldAbortController = new window.AbortController())
    },
  }

  return ac
}

export default useAbortController
