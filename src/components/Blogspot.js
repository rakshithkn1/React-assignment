import React from 'react';
import './Blogspot.css'; // Assuming you have CSS for styling

const posts = [
  {
    title: "UX review presentations",
    date: "20 Jan 2024",
    author: "Olivia Rhye",
    category: "Design",
    description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    imageUrl: "image.png",
  },
  {
    title: "Migrating to Linear 101",
    date: "19 Jan 2024",
    author: "Phoenix Baker",
    category: "Product",
    description: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
    imageUrl: "ti.png",
  },
  {
    title: "Building your API stack",
    date: "18 Jan 2024",
    author: "Lana Steiner",
    category: "Software Engineering",
    description: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    imageUrl: "mob.png",
  }
];

const BlogPost = ({ post }) => {
  return (
    <div className="blog-post">
      <img src={post.imageUrl} alt={post.title} className="blog-post-image" />
      <div className="blog-post-content">
        <div className="blog-post-category">{post.category}</div>
        <h2 className="blog-post-title">{post.title}</h2>
        <p className="blog-post-description">{post.description}</p>
        <div className="blog-post-author">
          {/* <img src={`Ava4.png/${post.author.toLowerCase().replace(" ", "-")}.jpg`} alt={post.author} className="author-image" /> */}
          <span>{post.author}</span>
          <span>{post.date}</span>
        </div>
      </div>
    </div>
  );
};

const BlogPosts = () => {
  return (
    <div className="blog-posts">
      <h1>Lastest blog posts</h1>
      <p>Tool and strategies modern teams need to help their companies grow.</p>
      <div className="blog-posts-grid">
        {posts.map((post, index) => (
          <BlogPost key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
