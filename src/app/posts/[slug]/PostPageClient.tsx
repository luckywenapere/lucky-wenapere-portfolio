import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { formatDate } from "@/lib/formatDate";

interface PostProps {
  meta: {
    title: string;
    date: string;
    author: string;
  };
  htmlContent: string;
}

export default function PostPageClient({ meta, htmlContent }: PostProps) {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Header />

      <main className="mx-auto max-w-3xl px-6 py-10">
        <p className="ui text-[0.92rem] text-[var(--muted)]">
          <Link href="/posts">Back to writing</Link>
        </p>
        <h1 className="ui mt-5 text-3xl font-semibold leading-tight text-[var(--foreground)] sm:text-4xl">
          {meta.title}
        </h1>
        <p className="ui mt-3 text-[0.92rem] text-[var(--muted)]">
          {formatDate(meta.date)} · {meta.author}
        </p>

        <article className="mt-8">
          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </article>
      </main>

      <Footer />
    </div>
  );
}
