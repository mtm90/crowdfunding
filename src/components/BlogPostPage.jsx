import React from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from '../data/BlogPosts';

const BlogPostPage = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <main className="blog-post-page">
      <h1>{post.title}</h1>
      <div className="image-container">
        <img src={post.imageUrl} alt={post.title} />
      </div>
      <div className="content">
        <p>{post.content}</p>
      </div>
    </main>
  );
};

export default BlogPostPage;
