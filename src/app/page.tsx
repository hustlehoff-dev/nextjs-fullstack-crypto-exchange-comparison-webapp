import Image from "next/image";
import { Footer } from "@/components/footer/Footer";
import PostList from "@/components/postsList/PostList";
import { getPosts } from "@/lib/queries";
import Nav from "@/components/nav/Nav";
import { Hero } from "@/components/hero/Hero";

export const revalidate = 60;

export default async function Home() {
  const posts = await getPosts();
  return (
    <div className="rds-app">
      <Nav />
      <main className="rds-main">
        <Hero />
        <PostList posts={posts} />
      </main>
      <Footer />
    </div>
  );
}
