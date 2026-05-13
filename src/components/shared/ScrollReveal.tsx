"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = [
      ...document.querySelectorAll<HTMLElement>(".reveal"),
      ...document.querySelectorAll<HTMLElement>(".reveal-stagger"),
    ];

    elements.forEach((el) => observer.observe(el));
    observerRef.current = observer;

    // Force-reveal elements already in the viewport (IntersectionObserver
    // callback fires asynchronously and may miss elements on route change)
    requestAnimationFrame(() => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add("in-view");
        }
      });
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
