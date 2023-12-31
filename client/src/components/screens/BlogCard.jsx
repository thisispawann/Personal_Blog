import React from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../css/blogs.css";

const BlogCard = ({ data }) => {
  const navigate = useNavigate();

  const onDeleteBlog = async (id) => {
    if (window.confirm("Are you sure you want to delete the blog?")) {
      const res = await axios.delete(`http://localhost:8080/api/blogs/${id}`);
      if (res.status === 200) {
        toast.success(res.data);
        navigate("/");
      }
    }
  };
  return (
    <>
      <Link to="" className="blog-card-header">
        <div className="blog-card-body">
          <p className="blog-card-title" style={{ color: "#E11D48" }}>
            <strong>{data.title}</strong>
          </p>
          <p>{data.Summary}</p>
          <Link to={`/update/${data.id}`}>
            <button className="btn btn-outline-secondary btn-sm">Update</button>
          </Link>
          <Link to="/api/blogs">
            <button
              className="btn btn-danger btn-sm"
              onClick={() => onDeleteBlog(data.id)}
            >
              Delete
            </button>
          </Link>
          <Link to={`/view/${data.id}`}>
            <button className="btn btn-primary btn-sm">View</button>
          </Link>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
