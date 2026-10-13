# voxxxiee visual system — Castle

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
- Projects must have a public, unauthenticated source URL before appearing as public work.
- Prefer editorial rows and asymmetric composition over repeated icon-card grids.
- Motion is user-triggered feedback, 100–220 ms, and respects `prefers-reduced-motion`.
- Text contrast meets WCAG AA (red `#FF1F3D` on `#0A0A0D` ≈ 5:1; dark text on red/gold buttons).

## Never add

- purple-to-cyan glow blobs or the old blue/pink/lime palette;
- glassmorphism panels;
- generic three-card feature rows;
- fake terminal windows;
- decorative dashboards or made-up metrics;
- auto-playing entrance animations or looping glitch effects (those stay on stream);
- stock imagery or generated UI screenshots;
- multiple competing call-to-action styles.
