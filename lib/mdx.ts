import {readdirSync, readFileSync} from 'fs';
import { join } from 'path';
import { bundleMDX } from 'mdx-bundler';
import readingTime from 'reading-time';
import { ContentType, Frontmatter, PickFrontmatter } from '../types/frontmatters';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import matter from 'gray-matter';
import { BlogFrontmatter } from '../types/frontmatters';

export async function getFiles(type: ContentType) {
    return readdirSync(join(process.cwd(), 'contents', type))
}

export async function getFileBySlug(type: ContentType, slug: string) {
    const source = slug
    ? readFileSync(
        join(process.cwd(), 'contents', type, `${slug}.mdx`),
        'utf8'
    ) : readFileSync(
        join(process.cwd(), 'contents', `${type}.mdx`),
        'utf8'
    )

    const {code, frontmatter}: any = await bundleMDX({
        source,
        xdmOptions(options) {
            options.rehypePlugins = [
              ...(options?.rehypePlugins ?? []),
              rehypeSlug,
              rehypePrism,
              [
                rehypeAutolinkHeadings,
                {
                  properties: {
                    className: ['hash-anchor'],
                  },
                },
              ],
            ];
            return options;
        },
    })

    return {
        code,
        frontmatter: {
            wordCount: source.split(/\s+/gu).length,
            readingTime: readingTime(source),
            slug: slug || null,
            ...frontmatter
        },
    };
}

export async function getAllFilesFrontmatter<T extends ContentType>(type: T) {
  const files = readdirSync(join(process.cwd(), 'contents', type))

  return files.reduce((allPosts: Array<PickFrontmatter<T>>, postSlug) => {
    const source = readFileSync(
      join(process.cwd(), 'contents', type, postSlug),
      'utf8'
    )
    const { data } = matter(source)

    const res = [
      {
        ...(data as PickFrontmatter<T>),
        slug: postSlug.replace('.mdx', ''),
        readingTime: readingTime(source)
      },
      ...allPosts,
    ];
    return res
  }, [])
}

export function getFeatured<T extends Frontmatter>(
  contents: Array<T>,
  features: string[]
) {
  return features.map(
    (feat) => contents.find((content) => content.slug === feat) as T
  );
}

export function getTags<T extends Array<BlogFrontmatter>>(contents: T) {

  return 'tags';
}