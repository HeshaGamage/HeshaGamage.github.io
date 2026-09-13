export default function Section({ id, title, children, className = '' }) {
  return (
    <section id={id} className={`pt-10 first:pt-0 ${className}`}>
      <h2 className="section-heading">{title}</h2>
      <div className="mt-2 mb-6 h-px bg-[var(--ink)] opacity-90" />
      {children}
    </section>
  );
}
