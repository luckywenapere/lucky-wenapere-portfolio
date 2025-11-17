import { getPostSlugs, getPostHtml } from "@/lib/posts";
import Link from "next/link";
import Header from "@/components/Header";


export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug: slug.replace(".md", "") }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { meta, htmlContent } = await getPostHtml(params.slug);

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <Link
        href="/posts"
        className="text-yellow-400 hover:underline mb-6 inline-block"
      >
        <h3>← Back to Blog</h3>
      </Link>

      <article className="max-w-3xl mx-auto px-6 py-12 prose prose-lg dark:prose-invert">
        <h1 className="text-4xl font-bold mb-4">{meta.title}</h1>
        <p className="text-sm text-gray-500 mb-8">{meta.date} — {meta.author}</p>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </article>

    <Link
        href="/"
        className="text-yellow-400 hover:underline mt-8 inline-block"
      >
        ← Back to Home
      </Link>
    </div>
  );
}