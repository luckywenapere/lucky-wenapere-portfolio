import { getPostSlugs, getPostHtml } from "@/lib/posts";
import PostPageClient from "./PostPageClient";

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(".md", ""),
  }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { meta, htmlContent } = await getPostHtml(params.slug);

  return (
    <PostPageClient meta={meta} htmlContent={htmlContent} />
  );
}