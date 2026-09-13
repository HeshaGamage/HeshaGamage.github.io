import Section from './Section';
import { summary } from '../data/resume';

export default function Summary() {
  return (
    <Section id="summary" title="Professional Summary">
      <div className="flex flex-col gap-3">
        {summary.map((para) => (
          <p key={para.slice(0, 40)} className="text-[15px] text-[var(--ink2)] leading-relaxed">
            {para}
          </p>
        ))}
      </div>
    </Section>
  );
}
