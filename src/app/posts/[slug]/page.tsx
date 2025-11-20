import PostPageClient from "./PostPageClient";
import { getPostHtml } from "@/lib/posts";

interface Params {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: Params) {
  const { meta, htmlContent } = await getPostHtml(params.slug);

  return <PostPageClient meta={meta} htmlContent={htmlContent} />;
}