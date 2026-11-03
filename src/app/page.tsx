import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Github, Mail } from "lucide-react";
import { projects } from "@/data/projects";
import {
  AnimatedName, ChaosSwitch, PortfolioExperience, ProjectNote, TiltPanel, Wordmark,
} from "@/components/PortfolioExperience";

function ExternalLink({ href, children, className = "" }: {
  href: string; children: React.ReactNode; className?: string;
}) {
  return <a href={href} target="_blank" rel="noreferrer" className={className}>
    {children}<ArrowUpRight aria-hidden="true" size={16} />
  </a>;
}

export default function HomePage() {
  return (
    <PortfolioExperience>
      <div className="site-shell">
        <a className="skip-link" href="#main">Skip to content</a>
        <header className="site-header section-frame">
          <Wordmark />
          <nav className="site-nav" aria-label="Primary navigation">
            <a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a>
          </nav>
          <a className="header-github" href="https://github.com/voxxai" target="_blank" rel="noreferrer" aria-label="Voxxai on GitHub">
            <Github size={19} aria-hidden="true" />
          </a>
        </header>

        <main id="main">
          <section className="hero section-frame" id="top" aria-labelledby="hero-title">
            <div className="hero-copy">
              <p className="eyebrow">Gilian / Software engineer / NL</p>
              <h1 id="hero-title">Hey, I&apos;m Gilian.<AnimatedName /></h1>
              <p className="hero-intro">
                I work mostly on backends, authentication and automation.
                Outside work, I build my own projects and run Discord and Twitch
                bots on a Raspberry Pi.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">What I&apos;m building<ArrowDownRight size={18} aria-hidden="true" /></a>
                <ExternalLink href="https://github.com/voxxai" className="text-link">GitHub</ExternalLink>
              </div>
              <p className="margin-note">There&apos;s usually music involved. U2, blues, or something much louder.</p>
            </div>
            <figure className="profile-block">
              <TiltPanel className="portrait-tilt">
                <div className="profile-offset" aria-hidden="true" />
                <div className="profile-image-wrap">
                  <Image src="/castle-portrait.webp" alt="Vox, my blond, hooded original character" fill priority sizes="(max-width: 760px) 80vw, 420px" className="profile-image" />
                </div>
                <span className="portrait-sidenote">The online face.</span>
              </TiltPanel>
              <figcaption><span>voxxai / VOX</span><ChaosSwitch /></figcaption>
            </figure>
          </section>

          <section className="work-section section-frame" id="work" aria-labelledby="current-title">
            <div className="section-heading">
              <div><p className="eyebrow">On my own time</p><h2 id="current-title">Currently building<span className="accent-dot">.</span></h2></div>
              <p>A project of my own, still taking shape.</p>
            </div>
            <TiltPanel className="current-project">
              <div className="current-copy">
                <div className="project-topline"><span>Personal project</span><span className="status-badge">In development</span></div>
                <h3>LifeQuest</h3>
                <p>I wanted a place to keep track of habits, walks and health data. That became LifeQuest: a habit tracker I&apos;m building for web and mobile.</p>
                <p>It&apos;s an early MVP. You can set your own habits and goals, log your progress, and install it as a PWA.</p>
                <ul className="tech-list" aria-label="LifeQuest technologies"><li>Next.js</li><li>TypeScript</li><li>Supabase</li><li>PWA</li></ul>
                <ProjectNote>I&apos;m building the tracker. Still have to do the walking myself.</ProjectNote>
                <p className="project-availability">Private source for now. I&apos;ll share more here as it develops.</p>
              </div>
              <figure className="project-preview">
                <a href="/lifequest-desktop.webp" target="_blank" rel="noreferrer" aria-label="Open full LifeQuest dashboard screenshot in a new tab">
                  <Image src="/lifequest-desktop.webp" alt="LifeQuest dashboard showing habit tracking and an empty health log" width={1440} height={900} sizes="(max-width: 900px) 100vw, 700px" />
                  <span className="preview-open">View screenshot <ArrowUpRight size={14} aria-hidden="true" /></span>
                </a>
                <figcaption>From the current development build. <span>Click to take a closer look.</span></figcaption>
              </figure>
            </TiltPanel>

            <div className="earlier-heading"><h3>Earlier work</h3><p>Two school projects from before I graduated.</p></div>
            <div className="project-list">
              {projects.map((project, index) => (
                <TiltPanel key={project.name} className="archive-project">
                  <article>
                    <span className="project-number">0{index + 1}</span>
                    <div className="archive-title"><span className="project-kind">Archived / {project.language}</span><h4>{project.displayName}</h4></div>
                    <div className="archive-description"><p>{project.description}</p>
                      <details className="project-detail"><summary>A little context <span aria-hidden="true">+</span></summary><p>{project.note}</p></details>
                    </div>
                    <ExternalLink href={project.html_url} className="text-link">Source</ExternalLink>
                  </article>
                </TiltPanel>
              ))}
            </div>
          </section>

          <section className="about-section section-frame" id="about" aria-labelledby="about-title">
            <div className="about-lead"><p className="eyebrow">A bit about me</p><h2 id="about-title">Gilian, away<br />from the editor.</h2><span className="small-aside">Still probably near a screen.</span></div>
            <div className="about-copy">
              <p className="about-statement">I graduated in Computer Science at Hogeschool Rotterdam. I now work as a software engineer at Spaux.</p>
              <p>I like understanding what happens behind an interface: where the data goes, how a login works, and what connects one system to another. That&apos;s where most of my work ends up.</p>
              <p>At home, my Raspberry Pi runs my Discord and Twitch bots. I also game, stream, watch anime and follow new hardware. Music goes from U2 and Joe Bonamassa to hardcore and uptempo, depending on the day.</p>
              <div className="desk-notes" aria-label="Outside work">
                <div><span>On the Pi</span><p>Docker, Discord &amp; Twitch bots</p></div>
                <div><span>In the rotation</span><p>Warframe, Call of Duty &amp; Minecraft</p></div>
                <div><span>In my headphones</span><p>U2, blues, hardcore &amp; uptempo</p></div>
              </div>
            </div>
          </section>

          <section className="toolkit-section section-frame" aria-labelledby="toolkit-title">
            <h2 id="toolkit-title">Tools I use</h2>
            <p>Next.js &amp; TypeScript for my web projects. Laravel and APIs on the backend. PostgreSQL for data. Docker, Linux and Git to keep things running.</p>
            <span className="small-aside">Currently learning Rust, too.</span>
          </section>

          <section className="contact-section section-frame" id="contact" aria-labelledby="contact-title">
            <p className="eyebrow">Say hello</p>
            <div className="contact-layout">
              <h2 id="contact-title">Want to talk?</h2>
              <div className="contact-copy"><p>About a project, something I&apos;ve built, or your own Raspberry Pi setup. Send me a message.</p>
                <a className="email-link" href="mailto:contact@voxxai.dev">contact@voxxai.dev<ArrowUpRight aria-hidden="true" size={24} /></a>
                <div className="social-links"><ExternalLink href="https://github.com/voxxai"><Github size={17} aria-hidden="true" />GitHub</ExternalLink><a href="mailto:contact@voxxai.dev"><Mail size={17} aria-hidden="true" />Email</a></div>
              </div>
            </div>
          </section>
        </main>
        <footer className="site-footer section-frame"><span>© {new Date().getFullYear()} Voxxai</span><span>Built here. Still tinkering.</span><a href="/privacy.html" lang="nl">Privacy &amp; cookies</a><a href="#top">Back up ↑</a></footer>
      </div>
    </PortfolioExperience>
  );
}
