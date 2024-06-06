import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/BlogPosts';
import '../App.css'; // Make sure to import your CSS file

const BlogPage = () => (
  <main className="blog-page">
    {blogPosts.map(post => (
      <div className="blog-card" key={post.id}>
        <img src={post.imageUrl} alt={post.title} />
        <div className="blog-card-content">
          <h2>{post.title}</h2>
          <p>{post.content.slice(0, 100)}...</p>
          <div className="read-more">
            <Link to={`/blog/${post.id}`}>Keep Reading</Link>
          </div>
          <p>Posted on: {post.timestamp} | Views: {post.views}</p>
        </div>
      </div>
    ))}
  </main>
);

export default BlogPage;
