import { ArrowUpRight } from "./Icons";

type Props = {
  href: string;
  label: string;
  variant?: "outline" | "line";
  className?: string;
  reveal?: "0" | "2" | "4" | "6";
  load?: string;
};

/** `.button-primary` with the rolling label + diagonal arrow swap (hover timeline lives in Motion). */
export default function Btn({ href, label, variant, className, reveal, load }: Props) {
  const cls = ["button-primary", variant && `is-${variant}`, className].filter(Boolean).join(" ");
  return (
    <a className={cls} href={href} data-reveal={reveal} data-load={load}>
      <span className="button-label">
        <span className="button-text is-front">{label}</span>
        <span className="button-text is-back" aria-hidden="true">{label}</span>
      </span>
      <span className={variant === "line" ? "button-arrow-box is-forest" : "button-arrow-box"} aria-hidden="true">
        <ArrowUpRight className="button-arrow is-front" />
        <ArrowUpRight className="button-arrow is-back" />
      </span>
    </a>
  );
}
