import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Github, Mail } from "lucide-react";
import { projects } from "@/data/projects";
import { ExperienceNavigation } from "@/components/ExperienceNavigation";
import { Soundtrack } from "@/components/Soundtrack";
import { AnimatedName, ChaosSwitch, PortfolioExperience, ProjectNote, TiltPanel, Wordmark } from "@/components/PortfolioExperience";

function ExternalLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return <a href={href} target="_blank" rel="noreferrer" className={className}>{children}<ArrowUpRight aria-hidden="true" size={16} /></a>;
}

function GlitchTitle({ children, id, className = "" }: { children: string; id: string; className?: string }) {
  return <h2 id={id} className={`glitch-title ${className}`}>{children}<span className="glitch-copy" aria-hidden="true">{children}</span></h2>;
}

export default function HomePage() {
  return <PortfolioExperience>
    <div className="experience-shell">
      <a className="skip-link" href="#work">Skip to projects</a>
      <header className="experience-header">
        <Wordmark />
        <nav aria-label="Quick navigation"><a href="#work">Work</a><a href="#contact">Contact</a></nav>
        <ChaosSwitch />
      </header>
      <main id="main">
        <section className="chapter chapter-intro" id="top" aria-labelledby="intro-title">
          <div className="intro-grid chapter-inner">
            <div className="intro-copy">
              <p className="chapter-kicker">01 / Gilian. Online as Voxxai.</p>
              <h1 id="intro-title">Software engineer.<AnimatedName /></h1>
              <p className="chapter-description">I build software, run my own bots and spend plenty of time gaming. This is where it all comes together.</p>
              <div className="chapter-actions"><a href="#work" className="button button-primary">Enter my world <ArrowDownRight size={18} aria-hidden="true" /></a><ExternalLink href="https://github.com/voxxai" className="text-link">GitHub</ExternalLink></div>
              <p className="intro-signature">Gilian <span>/</span> Voxxai <span>/</span> VOX</p>
            </div>
            <TiltPanel className="intro-portrait">
              <div className="portrait-orbit" aria-hidden="true" />
              <div className="intro-image"><Image src="/castle-portrait.webp" alt="Vox, the blond hooded original character I use for Voxxai" fill priority sizes="(max-width:760px) 90vw, 50vw" /></div>
              <span className="portrait-tag">MY OC / MY ONLINE FACE</span>
            </TiltPanel>
          </div>
          <span className="chapter-background-word" aria-hidden="true">VOX</span>
        </section>

        <section className="chapter chapter-work" id="work" aria-labelledby="work-title">
          <div className="chapter-inner">
            <div className="work-heading"><div><p className="chapter-kicker">02 / The engineer</p><GlitchTitle id="work-title">Things I build.</GlitchTitle></div><p>Backends, authentication, automation.<br />And projects I can use myself.</p></div>
            <TiltPanel className="work-feature">
              <div className="work-copy">
                <div className="project-topline"><span>Personal project</span><span className="status-badge">In development</span></div>
                <h3>LifeQuest.</h3>
                <p>I wanted a place to track habits, walks and health data. That became LifeQuest: a habit tracker I&apos;m building for web and mobile.</p>
                <p>It&apos;s an early MVP, with personal habits, goals, progress logging and an installable PWA.</p>
                <ul className="tech-list" aria-label="LifeQuest technologies"><li>Next.js</li><li>TypeScript</li><li>Supabase</li><li>PWA</li></ul>
                <ProjectNote>I&apos;m building the tracker. Still have to do the walking myself.</ProjectNote>
                <p className="private-source">Private source for now.</p>
              </div>
              <figure className="work-screenshot"><a href="/lifequest-desktop.webp" target="_blank" rel="noreferrer" aria-label="Open full LifeQuest screenshot in a new tab"><Image src="/lifequest-desktop.webp" alt="LifeQuest development dashboard with habit tracking and an empty health log" width={1440} height={900} sizes="(max-width:900px) 90vw, 55vw" /><span>Development build <ArrowUpRight size={14} aria-hidden="true" /></span></a></figure>
            </TiltPanel>
            <details className="work-archive"><summary>Earlier work &amp; my toolkit <span aria-hidden="true">+</span></summary>
              <div className="archive-content">{projects.map(project=><article key={project.name}><div><span>Archived school project / {project.language}</span><h4>{project.displayName}</h4></div><p>{project.description}</p><ExternalLink href={project.html_url} className="text-link">Source</ExternalLink></article>)}
                <p className="toolkit-copy">My usual tools: Next.js, TypeScript, Laravel, APIs, PostgreSQL, Docker, Linux and Git. I&apos;m also learning Rust.</p>
              </div>
            </details>
          </div>
        </section>

        <section className="chapter chapter-uriel" id="warframe" aria-labelledby="uriel-title">
          <div className="scene-image uriel-image"><Image src="/uriel-reference.webp" alt="Uriel standing in a fiery orange Warframe scene" fill sizes="100vw" /></div>
          <div className="scene-shade" aria-hidden="true" />
          <div className="ember-field" aria-hidden="true">{Array.from({length:12},(_,i)=><i key={i} style={{"--x":`${8+i*7}%`,"--delay":`${i*60}ms`} as React.CSSProperties} />)}</div>
          <div className="chapter-inner scene-copy">
            <p className="chapter-kicker">03 / Warframe</p>
            <h2 id="uriel-title" className="glitch-title">URIEL<span className="glitch-copy" aria-hidden="true">URIEL</span><span className="title-period">.</span></h2>
            <p className="scene-subtitle">My main.</p>
            <p className="chapter-description">Warframe is one of the games I keep coming back to. Uriel is my go-to. CoD, Minecraft and plenty of other games get time too.</p>
            <div className="scene-tags"><span>Warframe</span><span>Uriel main</span><span>PC &amp; consoles</span></div>
            <p className="scene-note image-credit">Uriel / Warframe · Reference image, not my own Fashionframe.</p>
          </div>
          <span className="scene-edge-label" aria-hidden="true">FIRE IN THE FRAME / VOXXAI</span>
        </section>

        <section className="chapter chapter-jinx" id="jinx" aria-labelledby="jinx-title">
          <div className="jinx-backdrop" aria-hidden="true" />
          <div className="scene-image jinx-image"><Image src="/jinx-arcane.webp" alt="Jinx from Arcane, wearing a hood, with blue and purple hair" fill sizes="(max-width:760px) 100vw, 55vw" /></div>
          <div className="jinx-paint" aria-hidden="true"><span>×</span><span>×</span><i /></div>
          <div className="chapter-inner scene-copy jinx-copy">
            <p className="chapter-kicker">04 / Jinx. Arcane.</p>
            <h2 id="jinx-title" className="glitch-title">JINX<span className="glitch-copy" aria-hidden="true">JINX</span><span className="title-period">.</span></h2>
            <p className="scene-subtitle">The favourite.</p>
            <p className="chapter-description">Jinx is my favourite character. That mix of colour, rough edges and chaos has a place here too.</p>
            <p className="jinx-personal-note">Vox is my own character.<br />Jinx is the favourite.</p>
            <p className="scene-note image-credit">Jinx / Arcane · Character artwork.</p>
          </div>
          <span className="scene-edge-label" aria-hidden="true">A LITTLE CHAOS LOOKS GOOD HERE.</span>
        </section>

        <section className="chapter chapter-soundtrack" id="soundtrack" aria-label="The soundtrack"><div className="chapter-inner"><Soundtrack /></div></section>

        <section className="chapter chapter-about" id="about" aria-labelledby="about-title">
          <div className="chapter-inner about-grid">
            <div className="about-introduction"><p className="chapter-kicker">06 / Behind Voxxai</p><h2 id="about-title">Still Gilian.</h2><p className="chapter-description">I graduated in Computer Science at Hogeschool Rotterdam in 2026. I now work as a software engineer at Spaux.</p><p>I like understanding what happens behind an interface: where the data goes, how a login works, and how the systems connect.</p><span className="hand-signature">Gilian <i>/</i> Voxxai</span></div>
            <div className="about-details">
              <div className="pi-note"><span className="small-label">At home / Raspberry Pi 5</span><h3>The bots live here.</h3><p>My Pi runs my Discord and Twitch bots with Docker and Linux. They&apos;re part of my own stream setup. I stream as Voxxai; the character, the projects and the stream all belong here.</p><div className="pi-ports" aria-hidden="true"><i /><i /><i /><span>VOX / HOME</span></div></div>
              <div className="contact-block" id="contact"><span className="small-label">Get in touch</span><h3>Want to talk?</h3><p>About a project, something I&apos;ve built, or your own setup. Send me a message.</p><a href="mailto:contact@voxxai.dev" className="email-link">contact@voxxai.dev <ArrowUpRight size={20} aria-hidden="true" /></a><div className="social-links"><ExternalLink href="https://github.com/voxxai"><Github size={16} aria-hidden="true" />GitHub</ExternalLink><a href="mailto:contact@voxxai.dev"><Mail size={16} aria-hidden="true" />Email</a></div></div>
            </div>
            <footer className="experience-footer"><span>© {new Date().getFullYear()} Voxxai / VOX</span><a href="/privacy.html" lang="nl">Privacy &amp; cookies</a><a href="#top">Back to the beginning ↑</a></footer>
          </div>
        </section>
      </main>
      <ExperienceNavigation />
    </div>
  </PortfolioExperience>;
}
