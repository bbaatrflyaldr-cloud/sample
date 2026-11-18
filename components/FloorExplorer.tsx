"use client";

import Image from "next/image";
import { useState } from "react";
import { floors } from "@/data/floors";
import Lightbox from "./Lightbox";

const fmt = (n: number) =>
  n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function FloorExplorer() {
  const [activeId, setActiveId] = useState(floors[0].id);
  const [zoom, setZoom] = useState(false);
  const idx = floors.findIndex((f) => f.id === activeId);
  const floor = floors[idx];

  return (
    <div className="floors">
      <div className="floor-tabs" role="tablist" aria-label="Давхар сонгох">
        {floors.map((f) => (
          <button
            key={f.id}
            role="tab"
            aria-selected={f.id === activeId}
            className={`floor-tab ${f.id === activeId ? "active" : ""}`}
            onClick={() => setActiveId(f.id)}
          >
            {f.short}
          </button>
        ))}
      </div>

      <div className="floor-panel" key={floor.id}>
        <button
          className="floor-image"
          onClick={() => setZoom(true)}
          aria-label={`${floor.label}-ийн төлөвлөлтийг томруулах`}
        >
          <Image
            src={floor.image}
            alt={`Selbe Mall ${floor.label}-ийн архитектур төлөвлөлт ба интерьер дизайн`}
            width={floor.width}
            height={floor.height}
            sizes="(max-width: 960px) 92vw, 520px"
          />
          <span className="zoom-hint">Томруулах ⤢</span>
        </button>

        <div className="floor-info">
          <span className="eyebrow">{floor.label}</span>
          <h3>{floor.title}</h3>
          <p className="tagline">{floor.tagline}</p>
          <p className="lead">{floor.description}</p>

          <div className="floor-stats">
            <div>
              <b>{floor.units}</b>
              <span>Өрөө, талбай</span>
            </div>
            <div>
              <b>{fmt(floor.area)}</b>
              <span>Нийт м²</span>
            </div>
          </div>

          <ul className="checks">
            {floor.features.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>

          <div className="floor-nav">
            <button
              className="btn btn-outline"
              disabled={idx === 0}
              onClick={() => setActiveId(floors[idx - 1].id)}
            >
              ← Өмнөх
            </button>
            <button
              className="btn btn-gold"
              disabled={idx === floors.length - 1}
              onClick={() => setActiveId(floors[idx + 1].id)}
            >
              Дараах давхар →
            </button>
          </div>
        </div>
      </div>

      {zoom && (
        <Lightbox
          item={{
            src: floor.image,
            alt: `${floor.label}-ийн төлөвлөлт`,
            width: floor.width,
            height: floor.height,
            caption: `${floor.label} • ${floor.title}`,
          }}
          onClose={() => setZoom(false)}
          onPrev={idx > 0 ? () => setActiveId(floors[idx - 1].id) : undefined}
          onNext={idx < floors.length - 1 ? () => setActiveId(floors[idx + 1].id) : undefined}
        />
      )}
    </div>
  );
}
