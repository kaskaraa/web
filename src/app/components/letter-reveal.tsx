"use client";

import { useEffect, useRef } from "react";

interface LetterRevealProps {
  text: string;
  className?: string;
  delay?: number;
  letterDelay?: number;
}

export default function LetterReveal({
  text,
  className = "",
  delay = 500,
  letterDelay = 30,
}: LetterRevealProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const timeout = setTimeout(() => {
      el.classList.add("animate");
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  const words = text.split(" ");

  return (
    <h1 ref={ref} className={`letter-reveal ${className}`}>
      {words.map((word, wordIndex) => {
        const charsBefore = words
          .slice(0, wordIndex)
          .reduce((sum, w) => sum + w.length + 1, 0);

        return (
          <span key={wordIndex} className="inline-block whitespace-nowrap">
            {word.split("").map((char, charIndex) => (
              <span
                key={charIndex}
                style={{
                  transitionDelay: `${(charsBefore + charIndex) * letterDelay}ms`,
                }}
              >
                {char}
              </span>
            ))}
            {wordIndex < words.length - 1 && (
              <span className="inline-block w-[0.3em]">&nbsp;</span>
            )}
          </span>
        );
      })}
    </h1>
  );
}
