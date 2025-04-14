import { gql, GraphQLClient } from "graphql-request";
import { Post } from "./types";

const baseUrl = process.env.RDS_URL;
const client = new GraphQLClient(`${baseUrl}/graphql`);
console.log(client);
export async function getPosts(): Promise<Post[]> {
  const query = gql`
    query GetPosts {
      posts {
        nodes {
          id
          title
          slug
          excerpt
          date
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          author {
            node {
              name
            }
          }
        }
      }
    }
  `;

  try {
    const data: { posts: { nodes: Post[] } } = await client.request(query);
    if (!data.posts || !data.posts.nodes) {
      console.error("❌ GraphQL response is missing posts.nodes", data);
      return [];
    }
    return data.posts.nodes;
  } catch (err) {
    console.error("❌ GraphQL Fetch Error:", err);
    return [];
  }
}
