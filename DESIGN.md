# voxxai visual system — Castle

## Thesis

The portfolio wears the same "castle" identity as the Vox stream overlays:
a dark keep at night, lit by red signal light and gold trim. It should feel
like the stream's home base, not a cyberpunk dashboard or a generic SaaS page.

## Tokens

- Background `#0A0A0D`, raised panels `#121217`, text `#F5F6FB`, muted `#A1A8B8`.
- Red `#FF1F3D` (primary signal, CTAs, labels), deep red `#B0001C`, gold `#E8B84A`
  (secondary accents, focus ring, selection). No other signal colours.
- Headings: Orbitron (500/700/900). Body, labels and UI: Chakra Petch.
  Both are self-hosted via `next/font` at build time — no runtime Google Fonts
  request (see PRIVACY_REVIEW.md).
- Corners: cut corners (`--cut: 14px`) on buttons, the portrait and key panels.
- Background: a faint 48 px red grid with a soft red glow at the top.

## Rules

- Let typography, spacing and hard dividers create hierarchy; Orbitron is wide,
  so keep heading sizes smaller and letter-spacing near zero.
- Red glow only as feedback (hover/focus on CTAs and cards) or on one hero word —
  never as background blobs.
- Use the Vox OC portrait (`/castle-portrait.webp`) once, as identity.
- Write concrete copy in Gilian's voice. No claims such as "innovative" or "world-class".
- No surname or hometown anywhere except the privacy notice.
- Public source links must open without authentication. A private project may be
  presented with an accurate development status and a real, reviewed screenshot;
  label private source clearly and do not link to its private repository.
- Prefer editorial rows and asymmetric composition over repeated icon-card grids.
- Use one brief name entrance and underline on arrival. Other motion is
  user-triggered: 180–220 ms feedback, a 450 ms letter spring, or a single
  650–700 ms chaos activation. Respect `prefers-reduced-motion` throughout.
- Text contrast meets WCAG AA (red `#FF1F3D` on `#0A0A0D` ≈ 5:1; dark text on red/gold buttons).

## Never add

- purple-to-cyan glow blobs or the old blue/pink/lime palette;
- glassmorphism panels;
- generic three-card feature rows;
- fake terminal windows;
- decorative dashboards or made-up metrics;
- repeated entrance animations or looping glitch effects;
- stock imagery or generated UI screenshots;
- multiple competing call-to-action styles.

## Portfolio interaction notes

- Lead with Gilian / Voxxai, then current work, archived work, a personal
  introduction, a compact toolkit and contact. Avoid repeated numbered slogans.
- Chaos defaults off on every visit. The portrait switch opts in; Escape opts
  out. No audio, flashing or scroll interception.
- Chaos adds a single red/gold sweep, reactive name letters, a pooled ten-particle
  mouse trail, pointer-responsive portrait/project tilt and an extra project note.
- Tapping the name works on touch devices; context notes use native details so
  they also work with a keyboard. Hover is never required to access content.
- Reduced motion keeps the colour changes and extra note but removes the
  entrance, sweep, trail, letter movement, tilt and animated transitions.
- Five quick logo clicks reveal a short aside without changing its back-to-top
  behaviour. No tracking or storage is added.
- The personal interest picker covers music, games, anime / Vox, and the Pi.
  Use native buttons with pressed state and a shared live content area, keeping
  selection accessible to keyboard and touch without a hover requirement.
  Content is based on Gilian's stated interests, not live listening or gaming
  activity. No third-party embeds or fabricated activity indicators.
- `public/lifequest-desktop.webp` comes from LifeQuest's reviewed development
  screenshot `docs/p5-screenshots/after-shell-desktop.png`: empty demo state, no
  personal health measurements. Keep future screenshots equally free of private data.
