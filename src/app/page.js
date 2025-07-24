"use client";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  // Dummy data for now
  const posts = [
    {
      id: 1,
      title: "Lost Wallet near Mahakal Mandir",
      description: "Brown leather wallet with ID cards",
      importance: "Super Important",
      type: "Lost",
      image: "/logo.png",
      tags: ["wallet", "document"]
    },
    {
      id: 2,
      title: "Found Child - Blue Shirt",
      description: "Found a child wearing blue shirt near river",
      importance: "Emergency",
      type: "Found",
      image: "/logo.png",
      tags: ["child"]
    }
  ];

  const importanceColors = {
    Important: "bg-yellow-200 text-yellow-800",
    "Super Important": "bg-orange-200 text-orange-800",
    Emergency: "bg-red-200 text-red-800",
  };

  return (
    <main className="p-4 max-w-4xl mx-auto">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Simhastha Community Feed</h1>
        <button
          onClick={() => router.push("/auth")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Sign In / Sign Up
        </button>
      </div>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search by tags or keywords..."
        className="w-full border p-2 rounded-lg mb-4"
      />

      {/* Filter buttons */}
      <div className="flex gap-2 mb-4">
        <button className="px-3 py-1 bg-gray-200 rounded">All</button>
        <button className="px-3 py-1 bg-gray-200 rounded">Lost</button>
        <button className="px-3 py-1 bg-gray-200 rounded">Found</button>
        <button className="px-3 py-1 bg-gray-200 rounded">Missing Children</button>
      </div>

      {/* Post cards */}
      <div className="mt-6 grid gap-4">
        {posts.map((post) => (
          <div key={post.id} className="border rounded-xl p-4 shadow hover:shadow-lg transition">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-40 object-cover rounded-lg mb-2"
            />
            <h2 className="font-bold text-lg">{post.title}</h2>
            <p className="text-sm text-gray-700">{post.description}</p>

            <div className="flex justify-between mt-2">
              <span
                className={`text-xs px-2 py-1 rounded ${importanceColors[post.importance]}`}
              >
                {post.importance}
              </span>
              <span className="text-xs text-gray-500">{post.type}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
