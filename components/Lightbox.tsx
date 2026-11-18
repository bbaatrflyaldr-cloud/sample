"use client";

import Image from "next/image";
import { useEffect } from "react";

export type LightboxItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export default function Lightbox({
  item,
  onClose,
  onPrev,
  onNext,
}: {
  item: LightboxItem;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev?.();
      if (e.key === "ArrowRight") onNext?.();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" onClick={onClose}>
      <button className="lb-close" aria-label="Хаах" onClick={onClose}>
        ×
      </button>
      {onPrev && (
        <button
          className="lb-nav lb-prev"
          aria-label="Өмнөх"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
        >
          ‹
        </button>
      )}
      {onNext && (
        <button
          className="lb-nav lb-next"
          aria-label="Дараах"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
        >
          ›
        </button>
      )}
      <figure onClick={(e) => e.stopPropagation()}>
        <Image
          src={item.src}
          alt={item.alt}
          width={item.width}
          height={item.height}
          sizes="92vw"
          className="lb-img"
          priority
        />
        {item.caption && <figcaption>{item.caption}</figcaption>}
      </figure>
    </div>
  );
}
