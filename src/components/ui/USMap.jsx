import { motion, useReducedMotion } from 'framer-motion'

// A stylized "nationwide coverage" dot-grid — not a geographic map.
const COLS = 16
const ROWS = 8
const GAP = 22
const PAD = 14

// Loose blob mask so the grid reads as a wide landmass rather than a rectangle.
function inShape(col, row) {
  const cx = (COLS - 1) / 2
  const cy = (ROWS - 1) / 2
  const nx = (col - cx) / (COLS / 2)
  const ny = (row - cy) / (ROWS / 2)
  return nx * nx * 0.7 + ny * ny * 1.15 < 1.02
}

const HIGHLIGHTS = new Set(['3-4', '6-2', '8-5', '10-3', '12-4', '13-2', '5-5'])
// Office marker (eastern side ~ Massachusetts)
const HQ = { col: 13, row: 3 }

export default function USMap({ className = '' }) {
  const reduce = useReducedMotion()
  const dots = []
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (!inShape(c, r)) continue
      dots.push({ c, r, key: `${c}-${r}` })
    }
  }
  const width = PAD * 2 + (COLS - 1) * GAP
  const height = PAD * 2 + (ROWS - 1) * GAP
  const hqx = PAD + HQ.col * GAP
  const hqy = PAD + HQ.row * GAP

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      role="img"
      aria-label="Nationwide coverage across all 50 states"
    >
      {dots.map(({ c, r, key }) => {
        const x = PAD + c * GAP
        const y = PAD + r * GAP
        const highlight = HIGHLIGHTS.has(key)
        return (
          <motion.circle
            key={key}
            cx={x}
            cy={y}
            r={highlight ? 4 : 2.6}
            style={{ fill: highlight ? 'rgb(var(--accent-500))' : 'rgba(214,225,244,0.7)' }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (c + r) * 0.015 }}
          />
        )
      })}

      {/* Pulsing HQ marker */}
      <motion.circle
        cx={hqx}
        cy={hqy}
        r={6}
        style={{ fill: 'rgb(var(--accent-500))' }}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
      />
      {!reduce && (
        <motion.circle
          cx={hqx}
          cy={hqy}
          r={6}
          fill="none"
          style={{ stroke: 'rgb(var(--accent-500))' }}
          strokeWidth={2}
          animate={{ r: [6, 18], opacity: [0.8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
        />
      )}
    </svg>
  )
}
