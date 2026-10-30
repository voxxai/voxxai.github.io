export const identity = {
  handle: "Voxxai",
  givenName: "Gilian",
  role: "Software engineer",
  location: "Netherlands",
  email: "contact@voxxai.dev",
} as const;

export const nav = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#toolkit", label: "Toolkit" },
  { href: "#elsewhere", label: "Elsewhere" },
  { href: "#contact", label: "Contact" },
] as const;

export const profiles = [
  { label: "GitHub", href: "https://github.com/voxxai" },
  { label: "Twitch", href: "https://www.twitch.tv/voxxxiee" },
  { label: "Email", href: "mailto:contact@voxxai.dev" },
] as const;

export const elsewhere = [
  {
    label: "Raspberry Pi 5",
    detail: "Docker, a Discord bot, a Twitch bot, homelab experiments.",
  },
  {
    label: "Games",
    detail: "Warframe, Fortnite, ZZZ, Wuthering Waves.",
  },
  {
    label: "Music",
    detail: "Hardcore, Frenchcore, Uptempo. High BPM only.",
  },
  {
    label: "Watching",
    detail: "Anime, AI, hardware, whatever ships next.",
  },
  {
    label: "Stream",
    detail: "Twitch, still under the login voxxxiee.",
  },
] as const;
