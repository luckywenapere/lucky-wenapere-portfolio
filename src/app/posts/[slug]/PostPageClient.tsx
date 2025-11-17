"use client";

import { useState } from "react";
import NewsletterModal from "@/components/NewsletterModal";
import Link from "next/link";
import { PostMeta } from "@/lib/posts";

interface PostPageClientProps {
  meta: PostMeta;
  htmlContent: string;
}

export default function PostPageClient({ meta, htmlContent }: PostPageClientProps) {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {!subscribed && <NewsletterModal onSuccess={() => setSubscribed(true)} />}

      <Link
        href="/posts"
        className="text-yellow-400 hover:underline mb-6 inline-block"
      >
        ← Back to Blog
      </Link>

      {subscribed && (
        <article className="max-w-3xl mx-auto px-6 py-12 prose prose-lg dark:prose-invert">
          <h1 className="text-4xl font-bold mb-4">{meta.title}</h1>
          <p className="text-sm text-gray-500 mb-8">
            {meta.date} — {meta.author}
          </p>
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </article>
      )}

      <Link
        href="/"
        className="text-yellow-400 hover:underline mt-8 inline-block"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
