import { identity, nav, profiles } from "@/data/site";
import { TextLink } from "@/components/TextLink";

export function Rail() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-ink py-5 md:flex md:h-screen md:max-h-screen md:flex-col md:self-start md:overflow-y-auto md:border-b-0 md:border-r md:py-8 md:pr-6">
      <a href="#top" className="font-serif text-[1.7rem] leading-none text-paper no-underline">
        voxxai
      </a>
      <p className="mt-3 text-sm leading-5 text-mute">
        <span className="md:block">{identity.role}</span>
        <span className="mx-1.5 md:hidden" aria-hidden="true">
          ·
        </span>
        <span className="md:block">{identity.location}</span>
      </p>

      <nav className="mt-4 md:mt-10" aria-label="Primary">
        <ul className="m-0 flex list-none flex-wrap gap-x-4 p-0 md:flex-col md:gap-x-0">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="inline-flex min-h-11 items-center text-paper no-underline hover:text-brass"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <ul className="m-0 mt-auto hidden list-none flex-col gap-1 p-0 md:flex">
        {profiles.map((profile) => (
          <li key={profile.href}>
            <TextLink href={profile.href}>{profile.label}</TextLink>
          </li>
        ))}
      </ul>
    </header>
  );
}
