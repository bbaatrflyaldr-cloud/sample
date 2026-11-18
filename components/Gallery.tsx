"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "./Lightbox";

const photos = [
  { src: "/images/gallery/atrium.jpeg", w: 1783, h: 882, caption: "Төв атриум ба шилэн тааз", span: "wide" },
  { src: "/images/gallery/lobby.jpeg", w: 1784, h: 882, caption: "Үнэт эдлэлийн лобби", span: "" },
  { src: "/images/gallery/escalator.jpeg", w: 1783, h: 882, caption: "Чөлөөт хөдөлгөөн", span: "" },
  { src: "/images/gallery/corridor.jpeg", w: 1783, h: 882, caption: "Гол коридор", span: "" },
  { src: "/images/gallery/retail.jpeg", w: 1545, h: 1018, caption: "Технологи, гэр ахуйн бүс", span: "" },
  { src: "/images/gallery/retail-2.jpeg", w: 1544, h: 1018, caption: "Худалдааны орон зай", span: "" },
];

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const cur = open !== null ? photos[open] : null;

  return (
    <>
      <div className="gallery">
        {photos.map((p, i) => (
          <button
            key={p.src}
            className={`g-item ${p.span}`}
            onClick={() => setOpen(i)}
            aria-label={p.caption}
          >
            <Image
              src={p.src}
              alt={`Selbe Mall - ${p.caption}`}
              width={p.w}
              height={p.h}
              sizes="(max-width: 700px) 92vw, (max-width: 1180px) 50vw, 600px"
            />
            <span className="g-cap">{p.caption}</span>
          </button>
        ))}
      </div>

      {cur && open !== null && (
        <Lightbox
          item={{
            src: cur.src,
            alt: cur.caption,
            width: cur.w,
            height: cur.h,
            caption: cur.caption,
          }}
          onClose={() => setOpen(null)}
          onPrev={open > 0 ? () => setOpen(open - 1) : undefined}
          onNext={open < photos.length - 1 ? () => setOpen(open + 1) : undefined}
        />
      )}
    </>
  );
}
