import React from 'react';
import { useQuery } from '@apollo/client';
import {gql,  DocumentNode } from '@apollo/client';
import client from './apollo';

const GET_POSTS: DocumentNode = gql `
  query GetPosts {
    posts {
      id
      title
      body
    }
  }
`;

function Posts() {
  const { loading, error, data } = useQuery(GET_POSTS, { client });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {data.posts.map((post: any) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
