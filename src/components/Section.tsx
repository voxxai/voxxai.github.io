import type { ReactNode } from "react";

export function Section({
  id,
  title,
  lede,
  children,
}: {
  id: string;
  title: string;
  lede?: string;
  children: ReactNode;
}) {
  const headingId = `${id}-title`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="scroll-mt-48 border-t border-line py-14 md:scroll-mt-8 md:py-16"
    >
      <h2
        id={headingId}
        className="m-0 font-serif text-[2rem] font-normal leading-tight tracking-tight text-balance md:text-[2.35rem]"
      >
        {title}
      </h2>
      {lede ? (
        <p className="mt-3 max-w-measure text-[1.0625rem] leading-7 text-mute">
          {lede}
        </p>
      ) : null}
      <div className={lede ? "mt-8" : "mt-6"}>{children}</div>
    </section>
  );
}
