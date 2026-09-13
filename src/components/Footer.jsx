import { profile } from '../data/resume';

export default function Footer() {
  return (
    <footer className="mt-12 pt-6 border-t border-[var(--rule)] flex flex-col sm:flex-row items-center justify-between gap-2">
      <span className="text-[12px] text-[var(--faint)]">
        © {new Date().getFullYear()} {profile.name}
      </span>
      <span className="print-hidden text-[12px] text-[var(--faint)]">
        Built with React &amp; Tailwind · Deployed on GitHub Pages
      </span>
    </footer>
  );
}
