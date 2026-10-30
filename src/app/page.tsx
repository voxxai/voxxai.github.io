import Image from "next/image";
import { elsewhere, identity, profiles } from "@/data/site";
import { skillsByCategory } from "@/data/skills";
import { IndexList } from "@/components/IndexList";
import { ProjectList } from "@/components/ProjectList";
import { Rail } from "@/components/Rail";
import { Section } from "@/components/Section";
import { TextLink } from "@/components/TextLink";

export default function HomePage() {
  return (
    <div
      id="top"
      className="mx-auto grid w-[min(1080px,calc(100%-2rem))] md:grid-cols-[11.5rem_minmax(0,1fr)] md:gap-x-12"
    >
      <Rail />

      <div className="pb-16 md:pb-20">
        <main id="content" tabIndex={-1}>
          <section
            className="grid items-start gap-10 py-10 md:grid-cols-[minmax(0,1fr)_minmax(220px,300px)] md:gap-12 md:py-16"
            aria-labelledby="hero-title"
          >
            <div className="max-w-measure md:order-none order-2">
              <h1
                id="hero-title"
                className="m-0 font-serif text-[clamp(2.45rem,5vw,3.7rem)] font-normal leading-[1.08] tracking-tight text-balance"
              >
                Software, mostly the quiet parts.
              </h1>
              <p className="mt-6 text-[1.075rem] leading-7">
                I&apos;m {identity.givenName}. Online, I&apos;m {identity.handle}.
                I build web apps in the {identity.location}, and I care about
                the pieces that have to keep working: auth, data, deploys, and
                the screen on top of them.
              </p>
              <p className="mt-6">
                <a
                  href="#work"
                  className="underline decoration-signal decoration-1 underline-offset-[0.22em] hover:text-signal"
                >
                  See the work
                </a>
              </p>
            </div>

            <figure className="order-1 w-full max-w-[240px] md:order-none md:max-w-none md:justify-self-end">
              <div className="border-t-2 border-signal">
                <Image
                  src="/castle-portrait.webp"
                  alt="Vox, a blond original character in a black hooded jacket with red accents. Voxxai uses this drawing as an avatar."
                  width={900}
                  height={900}
                  priority
                  sizes="(max-width: 768px) 240px, 300px"
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-3 font-serif text-[0.98rem] italic leading-snug text-mute">
                Vox. The drawing I use instead of a photo.
              </figcaption>
            </figure>
          </section>

          <Section
            id="work"
            title="Work"
            lede="Two public builds. Both archived. The source is open, no account needed."
          >
            <ProjectList />
          </Section>

          <Section id="about" title="About">
            <div className="max-w-measure space-y-4">
              <p className="font-serif text-xl leading-snug">
                I graduated in Computer Science at Hogeschool Rotterdam and now
                build software professionally.
              </p>
              <p className="text-mute">
                I like code that is still readable six months later, and
                interfaces that get out of the way. Most of the real choices
                sit between the frontend and the database.
              </p>
              <p className="text-mute">
                Away from the job: games, hardware, anime, music with an
                unreasonable BPM, and a Raspberry Pi collecting jobs it
                wasn&apos;t bought for. I stream on Twitch.
              </p>
            </div>
          </Section>

          <Section
            id="toolkit"
            title="Toolkit"
            lede="What I reach for when something has to ship. It moves when the problem does."
          >
            <IndexList
              rows={skillsByCategory.map((group) => ({
                label: group.category,
                detail: group.items.join(", "),
              }))}
            />
          </Section>

          <Section id="elsewhere" title="Elsewhere">
            <IndexList rows={elsewhere} />
          </Section>

          <Section
            id="contact"
            title="Contact"
            lede="Code, a project, or a homelab idea that is already a bit cursed."
          >
            <p>
              <TextLink
                href={`mailto:${identity.email}`}
                className="font-serif text-[clamp(1.45rem,3vw,2.15rem)] leading-tight [overflow-wrap:anywhere]"
              >
                {identity.email}
              </TextLink>
            </p>
            <ul className="m-0 mt-6 flex list-none flex-wrap gap-x-6 p-0">
              {profiles
                .filter((profile) => !profile.href.startsWith("mailto:"))
                .map((profile) => (
                  <li key={profile.href}>
                    <TextLink href={profile.href} className="inline-flex min-h-11 items-center">
                      {profile.label}
                    </TextLink>
                  </li>
                ))}
            </ul>
          </Section>
        </main>

        <footer className="mt-4 flex flex-wrap items-center gap-x-6 border-t border-line py-6 text-sm text-mute">
          <span>© {new Date().getFullYear()} Voxxai</span>
          <span>Designed and built by Voxxai</span>
          <a
            href="#top"
            className="inline-flex min-h-11 items-center text-fg no-underline hover:text-signal"
          >
            Back to top
          </a>
          <a
            href="/privacy.html"
            lang="nl"
            className="inline-flex min-h-11 items-center text-fg underline decoration-signal decoration-1 underline-offset-[0.22em] hover:text-signal"
          >
            Privacy &amp; cookies
          </a>
        </footer>
      </div>
    </div>
  );
}
