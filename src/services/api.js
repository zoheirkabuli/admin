import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
  query getAllPosts {
    posts {
      id
      title
      url
      createdAt
      author {
        name
      }
    }
  }
`;
