import Section from './Section';
import { education } from '../data/resume';

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="flex flex-col gap-7">
        {education.map((e) => (
          <div key={e.degree}>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-x-6 gap-y-1">
              <h3 className="text-[16px] font-semibold text-[var(--ink)] leading-snug">{e.degree}</h3>
              <span className="text-[13px] text-[var(--muted)] shrink-0">{e.date}</span>
            </div>
            <p className="mt-0.5 text-[15px] text-[var(--accent)]">{e.place}</p>
            {e.note && <p className="mt-1.5 text-[14px] text-[var(--muted)] leading-relaxed">{e.note}</p>}
          </div>
        ))}
      </div>
    </Section>
  );
}
