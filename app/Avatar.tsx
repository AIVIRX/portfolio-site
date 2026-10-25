"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const messages = [
  "It worked on my machine.",
  "One more tiny adjustment.",
  "Currently overthinking this pixel.",
  "Powered by coffee and Cmd+Z.",
  "Yes, the spacing is intentional.",
  "Just one more side project…",
];

export default function Avatar() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setIndex((current) => (current + 1) % messages.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <div className="avatar-scene">
      <div className="hero-avatar">
        <Image src="/images/maicol-portrait.png" alt="Illustrated portrait of Maicol with curly hair and glasses" width={140} height={140} priority />
      </div>
      <button
        className="avatar-bubble"
        type="button"
        title="Click for another thought"
        aria-label={`${messages[index]} Click for another thought.`}
        onClick={() => setIndex((current) => (current + 1) % messages.length)}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <span key={index} className="bubble-message">{messages[index]}</span>
      </button>
    </div>
  );
}
