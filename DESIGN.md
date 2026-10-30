# voxxai.dev

Same castle as the stream: ink, signal red, gold. Quieter than the overlays. The drawing already has the grid, so the page does not add another one.

## Color

Canonical tokens from BRAND.md:

- Ink `#0a0a0d`, text `#f5f6fb`, muted `#a1a8b8`.
- Red `#ff1f3d` for the wordmark slash, underlines, link hover, and the rule above the portrait.
- Gold `#e8b84a` for focus and text selection.
- Dividers are a cool hairline, `rgba(221, 229, 255, 0.16)`.
- No glow, no gradient, no background grid.

## Type

- Headlines, the name, project titles, and the email: Source Serif 4.
- Everything else: Familjen Grotesk.
- Stream overlays keep Orbitron. Both site fonts are self-hosted with `next/font`.

## Layout

- A left rail (name, place, section links, profiles) and one reading column.
- The portrait sits beside the intro on wide screens and above it on narrow ones.
- Sections are a heading plus prose or a plain index. No cards, no icon grids, no numbered labels.

## Voice

- Short, first person, specific. Gilian in prose, Voxxai as the public name.
- No surname and no hometown or city, including metadata and social images. The school name stays as written.
- No invented projects, jobs, stats, or testimonials.

## Motion

- Color change on hover, about 150ms. Nothing moves on load.
- `prefers-reduced-motion` turns the color change and smooth scroll off.
