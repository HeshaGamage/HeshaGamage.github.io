import Section from './Section';
import { skills } from '../data/resume';

export default function Skills() {
  return (
    <Section id="skills" title="Technical Skills">
      <dl className="flex flex-col">
        {skills.map((row) => (
          <div
            key={row.group}
            className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-x-6 gap-y-1 py-3 border-b border-[var(--rule2)] last:border-b-0"
          >
            <dt className="text-[13px] font-semibold text-[var(--ink)] tracking-wide">{row.group}</dt>
            <dd className="text-[15px] text-[var(--ink2)] leading-relaxed">{row.items}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
