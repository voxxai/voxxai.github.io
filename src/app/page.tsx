import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Mail,
  MapPin,
} from "lucide-react";
import { projects } from "@/data/projects";
import { skillsByCategory } from "@/data/skills";
import { ChaosSwitch } from "@/components/ChaosSwitch";

const mainLinks = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#signal", label: "Off-screen" },
  { href: "#contact", label: "Contact" },
];

const projectMeta: Record<
  string,
  { kind: string; number: string; liveUrl?: string }
> = {
  ProjectC: { kind: "Archived school platform", number: "01" },
  Django_Project: { kind: "Archived learning build", number: "02" },
};

function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      {children}
      <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.8} />
    </a>
  );
}

export default function HomePage() {
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Voxxai, back to top">
          voxxai<span className="wordmark-mark">{"//"}</span>
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          {mainLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <span className="header-role">SOFTWARE ENGINEER · NL</span>
      </header>

      <main id="top">
        <section className="hero section-frame" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="section-label">01 / GILIAN</p>
            <h1 id="hero-title">
              Build it. Play it.
              <span>Build it louder.</span>
            </h1>
            <p className="hero-intro">
              Software engineer with a soft spot for the machinery behind the
              UI: APIs, auth, data, and the automation that should have been
              a button. I build what I need, then I queue a game or go live.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                See the builds
                <ArrowDownRight aria-hidden="true" size={18} />
              </a>
              <ExternalLink
                href="https://github.com/voxxai"
                className="button button-secondary"
              >
                GitHub
              </ExternalLink>
            </div>

            <dl className="quick-facts">
              <div>
                <dt>Focus</dt>
                <dd>APIs · auth · deploys</dd>
              </div>
              <div>
                <dt>Based</dt>
                <dd>
                  <MapPin aria-hidden="true" size={14} /> Netherlands
                </dd>
              </div>
              <div>
                <dt>Exploring</dt>
                <dd>Rust · Linux · AI tooling</dd>
              </div>
            </dl>
          </div>

          <figure className="profile-block">
            <div className="profile-offset" aria-hidden="true" />
            <div className="profile-image-wrap">
              <Image
                src="/castle-portrait.webp"
                alt="Vox, the blond hooded original character used as voxxai's avatar"
                fill
                priority
                sizes="(max-width: 900px) 82vw, 420px"
                className="profile-image"
              />
            </div>
            <figcaption>
              <span>voxxai</span>
              <ChaosSwitch />
            </figcaption>
          </figure>
        </section>

        <section className="work-section section-frame" id="work">
          <div className="section-heading">
            <div>
              <p className="section-label">02 / SELECTED WORK</p>
              <h2>Real builds. No filler.</h2>
            </div>
            <p>
              Two earlier builds, both archived.
              Every source link opens without an account.
            </p>
          </div>

          <article className="featured-project">
            <div className="project-index">
              <span>{projectMeta[featuredProject.name]?.number}</span>
              <span>{projectMeta[featuredProject.name]?.kind}</span>
            </div>
            <div className="featured-project-copy">
              <div className="project-title-row">
                <h3>{featuredProject.name}</h3>
                <span className="status-badge">\n                  {featuredProject.archived ? "ARCHIVED" : "ACTIVE"}\n                </span>
              </div>
              <p>{featuredProject.description}</p>
              <div className="project-footer">
                <span>{featuredProject.language}</span>
                <div className="project-links">
                  {projectMeta[featuredProject.name]?.liveUrl && (
                    <ExternalLink
                      href={projectMeta[featuredProject.name].liveUrl!}
                      className="text-link"
                    >
                      Live app
                    </ExternalLink>
                  )}
                  <ExternalLink
                    href={featuredProject.html_url}
                    className="text-link"
                  >
                    Source
                  </ExternalLink>
                </div>
              </div>
            </div>
          </article>

          <div className="project-list">
            {otherProjects.map((project) => {
              const meta = projectMeta[project.name];

              return (
                <ExternalLink
                  key={project.name}
                  href={project.html_url}
                  className="project-row"
                >
                  <span className="project-number">{meta?.number}</span>
                  <div>
                    <span className="project-kind">{meta?.kind}</span>
                    <h3>{project.name.replace("_", " ")}</h3>
                  </div>
                  <p>{project.description}</p>
                  <span className="project-language">{project.language}</span>
                </ExternalLink>
              );
            })}
          </div>
        </section>

        <section className="about-section section-frame" id="about">
          <div className="about-lead">
            <p className="section-label">03 / ABOUT</p>
            <h2>Engineer by trade. Gamer after hours.</h2>
          </div>
          <div className="about-copy">
            <p className="about-statement">
              I&apos;m Gilian, better known online as Voxxai. Computer Science
              at Hogeschool Rotterdam, and I build software for a living now.
            </p>
            <div className="about-columns">
              <p>
                I like code that still reads in six months, and interfaces
                that stay out of the way. The real choices sit between the
                screen, the API, and the database.
              </p>
              <p>
                Off the clock it&apos;s games, Twitch, hardware, and a Raspberry
                Pi doing jobs it was not bought for. The playlist only counts
                at an unreasonable BPM.
              </p>
            </div>
          </div>
        </section>

        <section className="stack-section section-frame" id="stack">
          <div className="section-heading stack-heading">
            <div>
              <p className="section-label">04 / TOOLKIT</p>
              <h2>What I reach for.</h2>
            </div>
            <p>
              The stack changes with the problem. These are the tools I
              actually reach for when something has to ship.
            </p>
          </div>

          <div className="stack-grid">
            {skillsByCategory.map((group, index) => (
              <article key={group.category} className="stack-group">
                <span className="stack-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{group.category}</h3>
                <p>{group.items.join(" / ")}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="signal-section section-frame" id="signal">
          <div className="signal-heading">
            <div>
              <p className="section-label">05 / OFF-SCREEN SIGNAL</p>
              <h2>The tabs that are not code.</h2>
            </div>
            <p>
              Code is one tab. The others are a Docker log, a game, a Twitch
              window, or music at an unreasonable BPM.
            </p>
          </div>

          <div className="signal-layout">
            <div className="signal-notes">
              <article>
                <span>HOME_01</span>
                <h3>Raspberry Pi 5</h3>
                <p>Docker · Discord bot · Twitch bot · homelab experiments</p>
              </article>
              <article>
                <span>QUEUE_02</span>
                <h3>Games</h3>
                <p>Warframe · Fortnite · ZZZ · Wuthering Waves</p>
              </article>
              <article>
                <span>AUDIO_03</span>
                <h3>High BPM only</h3>
                <p>Hardstyle · Hardcore · Frenchcore · Uptempo</p>
              </article>
              <article>
                <span>RADAR_04</span>
                <h3>Currently watching</h3>
                <p>Anime · AI · hardware · whatever ships next</p>
              </article>
            </div>
          </div>
        </section>

        <section className="contact-section section-frame" id="contact">
          <p className="section-label">06 / SAY HELLO</p>
          <div className="contact-layout">
            <h2>Got a build, or a bad idea?</h2>
            <div className="contact-copy">
              <p>
                Code, a project, or a homelab idea that is already a bit
                cursed. The inbox is open.
              </p>
              <a className="email-link" href="mailto:contact@voxxai.dev">
                contact@voxxai.dev
                <ArrowUpRight aria-hidden="true" size={26} />
              </a>
              <div className="social-links" aria-label="Social links">
                <ExternalLink href="https://github.com/voxxai">
                  <Github aria-hidden="true" size={18} /> GitHub
                </ExternalLink>
                <a href="mailto:contact@voxxai.dev">
                  <Mail aria-hidden="true" size={18} /> Email
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-frame">
        <span>© {new Date().getFullYear()} voxxai</span>
        <span>Designed &amp; built by voxxai</span>
        <a href="#top">Back to top ↑</a>
        <a href="/privacy.html" lang="nl">Privacy &amp; cookies</a>
      </footer>
    </div>
  );
}
