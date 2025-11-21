"use client";

import { useState } from "react";
import NewsletterModal from "@/components/NewsletterModal";
import Link from "next/link";

interface PostProps {
  meta: {
    title: string;
    date: string;
    author: string;
  };
  htmlContent: string;
}

export default function PostPageClient({ meta, htmlContent }: PostProps) {
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {showModal && (
        <NewsletterModal onClose={() => setShowModal(false)} />
      )}

      <Link
        href="/posts"
        className="text-yellow-400 hover:underline mb-6 inline-block"
      >
        ← Back to Blog
      </Link>

      <article className="max-w-3xl mx-auto px-6 py-12 prose prose-lg dark:prose-invert">
        <h1 className="text-4xl font-bold mb-4">{meta.title}</h1>
        <p className="text-sm text-gray-500 mb-8">
          {meta.date} — {meta.author}
        </p>
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