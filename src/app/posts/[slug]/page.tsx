import { getPostSlugs, getPostHtml } from "@/lib/posts";

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug: slug.replace(".md", "") }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { meta, htmlContent } = await getPostHtml(params.slug);

  return (
    <article>
      <h1>{meta.title}</h1>
      <p>{meta.date} — {meta.author}</p>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </article>
  );
}