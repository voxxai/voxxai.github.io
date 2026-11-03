"use client";

import { useEffect, useRef, useState } from "react";

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
  const indexRef = useRef(0);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.experienceReady = "true";
    let lockedUntil = 0;
    let wheelLast = 0;
    let wheelTotal = 0;
    let wheelUsed = false;
    let pendingFrame = 0;
    let touch: { x: number; y: number; scroll: number } | null = null;
    const section = () => document.getElementById(chapters[indexRef.current].id);
    const canScrollInside = (delta: number) => {
      const current = section();
      if (!current || current.scrollHeight <= current.clientHeight + 3) return false;
      return delta > 0 ? current.scrollTop + current.clientHeight < current.scrollHeight - 3 : current.scrollTop > 3;
    };
    const jump = (index: number, anchor = chapters[index]?.id as string, updateUrl = true) => {
      if (index < 0 || index >= chapters.length) return;
      const previous = indexRef.current;
      root.dataset.direction = index < previous ? "back" : "forward";
      indexRef.current = index;
      setActive(index);
      lockedUntil = performance.now() + 800;
      if (updateUrl) window.history.replaceState(null, "", `#${anchor}`);
      cancelAnimationFrame(pendingFrame);
      pendingFrame = requestAnimationFrame(() => {
        const current = document.getElementById(chapters[index].id);
        if (anchor === "contact") document.getElementById("contact")?.scrollIntoView({ block: "center", behavior: "instant" });
        else if (index !== previous) current?.scrollTo({ top: 0, behavior: "instant" });
      });
    };
    const fromHash = () => {
      const hash = window.location.hash.slice(1);
      const index = hash === "contact" ? chapters.length - 1 : chapters.findIndex((chapter) => chapter.id === hash);
      if (index >= 0) jump(index, hash, false);
    };
    fromHash();
    const click = (event: MouseEvent) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = (event.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!link) return;
      const hash = link.getAttribute("href")?.slice(1);
      const index = hash === "contact" ? chapters.length - 1 : chapters.findIndex((chapter) => chapter.id === hash);
      if (index < 0) return;
      event.preventDefault();
      jump(index, hash);
    };
    const wheel = (event: WheelEvent) => {
      if (event.ctrlKey || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
      if ((event.target as Element).closest("dialog,[role=dialog],textarea,select")) return;
      if (canScrollInside(event.deltaY)) return;
      event.preventDefault();
      const now = performance.now();
      if (now - wheelLast > 180) { wheelTotal = 0; wheelUsed = false; }
      wheelLast = now;
      if (wheelUsed || now < lockedUntil) return;
      const delta = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? window.innerHeight : 1);
      if (Math.sign(delta) !== Math.sign(wheelTotal)) wheelTotal = 0;
      wheelTotal += delta;
      if (Math.abs(wheelTotal) < 28) return;
      wheelUsed = true;
      jump(indexRef.current + (wheelTotal > 0 ? 1 : -1));
    };
    const key = (event: KeyboardEvent) => {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
      if ((event.target as Element).closest("input,textarea,select,[contenteditable=true]")) return;
      const forward = event.key === "ArrowRight" || event.key === "PageDown";
      const back = event.key === "ArrowLeft" || event.key === "PageUp";
      if (!forward && !back) return;
      event.preventDefault();
      if (performance.now() >= lockedUntil) jump(indexRef.current + (forward ? 1 : -1));
    };
    const touchStart = (event: TouchEvent) => {
      if (event.touches.length !== 1 || (event.target as Element).closest("a,button,summary,input,textarea,select")) { touch = null; return; }
      touch = { x: event.touches[0].clientX, y: event.touches[0].clientY, scroll: section()?.scrollTop ?? 0 };
    };
    const touchMove = (event: TouchEvent) => {
      if (!touch || event.touches.length !== 1) return;
      const delta = touch.y - event.touches[0].clientY;
      if (!canScrollInside(delta)) event.preventDefault();
    };
    const touchEnd = (event: TouchEvent) => {
      if (!touch || event.changedTouches.length !== 1) return;
      const delta = touch.y - event.changedTouches[0].clientY;
      const horizontal = Math.abs(touch.x - event.changedTouches[0].clientX);
      const internallyScrolled = Math.abs((section()?.scrollTop ?? 0) - touch.scroll) > 3;
      touch = null;
      if (internallyScrolled || Math.abs(delta) < 45 || horizontal > Math.abs(delta) || performance.now() < lockedUntil) return;
      jump(indexRef.current + (delta > 0 ? 1 : -1));
    };
    window.addEventListener("click", click);
    window.addEventListener("wheel", wheel, { passive: false });
    window.addEventListener("keydown", key);
    window.addEventListener("hashchange", fromHash);
    window.addEventListener("touchstart", touchStart, { passive: true });
    window.addEventListener("touchmove", touchMove, { passive: false });
    window.addEventListener("touchend", touchEnd, { passive: true });
    return () => {
      cancelAnimationFrame(pendingFrame);
      window.removeEventListener("click", click);
      window.removeEventListener("wheel", wheel);
      window.removeEventListener("keydown", key);
      window.removeEventListener("hashchange", fromHash);
      window.removeEventListener("touchstart", touchStart);
      window.removeEventListener("touchmove", touchMove);
      window.removeEventListener("touchend", touchEnd);
      delete root.dataset.experienceReady;
      delete root.dataset.direction;
      delete root.dataset.chapter;
      chapters.forEach(({ id }) => { const element = document.getElementById(id); if (element) { element.inert = false; delete element.dataset.active; } });
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.chapter = chapters[active].id;
    chapters.forEach(({ id }, index) => {
      const element = document.getElementById(id);
      if (element) { element.dataset.active = String(index === active); element.inert = index !== active; }
    });
  }, [active]);

  return <>
    <nav className="chapter-nav" aria-label="Experience chapters">
      {chapters.map((chapter, index) => <a key={chapter.id} href={`#${chapter.id}`}
        aria-label={`${index + 1}. ${chapter.label}`} aria-current={index === active ? "location" : undefined}>
        <span className="chapter-nav-label">{chapter.label}</span>
        <span className="chapter-nav-marker" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
      </a>)}
    </nav>
    <div className="experience-controls">
      <span className="chapter-counter" role="status"><b>{String(active + 1).padStart(2, "0")}</b> / 06 <span>{chapters[active].label}</span></span>
      <span className="navigation-hint">Scroll / swipe / ← →</span>
      <div className="chapter-arrows">
        {active > 0 ? <a href={`#${chapters[active - 1].id}`} aria-label="Previous chapter">←</a> : <span aria-hidden="true">←</span>}
        {active < chapters.length - 1 ? <a href={`#${chapters[active + 1].id}`} aria-label="Next chapter">→</a> : <a href="#top" aria-label="Back to the first chapter">↑</a>}
      </div>
    </div>
    <div className="experience-scanlines" aria-hidden="true" />
  </>;
}
