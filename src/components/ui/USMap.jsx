import { motion, useReducedMotion } from 'framer-motion'
import { US_MAP_PATH, US_MAP_VIEWBOX, MA_PIN, COVERAGE_DOTS } from './usMapPath.js'

// Accurate Albers-USA silhouette (all 50 states incl. AK/HI insets, no internal
// borders) with the Massachusetts office marked. Path data in ./usMapPath.js.
export default function USMap({ className = '' }) {
  const reduce = useReducedMotion()

  return (
    <motion.svg
      viewBox={US_MAP_VIEWBOX}
      className={className}
      role="img"
      aria-label="Map of the United States — nationwide service, with the office in Massachusetts marked"
      initial={reduce ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <path
        d={US_MAP_PATH}
        style={{ fill: 'rgb(var(--accent-500) / 0.15)', stroke: 'rgb(var(--accent-500))' }}
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* Faint coverage dots — decorative "presence across the country" scatter. */}
      <g style={{ fill: 'rgb(var(--accent-500) / 0.35)' }} aria-hidden="true">
        {COVERAGE_DOTS.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r="3.5" />
        ))}
      </g>

      {/* Massachusetts office */}
      <circle cx={MA_PIN.x} cy={MA_PIN.y} r="12" style={{ fill: 'rgb(var(--accent-500) / 0.22)' }} />
      <circle
        cx={MA_PIN.x}
        cy={MA_PIN.y}
        r="5"
        stroke="#ffffff"
        strokeWidth="1.5"
        style={{ fill: 'rgb(var(--accent-300))' }}
      />
    </motion.svg>
  )
}
