/** Meridian Law brand mark: a globe with a meridian line and a scales beam. */
export function LogoMark({ className, size = 34 }: { className?: string; size?: number }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 34 34" fill="none" aria-hidden="true" focusable="false">
      <circle cx="17" cy="17" r="15" stroke="#C56A45" strokeWidth="2.2" />
      <path d="M17 2c-5 4.2-7.5 9.2-7.5 15S12 27.8 17 32" stroke="#C56A45" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M17 2c5 4.2 7.5 9.2 7.5 15S22 27.8 17 32" stroke="#C56A45" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M17 2v30M3.5 12h27" stroke="#C56A45" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export const BRAND = "Meridian Law";
