import { FiMail, FiDownload } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Section from './Section';
import { profile } from '../data/resume';

const resumes = [
  { label: 'CV — General', href: `${import.meta.env.BASE_URL}resume.pdf` },
  { label: 'CV — Data Engineering', href: `${import.meta.env.BASE_URL}resume-de.pdf` },
  { label: 'CV — Full Stack', href: `${import.meta.env.BASE_URL}resume-fs.pdf` },
];

export default function Contact() {
  return (
    <Section id="contact" title="Get in Touch">
      <p className="text-[15px] text-[var(--ink2)] leading-relaxed max-w-xl">
        Open to internships, graduate roles, and collaborations in data engineering, machine
        learning, and full-stack development. The fastest way to reach me is email.
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 text-sm font-medium !no-underline rounded-full bg-[var(--accent)] px-5 py-2.5 !text-white hover:opacity-90 transition-opacity"
        >
          <FiMail size={15} aria-hidden="true" />
          {profile.email}
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm !no-underline rounded-full border border-[var(--chip-bd)] bg-[var(--chip)] px-5 py-2.5 !text-[var(--ink2)] hover:border-[var(--accent)] transition-colors"
        >
          <FaGithub size={15} aria-hidden="true" />
          GitHub
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm !no-underline rounded-full border border-[var(--chip-bd)] bg-[var(--chip)] px-5 py-2.5 !text-[var(--ink2)] hover:border-[var(--accent)] transition-colors"
        >
          <FaLinkedin size={15} aria-hidden="true" />
          LinkedIn
        </a>
      </div>

      <div className="print-hidden mt-8">
        <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[var(--faint)] mb-3">
          Download a CV
        </p>
        <div className="flex flex-wrap gap-3">
          {resumes.map((cv) => (
            <a
              key={cv.label}
              href={cv.href}
              download
              className="inline-flex items-center gap-2 text-[13px] !no-underline rounded-full border border-[var(--chip-bd)] bg-[var(--chip)] px-4 py-2 !text-[var(--ink2)] hover:border-[var(--accent)] transition-colors"
            >
              <FiDownload size={13} aria-hidden="true" />
              {cv.label}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
