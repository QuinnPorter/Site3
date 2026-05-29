import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'

export default function Counter({ value, prefix = '', suffix = '', format, duration = 1.8, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(latest),
    })
    return () => controls.stop()
  }, [inView, value, duration])

  const rounded = Math.round(display)
  const formatted = format === 'year' ? String(rounded) : rounded.toLocaleString('en-US')

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}
