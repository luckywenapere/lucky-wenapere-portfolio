"use client";

import { useState } from "react";

type Props = {
  onSuccess: () => void;
};

export default function NewsletterModal({ onSuccess }: Props) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Failed to subscribe");

      setSubscribed(true);
      onSuccess(); // unlock the post
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    }
  };

  if (subscribed) return null; // hide modal after success

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-8 rounded-lg max-w-md w-full shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
          onClick={() => setSubscribed(true)} // optional: allow closing
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4">Subscribe to view this post</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border p-2 rounded"
          />
          <button
            type="submit"
            className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-300"
          >
            Subscribe
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
    </div>
  );
}