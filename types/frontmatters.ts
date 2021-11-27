import { ReadTimeResults } from "reading-time";

export type ContentType = 'blog' | 'library' | 'projects';

export type BlogFrontmatter = {
    wordCount: number;
    readingTime: ReadTimeResults;
    slug: string;
    englishOnly?: boolean;
    title: string;
    description: string;
    banner: string;
    publishedAt: string;
    lastUpdated?: string;
    tags: string;
};

export type LibraryFrontmatter = {
    slug: string;
    title: string;
    readingTime: ReadTimeResults;
    description: string;
    tags: string;
};

export type ProjectFrontmatter = {
    slug: string;
    title: string;
    publishedAt: string;
    lastUpdated?: string;
    description: string;
    category?: string;
    techs: string;
    banner: string;
    link?: string;
    github?: string;
    youtube?: string;
};

export type PickFrontmatter<T extends ContentType> = T extends 'blog'
  ? BlogFrontmatter
  : T extends 'library'
  ? LibraryFrontmatter
  : ProjectFrontmatter;

export type Frontmatter =
  | ProjectFrontmatter
  | BlogFrontmatter
  | LibraryFrontmatter;