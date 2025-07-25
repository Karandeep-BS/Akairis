'use client'

import { motion, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"

export default function ScrollFade({ children, delay = 0, duration = 0.8 }) {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 })
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  )
}
