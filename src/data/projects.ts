export type RepoCard = {
  name: string;
  description: string;
  html_url: string;
  language: string;
  archived: boolean;
};

export const projects: RepoCard[] = [
  {
    name: "ProjectC",
    description:
      "School platform, full stack: events, news, profiles, and a login with 2FA. CRA, Node, Express, MySQL.",
    html_url: "https://github.com/voxxai/ProjectC",
    language: "JavaScript",
    archived: true,
  },
  {
    name: "Django_Project",
    description:
      "A Django learning build: CRUD, classic templates, and Django's own auth flows.",
    html_url: "https://github.com/voxxai/Django_Project",
    language: "Python",
    archived: true,
  },
];
