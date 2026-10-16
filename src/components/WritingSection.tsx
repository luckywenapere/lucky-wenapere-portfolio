import Link from "next/link";
import { formatDate } from "@/lib/formatDate";

interface WritingSectionProps {
  posts: Array<{
    slug: string;
    title: string;
    date: string;
    excerpt: string;
  }>;
}

export default function WritingSection({ posts }: WritingSectionProps) {
  return (
    <section
      id="writing"
      className="mx-auto max-w-2xl scroll-mt-24 px-6 py-16 text-center"
    >
      <div className="flex flex-col items-center">
        <h2 className="eyebrow">Writing</h2>
        <div className="mt-4 h-px w-10 bg-[var(--line)]" />
      </div>

      <ul className="mt-10 space-y-10">
        {posts.map((post) => (
          <li key={post.slug}>
            <p className="ui text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
              {formatDate(post.date)}
            </p>
            <h3 className="mt-3 text-balance text-[1.5rem] leading-8 tracking-[-0.01em] text-[var(--foreground)]">
              <Link
                href={`/posts/${post.slug}`}
                className="text-[var(--foreground)]"
              >
                {post.title}
              </Link>
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-pretty text-[1.05rem] leading-8 text-[var(--muted)]">
              {post.excerpt}
            </p>
          </li>
        ))}
      </ul>

      <Link href="/posts" className="ui mt-12 inline-block text-[0.95rem]">
        All writing →
      </Link>
    </section>
  );
}
