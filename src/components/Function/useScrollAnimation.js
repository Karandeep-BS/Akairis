import { useEffect, useRef } from 'react'

export function useScrollAnimation({
  animationClass = 'animate-fade-in',
  duration = '0.7s',
} = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add(animationClass)
          node.style.transitionDuration = duration
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [animationClass, duration])

  return ref
}
