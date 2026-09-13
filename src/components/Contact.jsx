import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';

const channels = [
  {
    icon: <FaEnvelope size={16} />,
    label: 'Email',
    href: 'mailto:heshank92@gmail.com',
    value: 'heshank92@gmail.com',
  },
  {
    icon: <FaLinkedin size={16} />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/heshan-kavishka-655381215/',
    value: 'heshan-kavishka',
  },
  {
    icon: <FaGithub size={16} />,
    label: 'GitHub',
    href: 'https://github.com/HeshaGamage',
    value: 'HeshaGamage',
  },
];

const resumes = [
  { label: 'General', href: `${import.meta.env.BASE_URL}resume.pdf` },
  { label: 'Data Engineering', href: `${import.meta.env.BASE_URL}resume-de.pdf` },
  { label: 'Full Stack', href: `${import.meta.env.BASE_URL}resume-fs.pdf` },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-8">
        {/* Big CTA heading */}
        <div className="mb-20">
          <h2 className="text-display text-[var(--text1)] mb-6">
            Let&apos;s work<br />
            <span className="text-[var(--text6)]">together</span>
          </h2>
          <p className="text-[var(--text4)] text-lg max-w-md leading-relaxed mb-10">
            Open to new roles, collaborations, and conversations about data and tech.
          </p>
          <a
            href="mailto:heshank92@gmail.com"
            className="inline-block text-sm px-7 py-4 bg-[var(--accent)] text-[var(--on-accent)] font-semibold rounded-full hover:bg-[var(--accent-hover)] transition-colors duration-300 tracking-wide"
          >
            Send me an email
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-16 border-t border-[var(--border)] pt-16">
          {/* Left: channels */}
          <div className="flex flex-col gap-4">
            <span className="text-xs text-[var(--text6)] tracking-[0.2em] uppercase mb-4">
              Find me at
            </span>
            {channels.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-4 border-b border-[var(--border)] hover:border-[var(--text6)] transition-colors duration-300"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[var(--text6)] group-hover:text-[var(--text1)] transition-colors">
                    {link.icon}
                  </span>
                  <span className="text-sm text-[var(--text3)] tracking-wide uppercase">
                    {link.label}
                  </span>
                </div>
                <span className="text-sm text-[var(--text5)] group-hover:text-[var(--text1)] transition-colors">
                  {link.value}
                </span>
              </a>
            ))}
          </div>

          {/* Right: resumes */}
          <div className="flex flex-col gap-4">
            <span className="text-xs text-[var(--text6)] tracking-[0.2em] uppercase mb-4">
              Download a CV
            </span>
            {resumes.map((cv) => (
              <a
                key={cv.label}
                href={cv.href}
                download
                className="group flex items-center justify-between py-4 border-b border-[var(--border)] hover:border-[var(--text6)] transition-colors duration-300"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[var(--text6)] group-hover:text-[var(--text1)] transition-colors">
                    <FaFileDownload size={16} />
                  </span>
                  <span className="text-sm text-[var(--text3)] tracking-wide uppercase">
                    {cv.label}
                  </span>
                </div>
                <span className="text-sm text-[var(--text5)] group-hover:text-[var(--text1)] transition-colors">
                  PDF
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
