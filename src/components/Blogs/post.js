import React from "react";
import "./grid.css";

const PostBlog = ({ blog }) => {
  return (
          <div className="blog-post">
          <h2>{blog.title}</h2>
          <p>{new Date(blog.date).toLocaleDateString()}</p>
          <div dangerouslySetInnerHTML={{ __html: blog.description }} />
        </div>

  );
};

export default PostBlog;
