import React from "react";
import "../css/blogs.css";

const BlogCard = ({ data }) => {
  return (
    <div>
      <a href="{data.link}" className="blog-card-header">
        <div className="blog-card-body">
          <p className="blog-card-title" style={{ color: "#E11D48" }}>
            <strong>{data.title}</strong>
          </p>
          <p>{data.Summary}</p>
          <a to={`/api/update-blogs/${data.id}`}>
            <button className="btn btn-update">Update</button>
          </a>
          <button className="btn btn-delete">Delete</button>
          <a to={`/api/blogs/${data.id}`}>

            <button className="btn btn-view">View</button>
          </a>
        </div>
      </a>
    </div>
  );
};

export default BlogCard;
