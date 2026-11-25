// GITHUB_PAGES=true builds a fully static copy of the site into `out/`, served from the
// https://mirnabahaa.github.io/Meridian-Law/ sub-path. Without it, the app runs normally (npm run dev / build / start).
const isPages = process.env.GITHUB_PAGES === "true";
const basePath = isPages ? "/Meridian-Law" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  ...(isPages && {
    output: "export",
    basePath,
    trailingSlash: true,
    images: { unoptimized: true },
    distDir: "out", // static site is written here; separate from the dev server's .next folder
  }),
};
export default nextConfig;
