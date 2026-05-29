export default function Section({ id, children, className = '', containerClassName = '' }) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <div className={`container-x ${containerClassName}`}>{children}</div>
    </section>
  )
}

export function SectionHeader({ eyebrow, title, subtitle, align = 'center', light = false }) {
  const alignment = align === 'center' ? 'mx-auto text-center items-center' : 'text-left items-start'
  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={`text-3xl font-bold sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] ${light ? 'text-white' : 'text-navy-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${light ? 'text-navy-100' : 'text-navy-500'}`}>{subtitle}</p>
      )}
    </div>
  )
}
