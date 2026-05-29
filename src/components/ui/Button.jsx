import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'

const variants = {
  primary: 'bg-teal-500 text-white shadow-soft hover:bg-teal-600 hover:-translate-y-0.5 hover:shadow-glow',
  secondary: 'border border-navy-200 bg-white text-navy-900 hover:border-teal-400 hover:text-teal-700 hover:-translate-y-0.5',
  ghost: 'text-navy-700 hover:text-teal-700 hover:bg-teal-500/10',
  light: 'bg-white/10 text-white border border-white/25 backdrop-blur hover:bg-white/20 hover:-translate-y-0.5',
  white: 'bg-white text-navy-900 shadow-soft hover:-translate-y-0.5 hover:shadow-glow',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  className = '',
  ...props
}) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
        {children}
      </a>
    )
  }
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }
  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
