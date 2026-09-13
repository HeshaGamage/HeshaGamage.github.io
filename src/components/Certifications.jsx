import Section from './Section';
import { certifications, additional } from '../data/resume';

export default function Certifications() {
  return (
    <>
      <Section id="certifications" title="Certifications & Courses">
        <div className="flex flex-col gap-5">
          {certifications.map((c) => (
            <div key={c.name}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-x-6 gap-y-1">
                <h3 className="text-[15px] font-semibold text-[var(--ink)] leading-snug">
                  {c.name} <span className="font-normal text-[var(--muted)]">· {c.issuer}</span>
                </h3>
                <span className="text-[13px] text-[var(--muted)] shrink-0">{c.date}</span>
              </div>
              {c.note && <p className="mt-1 text-[14px] text-[var(--muted)] leading-relaxed">{c.note}</p>}
            </div>
          ))}
        </div>
      </Section>

      <Section id="additional" title="Additional Information">
        <div className="flex flex-col gap-2">
          {additional.map((a) => (
            <p key={a.label} className="text-[15px] text-[var(--ink2)] leading-relaxed">
              <span className="font-semibold text-[var(--ink)]">{a.label}:</span> {a.value}
            </p>
          ))}
        </div>
      </Section>
    </>
  );
}
