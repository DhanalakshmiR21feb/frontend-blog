import React from "react";
import BlogEditor from "../Blogs/BlogEditor";
import '../Blogs/blog.css';
const CreateBlog=()=>{
    const saveBlog=(blog)=>{
        try {
        const storedBlogs=localStorage.getItem('blogs')?JSON.parse(localStorage.getItem('blogs')):[];
        storedBlogs.push(blog);
        localStorage.setItem('blogs',JSON.stringify(storedBlogs));
        } catch (error) {
            console.error('Error parsing or saving to localStorage:', error);
       }
    };
    return(
        <div className="container">
        <div className="centered-box">
            <h1>Create a New Blog</h1>
            <BlogEditor saveBlog={saveBlog} />
        </div></div>
    )
}

export default CreateBlog;