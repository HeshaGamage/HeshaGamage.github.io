import { FaGithub } from 'react-icons/fa';
import { FiExternalLink, FiYoutube } from 'react-icons/fi';
import Section from './Section';
import { projects } from '../data/resume';

const iconFor = { github: FaGithub, live: FiExternalLink, video: FiYoutube };

export default function Projects() {
  return (
    <Section id="projects" title="Selected Projects">
      <div className="flex flex-col gap-9">
        {projects.map((p) => (
          <article key={p.name}>
            <h3 className="text-[17px] font-semibold text-[var(--ink)] leading-snug">{p.name}</h3>
            <p className="mt-1 text-[13px] text-[var(--muted)]">{p.tech}</p>

            <ul className="mt-3 flex flex-col gap-2">
              {p.bullets.map((b) => (
                <li key={b.slice(0, 40)} className="flex gap-3 text-[15px] text-[var(--ink2)] leading-relaxed">
                  <span aria-hidden="true" className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-[var(--faint)]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-3 flex flex-wrap items-center gap-2">
              {p.links.map((l) => {
                const Icon = iconFor[l.kind] ?? FiExternalLink;
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[13px] !no-underline rounded-full border border-[var(--chip-bd)] bg-[var(--chip)] px-3 py-1.5 hover:border-[var(--accent)] transition-colors"
                  >
                    <Icon size={13} aria-hidden="true" />
                    {l.label}
                  </a>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
