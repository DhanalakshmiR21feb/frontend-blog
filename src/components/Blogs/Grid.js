import React from "react";
import "./grid.css";
import PostBlog from "./post";
const Grid = ({ blogs }) => {
  return (
    <div className="blog-grid">
      {blogs.map((blog) => (
        <PostBlog blog={blog} />
      ))}
    </div>
  );
};

export default Grid;
