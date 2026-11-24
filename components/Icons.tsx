import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement> & { sw?: number };

function Icon({ d, sw = 2, ...rest }: P & { d: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" {...rest}>
      <path d={d} stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const ArrowUpRight = (p: P) => <Icon d="M7 17L17 7M17 7H9M17 7V15" {...p} />;
export const ArrowRight = (p: P) => <Icon d="M4 12H20M20 12L14 6M20 12L14 18" {...p} />;
export const ArrowLeft = (p: P) => <Icon d="M20 12H4M4 12L10 6M4 12L10 18" {...p} />;
export const OrbitPrev = (p: P) => <Icon d="M19 12H5M5 12L11 6M5 12L11 18" sw={1.75} {...p} />;
export const OrbitNext = (p: P) => <Icon d="M5 12H19M19 12L13 6M19 12L13 18" sw={1.75} {...p} />;

const STAT_PATHS = {
  trophy: "M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4zM7 6H4a3 3 0 0 0 3 4M17 6h3a3 3 0 0 1-3 4",
  people: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  scales: "M12 3v18M7 21h10M4 7h16M2 15l3-8 3 8a3 3 0 0 1-6 0zM16 15l3-8 3 8a3 3 0 0 1-6 0z",
  headset: "M3 15v-3a9 9 0 0 1 18 0v3M21 13v4a2 2 0 0 1-2 2h-1v-6h3zM3 13v4a2 2 0 0 0 2 2h1v-6H3zM18 19a3 3 0 0 1-3 3h-2",
};
export const StatIcon = ({ name, ...p }: P & { name: keyof typeof STAT_PATHS }) => (
  <Icon d={STAT_PATHS[name]} sw={1.5} {...p} />
);
