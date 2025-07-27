import dbConnect from "../../../lib/mongodb";
import Post from "../../../lib/models/Post";


export async function POST(request) {
  await dbConnect();

  try {
    const body = await request.json();
    const { title, description, category } = body;

    if (!title || !description || !category) {
      return new Response(JSON.stringify({ error: "Missing fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const newPost = await Post.create({
      title,
      description,
      category,
      createdAt: new Date()
    });

    return new Response(JSON.stringify(newPost), {
      status: 201,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
