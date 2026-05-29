export default function Card({ children, className = '', hover = false, ...props }) {
  return (
    <div
      className={`card-surface ${hover ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-glow' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
