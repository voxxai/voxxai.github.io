export type RepoCard = {
  name: string;
  displayName: string;
  description: string;
  note: string;
  html_url: string;
  language: string;
  archived: boolean;
};

export const projects: RepoCard[] = [
  {
    name: "ProjectC",
    displayName: "Project C",
    description: "A school platform with events, news, profiles and two-factor authentication. Built with React, Express and MySQL.",
    note: "An earlier full-stack school build, with both the interface and the API in the same project. The original source is still public; the project is archived.",
    html_url: "https://github.com/voxxai/ProjectC",
    language: "JavaScript",
    archived: true,
  },
  {
    name: "Django_Project",
    displayName: "Learning Django",
    description: "A Python learning project using Django templates, authentication and the usual create, read, update and delete flows.",
    note: "This one was about learning Django's approach to web apps. It's an archived learning exercise, rather than a product I maintain today.",
    html_url: "https://github.com/voxxai/Django_Project",
    language: "Python",
    archived: true,
  },
];
