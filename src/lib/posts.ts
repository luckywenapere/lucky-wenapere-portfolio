import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "src/posts");

export interface PostMeta {
  title: string;
  date: string;
  author: string;
}

export function getPostSlugs(): string[] {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  const meta: PostMeta = {
    title: data.title,
    date: data.date,
    author: data.author,
  };

  return {
    slug: realSlug,
    meta,
    content,
  };
}

export async function getPostHtml(slug: string) {
  const { meta, content } = getPostBySlug(slug);

  const processed = await remark().use(html).process(content);
  const htmlContent = processed.toString();

  return {
    meta,
    htmlContent,
  };
}

export function getAllPosts() {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .sort((a, b) => (a.meta.date > b.meta.date ? -1 : 1));
}