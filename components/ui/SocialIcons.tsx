/** Simple monochrome social glyphs (lucide-react has no brand icons). 24×24, currentColor. */
type IconProps = { className?: string };

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.9v3h2.6V21h3Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TikTokIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M16.6 3c.3 2.2 1.6 3.6 3.9 3.8v2.6c-1.4.1-2.7-.3-3.9-1.1v5.6c0 3.4-2.4 5.6-5.4 5.6-3.2 0-5.6-2.6-5.2-5.9.4-2.7 2.8-4.6 5.9-4.3v2.7c-1.5-.3-3 .5-3.2 2-.2 1.6 1 2.9 2.5 2.9 1.4 0 2.5-1 2.5-2.9V3h2.9Z" />
    </svg>
  );
}

export function ThreadsIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M17.6 8.4C16.8 5.6 14.7 4 12 4 7.9 4 5.5 7 5.5 12s2.4 8 6.5 8c3.2 0 5.7-1.9 5.7-4.7 0-2.6-2.1-4-5-4-2.2 0-3.6 1.1-3.6 2.6 0 1.4 1.2 2.3 2.8 2.3 2.6 0 3.8-2.2 3.4-6" />
    </svg>
  );
}
