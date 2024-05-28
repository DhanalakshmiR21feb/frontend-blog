import React,{useState} from "react";
import ReactQuill from "react-quill";
import '../../../node_modules/react-quill/dist/quill.snow.css';

const BlogEditor=({saveBlog})=>{
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const handleSave=()=>{
        const blog={
            id:Date.now(),
            title,
            description,
            date:new Date().toISOString(),
        }
        saveBlog(blog);
        setDescription('');
        setTitle('');
    }
    return(
        <div className="blog-editor">
            <input 
            type="text"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            placeholder="Blog Title"    className="blog-title-input"
            />
            <ReactQuill value={description} onChange={setDescription} />
            <button onClick={handleSave}  className="save-button" >Save Blog</button>
        </div>
    )
};
export default BlogEditor;