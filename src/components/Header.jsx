import { FiMapPin, FiPhone, FiMail, FiGlobe } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile } from '../data/resume';

const contacts = [
  { Icon: FiMapPin, text: profile.location },
  { Icon: FiPhone, text: profile.phone, href: profile.phoneHref },
  { Icon: FiMail, text: profile.email, href: `mailto:${profile.email}` },
  { Icon: FiGlobe, text: profile.site, href: profile.siteHref },
];

const socials = [
  { Icon: FaGithub, label: 'GitHub', href: profile.github },
  { Icon: FaLinkedin, label: 'LinkedIn', href: profile.linkedin },
];

export default function Header() {
  return (
    <div id="top" className="text-center pb-8 border-b border-[var(--rule)]">
      <h1 className="font-serif-display text-[var(--ink)] text-[2.5rem] sm:text-5xl">
        {profile.name}
      </h1>

      <p className="mt-2 text-sm text-[var(--muted)]">{profile.title}</p>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
        {contacts.map(({ Icon, text, href }) => (
          <span key={text} className="inline-flex items-center gap-2">
            <Icon size={14} className="text-[var(--faint)] shrink-0" aria-hidden="true" />
            {href ? (
              <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                {text}
              </a>
            ) : (
              <span className="text-[var(--ink2)]">{text}</span>
            )}
          </span>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-sm">
        {socials.map(({ Icon, label, href }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
            <Icon size={15} className="text-[var(--faint)]" aria-hidden="true" />
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}
