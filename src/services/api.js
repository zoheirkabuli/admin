import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
  query AllPosts {
    posts {
      id
      title
      author {
        fullName
      }
    }
  }
`;

export const GET_POST_BY_ID = gql`
  query getPost($id: ID!) {
    post(where: { id: $id }) {
      title
      slug
      content {
        html
      }
      featuredImage {
        url
      }
    }
  }
`;

export const PUBLISH_ASSET = gql`
  mutation PublishAsset($id: ID!) {
    publishAsset(where: { id: $id }, to: PUBLISHED) {
      id
      url(
        transformation: {
          image: { resize: { fit: scale, height: 225, width: 300 } }
        }
      )
    }
  }
`;

export const UPDATE_POST = gql`
  mutation UpdatePost(
    $id: ID!
    $featuredId: ID!
    $title: String!
    $newUrl: String!
  ) {
    updatePost(
      data: {
        featuredImage: { connect: { id: $featuredId } }
        title: $title
        url: $newUrl
      }
      where: { id: $id }
    ) {
      id
    }
  }
`;

export const PUBLISH_POST = gql`
  mutation PublishPost($id: ID!) {
    publishPost(where: { id: $id }, to: PUBLISHED) {
      title
      url
      content {
        html
      }
      featuredImage {
        url(
          transformation: {
            image: { resize: { fit: scale, height: 225, width: 300 } }
          }
        )
      }
      category {
        title
      }
    }
  }
`;
