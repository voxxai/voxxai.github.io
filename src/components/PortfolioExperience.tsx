"use client";

import {
  createContext, useContext, useEffect, useRef, useState,
  type PointerEvent, type ReactNode,
} from "react";

const ExperienceContext = createContext({
  chaos: false, reduced: true, toggle: () => {},
});

export function PortfolioExperience({ children }: { children: ReactNode }) {
  const [chaos, setChaos] = useState(false);
  const [reduced, setReduced] = useState(true);
  const trail = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.chaos = chaos ? "on" : "off";
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setChaos(false);
    };
    if (chaos) window.addEventListener("keydown", escape);
    return () => {
      delete document.documentElement.dataset.chaos;
      window.removeEventListener("keydown", escape);
    };
  }, [chaos]);

  useEffect(() => {
    if (!chaos || reduced || !trail.current) return;
    const particles = Array.from(trail.current.children) as HTMLElement[];
    let index = 0;
    let last = 0;
    const move = (event: globalThis.PointerEvent) => {
      if (event.pointerType !== "mouse" || document.hidden) return;
      const now = performance.now();
      if (now - last < 45) return;
      last = now;
      const particle = particles[index++ % particles.length];
      particle.getAnimations().forEach((animation) => animation.cancel());
      particle.style.left = `${event.clientX}px`;
      particle.style.top = `${event.clientY}px`;
      particle.animate([
        { opacity: 0.65, transform: "translate(-50%, -50%) rotate(45deg) scale(1)" },
        { opacity: 0, transform: "translate(-50%, -18px) rotate(110deg) scale(0.2)" },
      ], { duration: 420, easing: "ease-out" });
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => {
      window.removeEventListener("pointermove", move);
      particles.forEach((particle) => particle.getAnimations().forEach((animation) => animation.cancel()));
    };
  }, [chaos, reduced]);

  return (
    <ExperienceContext.Provider value={{ chaos, reduced, toggle: () => setChaos((value) => !value) }}>
      {children}
      <div className="chaos-sweep" aria-hidden="true" />
      <div className="cursor-trail" ref={trail} aria-hidden="true">
        {Array.from({ length: 10 }, (_, index) => <i key={index} />)}
      </div>
    </ExperienceContext.Provider>
  );
}

export function ChaosSwitch() {
  const { chaos, reduced, toggle } = useContext(ExperienceContext);
  return (
    <div className="chaos-control">
      <button type="button" className="chaos-switch" aria-pressed={chaos} onClick={toggle}>
        Chaos {chaos ? "on" : "off"}
        <span className="chaos-track" aria-hidden="true"><span /></span>
      </button>
      <span className="chaos-hint" role="status">
        {chaos ? reduced ? "Less motion. Same attitude." : "Touch things. Esc to reset." : "Go on. Flip it."}
      </span>
    </div>
  );
}

export function Wordmark() {
  const clicks = useRef({ count: 0, last: 0 });
  const [found, setFound] = useState(false);
  useEffect(() => {
    if (!found) return;
    const timer = window.setTimeout(() => setFound(false), 4000);
    return () => window.clearTimeout(timer);
  }, [found]);
  return (
    <div className="wordmark-wrap">
      <a className="wordmark" href="#top" aria-label="Voxxai, back to top" onClick={() => {
        const now = Date.now();
        clicks.current.count = now - clicks.current.last < 1500 ? clicks.current.count + 1 : 1;
        clicks.current.last = now;
        if (clicks.current.count === 5) {
          setFound(true);
          clicks.current.count = 0;
        }
      }}>voxxai<span className="wordmark-mark">//</span></a>
      <span className={`logo-secret${found ? " is-found" : ""}`} role="status">
        {found ? "Yep. Still the same logo." : ""}
      </span>
    </div>
  );
}

export function AnimatedName() {
  const { chaos, reduced } = useContext(ExperienceContext);
  const name = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (chaos && !reduced) return;
    name.current?.querySelectorAll(".reactive-letter").forEach((letter) => {
      letter.getAnimations().forEach((animation) => animation.cancel());
    });
  }, [chaos, reduced]);
  function nudge(event: PointerEvent<HTMLSpanElement>, index: number) {
    if (!chaos || reduced) return;
    const letter = event.currentTarget;
    letter.getAnimations().forEach((animation) => animation.cancel());
    letter.animate([
      { transform: "translate(0, 0) rotate(0)" },
      { transform: `translate(${index % 2 ? 7 : -7}px, -14px) rotate(${index % 2 ? 9 : -9}deg)` },
      { transform: "translate(0, 3px) rotate(0)" },
      { transform: "translate(0, 0) rotate(0)" },
    ], { duration: 450, easing: "ease-out" });
  }
  return (
    <span className="hero-alias">
      <span className="alias-prefix">Online, it&apos;s</span>
      <span className="alias-name" ref={name}>
        <span className="sr-only">Voxxai.</span>
        {"Voxxai.".split("").map((letter, index) => (
          <span key={index} className="reactive-letter" aria-hidden="true"
            onPointerEnter={(event) => nudge(event, index)}
            onPointerDown={(event) => nudge(event, index)}>{letter}</span>
        ))}
      </span>
    </span>
  );
}

export function TiltPanel({ children, className = "" }: { children: ReactNode; className?: string }) {
  const { chaos, reduced } = useContext(ExperienceContext);
  const panel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!chaos || reduced) {
      panel.current?.style.removeProperty("--tilt-x");
      panel.current?.style.removeProperty("--tilt-y");
    }
  }, [chaos, reduced]);
  function reset() {
    panel.current?.style.removeProperty("--tilt-x");
    panel.current?.style.removeProperty("--tilt-y");
  }
  return (
    <div ref={panel} className={`tilt-panel ${className}`} onPointerMove={(event) => {
      if (!chaos || reduced || event.pointerType !== "mouse") return;
      const rect = event.currentTarget.getBoundingClientRect();
      event.currentTarget.style.setProperty("--tilt-x", `${((event.clientY - rect.top) / rect.height - 0.5) * -5}deg`);
      event.currentTarget.style.setProperty("--tilt-y", `${((event.clientX - rect.left) / rect.width - 0.5) * 5}deg`);
    }} onPointerLeave={reset} onPointerCancel={reset} onPointerDown={(event) => {
      if (!chaos || reduced || event.pointerType === "mouse") return;
      event.currentTarget.style.setProperty("--tilt-x", "-2deg");
      event.currentTarget.style.setProperty("--tilt-y", "2deg");
    }} onPointerUp={reset}>
      {children}
    </div>
  );
}

export function ProjectNote({ children }: { children: ReactNode }) {
  const { chaos } = useContext(ExperienceContext);
  return <div className="project-note">
    <p><span>A note / </span>{children}</p>
    {chaos ? <details className="project-detail chaos-project-detail">
      <summary>Since you flipped the switch <span aria-hidden="true">+</span></summary>
      <p>Yes, the habit tracker is calmer than this portfolio. Different job.</p>
    </details> : null}
  </div>;
}
