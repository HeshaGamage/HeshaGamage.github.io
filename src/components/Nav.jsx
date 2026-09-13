import { useEffect, useState } from 'react';
import { FiMoon, FiSun, FiMenu, FiX, FiPrinter } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { profile, sections } from '../data/resume';

export default function Nav() {
  const { dark, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  // Close the contents menu on Escape, matching normal dialog behaviour.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="print-hidden sticky top-0 z-50 bg-[var(--desk)]/85 backdrop-blur-md border-b border-[var(--rule)]">
      <nav className="max-w-3xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="text-sm font-bold tracking-[0.14em] uppercase !text-[var(--ink)] !no-underline"
        >
          {profile.name}
        </a>

        <div className="flex items-center gap-2">
          <button
            onClick={() => window.print()}
            aria-label="Print or save as PDF"
            title="Print / save as PDF"
            className="hidden sm:grid place-items-center w-10 h-10 rounded-full border border-[var(--rule)] bg-[var(--paper)] text-[var(--ink2)] hover:border-[var(--faint)] transition-colors"
          >
            <FiPrinter size={16} />
          </button>

          <button
            onClick={toggle}
            aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
            title={dark ? 'Light theme' : 'Dark theme'}
            className="grid place-items-center w-10 h-10 rounded-full border border-[var(--rule)] bg-[var(--paper)] text-[var(--ink2)] hover:border-[var(--faint)] transition-colors"
          >
            {dark ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Contents"
            aria-expanded={open}
            title="Contents"
            className="grid place-items-center w-10 h-10 rounded-full border border-[var(--rule)] bg-[var(--paper)] text-[var(--ink2)] hover:border-[var(--faint)] transition-colors"
          >
            {open ? <FiX size={17} /> : <FiMenu size={17} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-[var(--rule)] bg-[var(--paper)]">
          <div className="max-w-3xl mx-auto px-6 sm:px-8 py-5">
            <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[var(--faint)] mb-3">
              Contents
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-8">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-sm !text-[var(--ink2)] hover:!text-[var(--accent)] !no-underline border-b border-[var(--rule2)]"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
