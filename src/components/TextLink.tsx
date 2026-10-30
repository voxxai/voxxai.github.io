import type { ReactNode } from "react";

const linkClass =
  "underline decoration-oxide decoration-1 underline-offset-[0.22em] hover:text-brass";

export function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const external = /^https?:\/\//.test(href);

  return (
    <a
      href={href}
      className={`${linkClass} ${className}`.trim()}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
      {external ? (
        <span className="sr-only"> (opens in a new tab)</span>
      ) : null}
    </a>
  );
}
