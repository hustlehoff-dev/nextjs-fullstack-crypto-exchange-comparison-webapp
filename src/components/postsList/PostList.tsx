import "./PostList.scss";
import { Post } from "@/lib/types";

interface PostProps {
  posts: Post[];
}

export default function PostList({ posts }: PostProps) {
  return (
    <section className="postlist-wrapper">
      <h2>BLOG</h2>
      <div className="postlist">
        {posts?.map((post) => (
          <article className="post-card" key={post.id}>
            {post.featuredImage?.node?.sourceUrl && (
              <img
                className="post-image"
                src={post.featuredImage.node.sourceUrl}
                alt={post.featuredImage.node.altText || post.title}
              />
            )}
            <h2 className="post-title">{post.title}</h2>
            <div
              className="post-excerpt"
              dangerouslySetInnerHTML={{ __html: post.excerpt }}
            />
            <div className="post-meta">
              <span className="post-date">
                {new Date(post.date).toLocaleDateString("pl-PL")}
              </span>
              <span className="post-author">🖊 {post.author?.node?.name}</span>
            </div>
            {/* Możesz wrzucić button do pojedynczego posta */}
            <a href={`/blog/${post.slug}`} className="read-more">
              Czytaj więcej →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
