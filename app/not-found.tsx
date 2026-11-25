import type { Metadata } from "next";
import Btn from "@/components/Btn";

export const metadata: Metadata = {
  title: "Page not found — Meridian Law",
  description: "The page you are looking for doesn't exist or has been moved.",
};

export default function NotFound() {
  return (
    <section className="error-section">
      <div className="container">
        <div className="error-content">
          <p className="error-number" data-load="badge">404</p>
          <h1 className="hero-heading is-attorney">Page Not Found</h1>
          <p className="body-text is-sage" data-load="text">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="hero-actions" data-load="media">
            <Btn href="/" label="Back Home" />
          </div>
        </div>
      </div>
    </section>
  );
}
