"use client";

import { useEffect, useRef } from "react";

export default function SvgLines({ className = "" }: { className?: string }) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const lines = svg.querySelectorAll(".draw-line");
    lines.forEach((line) => {
      const el = line as SVGGeometryElement;
      const length = el.getTotalLength();
      el.style.setProperty("--line-length", String(length));
      el.style.strokeDasharray = String(length);
      el.style.strokeDashoffset = String(length);
    });

    const timeout = setTimeout(() => {
      lines.forEach((line) => line.classList.add("drawn"));
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <svg
      ref={svgRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      viewBox="0 0 1200 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Crosshair - top right */}
      <line className="draw-line" x1="900" y1="120" x2="1050" y2="120" stroke="var(--metal-dark)" strokeWidth="0.5" />
      <line className="draw-line" x1="975" y1="50" x2="975" y2="190" stroke="var(--metal-dark)" strokeWidth="0.5" />
      <circle className="draw-line" cx="975" cy="120" r="30" stroke="var(--metal-dark)" strokeWidth="0.5" />
      <circle className="draw-line" cx="975" cy="120" r="15" stroke="var(--metal-dark)" strokeWidth="0.3" />

      {/* Measurement scale - bottom left */}
      <line className="draw-line" x1="80" y1="600" x2="350" y2="600" stroke="var(--metal-dark)" strokeWidth="0.5" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <line
          key={`tick-${i}`}
          className="draw-line"
          x1={80 + i * 54}
          y1="592"
          x2={80 + i * 54}
          y2="608"
          stroke="var(--metal-dark)"
          strokeWidth="0.5"
        />
      ))}

      {/* Technical grid - top left */}
      <rect className="draw-line" x="60" y="80" width="160" height="100" stroke="var(--metal-dark)" strokeWidth="0.3" rx="2" />
      <line className="draw-line" x1="60" y1="130" x2="220" y2="130" stroke="var(--metal-dark)" strokeWidth="0.2" />
      <line className="draw-line" x1="140" y1="80" x2="140" y2="180" stroke="var(--metal-dark)" strokeWidth="0.2" />

      {/* Angled precision lines - right */}
      <line className="draw-line" x1="1100" y1="400" x2="1150" y2="500" stroke="var(--metal-dark)" strokeWidth="0.4" />
      <line className="draw-line" x1="1080" y1="420" x2="1130" y2="520" stroke="var(--metal-dark)" strokeWidth="0.3" />

      {/* Concentric arcs - bottom right */}
      <path className="draw-line" d="M 1050 680 A 60 60 0 0 1 1110 620" stroke="var(--metal-dark)" strokeWidth="0.4" />
      <path className="draw-line" d="M 1040 690 A 80 80 0 0 1 1120 610" stroke="var(--metal-dark)" strokeWidth="0.3" />

      {/* Small crosshair - center-left */}
      <line className="draw-line" x1="200" y1="380" x2="240" y2="380" stroke="var(--metal-dark)" strokeWidth="0.4" />
      <line className="draw-line" x1="220" y1="360" x2="220" y2="400" stroke="var(--metal-dark)" strokeWidth="0.4" />
    </svg>
  );
}
