# voxxai.dev — reading site

The stream overlays can stay loud. This site is the quiet version of the same person: warm black, paper-colored type, one red rule, brass for focus and hover.

## Type

- Headlines, the name, project titles, and the email: Source Serif 4.
- Everything else: Familjen Grotesk.
- Both are self-hosted with `next/font`. No runtime Google Fonts request.

## Color

- Ink `#161411`, paper `#f3efe6`, muted `#b7ad9f`.
- Oxide `#f0a598` for underlines and the single rule above the portrait.
- Brass `#e0c27a` for hover, focus, and selection.
- No second accent, no glow, no grid, no gradient.

## Layout

- A left rail (name, place, section links, profiles) and one reading column.
- The portrait sits beside the intro on wide screens and above it on narrow ones. It is the only image.
- Sections are a heading plus prose or a plain index. No cards, no icon grids, no numbered labels.

## Voice

- Short, first person, specific. Gilian in prose, Voxxai as the public name.
- No surname and no hometown or city, including metadata and social images. The school name stays as written.
- No invented projects, jobs, stats, or testimonials.

## Motion

- Color change on hover, about 150ms. Nothing moves on load.
- `prefers-reduced-motion` turns the color change and smooth scroll off.
