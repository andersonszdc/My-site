export type ContentType = "projects";

type ProjectFrontmatter = {
  slug: string;
  title: string;
  description: string;
  category?: string;
  techs: string;
  link?: string;
  github?: string;
  cover: string;
};

export type Frontmatter = ProjectFrontmatter;
