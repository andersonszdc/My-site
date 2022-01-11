import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import {
  ContentType,
  Frontmatter,
  PickFrontmatter,
} from "../types/frontmatters";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import matter from "gray-matter";
import { compile } from "@mdx-js/mdx";

export async function getFiles(type: ContentType) {
  return readdirSync(join(process.cwd(), "contents", type));
}

export async function getFileBySlug(type: ContentType, slug: string) {

  const source = readFileSync(
    join(process.cwd(), "contents", type, `${slug}.mdx`),
    "utf8"
  );

  const { content, data } = matter(source);

  const mdxSource = await compile(content, {
    rehypePlugins: [
      rehypeSlug,
      rehypePrism,
      [rehypeAutolinkHeadings, { properties: { className: ["hash-anchor"] } }],
    ],
    outputFormat: "function-body",
  });

  return { mdxSource: String(mdxSource), data };
}

export async function getAllFilesFrontmatter<T extends ContentType>(type: T) {
  const files = readdirSync(join(process.cwd(), "contents", type));

  return files.reduce((allPosts: Array<PickFrontmatter<T>>, postSlug) => {
    const source = readFileSync(
      join(process.cwd(), "contents", type, postSlug),
      "utf8"
    );
    const { data } = matter(source);

    const res = [
      {
        ...(data as PickFrontmatter<T>),
        slug: postSlug.replace(".mdx", ""),
      },
      ...allPosts,
    ];
    return res;
  }, []);
}

export function getFeatured<T extends Frontmatter>(
  contents: Array<T>,
  features: string[]
) {
  return features.map(
    (feat) => contents.find((content) => content.slug === feat) as T
  );
}
