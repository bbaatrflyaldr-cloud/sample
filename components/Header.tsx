"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "Бидний тухай" },
  { href: "#floors", label: "Давхрууд" },
  { href: "#gallery", label: "Галерей" },
  { href: "#visit", label: "Холбоо барих" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav">
        <a href="#top" className="logo">
          Selbe<span>Mall</span>
        </a>
        <ul className={`menu ${open ? "open" : ""}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className={`burger ${open ? "active" : ""}`}
          aria-label="Цэс"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
