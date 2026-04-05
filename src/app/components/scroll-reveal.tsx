"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: keyof HTMLElementTagNameMap;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div" as keyof HTMLElementTagNameMap,
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (delay > 0) {
      el.style.transitionDelay = `${delay}ms`;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const Component = Tag as string;

  return (
    // @ts-expect-error dynamic tag
    <Component ref={ref} className={`reveal ${className}`}>
      {children}
    </Component>
  );
}
