/**
 * @param {Element} element
 * @param {IntersectionObserverCallback} func
 */
export const useObserver = (element: Element, func: IntersectionObserverCallback) => {
  const observer = new IntersectionObserver(func)
  observer.observe(element)
}
/**
* @param {Element} element
* @param {?IntersectionObserverInit | undefined} options
*/
export const useAsyncObserver = (element: Element, options?: IntersectionObserverInit | undefined) => {
  return new Promise<void>((resolve) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          resolve()
        }
      })
    }, options)
    observer.observe(element)
  })
}