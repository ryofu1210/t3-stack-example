import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello.query({ text: "from tRPC" });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <h1>{hello.greeting}</h1>
      <PostList />
    </main>
  );
}

async function PostList() {
  const postList = await api.post.getPostList.query();

  return (
    <div className="w-full max-w-xs">
      {postList.map((post) => (
        <p key={post.id}>{post.name}</p>
      ))}

      <CreatePost />
    </div>
  );
}
