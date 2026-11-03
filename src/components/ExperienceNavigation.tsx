"use client";

import { useEffect, useState } from "react";

const chapters = [
  { id: "top", label: "Voxxai" },
  { id: "work", label: "The engineer" },
  { id: "warframe", label: "Uriel" },
  { id: "jinx", label: "Jinx" },
  { id: "soundtrack", label: "The soundtrack" },
  { id: "about", label: "Behind Voxxai" },
] as const;

export function ExperienceNavigation() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    let observer: IntersectionObserver;
    const observe = () => {
      observer?.disconnect();
      const margin = Math.round(window.innerHeight * 0.4);
      observer = new IntersectionObserver((entries) => {
        const entered = entries.find((entry) => entry.isIntersecting);
        if (entered) {
          const index = chapters.findIndex((chapter) => chapter.id === entered.target.id);
          if (index !== -1) setActive(index);
        }
      }, { rootMargin: `-${margin}px 0px -${margin}px 0px`, threshold: 0 });
      chapters.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) observer.observe(section);
      });
    };
    observe();
    window.addEventListener("resize", observe);
    return () => { observer.disconnect(); window.removeEventListener("resize", observe); };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.chapter = chapters[active].id;
    chapters.forEach(({ id }, index) => {
      const section = document.getElementById(id);
      if (section) section.dataset.active = String(index === active);
    });
    const navigate = (event: KeyboardEvent) => {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
      if ((event.target as HTMLElement).closest("input,textarea,select,[contenteditable=true]")) return;
      if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
      const next = active + (event.key === "ArrowRight" ? 1 : -1);
      if (next < 0 || next >= chapters.length) return;
      event.preventDefault();
      const target = document.getElementById(chapters[next].id);
      target?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    };
    window.addEventListener("keydown", navigate);
    return () => { window.removeEventListener("keydown", navigate); };
  }, [active]);

  useEffect(() => () => { delete document.documentElement.dataset.chapter; }, []);

  return <>
    <nav className="chapter-nav" aria-label="Experience chapters">
      {chapters.map((chapter, index) => <a key={chapter.id} href={`#${chapter.id}`}
        aria-label={`${index + 1}. ${chapter.label}`} aria-current={index === active ? "location" : undefined}>
        <span className="chapter-nav-label">{chapter.label}</span>
        <span className="chapter-nav-marker" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
      </a>)}
    </nav>
    <div className="experience-controls">
      <span className="chapter-counter"><b>{String(active + 1).padStart(2, "0")}</b> / 06 <span>{chapters[active].label}</span></span>
      <span className="navigation-hint">Scroll / swipe / ← →</span>
      <div className="chapter-arrows">
        {active > 0 ? <a href={`#${chapters[active - 1].id}`} aria-label="Previous chapter">←</a> : <span aria-hidden="true">←</span>}
        {active < chapters.length - 1 ? <a href={`#${chapters[active + 1].id}`} aria-label="Next chapter">→</a> : <a href="#top" aria-label="Back to the first chapter">↑</a>}
      </div>
    </div>
    <div className="experience-scanlines" aria-hidden="true" />
  </>;
}
