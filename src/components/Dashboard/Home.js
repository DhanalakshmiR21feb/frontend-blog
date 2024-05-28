import React, { useState, useEffect } from "react";
import Grid from "../Blogs/Grid";
import "../Blogs/blog.css";
const Home = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const storedBlogs = localStorage.getItem("blogs")
      ? JSON.parse(localStorage.getItem("blogs"))
      : [];
    setBlogs(storedBlogs);
  }, []);
  return (
    <div>
      <div>
        <h1>Blogs</h1>
      </div>
      {blogs.length > 0 ? (
        <Grid blogs={blogs} />
      ) : (
        <div>
          <p>No Blogs</p>
        </div>
      )}
    </div>
  );
};
export default Home;
