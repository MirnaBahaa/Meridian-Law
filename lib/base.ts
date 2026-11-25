/**
 * Sub-path the site is served from. Empty for local development; set to "/Meridian-Law" when building for
 * GitHub Pages (project sites live at https://<user>.github.io/<repo>/). Configured in next.config.mjs.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a root-relative link ("/about", "/#faq") with the base path. Anything else is returned unchanged. */
export function withBase<T extends string | undefined>(href: T): T {
  if (!BASE_PATH || typeof href !== "string" || !href.startsWith("/") || href.startsWith("//")) return href;
  // Idempotent: components that receive an already-prefixed href (e.g. <Btn href>) don't prefix it twice.
  if (href === BASE_PATH || href.startsWith(BASE_PATH + "/") || href.startsWith(BASE_PATH + "#")) return href;
  return (BASE_PATH + (href === "/" ? "/" : href)) as T;
}
