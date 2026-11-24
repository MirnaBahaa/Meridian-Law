"use client";

import { useEffect, useRef, useState } from "react";
import { VIDEO } from "@/lib/data";

export default function AboutVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    // React does not serialise `muted` during SSR, so set it before asking to autoplay.
    v.muted = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      v.pause();
      setPlaying(false);
      return;
    }
    v.play().catch(() => setPlaying(false));
  }, []);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="bento-media is-video">
      <video ref={ref} className="bento-video" poster={VIDEO.poster} autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
        <source src={VIDEO.mp4} type="video/mp4" />
        <source src={VIDEO.webm} type="video/webm" />
      </video>
      <button type="button" className="video-toggle" onClick={toggle} aria-label={playing ? "Pause video" : "Play video"}>
        {playing ? (
          <span className="video-pause-icon" aria-hidden="true">
            <span className="video-pause-bar" />
            <span className="video-pause-bar" />
          </span>
        ) : (
          <span className="video-play-icon" aria-hidden="true" />
        )}
      </button>
    </div>
  );
}
