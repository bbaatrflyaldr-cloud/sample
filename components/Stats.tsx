"use client";

import { useEffect, useRef, useState } from "react";

type Stat = { value: number; label: string; suffix?: string };

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const dur = 1400;
        const tick = (t: number) => {
          const p = Math.min((t - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.round(value * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <b ref={ref}>
      {n.toLocaleString("en-US")}
      {suffix}
    </b>
  );
}

export default function Stats({ items }: { items: Stat[] }) {
  return (
    <div className="stats">
      <div className="container stats-grid">
        {items.map((s) => (
          <div className="stat" key={s.label}>
            <Counter value={s.value} suffix={s.suffix} />
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
