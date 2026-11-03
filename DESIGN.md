# Voxxai — chapter experience

Voxxai / VOX is the shared identity behind Gilian's software projects, stream,
gaming and music. The portfolio is a six-chapter visual experience, with useful
project and contact information available directly through the fixed header.

## Chapters

1. **Voxxai** — original Castle portrait, large wordmark, black / red / gold.
2. **The engineer** — LifeQuest development screenshot and honest MVP status;
   expandable archive with public source links and a compact toolkit.
3. **Uriel** — user-supplied Warframe reference image, ember / orange theme.
   Uriel is the user's main. Explicitly not presented as their own Fashionframe.
4. **Jinx** — user-supplied Arcane portrait, ink / cyan / magenta, rough drawn
   accents. Jinx remains a favourite; C.C. is omitted. Vox is a separate OC.
5. **The soundtrack** — interactive hardcore / uptempo (default, first choice) and U2 themes.
   User-supplied GPF and U2 concert photos switch with the selection. GPF is
   the favourite artist; hardcore / uptempo remains first and default. No listening widget.
6. **Behind Voxxai** — Computer Science graduation in 2026, current role at
   Spaux, home Pi / Discord / Twitch bots, signature and contact.

## Brand and image rules

- The global identity stays ink `#0a0a0d`, red `#ff1f3d`, gold `#e8b84a`, with
  Orbitron headings and Chakra Petch body text. Cut corners remain on key actions.
- Uriel (`#ff772b` / `#ffc079`) and Jinx (`#ed4aa8` / `#66deee`) have deliberately
  scoped chapter accents, per the user's explicit direction. The fixed controls
  adopt the active chapter's accents. These are not a global brand replacement.
- `public/uriel-reference.webp` and `public/jinx-arcane.webp` are optimised from
  the two user attachments supplied on 3 Nov 2026. Preserve the original scenes;
  use responsive crops and CSS overlays, not generated replacement characters.
- `public/gpf-live.webp` and `public/u2-live.webp` are optimised copies of the
  two concert images supplied by the user on 3 Nov 2026.
- `public/lifequest-desktop.webp` is the reviewed empty development screenshot
  from LifeQuest's `docs/p5-screenshots/after-shell-desktop.png`.
- No surname or hometown outside the existing privacy notice. No invented
  professional claims, activity statuses or metrics. No Spotify widgets.

## Navigation and motion

- With JavaScript enabled, use a fixed viewport stage with exactly one active
  chapter. Crossfade / transform the layers; never leave a position between slides.
  Inactive chapters are inert. Without JavaScript the document remains scrollable.
- One wheel / trackpad gesture advances one chapter, with accumulation, a gesture
  latch and a transition lock to prevent inertia skipping multiple chapters.
  Vertical swipes, Left / Right, Page Up / Down, anchors and previous / next work.
- Content taller than the viewport scrolls inside its own chapter before the next
  gesture advances. Direct contact links open the final chapter and reveal contact.
- Header links keep work and contact accessible without traversing every chapter.
- Use static scanlines, one short clipped text glitch when a chapter enters,
  staggered copy entrances, gentle image settling and a finite ember reveal in the Uriel scene.
- Chaos defaults off. Its switch adds recurring clipped glitch feedback, moving
  scan bands, click / tap particle bursts, stronger scene colour, the
  pooled cursor particles, larger reactive name letters, interactive panel tilt and an
  extra LifeQuest note. Escape restores the quiet state. Never autoplay audio.
- Reduced motion removes smooth navigation, transitions and all animated
  effects. Scene images and text remain visible. All content stays accessible.
- Soundtrack choices use real buttons with pressed state and live text updates.
  Music favourites do not imply that anything is playing.
- Five quick wordmark clicks retain the small easter egg and normal top anchor.

## Verification

Build and TypeScript checks, followed by deployed-preview browser checks for
chapter links, arrow navigation, archive expansion, soundtrack choices, chaos,
image loading and narrow viewport overflow. A managed preview launcher that passes
Vite flags is incompatible with this Next.js repository; use its Vercel PR preview
for browser QA rather than changing the application to suit that launcher.
