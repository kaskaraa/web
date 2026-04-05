"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";

interface MetallicCardProps {
  children: ReactNode;
  className?: string;
}

export default function MetallicCard({ children, className = "" }: MetallicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

    card.style.transform = `perspective(1000px) rotateY(${x * 4}deg) rotateX(${y * -4}deg)`;

    const sheenX = ((e.clientX - rect.left) / rect.width) * 100;
    const sheenY = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.backgroundImage = `radial-gradient(circle at ${sheenX}% ${sheenY}%, rgba(255,255,255,0.06) 0%, transparent 60%)`;
  }

  function handleMouseLeave() {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)";
    card.style.backgroundImage = "none";
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`brushed-metal metal-border rounded-2xl p-6 transition-transform duration-300 ease-out ${className}`}
    >
      {children}
    </div>
  );
}
