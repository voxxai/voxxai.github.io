import { projects } from "@/data/projects";
import { TextLink } from "@/components/TextLink";

export function ProjectList() {
  return (
    <ol className="m-0 list-none border-t border-line p-0">
      {projects.map((project) => (
        <li key={project.name} className="border-b border-line py-6 md:py-7">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <h3 className="m-0 font-serif text-[1.65rem] font-normal leading-tight">
              <TextLink href={project.html_url}>{project.title}</TextLink>
            </h3>
            <p className="m-0 text-sm text-mute">
              {project.language}
              {project.archived ? " · Archived" : ""}
            </p>
          </div>
          <p className="mt-2 text-sm text-mute">{project.kind}</p>
          <p className="mt-3 max-w-measure text-[1.0625rem] leading-7">
            {project.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
