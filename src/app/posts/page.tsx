import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import Header from "@/components/Header";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <Link href="/">
        <h3>← Back to Home</h3>
      </Link>

      <h1 className="text-4xl font-bold mb-8">Welcome to my blog where I document my life and the lessons I learn along the way.</h1>

      <ul className="space-y-8">
        {posts.map((post) => (
          <li key={post.slug} className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <Link href={`/posts/${post.slug}`}>
              <h2 className="text-2xl font-semibold mb-2 hover:text-yellow-400">{post.meta.title}</h2>
            </Link>
            <p className="text-sm text-gray-500">{post.meta.date} — {post.meta.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}