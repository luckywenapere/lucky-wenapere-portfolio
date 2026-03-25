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
    <section id="writing" className="mx-auto max-w-3xl scroll-mt-24 px-6 py-10">
      <div className="border-t border-[var(--line)] pt-8">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="ui text-[1.05rem] font-semibold text-[var(--foreground)]">
            Recent writing
          </h2>
          <Link href="/posts" className="ui text-[0.95rem]">
            All posts
          </Link>
        </div>

        <ul className="mt-6 space-y-6">
          {posts.map((post) => (
            <li key={post.slug} className="border-b border-[var(--line)] pb-6">
              <p className="ui text-[0.88rem] text-[var(--muted)]">
                {formatDate(post.date)}
              </p>
              <h3 className="ui mt-2 text-[1.35rem] font-semibold leading-7 text-[var(--foreground)]">
                <Link href={`/posts/${post.slug}`}>{post.title}</Link>
              </h3>
              <p className="mt-3 text-[1.05rem] leading-8 text-[var(--foreground)]">
                {post.excerpt}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
