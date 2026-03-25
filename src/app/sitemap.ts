import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const latestPostDate = posts[0]?.meta.date;

  return [
    {
      url: absoluteUrl("/"),
      lastModified: latestPostDate ? new Date(`${latestPostDate}T00:00:00`) : undefined,
    },
    {
      url: absoluteUrl("/posts"),
      lastModified: latestPostDate ? new Date(`${latestPostDate}T00:00:00`) : undefined,
    },
    ...posts.map((post) => ({
      url: absoluteUrl(`/posts/${post.slug}`),
      lastModified: new Date(`${post.meta.date}T00:00:00`),
    })),
  ];
}
