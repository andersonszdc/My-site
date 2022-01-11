export type ContentType = 'blog' | 'library' | 'projects';

export type BlogFrontmatter = {
    wordCount?: number;
    slug?: string;
    title: string;
    description: string;
    banner?: string;
    publishedAt?: string;
    lastUpdated?: string;
    tags?: string;
};

export type ProjectFrontmatter = {
    slug: string;
    title: string;
    description: string;
    category?: string;
    techs: string;
    link?: string;
    github?: string;
    cover: string;
};

export type PickFrontmatter<T extends ContentType> = T extends 'blog'
  ? BlogFrontmatter
  : ProjectFrontmatter;

export type Frontmatter = ProjectFrontmatter | BlogFrontmatter;